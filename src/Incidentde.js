import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Pano,VrButton, Video, asset, VideoControl, MediaPlayerState,Model,
Animated,
AmbientLight,
SpotLight} from 'react-vr';

export default class Incidentde extends React.Component {

  constructor(){
    super();

    this.state = {
      spin: new Animated.Value(0)};
    }

    componentDidMount() {
          this.spinAnimation();

      }

      spinAnimation() {
          this.state.spin.setValue(0);
          Animated.timing(
          this.state.spin,
              {
              toValue: 1,
             duration: 4500
              }
            ).start( () => this.spinAnimation() );
        }


  render() {

    const spin = this.state.spin.interpolate ({

      inputRange: [0, 1],

      outputRange: ['0deg', '360deg']

    });

    const AnimatedModel = Animated.createAnimatedComponent(Model);

    return (

      <View>
      <AmbientLight intensity={0.9} />
        <SpotLight
          intensity={1}
          style={{ transform: [{ translate: [-5, 5, 0] }] }}
        />
      <AnimatedModel

        source={{
          obj: asset('MEM.obj')
        }}

        style={{
          transform: [{translate: [1800, 400, -3300]},
          {rotateY: spin}]
        }}
        lit={true}

        texture={"https://preview.ibb.co/hVErTK/5.png"}
        // texture={asset('5.jpg')}

        wireframe={false}

      />


      <VrButton style={styles.iCard} onClick={()=>{
        this.props.history.push(`/test4?id=${this.props.object.IncidentId}`)
      }}>

          <Text style={styles.iTitle}>Incident ID</Text>
          <Text style={styles.iText}>{this.props.object.IncidentId}</Text>
          <Text style={styles.iTitle}>Name</Text>
          <Text style={styles.iText}>{this.props.object.Name}</Text>
            <Text style={styles.iTitle}>State</Text>
          <Text style={styles.iText}>{this.props.object.State}</Text>
            <Text style={styles.iTitle}>Floor</Text>
          <Text style={styles.iText}>{this.props.object.FloorId}</Text>

          </VrButton>
                  <Pano source={asset('Orange.jpg')}/>
                  <VrButton style={styles.iCard2} onClick={()=>{
                    this.props.history.push(`/test`)
                  }}>
                  <View >
                    <Text style={styles.iText2}>BACK</Text>
                 </View>
                 </VrButton>
          </View>
    )
  }
}
const styles = StyleSheet.create({
  iCard: {
            flex: 1,
            width:2,
            backgroundColor: 'white',
            opacity: .8,
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [-0.4, 0, -5]}],
            padding: 0.2
  },
  iTitle: {
    fontSize: 0.15,
    color: 'black'
  },
  iText: {
    fontSize: 0.2,
    fontWeight: '600',
    color: 'black'
  },
  iCard2: {
            flex: 1,
            width:.5,
            height: .2,
            borderWidth: 0.03,
            borderColor: '#00b1a9',
            backgroundColor: '#00b1a9',
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [-0.3, 1.2, -3]}],
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
