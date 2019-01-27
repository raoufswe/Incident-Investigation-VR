import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Video,
  StyleSheet,
  AmbientLight,
  Image
} from 'react-vr';

import Earth from "react-vr-geolocate";
import Marker from "./marker";


const europeanCities = [
  {
    coordinates: { lat: 48.7128, lon: 2.3522 },
    component: <Marker />
  },{
    coordinates: { lat: 41.9028, lon: 12.4964 },
    component: <Marker />
  },{
    coordinates: { lat: 52.5200, lon: 13.4050 },
    component: <Marker />
  },{
    coordinates: { lat: 64.1265, lon: -21.8174 },
    component: <Marker />
  }
]

const africancountries = [
  {
    coordinates: { lat: 26.335100, lon: 17.228331 },
    component: <Marker />
  },{
    coordinates: { lat: 26.820553, lon: 30.802498 },
    component: <Marker />
  },{
    coordinates: { lat: 28.033886, lon: 1.659626 },
    component: <Marker />
  },{
    coordinates: { lat: 31.791702, lon: -7.092620},
    component: <Marker />
  }
]

const asiancountries = [
  {
    coordinates: { lat: 4.210484, lon: 101.975769 },
    component: <Marker />
  },{
    coordinates: { lat: -0.789275, lon: 113.921326 },
    component: <Marker />
  },{
    coordinates: { lat: 1.352083, lon: 103.819839},
    component: <Marker />
  },{
    coordinates: { lat: 36.204823, lon: 138.252930},
    component: <Marker />
  }
]




export default class TS0 extends React.Component {

  constructor(){
    super();
    this.earthRadius = 2.5;
    this.state = {
      locationItems: []
    }
  }

  render() {

    const earthRadius = 1.5;
    const buttonStyle = {
      backgroundColor:"black",
      alignItems:"center",
      flex:1,
      paddingLeft:.1,
      marginBottom:.02,
      height:1,
      flexDirection:"row"
    }

    return (

      <View>
      <View
          style={{
            width:1.5,
            height:1,
            backgroundColor:"grey",
            padding:.1,
            transform: [
              {translate: [-3.4,1,-3.5]},
              {rotateY: 25}
            ]
          }}
        >
          <Text>Select an option to load Petronas Branches</Text>

          <VrButton style={buttonStyle} onClick={()=>this.setState({
            locationItems: asiancountries
          })}>
            <Text>Asia - 4 Incidents</Text>
          </VrButton>

          <VrButton style={buttonStyle} onClick={()=>this.setState({
            locationItems: europeanCities
          })}>
            <Text>Europe - 4 Incidents</Text>
          </VrButton>



          <VrButton style={buttonStyle} onClick={()=>this.setState({
            locationItems: africancountries
          })}>
            <Text>Africa - 4 Incidents</Text>
          </VrButton>



        </View>
        <View
          style={{
            position:"absolute",
            transform: [
              {translate: [0,0,-3.5]}
            ]
          }}
        >
          <Earth
            locationMarkerStyle={{color: "red"}}
            showLocationMarkers={true}
            wrap={asset("earth.jpg")}
            locationContent={this.state.locationItems}
            scale={earthRadius}
          />
        </View>
        <Pano source={asset('star_bg.jpg')}/>
          <AmbientLight intensity={1.2} decay={100} />
        <VrButton style={styless.iCard} onClick={()=>{
          this.props.history.push(`/test`)
        }}>
        <View>
            <Text style={styless.iText}>Click here to start the virtual investigation</Text>

       </View>

       </VrButton>
       <VrButton style={styless.iCard2} onClick={()=>{
         this.props.history.push(`/`)
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
            backgroundColor: 'white',
            opacity: .8,
            borderColor: '#00b1a9',
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 4, -5]}]
  },
  iText: {
    textAlign: 'center',
    fontSize: 0.2,
    color: 'black',
      fontWeight: '500',
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
            transform: [{translate: [0, 0.2, -2]}],
            borderRadius: 0.01,
            paddingTop: 0.02
  },
  iText2: {
    textAlign: 'center',
    fontSize: 0.1,
    color: 'white',
    fontWeight: '500',
  }
})
