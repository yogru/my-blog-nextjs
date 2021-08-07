import makeStyles from "@material-ui/core/styles/makeStyles";
import MessageIcon from '@material-ui/icons/MailOutline';


import IconComponent,{IconProps} from './icon-component'
export interface Props extends IconProps{}


function MessageIconComponent(props:Props){
    const classes = useStyles(props)

    return (
        <IconComponent color={ props.color || "gray"} onClick={ ()=>props.onClick?.()}>
            <MessageIcon />
        </IconComponent>
    )
}

const useStyles = makeStyles((theme)=>({

}))

export default MessageIconComponent