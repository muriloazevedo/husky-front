import { Home } from './pages/home'
import { Sessions } from './pages/sessions'
import { Invoices } from './pages/invoices'
import { InvoiceNew } from './pages/invoice_new'
import { InvoiceDetail } from './pages/invoice_detail'
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
        <Route path="/sessions">
          <Sessions />
        </Route>
        <Route path="/invoices">
          <Invoices />
        </Route>
        <Route path="/invoice_new">
          <InvoiceNew />
        </Route>
        <Route path="/invoice/:id" component={InvoiceDetail}>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
