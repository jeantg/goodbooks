import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ScreenRegisterUser} from '@screens';
import {ListUsers} from '@screens';
const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/signup" component={ScreenRegisterUser} />
            <Route path="/" component={ListUsers} exact />
         </Switch>
      </BrowserRouter>
   );
};
export default Routes;
