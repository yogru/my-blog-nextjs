import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Card from '@/component/card/ImgMediaCard'

interface Props {}

function Body(props:Props){
    const classes = useStyles()

    return (
        <div className={classes.bodyRoot} >
            <Box className={classes.bodyItem}>
                <Card />
            </Box>

            <Box className={classes.bodyItem}>
                <Card />
            </Box>


        </div>
    )
}

const useStyles = makeStyles((theme)=>({
    bodyRoot:{
        color:theme.palette.primary.main,
        display: 'flex',
        flexWrap:"wrap",
        padding:"1rem",

        backgroundColor:theme.palette.background.default
    },
    bodyItem:{
        margin:"1rem",
        maxWidth:"24rem",
        maxHeight:"20rem"
    }
}))



export default Body