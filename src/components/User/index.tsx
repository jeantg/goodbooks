import React from 'react';
import {GridTextField} from '@components';
interface Props {
   values: any;
   handleChange: (e) => void;
}
const Users: React.FC<Props> = ({values}) => {
   return (
      <>
         <GridTextField
            size={6}
            name="id"
            value={values?.id}
            disabled={true}
            label="Id"
         />
         <GridTextField
            size={6}
            name="nome"
            value={values?.nome}
            label="Nome"
         />
         <GridTextField
            size={6}
            name="password"
            value={values?.password}
            type="password"
            label="Senha"
         />
         <GridTextField
            size={6}
            type="password"
            name="confirmPassword"
            value={values?.confirmPassword}
            label="Confirmar Senha"
         />
         <GridTextField
            size={6}
            value={values?.dataNascimento}
            label="Data de nascimento"
         />
         <GridTextField size={6} value={values?.email} label="E-mail" />
      </>
   );
};
export default Users;
