import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import { MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import Hello from './src/hello';
import TS0 from './src/test0'
import TS1 from './src/test'
import TS2 from './src/test_1'
import TS3 from './src/Test_2'
import Card from './src/Card'
import Card1 from './src/Card1'
import Incidentde from './src/Incidentde'
import TS4 from './src/test4'
import Card4 from './src/Card4'


class Example extends Component{
  render(){
    return(
      <Router>
        <View>
          <Route exact path='/' component={Hello}/>
          <Route exact path='/test0' component={TS0}/>
          <Route exact path='/test' component={TS1}/>
          <Route exact path='/test_1' component={TS2}/>
          <Route exact path='/Test_2' component={TS3}/>
          <Route exact path='/test4' component={TS4}/>

        </View>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Example', () => Example);
