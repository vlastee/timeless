import { makeStyles,createTheme } from '@material-ui/core/styles';

const drawerWidth = 200;

export default createTheme({
    palette: {
        primary: { // works
          main: '#165788',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#69BE28',
          contrastText: '#fff',
        },
        companyBlue: {
            backgroundColor: '#65CFE9',
            color: '#fff',
        },
        companyRed: { 
            backgroundColor: '#E44D69',
            color: '#000',
        },
        accent: { 
            backgroundColor: '#ac099c', 
            color: '#000',
        },
    },
});

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    table: {
        minWidth: 800,
        "& .MuiTableRow-head": {
            margin: '0px!important'
        },
        "& .MuiTableCell-head": {
            padding: '0px',
        },
        "& .MuiTableContainer-root": {

        }
    },
    tableContainerShift: {
        //margin: '1vh',
        width: 'auto',
        maxWidth: '95vw',
        marginTop: '15px',
    },
    tableContainer: {
        //margin: '1vh',
        maxWidth: '95%',
        marginTop: '15px',
       // marginLeft: drawerWidth,
    },
    root: {
        "& .MuiTableCell-body": {

        }
    },
    userNames: {

    },
    tablesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    projectColorDiv:{

        backgroundColor: '#4915e6',
       //width: '100%',
        minWidth: '800px',
    },
    taskType:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        paddingBottom: '5px',
        paddingLeft: '10px',
        paddingTop: '5px',
        color: 'white',
        fontWeight: 'medium',
    },
    taskTypeText:{
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '10px',
        paddingBottom: '5px',
    },
    tagAttached:{
        marginInline: '5px',
        color: '#ffffff'
    }
}));