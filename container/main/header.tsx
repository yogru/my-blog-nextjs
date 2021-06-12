import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import LogoIcon from '@/component/icon/logoIcon'
import GitHubIcon from '@/component/icon/githubIcon'
import ThemeIcon from '@/component/icon/themeIcon'
import SearchIcon from '@/component/icon/searchIcon'
import Profile from '@/component/icon/profile'

export interface Props{}

function MainHeader(props:Props) {
    const classes = useStyles()

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

            <Box>
                <GitHubIcon />
            </Box>

            <Box>
                <Profile />
            </Box>

        </div>
    )
}

const useStyles = makeStyles(theme=>createStyles({
    headerRoot: {
        display:'flex',
        //minHeight:'4rem',
        // maxHeight:'4rem',
        // maxWidth:'100vw',
        // minWidth:'100vw'
    }

}))



export default MainHeader