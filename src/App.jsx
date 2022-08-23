import {Form,TableView} from "./components/index"
import useStyles from "./styles"

function App() {
  const classes=useStyles();
  return (
    <div className={classes.app}>
    <Form/>
    <TableView/>
    </div>
  );
}

export default App;
