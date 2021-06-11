import {useState} from 'react'

import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import IconButton from "@material-ui/core/IconButton";

type ThemeType = "light" | "dark"

interface Props {
    onChange?:(themeType:ThemeType)=>void
}

function ThemeIcon(props:Props){
    const [themeType, setTheme] = useState<ThemeType>("light")

    function onClick(){
        const oldTheme:ThemeType = themeType;
        const newTheme:ThemeType = oldTheme ==='light' ? "dark" : "light"
        setTheme(newTheme)
        props.onChange?.(newTheme)
    }

    return (
        <IconButton onClick={()=>onClick()}>
            {themeType === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
}

export default ThemeIcon