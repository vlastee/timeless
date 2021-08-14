import React from 'react';
import { Avatar, Typography, Popper, Paper } from '@material-ui/core';





export default function CustomAvatar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOnHover = (event) => {
        // console.log("Hovered");
        // console.log(event);
        setAnchorEl(event.target);
    };

    const handleOnLeave = (event) => {
        // console.log("Left");
        // console.log(event);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div>
            <Avatar
                alt={props.user.user_first_name + " " + props.user.user_last_name}
                src="."
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handleOnHover(e)}
                onMouseLeave={(e) => handleOnLeave(e)}
            />

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchororigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformorigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Paper>
                    <Typography >{props.user.user_first_name + " " + props.user.user_last_name}</Typography>
                </Paper>
            </Popper>
        </div>
    )
}