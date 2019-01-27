import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Video,
  StyleSheet
} from 'react-vr';

function Loop (props) {
  const arr = props.arg;
  const items = arr.map(item => <Card key={item.Id} object={item} history={props.history}/>)
    return (
      <View style={{flexDirection: "row"}}>{items}</View>
    )
}

import Card from './Card';



export default class TS1 extends React.Component {

  constructor(){
    super();

    this.state = {
      arr: []
    }
  }

  componentDidMount() {
        fetch(`https://raw.githubusercontent.com/abdulraoufswe97/VR-Project-JSON/master/Building.json`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
          this.setState({arr: json})
        })
    }

  render() {

    return (
      <View>
        <Pano source={asset('Texas.jpg')}/>
          <Loop arg={this.state.arr} history={this.props.history}/>
          <VrButton style={styless.iCard2} onClick={()=>{
            this.props.history.push(`/test0`)
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
  iCard: {
            flex: 1,
            width:2,
            borderWidth: 0.03,
            backgroundColor: 'white',
            opacity: .9,
            borderColor: '#00b1a9',
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 4, -5]}]
  },
  iText: {
    textAlign: 'center',
    fontSize: 0.2,
    color: 'black'
  },
  iCard2: {
            flex: 1,
            width:.5,
            height: .25,
            borderColor: '#00b1a9',
            borderWidth: 0.03,
            backgroundColor: '#00b1a9',
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 1, -2]}],
            borderRadius: 0.01,
            paddingTop: 0.01
  },
  iText2: {
    textAlign: 'center',
    fontSize: 0.1,
    color: 'white',
    fontWeight: '500',
  }
})
