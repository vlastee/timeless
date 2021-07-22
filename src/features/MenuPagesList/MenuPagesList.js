import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import styles from './MenuPagesList.module.css';
import {selectUiState, setShowMenuState, setCurrentMenuState} from '../uiStateSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export function MenuPagesList() {
  const uiState = useSelector(selectUiState);
  const classes = useStyles();
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
    console.log(showMenu);
    setShowMenu(uiState.showMenu)
    console.log('Menu is '+ (uiState.showMenu ?'shown':'hidden'));
  },[uiState.showMenu])


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
        {showMenu
          ? <Paper className={classes.paper}>
            <MenuList>
              {uiState.availableMenus.map((menu,i)=>{
                return(
                  <MenuItem onClick={(e)=>{setCurrentMenu(e.target.textContent); dispatch(setShowMenuState(false))}} key={menu}>{menu}</MenuItem>
                );
              })}
            </MenuList>
          </Paper>
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
