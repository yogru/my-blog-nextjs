import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import BootstrapInput from "@/components/cell/bootstrap-input";
import ProfileAvatar from "@/components/cell/profile-avatar";


interface ProfileProps{
    nickName:string
}

function Profile(props:ProfileProps){
    const label = "닉네임"
    const buttonLabel = "저장하기"

    return (
        <Box>
            <Box p={3}>
                <ProfileAvatar size={"big"} />
            </Box>
           <Box ml={1} mr={1} mt={1}>
            <FormControl >
                <Box>
                    <InputLabel htmlFor="bootstrap-input" shrink>
                        {label}
                    </InputLabel>
                    <BootstrapInput  id="bootstrap-input" defaultValue={props.nickName}  />
                </Box>

                <Box mt={2} mr={1} ml={1}>
                    <Button fullWidth variant="contained" color="secondary">
                        {buttonLabel}
                    </Button>
                </Box>
            </FormControl>
           </Box>
        </Box>
    )
}



export interface Props {

}


function UserSetting(props:Props){
    return (
        <Profile nickName={"test"} />
    )
}


export default UserSetting