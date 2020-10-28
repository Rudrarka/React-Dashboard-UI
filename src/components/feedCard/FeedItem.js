import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, Typography, Divider, Avatar } from '@material-ui/core';

export default function FeedItem(props) {
    return (
        <React.Fragment>
            <ListItem 
            alignItems="flex-start"                  
            >
                <ListItemAvatar>
                    <Avatar alt={props.displayName} src={props.avatar} />
                </ListItemAvatar>
                <ListItemText
                 primary={props.displayName}
                 style={{ height: 80,  overflow: "auto" }}
                 secondary={
                    <Typography>
                        {props.feed}
                    </Typography>
                }
                />
            </ListItem>
            <Divider/>`
        </React.Fragment>
    )
}
