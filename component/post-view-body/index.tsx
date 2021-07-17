import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

export interface Props {

}

function PostViewBody(props:Props){

}


const useStyles = makeStyles(theme => createStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"black"
    },
    menu:{
        backgroundColor: "gray",
    },
    body:{
        minHeight: "calc(200vh - 0rem)"
    },
}))


export default PostViewBody