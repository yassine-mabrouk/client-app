import logo from './logo.svg';
import './App.css';
import Contacts from './component/contact/Contacts'
import Navbar from './component/navbar/Navbar';
import Article from './component/artiles/Article'
import AddContact from './component/contact/AddContact';

import  'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from './component/context';


function App() {
 
  //const [state, setstate] = useState(initialState)
    
  return (
    //injercter les donnes 
     <Provider>
    <div classNameName="App">
      <Navbar title="Client Panel" />
            <h1 className="text-center">Contacts</h1>     
            <AddContact></AddContact>        
            <Contacts />
          </div>
        </Provider>
       
  );

}

export default App;
