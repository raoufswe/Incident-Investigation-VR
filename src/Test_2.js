import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Model,
  Animated,
  AmbientLight,
  SpotLight
} from 'react-vr';

function Loop2 (props) {
  const arr2 = props.arg;
  const items = arr2.map(item => <Incidentde key={item.IncidentId} object={item} history={props.history}/>)
    return (
      <View style={{flexDirection: "row"}}>{items}</View>
    )
}

import Incidentde from './Incidentde';

const queryString = require('query-string');
export default class TS3 extends React.Component {

  constructor(){
    super();

    this.state = {
      arr2: [],
      query: {}

    }

  }


  componentDidMount() {

        var parsed = queryString.parse(this.props.location.search);
        this.setState({query: parsed});
        fetch(`https://raw.githubusercontent.com/abdulraoufswe97/VR-Project-JSON/master/Incident.json`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(json => {
          let filter = json.filter((r) => r.IncidentId == parsed.id)
          console.log(parsed)
          this.setState({arr2: filter})
        })
    }

  render() {

    return (
      <View>

          <Loop2 arg={this.state.arr2} history={this.props.history}/>
      </View>
    );
  }
};
