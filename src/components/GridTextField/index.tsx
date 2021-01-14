import React from 'react';
import {Grid} from '@material-ui/core';
import {CustomTextField} from '@components';
interface Props {
   onChange?: (e: any) => void;
   label?: string;
   type?: string;
   value?: any;
   disabled?: boolean;
   name?: string;
   size: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
}
const GridTextField: React.FC<Props> = ({size, ...rest}) => {
   return (
      <Grid item xs={size}>
         <CustomTextField fullWidth variant="outlined" {...rest} />
      </Grid>
   );
};
export default GridTextField;
