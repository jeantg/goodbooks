import React from 'react';
import {Field} from 'formik';
import {TextField} from '@material-ui/core';
const map = (field, props) => {
   return <TextField fullWidth variant="outlined" {...field} {...props} />;
};

const CustomTextField = (props) => (
   <Field name={props.name}>{({field}) => map(field, props)}</Field>
);
export default CustomTextField;
