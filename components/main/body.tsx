import Box from '@material-ui/core/Box'

interface Props {

}


function Body(props:Props){


    return (
        <Box display="flex"
             style={{height: "calc(100vh - 4rem)"}}
             bgcolor="black" >
            바디입니다..
        </Box>
    )
}

export default Body