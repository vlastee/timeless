import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';






export default function CustomAvatar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOnHover = (event) => {
        console.log(event);
        setAnchorEl(event.currentTarget);
    };

    const handleOnLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleDeleteTag = () => {

    }

    return (
        <>
            <Avatar
                alt={props.user.user_first_name + " " + props.user.user_last_name}
                src="."
                onMouseEnter={(e) => handleOnHover(e)}
                onMouseLeave={() => handleOnLeave()}
            />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography >{props.user.user_first_name + " " + props.user.user_last_name}</Typography>
            </Popover>
        </>
    )
}