import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";;
import MuiGitHubIcon from '@material-ui/icons/GitHub';
import MuiIconButton from "@material-ui/core/IconButton";
import MuiHomeIcon from "@material-ui/icons/Home";
import MuiMessageIcon from "@material-ui/icons/MailOutline";
import MuiSearchIcon from "@material-ui/icons/Search";
import MuiBrightness7Icon from "@material-ui/icons/Brightness7";
import MuiBrightness4Icon from "@material-ui/icons/Brightness4";
import MuiCreateIcon from "@material-ui/icons/Create";


export interface IconProps {
    /**
     * 외부 설정 가능한 Props
     */
    onClick?:()=>void
    color?:string
    hoverColor?:string
}

interface ChildrenProps {
    /**
     *  하나의 자식이 반드시 필요함
     *   외부로 공개 x
     */
    children:React.ReactElement
}

interface Props extends IconProps,ChildrenProps {}

const useStyles = makeStyles((theme)=>({
    iconRoot:(props:Props)=>({
        color:props.color,
        marginTop:"0.3rem",
        "&:hover":{
            color:props.hoverColor || theme.palette.primary.main
        }
    }),
}))

function IconComponent(props:Props){
    const classes = useStyles(props)
    return (
        <MuiIconButton
            className={classes.iconRoot}
            onClick={ ()=>props.onClick?.()}>
            {props.children}
        </MuiIconButton>
    )
}


export function GithubIcon(props:IconProps){
    return (
        <IconComponent color={ props.color || "gray"} onClick={ ()=>props.onClick?.()}>
            <MuiGitHubIcon />
        </IconComponent>
    )
}


export function LogoIcon(props:IconProps){
    const color= props.color || "black"
    return (
        <IconComponent color={color} onClick={()=>props.onClick?.()} >
            <MuiHomeIcon />
        </IconComponent>
    )
}


export function MessageIcon(props:IconProps){
    return (
        <IconComponent color={ props.color || "gray"} onClick={ ()=>props.onClick?.()}>
            <MuiMessageIcon />
        </IconComponent>
    )
}


export function SearchIcon(props:IconProps){
    return (
        <IconComponent color={props.color || 'gray'} onClick={ ()=>props.onClick?.()} >
            <MuiSearchIcon />
        </IconComponent>
    )
}

export type ThemeType = "light" | "dark"
export interface ThemeIconProps extends IconProps{
    onChange?:(themeType:ThemeType)=>void
}

export function ThemeIcon(props:ThemeIconProps){
    const [themeType, setTheme] = useState<ThemeType>("light")

    function onClick(){
        const oldTheme:ThemeType = themeType;
        const newTheme:ThemeType = oldTheme ==='light' ? "dark" : "light"
        setTheme(newTheme)
        props.onChange?.(newTheme)
    }

    return (
        <IconComponent color={props.color || 'gray'} onClick={()=>onClick()}>
            {themeType === 'light' ? <MuiBrightness7Icon /> : <MuiBrightness4Icon />}
        </IconComponent>
    )
}


export function WriteIcon(props:IconProps){
    return (
        <IconComponent color={props.color || 'gray'} onClick={ ()=>props.onClick?.()} >
            <MuiCreateIcon />
        </IconComponent>
    )
}