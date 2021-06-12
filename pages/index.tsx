import Box from '@material-ui/core/Box'
import MainHeader from '@/container/main/header'
import MainBody from '@/container/main/body'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import MainBanner from "@/component/banner/banner";

function IndexPage(){
   const classes = useStyles()

    return (
        <div className={classes.root} >
            <Box>
                <MainHeader/>
            </Box>

            <Box>
                <MainBanner />
            </Box>

            <Box>
                <MainBody />
            </Box>
        </div>
    )
}


const useStyles = makeStyles((theme)=>createStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        minWidth:"100vw",
        minHeight:"100vh"
    }
}))


export default IndexPage
