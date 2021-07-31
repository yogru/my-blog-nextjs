import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

export interface Props {
    onClose?:()=>void
    titleText?:string
}


function LoginTitle(props:Props){
    const classes = useStyles()
    const titleText = props.titleText || "환영합니다"
    return (
        <MuiDialogTitle>
            <Typography className={classes.title} variant="h4">{titleText}</Typography>

            {props.onClose ? (
                <IconButton aria-label="close"
                            className={classes.closeButton}
                            onClick={props.onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )

}

const useStyles = makeStyles(theme=>createStyles({
    root:{

    },
    title:{
        marginTop:"2rem",
       fontWeight:500,
       textAlign:"center"
    },
    closeButton:{
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}))



export default LoginTitle