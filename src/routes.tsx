import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Favorites } from '@screens'
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
