const initialState = {
   users: [] as any,
   typesUser: [
      {name: 'Administrador', value: 'administrador'},
      {value: 'colaborador', name: 'Colaborador'},
      {value: 'gerente', name: 'Gerente'},
   ],
};

export const UsersReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'CREATE':
         return {...state, users: [...state.users, action.user]};
      case 'DELETE':
         const users = state.users.filter(function(__, index) {
            return index !== action.index;
         });
         return {...state, users};
      case 'UPDATE':
         state.users[action.index] = action.user;
         return state;
      default:
         return state;
   }
};
