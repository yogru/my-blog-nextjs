import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography";
import react, {useState} from "react";

import BootstrapInput from "@/components/cell/bootstrap-input";
import ProfileAvatar from "@/components/cell/profile-avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


interface ProfileProps{
    nickName:string
}

function Profile(props:ProfileProps){
    const label = "닉네임"
    const buttonLabel = "저장하기"
    const classes = useStyles()

    return (
        <Paper variant={"outlined"} className={classes.rootPaper}>
            <Box mr={"auto"} ml={"auto"}>
                <ProfileAvatar size={"big"} />
            </Box>

            <Box  className={classes.formSection} >
                <Box mb={0.5}>
                    <Typography className={classes.inputLabel}>
                        {label}
                    </Typography>
                </Box>
                <BootstrapInput fullWidth defaultValue={props.nickName}  />

                <Button className={classes.submitButton}  fullWidth variant="contained" color="secondary">
                    {buttonLabel}
                </Button>
            </Box>
        </Paper>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    rootPaper:{
        backGroundColor:theme.palette.background.paper,
        display:'flex',
        flexDirection:"column",
        padding:"24px",
        width:'100%'
    },
    formSection:{
        marginTop:"8px",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    inputLabel:{
        fontWeight:600,
        color:"#595959"
    },
    submitButton:{
        marginTop:"16px",
        marginBottom:"8px",
        minWidth:"300px",
        maxWidth:"100px",
        marginLeft:"auto",
        marginRight:"auto",
        padding: "8px",
        fontSize:"1.2rem"
    }
})))



interface PasswordSectionProps {

}

function PasswordInput(props:{
    label:string,
    onChange?:(val:string)=>void
    errorMessage?:string
}){
    const classes = useStyles()

    const onChange = (e)=>{
        const val =   e.target.value
        props.onChange?.(val)
    }

    return (
        <>
            <Box display={"flex"} mb={0.5}>
                <Typography className={classes.inputLabel}>
                    {props.label}
                </Typography>
                {
                    props.errorMessage &&
                    <Box ml={1} color={"red"}>
                        <Typography variant={"caption"}>
                            {props.errorMessage}
                        </Typography>
                    </Box>
                }
            </Box>
            <Box mb={1}>
                <BootstrapInput type={"password"} fullWidth onChange={onChange} />
            </Box>
        </>
    )
}


function PasswordSection(props:PasswordSectionProps){
    const currentPasswordLabel = "현재 비밀번호"
    const newPasswordLabel = "새 비밀번호"
    const newPasswordLabelCheck= newPasswordLabel+" 확인"
    const buttonLabel = "저장하기"
    const classes = useStyles()

    const [currentPassword, setCurrentPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [newPasswordCheck,setNewPasswordCheck] =  useState<string>("")
    const [curErrorMessage, setCurErrorMessage] = useState<string | null>(null)
    const [newErrorMessage, setNewErrorMessage] = useState<string | null>(null)
    const [newCheckErrorMessage, setNewCheckErrorMessage] = useState<string | null>(null)


    function lengthRule(val:string, len:number): string | null {
        if(val.length < len){
            return `${len}글자 이상`
        }
        return null
    }

    function onChangeCurrentPassword(val:string){
        setCurrentPassword(val)
        const errorMessage =  lengthRule(val,6)
        setCurErrorMessage(errorMessage)

    }
    function onChangeNewPassword(val:string){
        setNewPassword(val)
        const errorMessage = lengthRule(val,6)
        setNewErrorMessage(errorMessage)
    }
    function onChangeNewPasswordCheck(val:string){
        setNewPasswordCheck(val)
        if (val !== newPassword){
            setNewCheckErrorMessage("새 비밀번호와 다릅니다.")
        }else{
            setNewCheckErrorMessage(null)
        }
    }

    return (
        <Paper variant={"outlined"} className={classes.rootPaper}>
            <Box  className={classes.formSection} >
                <PasswordInput label={currentPasswordLabel} errorMessage={curErrorMessage}  onChange={onChangeCurrentPassword} />
                <PasswordInput label={newPasswordLabel} errorMessage={newErrorMessage} onChange={onChangeNewPassword} />
                <PasswordInput label={newPasswordLabelCheck} errorMessage={newCheckErrorMessage} onChange={onChangeNewPasswordCheck} />
                <Button className={classes.submitButton}  fullWidth variant="contained" color="secondary">
                    {buttonLabel}
                </Button>
            </Box>
        </Paper>
    )

}


export interface Props {}

function UserSetting(props:Props){
    return (
        <Box width={"600px"}>
            <Profile nickName={"test"} />
            <PasswordSection />
        </Box>
    )
}

export default UserSetting