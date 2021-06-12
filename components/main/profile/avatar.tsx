import React from 'react';
import {makeStyles, createStyles, Theme, withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge'
import MoreVertIcon from '@material-ui/icons/MoreVert';

export interface Props {


}

 function ImageAvatars(props:Props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/*<StyledBadge*/}
            {/*    anchorOrigin={{*/}
            {/*        vertical: 'top',*/}
            {/*        horizontal: 'right',*/}
            {/*    }}*/}
            {/*    badgeContent={<MoreVertIcon />}*/}
            {/*>*/}
             <Avatar alt="Remy Sharp" src="/images/profile.jpg" className={classes.small} />
            {/*</StyledBadge>*/}
        </div>
    );
}


const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            top:12,
            left:0,
        },
    }),
)(Badge);


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            color:theme.palette.secondary.main,
            "&:hover":{
                color: theme.palette.primary.main,
                cursor: "pointer"
             },
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }),
);

export default ImageAvatars