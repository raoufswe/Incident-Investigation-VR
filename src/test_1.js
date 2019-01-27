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
  SpotLight,
  StyleSheet
} from 'react-vr';

function Renderbuilding (props){
  const arr1 = props.arg;
  const building = arr1.find(function (b){
      return b.BuildingId === 2
  })

      return (building ? <Klcc/> : <Mem/>);
}

function Loop1 (props) {
  const arr1 = props.arg;
  const items = arr1.map(item => <Card1 key={item.Id} object={item} history={props.history}/>)

    return (
      <View style={{flexDirection: "row"}}>{items}</View>
     )

}


import Card1 from './Card1';
import Mem from './Mem';
import Klcc from './Klcc';

const queryString = require('query-string');

export default class TS1 extends React.Component {

  constructor(){
    super();

    this.state = {
      arr1: [],
      query: {}

    }
  }

  componentDidMount() {

        var parsed = queryString.parse(this.props.location.search);
        this.setState({query: parsed});
        fetch(`https://raw.githubusercontent.com/abdulraoufswe97/VR-Project-JSON/master/Incident.json`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
          let filter = json.filter((r) => r.BuildingId == parsed.id)
          console.log(parsed)
          this.setState({arr1: filter})
        })
    }



  render() {
    return (

      <View>
      <Pano source={asset('360_world.jpg')}/>
      <Loop1 arg={this.state.arr1} history={this.props.history}/>
      <Renderbuilding  arg={this.state.arr1}/>


      <VrButton style={styless.iCard2} onClick={()=>{
        this.props.history.push(`/test`)
      }}>
      <View>
          <Text style={styless.iText2}>BACK</Text>

     </View>
     </VrButton>
      </View>

    );
  }
};

const styless = StyleSheet.create({
  iCard2: {
            flex: 1,
            width:.5,
            height: .2,
            borderWidth: 0.03,
            borderColor: '#00b1a9',
            backgroundColor: '#00b1a9',
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [-1, -0.4, -3]}],
            borderRadius: 0.01,
            paddingTop: 0.02
  },
  iText2: {
    textAlign: 'center',
    fontSize: 0.08,
    color: 'white',
    fontWeight: '500',
  }
})
