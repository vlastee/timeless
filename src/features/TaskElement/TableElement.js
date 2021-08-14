import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { useStyles } from '../Theme/Theme';
import { selectUiState } from '../uiStateSlice';
import { useSelector } from 'react-redux';
import FaceIcon from '@material-ui/icons/Face';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CustomAvatar from './ChildrenElements/CustomAvatar';
import {
  millisecondsToTime,
  timeLeftInDays,
} from '../Methods/TimeMethods';
import { CustomTooltip } from '../CustomTooltip/CustomTooltipElement';

function createData(task_type, task_tags, task_name, users, customers, timeframe, time_spent) {
  return { task_type, task_tags, task_name, users, customers, timeframe, time_spent };
}



const rows = [
  createData('Programming', [{ name: 'tag1', icon: <FaceIcon /> }, { name: 'tag1', icon: <FaceIcon /> }, { name: 'tag1', icon: <FaceIcon /> }], 'Creating element for React App', [{ user_first_name: 'Volodymyr', user_last_name: 'Vlasenko', email: 'volodymr.vlasenko@gmail.com', team: 'Developers', role: 'Lead Developer' }, { user_first_name: 'Dmytro', user_last_name: 'Klymenko', email: 'dmytro.klymenko@gmail.com', team: 'Developers', role: 'Back End Developer' }, { user_first_name: 'Volodymyr', user_last_name: 'Vlasenko', email: 'volodymr.vlasenko@gmail.com', team: 'Developers', role: 'Lead Developer' }, { user_first_name: 'Dmytro', user_last_name: 'Klymenko', email: 'dmytro.klymenko@gmail.com', team: 'Developers', role: 'Back End Developer' }, { user_first_name: 'Dmytro', user_last_name: 'Klymenko', email: 'dmytro.klymenko@gmail.com', team: 'Developers', role: 'Back End Developer' }], ['customer1', 'customer2'], { created: '2021-08-13', due_date: '2021-08-17' }, [{ start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }, { start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }, { start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }]),
  createData('Programming', [{ name: 'tag1', icon: <FaceIcon /> }, { name: 'tag1', icon: <FaceIcon /> }], 'Creating element for React App', [{ user_first_name: 'Volodymyr', user_last_name: 'Vlasenko', email: 'volodymr.vlasenko@gmail.com', team: 'Developers', role: 'Lead Developer' }], ['customer1', 'customer2'], { created: '2021-08-13', due_date: '2021-08-21' }, [{ start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }, { start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }, { start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }]),
  createData('Programming', [{ name: 'tag1', icon: <FaceIcon /> }], 'Creating element for React App', [{ user_first_name: 'Volodymyr', user_last_name: 'Vlasenko', email: 'volodymr.vlasenko@gmail.com', team: 'Developers', role: 'Lead Developer' }], ['customer1', 'customer2'], { created: '2021-08-13', due_date: '2021-08-23' }, [{ start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }, { start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 10:45:16' }, { start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 12:12:16' }]),
];



export default function BasicTable() {
  const classes = useStyles();
  const uiState = useSelector(selectUiState);

  const handleDeleteTag = () => {

  }

  return (

    <div className={classes.tablesContainer} key={'table'}>
      {/* {console.log(rows)} */}
      {rows.map((row, i) => (

        <TableContainer className={classes.tableContainer} component={Paper} key={row.task_name + i}>
          <div className={classes.projectColorDiv}>
            <span className={classes.taskType}>
              <span className={classes.taskTypeText}>{row.task_type}</span>
              {row.task_tags.map((tag, i) => {
                return <Chip label={tag.name} variant="outlined" onDelete={handleDeleteTag} icon={tag.icon} className={classes.tagAttached} key={tag.name + i} />
              })}
              <IconButton color="secondary" aria-label="upload picture" component="span">
                <ControlPointIcon />
              </IconButton>
            </span>
          </div>
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

              <TableRow key={row.task_name + i}>
                <TableCell align="center" className={classes.userNames}>{row.task_name}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  <Grid container justifyContent='center'>
                    <Grid item lg={2}>
                      <AvatarGroup max={4} >
                        {row.users.map((user, i) => {
                          return <CustomAvatar user={user} key={row.task_name + i + 'avatars' + i} />
                          return user.user_first_name + " " + user.user_last_name
                        })}
                      </AvatarGroup>
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell align="center">
                  <div className={classes.flexDirectionColumn}>
                    {row.customers.map((customer) => {
                      return (<div key={row.task_name + i + 'customer' + customer}>{customer}</div>);
                    })}
                  </div>
                </TableCell>
                <TableCell align="center">
                  <CustomTooltip
                    elements={
                      <div>
                        <Grid container justifyContent='center' display='flex' flexdirection='column'>
                          {row.timeframe.created}
                        </Grid>
                        <Grid container justifyContent='center' display='flex' flexdirection='column'>
                          {row.timeframe.due_date}
                        </Grid>
                      </div>
                    }
                    tooltipElements={<div>
                      {timeLeftInDays(row.timeframe.due_date)}
                    </div>}
                  />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {millisecondsToTime(row.time_spent)}
                </TableCell>

              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
}