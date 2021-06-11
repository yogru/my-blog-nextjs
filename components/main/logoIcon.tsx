import Box from "@material-ui/core/Box"
import makeStyles  from '@material-ui/core/styles/makeStyles';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

interface Props {
    onClick?:()=>void
}

function LogoIcon(props:Props){
    const classes = useStyles();
    return (
        <Box className={classes.logoRoot}>
            <HomeIcon onClick={props.onClick} />
        </Box>
    )
}

function HomeIcon(props:{onClick?:()=>void}) {
    const classes = useStyles();
    return (
        <IconButton className={classes.homeIconRoot} onClick={()=>props.onClick?.()} >
            <SvgIcon >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        </IconButton>
    );
}

const useStyles = makeStyles((theme)=>({
    logoRoot:{
        color: theme.palette.primary.main,
        fontSize:'2rem',
        marginTop:"0.3rem"
    },
    homeIconRoot:{
        color: theme.palette.primary.main,
    }
}))


export default LogoIcon