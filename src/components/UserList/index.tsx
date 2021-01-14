import React, {useState} from 'react';
import {Grid, Button, MenuItem} from '@material-ui/core';
import {GridTextField} from '@components';
import './styles.css';
import {connect} from 'react-redux';
import {Delete, Update} from '@actions';
interface TypesUser {
   name: '';
   value: '';
}
interface Props {
   user: any;
   index?: number;
   typesUser?: [TypesUser];
   dispatch: any;
}

const Users: React.FC<Props> = ({index, user, typesUser, dispatch}) => {
   const [update, setUpdate] = useState(false);
   return (
      <div className="list-user">
         <Grid container spacing={3} justify="center" alignItems="center">
            <GridTextField
               size={6}
               name={`[${index}].id`}
               disabled={true}
               label="Id"
            />
            <GridTextField
               size={6}
               name={`[${index}].nome`}
               label="Nome"
               disabled={!!!update}
            />
            <GridTextField
               size={6}
               disabled={!!!update}
               name={`[${index}].password`}
               label="Senha"
            />
            {update && (
               <GridTextField
                  size={6}
                  disabled={!!!update}
                  type="password"
                  name={`[${index}].confirmPassword`}
                  label="Confirmar Senha"
               />
            )}
            <GridTextField
               size={6}
               disabled={!!!update}
               name={`[${index}].dataNascimento`}
               label="Data de nascimento"
            />
            <GridTextField
               size={6}
               label="E-mail"
               name={`[${index}].email`}
               disabled={!!!update}
            />
            <GridTextField
               size={6}
               label="Tipo usuário"
               disabled={!!!update}
               name={`[${index}].tipoUsuario`}
               select={true}
            >
               {typesUser &&
                  typesUser.map((item) => (
                     <MenuItem key={item?.value} value={item?.value}>
                        {item.name}
                     </MenuItem>
                  ))}
            </GridTextField>
            <Grid container spacing={3} justify="center" alignItems="center">
               <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                     dispatch(Delete({type: 'DELETE', index}));
                  }}
               >
                  Excluir
               </Button>
               <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                     dispatch(Update({type: 'UPDATE', index, user}));
                     setUpdate(false);
                  }}
               >
                  Salvar
               </Button>
               <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setUpdate(true)}
               >
                  Editar
               </Button>
            </Grid>
         </Grid>
      </div>
   );
};
const mapStateToProps = (store) => ({
   typesUser: store.userState.typesUser,
});
export default connect(mapStateToProps)(Users);
