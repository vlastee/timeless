import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import styles from './MenuPagesList.module.css';
import {selectUiState, setShowMenuState, setCurrentMenuState} from '../uiStateSlice'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ListItemText, ListItemIcon, ListItem, IconButton, Divider, List, Drawer, Grid } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from '../Theme/Theme';


export function MenuPagesList() {
  const uiState = useSelector(selectUiState);
  const classes = useStyles();
  const theme = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(uiState.currentMenu)
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setCurrentMenuState(currentMenu));
  },[currentMenu])

  // useEffect(()=>{
  //   console.log('Menu is '+showMenu ? 'shown' : 'hidden');
  //   setShowMenu(!showMenu);
  // },[uiState])

  useEffect(()=>{
    //console.log(showMenu);
    setShowMenu(uiState.showMenu)
    //console.log('Menu is '+ (uiState.showMenu ?'shown':'hidden'));
  },[uiState.showMenu])

  const handleDrawerClose = () => {
    setShowMenu(false);
    dispatch(setShowMenuState(false));
  };


  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        {showMenu ?
          // <Paper className={classes.paper}>
          //   <MenuList>
          //     {uiState.availableMenus.map((menu,i)=>{
          //       return(
          //         <MenuItem onClick={(e)=>{setCurrentMenu(e.target.textContent); dispatch(setShowMenuState(false))}} key={menu}>{menu}</MenuItem>
          //       );
          //     })}
          //   </MenuList>
          // </Paper>
           <Drawer
           className={classes.drawer}
           variant="persistent"
           anchor="left"
           open={showMenu}
           classes={{
             paper: classes.drawerPaper,
           }}
         >
           <div className={classes.drawerHeader}>
             <IconButton onClick={handleDrawerClose}>
               {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
             </IconButton>
           </div>
           <Divider />
           <List>
             {uiState.availableMenus.map((menu,i)=>(
               <ListItem 
                button 
                key={menu.name}
                onClick={(e)=>{setCurrentMenu(e.target.textContent)}}
                >
                 <ListItemIcon>{menu.icon}</ListItemIcon>
                 <ListItemText primary={menu.name} />
               </ListItem>
             ))}
           </List>
           <Divider />
           <List>
             {['All mail', 'Trash', 'Spam'].map((text, index) => (
               <ListItem button key={text}>
                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                 <ListItemText primary={text} />
               </ListItem>
             ))}
           </List>
         </Drawer>
          : '' 


        }


      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >

        </Grid>

      </Grid>

    </Grid>
  );
}
