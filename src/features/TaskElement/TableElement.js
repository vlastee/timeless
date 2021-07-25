import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../Theme/Theme';
import {selectUiState} from '../uiStateSlice';
import { useSelector } from 'react-redux';

function createData(task_type, task_tags, task_name, users, customers, timeframe, time_spent) {
  return { task_type, task_tags, task_name, users, customers, timeframe, time_spent };
}



const rows = [
  createData('Programming', ['tag1','tag2','tag3'], 'Creating element for React App', [{user_first_name:'Volodymyr',user_last_name:'Vlasenko',email:'volodymr.vlasenko@gmail.com',team:'Developers', role:'Lead Developer' }], ['customer1','customer2'], ['timestamp1', 'timestamp1'], [{date:'21-06-08', start_time:'07:07:14', end_time:'10:45:16'},{date:'22-06-08', start_time:'07:07:14', end_time:'10:45:16'},{date:'23-06-08', start_time:'07:07:14', end_time:'10:45:16'}]),
  createData('Programming', ['tag1','tag2','tag3'], 'Creating element for React App', [{user_first_name:'Volodymyr',user_last_name:'Vlasenko',email:'volodymr.vlasenko@gmail.com',team:'Developers', role:'Lead Developer' }], ['customer1','customer2'], ['timestamp1', 'timestamp1'], [{date:'21-06-08', start_time:'07:07:14', end_time:'10:45:16'},{date:'22-06-08', start_time:'07:07:14', end_time:'10:45:16'},{date:'23-06-08', start_time:'07:07:14', end_time:'10:45:16'}]),
  createData('Programming', ['tag1','tag2','tag3'], 'Creating element for React App', [{user_first_name:'Volodymyr',user_last_name:'Vlasenko',email:'volodymr.vlasenko@gmail.com',team:'Developers', role:'Lead Developer' }], ['customer1','customer2'], ['timestamp1', 'timestamp1'], [{date:'21-06-08', start_time:'07:07:14', end_time:'10:45:16'},{date:'22-06-08', start_time:'07:07:14', end_time:'10:45:16'},{date:'23-06-08', start_time:'07:07:14', end_time:'10:45:16'}]),
];



export default function BasicTable() {
  const classes = useStyles();
  const uiState = useSelector(selectUiState);

  return (
    
  <div className={classes.tablesContainer}>
    {console.log(rows)}
    {rows.map((row) => (

      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Task</TableCell>
              <TableCell align="center">Assigned Users</TableCell>
              <TableCell align="center">Costumers</TableCell>
              <TableCell align="center">Time Frame</TableCell>
              <TableCell align="center">Time Spent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              <TableRow key={row.task_name}>
                <TableCell align="center" className={classes.userNames}>{row.task_name}</TableCell>
                <TableCell component="th" scope="row">
                  {row.users.map((user)=>{
                    return  user.user_first_name+" "+user.user_last_name
                  })}
                </TableCell>
                
                <TableCell align="center">{row.customers}</TableCell>
                <TableCell align="center">{row.timeframe}</TableCell>
                <TableCell component="th" scope="row">
                  {row.time_spent.map((timeObject)=>{
                    return  timeObject.date+" "+timeObject.start_time+" "+timeObject.end_time
                  })}
                </TableCell>
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    ))}
  </div>
  );
}