import React from 'react';
import {GridTextField} from '@components';
import {MenuItem} from '@material-ui/core';
import {connect} from 'react-redux';
interface TypesUser {
   name: '';
   value: '';
}
interface Props {
   values: any;
   handleChange: (e) => void;
   typesUser?: [TypesUser];
}

const Users: React.FC<Props> = ({typesUser}) => {
   return (
      <>
         <GridTextField size={6} name="id" disabled={true} label="Id" />
         <GridTextField size={6} name="nome" label="Nome" />
         <GridTextField
            size={6}
            name="password"
            type="password"
            label="Senha"
         />
         <GridTextField
            size={6}
            type="password"
            name="confirmPassword"
            label="Confirmar Senha"
         />
         <GridTextField
            size={6}
            name="dataNascimento"
            label="Data de nascimento"
         />
         <GridTextField size={6} label="E-mail" name="email" />
         <GridTextField
            size={6}
            label="Tipo usuário"
            name="tipoUsuario"
            select={true}
         >
            {typesUser?.map((item) => (
               <MenuItem key={item?.value} value={item?.value}>
                  {item.name}
               </MenuItem>
            ))}
         </GridTextField>
      </>
   );
};
const mapStateToProps = (store) => ({
   typesUser: store.userState.typesUser,
});
export default connect(mapStateToProps)(Users);
