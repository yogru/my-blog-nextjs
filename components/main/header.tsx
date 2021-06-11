import Box from '@material-ui/core/Box'

import LogoIcon from './logoIcon'
import GitHubIcon from './githubIcon'
import ThemeIcon from './themeIcon';
import SearchIcon from './searchIcon';

interface Props{

}


function MainHeader(props:Props) {

    return (
        <Box display={'flex'} bgcolor="white" minHeight={"4rem"}>

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

        </Box>
    )
}


export default MainHeader