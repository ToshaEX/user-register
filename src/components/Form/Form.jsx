import React, { useState } from "react";
import { registerUser } from "../services";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useStyles from "./styles"

const Joi = require("joi");

const Form = () => {
  //const apiUrl = process.env.BASE_URL_REACT_APP;
  const [formValues, setFormValues] = useState({
    name: "",
    nic: "",
    gender: "other",
  });
  const schema = Joi.object({
    name: Joi.string().alphanum("a-z").min(3).required(),
    nic: Joi.string().min(10).max(12).required(),
    gender: Joi.string().required(),
  });

  const validateAndSubmit = () => {
    const { error, value } = schema.validate(formValues);
    if (error) {
      alert(error.details[0].message);
    } else {
      registerUser(value);
    }
  };
  const classes=useStyles();

  return (
    <Box component="form" className={classes.form}>
      <h1 className={classes.heading}>User Register Form</h1>
      <TextField
        className={classes.textField}
        id="name"
        label="Name*"
        variant="filled"
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
      />
      <TextField
        className={classes.textField}
        id="nic"
        label="NIC*"
        variant="filled"
        value={formValues.nic}
        onChange={(e) => setFormValues({ ...formValues, nic: e.target.value })}
      />
      <FormControl fullWidth>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="genderLabel"
          id="gender"
          value={formValues.gender}
          label="Gender"
          onChange={(e) =>
            setFormValues({ ...formValues, gender: e.target.value })
          }
        >
          <MenuItem value="Other">Other</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      <Stack className={classes.stack} spacing={10} direction="row">
        <Button className={classes.clear} variant="contained">
          clear
        </Button>
        <Button className={classes.add} variant="contained">
          Add
        </Button>
      </Stack>
    </Box>
  );
};

export default Form;
