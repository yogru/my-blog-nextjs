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
    const titleText = props.titleText || "로그인"
    return (
        <MuiDialogTitle >
            <Typography variant="h6">{titleText}</Typography>
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
    closeButton:{
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}))



export default LoginTitle