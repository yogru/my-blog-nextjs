import clx from "classnames"
import {useCallback, useState} from "react";
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

import LogoIcon from '@/component/icon/logoIcon'
import ThemeIcon, {ThemeType} from '@/component/icon/themeIcon'
import SearchIcon from '@/component/icon/searchIcon'
import Profile, {ProfileIconMenuOption} from '@/component/icon/profile'
import WriteIcon from '@/component/icon/writeIcon'
import LoginComponent from "@/component/login";

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
     // position:"fixed",
     // className:""
}

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
                    props.isLogin ? <Profile onChange={onClickProfileMenu}/> :
                        <Button onClick={onClickLogin}>Login</Button>
                }
            </Box>

            <LoginComponent open={openLogin}
                            onClose={onCloseLogin}
                            onLogin={onAttemptLogin} />
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    root: (props:Props) => ({
         display:'flex',
         minHeight:"4rem",
         maxHeight:"3rem",
         minWidth:"100vw",
         maxWidth:"100vw",
         position:props.position
    }),
}));

BlogHeaderMenu.defaultProps= defaultProps

export default BlogHeaderMenu