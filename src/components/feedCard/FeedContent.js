import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AxiosConfig from "../../axiosConfig/AxiosConfig";
import FeedItem from './FeedItem';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      height: '325px',
      overflow: "auto"
    //   height: '20%'
    },
  }));      

export default function FeedContent() {

    const classes = useStyles();
    const [feeds, setFeeds] = useState();
    const [loading, setloading] = useState({
        'loading': true
    });

    useEffect(() => {
        AxiosConfig.get("/user/feeds")
        .then(res =>{
            console.log(res.data.data)
            setFeeds(res.data.data)
        })
        .catch(error => {
            console.log("Error")
        } )
    
      },[])
    

    return (
            <List 
                className={classes.root}
                // style={{ height: 325, overflow: "auto" }}
                >
                <>
                    {feeds &&
                        feeds.map(({ id, displayName, avatar, feed}) => (
                            <FeedItem 
                            key = {id}
                            displayName = {displayName} 
                            avatar = {avatar}
                            feed = {feed}
                            />                        
                        ))}
                    {/* {feeds.length === 0 && (
                        <Typography>No feed to display</Typography>
                    )} */}
                </>
            </List>
            )
    }

