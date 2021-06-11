import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";

interface Props {
    onClick?:()=>void
}

function SearchIconComponent(props:Props){
    return (
        <IconButton onClick={ ()=>props.onClick?.()} >
            <SearchIcon />
        </IconButton>
    )
}

export default SearchIconComponent