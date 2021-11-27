import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

import BootstrapInput from "@/components/cell/bootstrap-input";
import ProfileAvatar from "@/components/cell/profile-avatar";

interface ProfileProps{
    nickName:string
}

function Profile(props:ProfileProps){
    const label = "닉네임"

    return (
        <>
            <ProfileAvatar size={"big"} />
            <FormControl >
                <InputLabel htmlFor="bootstrap-input" shrink>
                    {label}
                </InputLabel>
                <BootstrapInput  id="bootstrap-input" defaultValue={props.nickName}  />

                <Button variant="contained" color="secondary">
                    Primary
                </Button>

            </FormControl>
        </>
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