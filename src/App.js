import logo from './logo.svg';
import './App.css';
import Contacts from './component/contact/Contacts'
import Navbar from './component/navbar/Navbar';
import Article from './component/artiles/Article'
import AddContact from './component/contact/AddContact';
import About from './component/pages/About'
import PageNotFound from './component/pages/PageNotFound'
import  'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from './component/context';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import EditContact from './component/contact/EditContact';

function App() {
 
  //const [state, setstate] = useState(initialState)
    
  return (
    //injercter les donnes 
    // systeme de routage 
 
     <Provider>
          <Router>
    <div classNameName="App">
      <Navbar title="Client Panel" />
        {/* liset des routes  */}
          <Switch>
            {/* // exact pour pointer sur component  */}
          <Route exact path="/" component={Contacts}/>
          <Route exact path="/contact/add" component={AddContact}/>
          {/* :segement dynamique  */}
          <Route exact path="/contact/edit/:id" component={EditContact}/>
          <Route exact path="/about" component={About}/>  
          <Route exact component={PageNotFound}></Route>
          </Switch>
          </div>
          </Router>
        </Provider>
       
  );

}

export default App;
