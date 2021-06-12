import {MutableRefObject, useEffect, useState} from "react";
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Menu  from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Avatar from './avatar'

const MainMenuOptionArray = ["MyBlog" , "Setting" , "Logout"]
export type MainMenuOption = typeof MainMenuOptionArray[number]


export interface Props {
    onChange?:(MainMenuOption)=>void
}

const OPTION_LENGTH = "3rem"
function MenuComponent(props:Props){
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


    function handleClose(){
        setAnchorEl(null)
    }

    function handleClick(event: React.MouseEvent<HTMLElement>){
        setAnchorEl(event.currentTarget);
        event.preventDefault()
    };


    function handleChange(opt:MainMenuOption){
        opt && props.onChange?.(opt);
        handleClose()
    }

    return (
            <Box className={classes.root} >
                <Box onClick ={handleClick}  >
                    <Avatar />
                </Box>
                <Menu
                    id="long-menu"
                    elevation={2}
                    open={anchorEl!==null}
                    anchorEl={anchorEl}
                    onClose={()=>handleClose()}
                    PaperProps={{
                        style: {
                            marginTop:"2rem",
                            maxHeight: `calc( ${OPTION_LENGTH} * ${MainMenuOptionArray.length}) `,
                            width: '15ch',
                        },
                    }}
                >
                    {
                        MainMenuOptionArray.map((option)=>
                            <MenuItem key={option}  onClick={()=>handleChange(option)}>
                                {option}
                            </MenuItem>
                        )
                    }
                </Menu>
        </Box>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    root:{
        marginTop:"0.5rem"
    }
})))


export default MenuComponent;