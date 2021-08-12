import { Switch, Route, Redirect } from 'react-router-dom'

import Search from '../../pages/Search'
import Details from '../../pages/Details'

const App = () => {
  return (
    <Switch>
      <Route path={'/search/details/:id'} component={Details} />
      <Route path={'/search'} component={Search} />
      <Redirect to={'/search'} />
    </Switch>
  )
}

export default App
