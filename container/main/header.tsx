import {useCallback, useEffect, useState} from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link"

import LogoIcon from '@/component/icon/logoIcon'
import ThemeIcon from '@/component/icon/themeIcon'
import SearchIcon from '@/component/icon/searchIcon'
import Profile, {MainMenuOption} from '@/component/icon/profile'
import WriteIcon from '@/component/icon/writeIcon'
import LoginContainer from "@/container/login";
import {useRootStore} from "@/mobx-store/RootStore";
import {observer} from "mobx-react";
// import GitHubIcon from '@/component/icon/githubIcon'

export interface Props{}

function MainHeader(props:Props) {
    const [numberOfOpenButtonClicks,setNumberOfOpenButtonClicks] = useState<number>(0)
    const classes = useStyles()
    const rootStore = useRootStore()
    const userStore = rootStore.getUserStore()

    useEffect(()=>{
        userStore.loadLocalStorage()
    },[])

    const onClickLoginButton = useCallback(()=>{
        setNumberOfOpenButtonClicks(numberOfOpenButtonClicks+1)
    },[numberOfOpenButtonClicks])

    const onChangeMenu = useCallback((opt:MainMenuOption)=>{
        if(opt === "Logout"){
            userStore.attemptLogout()
        }
    },[])

    return (
        <div className={classes.headerRoot}>

            <Box>
                <LogoIcon />
            </Box>

            <Box ml={"auto"}>
                <SearchIcon />
            </Box>

            <Box>
                <ThemeIcon onChange={(t)=>console.log("t를 보자..",t)} />
            </Box>

            {
                userStore.isLoginUser()&&
               <Link href="/edit">
                   <Box>
                       <WriteIcon />
                   </Box>
               </Link>
            }

            <Box>
                {userStore.isLoginUser()? <Profile onChange={onChangeMenu} />:
                    <Button onClick={onClickLoginButton}>Login</Button>}
            </Box>

            <LoginContainer numberOfOpenButtonClicks={numberOfOpenButtonClicks}/>
        </div>
    )
}

const useStyles = makeStyles(theme=>createStyles({
    headerRoot: {
        display:'flex'
        //minHeight:'4rem',
        // maxHeight:'4rem',
        // maxWidth:'100vw',
        // minWidth:'100vw'
    }
}))


export default observer(MainHeader);