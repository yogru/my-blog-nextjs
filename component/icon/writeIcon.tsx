import CreateIcon from '@material-ui/icons/Create';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface Props {
    onClick?:()=>void
}

function WriteIconComponent(props:Props){
    const classes = useStyles()
    return (
        <IconButton className={classes.iconRoot} onClick={ ()=>props.onClick?.()} >
            <CreateIcon />
        </IconButton>
    )
}

const useStyles = makeStyles((theme)=>({
    iconRoot:{
        color:theme.palette.primary.main,
        marginTop:"0.3rem"
    },
}))

export default WriteIconComponent