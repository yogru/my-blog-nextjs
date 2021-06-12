import Box from '@material-ui/core/Box'

import LogoIcon from './logoIcon'
import GitHubIcon from './githubIcon'
import ThemeIcon from './themeIcon';
import SearchIcon from './searchIcon';
import Profile from './profile'
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../../styles/theme";
import {createStyles} from "@material-ui/core/styles";

interface Props{

}


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