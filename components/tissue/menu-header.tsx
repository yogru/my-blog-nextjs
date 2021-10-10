import clx from "classnames"
import React, {useCallback, useState} from "react";
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu  from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';


import {LogoIcon,ThemeIcon,SearchIcon,WriteIcon ,ThemeType} from '@/components/cell/icons'
import LoginDialog from "@/components/tissue/login-dialog";


const ProfileIconMenuArray = ["MyBlog" , "Setting" , "Logout"]
export type ProfileIconMenuOption = typeof ProfileIconMenuArray[number]
const OPTION_LENGTH = "3rem"

interface ProfileMenuProps {
    onChange?:(ProfileIconMenuOption)=>void
}

const useProfileMenuStyles = makeStyles((theme=>createStyles({
    root:{
        marginTop:"0.5rem"
    },
    avatar:{
        display: 'flex',
        color:theme.palette.secondary.main,
        "&:hover":{
            color: theme.palette.primary.main,
            cursor: "pointer"
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatarSmall:{
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    avatarLarge:{
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
})))

function ProfileMenu(props:ProfileMenuProps){
    const classes = useProfileMenuStyles()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function handleClose(){
        setAnchorEl(null)
    }

    function handleClick(event: React.MouseEvent<HTMLElement>){
        setAnchorEl(event.currentTarget);
        event.preventDefault()
    };

    function handleChange(opt:ProfileIconMenuOption){
        opt && props.onChange?.(opt);
        handleClose()
    }

    return (
        <Box className={classes.root} >
            <Box onClick ={handleClick}  >
                <div className={classes.avatar}>
                    <Avatar alt="Remy Sharp" src="/images/profile.jpg" className={classes.avatarSmall} />
                </div>
            </Box>
            <Menu
                id="long-menu"
                elevation={2}
                open={anchorEl!==null}
                anchorEl={anchorEl}
                onClose={()=>handleClose()}
                PaperProps={{
                    style: {
                        marginTop:"2rem",
                        maxHeight: `calc( ${OPTION_LENGTH} * ${ProfileIconMenuArray.length}) `,
                        width: '15ch',
                    },
                }}
            >
                {
                    ProfileIconMenuArray.map((option)=>
                        <MenuItem key={option}  onClick={()=>handleChange(option)}>
                            {option}
                        </MenuItem>
                    )
                }
            </Menu>
        </Box>
    )
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface Props {
    isLogin?: boolean,
    className?: string
    position?: "static" | "fixed",
    onClickGotoMyBlog?:()=>void
    onClickGotoSetting?:()=>void
    onClickLogo?:()=>void
    onClickBlogTheme?:(blogTheme:ThemeType)=>void
    onClickWriteButton?:()=>void
    onAttemptLogin?:(email:string,password:string)=>Promise<boolean>
    onAttemptLogout?:()=>void
}

export const defaultProps:Props = {
    isLogin: false,

}

const useStyles = makeStyles(theme => ({
    root: (props:Props) => ({
        display:'flex',
        minHeight:theme.size.blogHeaderMenuHeight,
        maxHeight:theme.size.blogHeaderMenuHeight,
        minWidth:"100vw",
        maxWidth:"100vw",
        position:props.position
    }),
    loginButton:{
        marginTop:"0.6rem"
    }
}));

function BlogHeaderMenu(props:Props){
    const classes = useStyles(props)
    const [openLogin,setOpenLogin] = useState<boolean>(false)
    const onLogoClick = useCallback(()=>{
        props.onClickLogo?.()
    },[props.onClickLogo])

    const onClickBlogTheme = useCallback((t:ThemeType)=>{
        props.onClickBlogTheme?.(t)
    },[props.onClickBlogTheme])

    const onClickWriteButton = useCallback(()=>{
        props.onClickWriteButton?.()
    },[props.onClickWriteButton])

    const onClickProfileMenu = useCallback((opt:ProfileIconMenuOption)=>{
        if(opt === "MyBlog"){
            props.onClickGotoMyBlog?.()
        }
        if(opt === "Setting"){
            props.onClickGotoSetting?.()
        }
        if( opt=== "Logout"){
            props.onAttemptLogout?.()
        }
    },[props.onClickGotoSetting,props.onClickGotoMyBlog,props.onAttemptLogout])

    const onClickLogin = ()=>{
        setOpenLogin(true)
    }
    const onCloseLogin = ()=>{
        setOpenLogin(false)
    }

    const onAttemptLogin = useCallback( async(email:string, password:string)=>{
        return props.onAttemptLogin?.(email,password)
    },[props.onAttemptLogin])


    return (
        <Box className={clx(classes.root, props.className)}>
            <Box>
                <LogoIcon onClick={onLogoClick} />
            </Box>

            <Box ml={"auto"}>
                <SearchIcon />
            </Box>

            <Box>
                <ThemeIcon onChange={onClickBlogTheme} />
            </Box>

            {
                props.isLogin &&
                <Box>
                    <WriteIcon onClick={onClickWriteButton} />
                </Box>
            }

            <Box mr={3}>
                {
                    props.isLogin ? <ProfileMenu onChange={onClickProfileMenu}/> :
                        <Button className={classes.loginButton}  onClick={onClickLogin}>로그인</Button>
                }
            </Box>

            <LoginDialog open={openLogin}
                            onClose={onCloseLogin}
                            onLogin={onAttemptLogin} />
        </Box>
    )
}

BlogHeaderMenu.defaultProps= defaultProps

export default BlogHeaderMenu