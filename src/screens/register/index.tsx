import React from 'react';
import {Grid, Button} from '@material-ui/core';
import {Formik, Form} from 'formik';
import {Create} from '@actions';
import {connect} from 'react-redux';
import '../style.css';
import {User} from '@components';
const ScreenRegisterUser: React.FC = ({dispatch, history, ...rest}: any) => {
   const id: string = btoa(Math.random().toString()).substring(0, 12);
   const initialValues: any = {id};
   return (
      <Formik
         initialValues={initialValues}
         onSubmit={(v) => {
            dispatch(Create(v));
            history.push('/');
         }}
      >
         {(props) => {
            const {handleSubmit} = props;
            return (
               <Form className="register-user" onSubmit={handleSubmit}>
                  <h1>Cadastrar usuário</h1>
                  <Grid
                     container
                     spacing={3}
                     justify="center"
                     alignItems="center"
                  >
                     <User {...props} />
                  </Grid>
                  <Button variant="contained" color="primary" type="submit">
                     Salvar
                  </Button>
               </Form>
            );
         }}
      </Formik>
   );
};
const mapStateToProps = (store) => ({
   users: store.userState.users,
});
export default connect(mapStateToProps)(ScreenRegisterUser);
