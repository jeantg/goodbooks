export const Update = value => ({
   type: value.type,
   user: value.user,
   ...value,
});
