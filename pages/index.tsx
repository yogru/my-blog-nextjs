import Box from '@material-ui/core/Box'


import Link from 'next/link'
import MainHeader from '../components/main/header'
import MainBody from '../components/main/body'


function IndexPage(){

    return (
        <Box display={"flex"} flexDirection="column">
                <MainHeader/>
                <MainBody />
        </Box>
    )
}


export default IndexPage
