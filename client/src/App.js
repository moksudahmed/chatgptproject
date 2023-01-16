import React, {Component} from 'react';
import Home from './Components/Home';
import Data from './Components/Data';
const title = 'To Do App';

 class App extends Component {
   
     render() { 
         return (
             <div>
                <h1>{title}</h1>
                 <Home />
             </div>
         );
     }
}
 
export default App;
