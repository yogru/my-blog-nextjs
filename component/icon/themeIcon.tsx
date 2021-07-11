import {useState} from 'react'

import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

export type ThemeType = "light" | "dark"

interface Props {
    onChange?:(themeType:ThemeType)=>void
}

function ThemeIcon(props:Props){
    const [themeType, setTheme] = useState<ThemeType>("light")
    const classes = useStyles()

    function onClick(){
        const oldTheme:ThemeType = themeType;
        const newTheme:ThemeType = oldTheme ==='light' ? "dark" : "light"
        setTheme(newTheme)
        props.onChange?.(newTheme)
    }

    return (
        <IconButton className = {classes.iconRoot} onClick={()=>onClick()}>
            {themeType === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
}

const useStyles = makeStyles((theme)=>({
    iconRoot:{
        color:theme.palette.primary.main,
        marginTop:"0.3rem"
    },
}))

export default ThemeIcon