import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import Login from './Components/Login/';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from './styles/global.js'


function App() {
  const [user,setUser] = useState('')
  return (
 
      
    
      <>
      <GlobalStyles/>
      <CssBaseline />
       <Switch>
         
         <Route exact path="/">
    

             <Form  setUser={setUser}>

             </Form>

               
        
         </Route>
         <Route exact path="/login/:name">
            <Login user={user}>

            </Login>
         </Route>
       </Switch>
    </> 
  );
}

export default App;
