import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {
    createStyles,
    Theme,
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';


export interface Props {
    label:string
    defaultValue:string
    onChange?:(newString:String)=>void
}


const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.common.white,
            border: '1px solid #ced4da',
            fontSize: 16,
            width: 'auto',
            padding: '10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
    }),
)(InputBase);


export default function LabelInput(props:Props){

    return (
        <FormControl >
            <InputLabel htmlFor="bootstrap-input" shrink>
                {props.label}
            </InputLabel>
            <BootstrapInput  id="bootstrap-input" defaultValue={props.defaultValue}  />
        </FormControl>
    )

}


const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))
