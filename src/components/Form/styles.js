import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  form: {
    display: "flex",
    padding: "2%",
    borderRadius: "5px",
    flexDirection: "column",
    margin: "5%",
    width: "30%",
    height: "60%",
    background: "white",
  },
  textField: {
    marginBottom: "10px",
  },
  heading: {
    color: "",
  },
  stack: {
    marginTop: "20px",
  },
  add: {
    width: "100px",
    fontFamily: "intel",
    fontSize: "20px",
    background: "#413EF7",
    "&:hover": {
      background: "#413EF7",
    },
  },
  clear: {
    width: "100px",
    fontFamily: "intel",
    fontSize: "20px",
    background: "#F7C600",
    "&:hover": {
      background: "#EFB701",
    },
  },
}));
