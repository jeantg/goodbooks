const initialState = {
   users: [] as any,
};
export const UsersReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'CREATE':
         return {users: [...state.users, action.user]};
      case 'DELETE':
         const users = state.users.filter(function(__, index) {
            return index !== action.index;
         });
         return {users};
      case 'UPDATE':
         state.users[action.index] = action.user;
         return state;
      default:
         return state;
   }
};
