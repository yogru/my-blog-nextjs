import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../../styles/theme";

interface Props {
    onClick?:()=>void
}

function GithubIconComponent(props:Props){
    const classes = useStyles()
    return (
        <IconButton
            className={classes.iconRoot}
            onClick={ ()=>props.onClick?.()}>
            <GitHubIcon />
        </IconButton>
    )
}

const useStyles = makeStyles((theme)=>({
    iconRoot:{
        color:theme.palette.primary.main,
        marginTop:"0.3rem"
    },
}))

export default GithubIconComponent