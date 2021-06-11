import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

interface Props {

}


function Body(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.bodyRoot} >
           #
        </Box>
    )
}

const useStyles = makeStyles((theme)=>({
    bodyRoot:{
        color:theme.palette.primary.main,
        display: 'flex',
        minHeight: 'calc(100vh - 4rem)',
        backgroundColor:theme.palette.background.default
    }
}))



export default Body