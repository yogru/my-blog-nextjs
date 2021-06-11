import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";

interface Props {
    onClick?:()=>void
}

function GithubIconComponent(props:Props){
    return (
        <IconButton onClick={ ()=>props.onClick?.()}>
            <GitHubIcon />
        </IconButton>
    )
}

export default GithubIconComponent