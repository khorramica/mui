import { Button, makeStyles} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import {  Person } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button:{
    backgroundColor:theme.palette.primary.dark,
    color:theme.palette.success.light
  }
}
));

const App =()=> {
  const classes = useStyles();
  return <div>
    <Button variant="outlined" size="large" startIcon={<Person/>} color="primary"
    className={classes.button}
    >سلام دنیا</Button>
  </div>
}

export default App;
