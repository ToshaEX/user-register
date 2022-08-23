import { Form, Table } from "./components/index";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Form />
      <Table />
    </div>
  );
}

export default App;
