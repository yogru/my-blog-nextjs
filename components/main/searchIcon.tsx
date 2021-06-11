import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface Props {
    onClick?:()=>void
}

function SearchIconComponent(props:Props){
    const classes = useStyles()
    return (
        <IconButton className={classes.iconRoot} onClick={ ()=>props.onClick?.()} >
            <SearchIcon />
        </IconButton>
    )
}

const useStyles = makeStyles((theme)=>({
    iconRoot:{
        color:theme.palette.primary.main,
        marginTop:"0.3rem"
    },
}))

export default SearchIconComponent