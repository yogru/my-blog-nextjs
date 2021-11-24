import react from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

export interface Props {
    size: 'small' | 'medium' | 'big'
}


export default function ProfileAvatar(props:Props){

    const classes = useStyles(props)

    return (
        <Box>
            <Avatar className={classes.avatar} alt={"profile_avatar"} src="/images/profile.jpg" />
        </Box>
    )

}

function getAvatarSize(props:Props){
    let width = 16
    let height = 16
    switch (props.size){
        case "big":
            height = width = 180
            break
        case "medium":
            height = width = 80
            break
        case "small":
            height = width = 32
            break
    }
    return {
        width,height
    }
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatar: (props:Props)=>{
        const avatarSize = getAvatarSize(props)
        return (
            {
                width: avatarSize.width,
                height: avatarSize.height,
            }
        )
    }
}));