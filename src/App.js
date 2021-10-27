import { Home } from './pages/home'
import { Header } from './components/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App