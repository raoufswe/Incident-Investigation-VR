import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

function Loop3 (props) {
  const arr3 = props.arg;
  const items = arr3.map(item => <Card4 key={item.IncidentId} object={item} history={props.history}/>)
    return (
      <View style={{flexDirection: "row"}}>{items}</View>
    )
}

import Card4 from './Card4';

const queryString = require('query-string');
export default class TS4 extends React.Component {

  constructor(){
    super();

    this.state = {
      arr3: [],
      query: {}
    }
  }

  componentDidMount() {
        var parsed = queryString.parse(this.props.location.search);
        this.setState({query: parsed});
        fetch(`https://raw.githubusercontent.com/raoufswe/VR-Project-JSON/master/Incident.json`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(json => {
          let filter = json.filter((r) => r.IncidentId == parsed.id)
          console.log(parsed)
          this.setState({arr3: filter})
        })
    }

  render() {
    return (
      <View>
          <Loop3 arg={this.state.arr3} history={this.props.history}/>
      </View>
    );
  }
};
