import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface Props {
    labels: string []
}

const useStyles = makeStyles((theme)=>({
    root:{
        textAlign:"center",
        marginTop:'0.5rem'
    },
    chip:{
        marginLeft:"0.3rem"
    }
}))


export default function LabelChip(props:Props){
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            {
                props.labels.map((label,idx)=>
                    <Chip key={idx} className={classes.chip} label={"# "+label} variant={"outlined"} />
                )
            }
        </Box>
    )
}



