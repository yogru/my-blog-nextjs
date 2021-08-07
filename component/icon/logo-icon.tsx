import Box from "@material-ui/core/Box"
import makeStyles  from '@material-ui/core/styles/makeStyles';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import IconComponent, {IconProps} from "@/component/icon/icon-component";

interface Props extends IconProps {}


function LogoIcon(props:Props){
    const classes = useStyles();
    const color= props.color || "black"
    return (
        <IconComponent color={color} onClick={()=>props.onClick?.()} >
            <HomeIcon />
        </IconComponent>
    )
}


const useStyles = makeStyles((theme)=>({

}))


export default LogoIcon