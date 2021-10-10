import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import {useCallback, useState} from "react";

export interface Props {
    onChangeChip:(tag:string)=>void
    chips:string []
}

const useStyles = makeStyles(theme=>createStyles({
    root:{
        display:"flex",
        flexWrap:"wrap",
        padding:"12px 8px",
        backgroundColor: theme.palette.background.default
    },
    tagChip:{
        backgroundColor:theme.palette.background.default,
        border:`1px solid ${theme.borderColor.section}`
    },
    tagChipClicked:{
        backgroundColor:theme.palette.background.item,
        border:`1px solid ${theme.borderColor.section}`
    }
}))


function TagChip({tag, index, onClickChip, selected}:
                     {tag:string, index:number, onClickChip:(tag:string, idx:number) => void, selected?:boolean})
{
    const classes = useStyles()

    const onClick =useCallback((e)=>{
        e.stopPropagation()
        onClickChip(tag,index)
    },[onClickChip])
    
    return (
        <Box m={0.5} key={index} >
            <Chip label={tag}
                  className={selected? classes.tagChipClicked : classes.tagChip}
                  clickable
                  onClick={onClick}
            />
        </Box>
    )
}


export default function ChipList(props:Props){
    const tags = props.chips || []

    const [clickChipIndex,setChipIndex] = useState<number>(null)
    const classes = useStyles()

    const onClickChip = useCallback((tag,idx)=>{
        console.log("click....",tag,idx,clickChipIndex)
        if(clickChipIndex !== idx){
            props.onChangeChip?.(tags[idx])
        }
        setChipIndex(idx)
    },[props.onChangeChip])


    return (
        <Box className={classes.root}>
            {tags.map((tag,idx)=> (<TagChip selected={idx === clickChipIndex }
                                            tag={tag} index={idx} onClickChip={onClickChip} />))}
        </Box>
    )
}


