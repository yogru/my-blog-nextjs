import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";;
import React from "react";


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

function IconComponent(props:Props){
    const classes = useStyles(props)
    return (
        <IconButton
            className={classes.iconRoot}
            onClick={ ()=>props.onClick?.()}>
            {props.children}
        </IconButton>
    )
}

const useStyles = makeStyles((theme)=>({
    iconRoot:(props:Props)=>({
        color:props.color,
        marginTop:"0.3rem",
        "&:hover":{
            color:props.hoverColor || theme.palette.primary.main
        }
    }),

}))

export default IconComponent