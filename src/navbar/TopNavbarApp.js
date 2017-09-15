import React from 'react'
import { BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom'
import HomeApp from '../content/HomeApp';
import ServicosApp from '../content/ServicosApp';
import ProjetosApp from '../content/ProjetosApp';
import ContatoApp from '../content/ContatoApp';
import NoContentApp from '../content/NoContentApp';

const TopNavbarApp = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/servicos">Servicos</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="http://www.google.com" target="_blank">Google</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/servicos" exact component={Servicos}/>
        <Route path="/projetos" exact component={Projetos}/>
        <Route path="/contato" exact component={Contato}/>
        <Route component={NoContent}/>
      </Switch>
    </div>
  </Router>
)

const Home      = () => ( <HomeApp /> )
const Servicos  = () => ( <ServicosApp /> )
const Projetos  = () => ( <ProjetosApp /> )
const Contato   = () => ( <ContatoApp /> )
const NoContent = () => ( <NoContentApp /> )

export default TopNavbarApp
