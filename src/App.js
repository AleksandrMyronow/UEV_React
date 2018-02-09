import React, {Component} from 'react';
import Applicants from './components/Applicants';
import applicants from "./json/applicants";
import humans from './json/humans';
import Form from './components/Form';
import Check from "./components/Check";

class App extends Component {
  render () {
    return (
        <div>
            <Applicants items={applicants}/>
            <Form/>
            <Check items={humans}/>
        </div>

    )
  }
}

export default App;