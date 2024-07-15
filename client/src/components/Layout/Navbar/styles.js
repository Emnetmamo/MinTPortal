import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';


export default makeStyles((theme) => ({
  appBar: {    
    margin: ' 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    padding: '0 0px',
    width: '100%'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  palette: {
    primary: {
      main: deepPurple[500],
    }},
  container: {
    width: "100%",
    padding: 0,
  },
}));