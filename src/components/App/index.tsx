import { Switch, Route, Redirect } from 'react-router-dom'

import PageLayout from '../UI/PageLayout'
import Search from '../../pages/Search'
import Details from '../../pages/Details'

const App = () => {
  return (
    <PageLayout>
      <Switch>
        <Route path={'/search/details/:login'} component={Details} />
        <Route path={'/search'} component={Search} />
        <Redirect to={'/search'} />
      </Switch>
    </PageLayout>
  )
}

export default App
