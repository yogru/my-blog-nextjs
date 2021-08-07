import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";


import IconComponent,{IconProps} from './icon-component'

export interface Props extends IconProps{}



function GithubIconComponent(props:Props){
    const classes = useStyles(props)
    return (
        <IconComponent color={ props.color || "gray"} onClick={ ()=>props.onClick?.()}>
            <GitHubIcon />
        </IconComponent>
    )
}

const useStyles = makeStyles((theme)=>({

}))

export default GithubIconComponent