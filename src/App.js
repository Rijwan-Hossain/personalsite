import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error';
import Gallery from './Components/Gallery/Gallery';
import Resume from './Components/Resume/Resume';
import Navigation from './Components/Navigation';

class App extends Component { 
   render() { 
      return ( 
         <BrowserRouter> 
            <div>
               <Navigation /> 
               <Switch> 
                  <Route path="/" component={Home} exact /> 
                  <Route path="/gallery" component={Gallery} /> 
                  <Route path="/resume" component={Resume} /> 
                  <Route component={Error} exact /> 
               </Switch> 
            </div> 
         </BrowserRouter> 
      );
   } 
} 

export default App;
