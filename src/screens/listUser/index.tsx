import React from 'react';
import {Grid, Button} from '@material-ui/core';
import {Formik, Form} from 'formik';
import {Create} from '@actions';
import {connect} from 'react-redux';
import {UserList} from '@components';
import './styles.css';
const listUsers: React.FC = ({dispatch, history, users}: any) => {
   return (
      <Formik
         initialValues={users}
         onSubmit={(v) => dispatch(Create(v))}
         key={users?.length}
      >
         {(props) => {
            const {handleSubmit} = props;
            return (
               <Form className="list-user" onSubmit={handleSubmit}>
                  <h1>Listagem de usuário</h1>
                  <Grid
                     container
                     spacing={3}
                     justify="center"
                     alignItems="center"
                  >
                     {Array.isArray(users) &&
                        users.map((user, index) => (
                           <UserList
                              user={user}
                              key={user.id}
                              index={index}
                              dispatch={dispatch}
                           />
                        ))}
                  </Grid>
                  <Button
                     variant="contained"
                     color="primary"
                     type="submit"
                     onClick={() => history.push('/signup')}
                  >
                     Cadastrar usuário
                  </Button>
               </Form>
            );
         }}
      </Formik>
   );
};
const mapStateToProps = (store) => ({
   typesUser: store.userState.typesUser,
   users: store.userState.users,
});
export default connect(mapStateToProps)(listUsers);
