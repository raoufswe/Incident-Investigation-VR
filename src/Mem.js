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


export default class Mem extends React.Component {

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
         duration: 15000
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
          obj: asset('MEM1.obj'),

        }}

        style={{
          transform: [{translate: [350, -300, -700]},
          {rotateY: spin}]
        }}
        lit={true}

      
        texture={asset('5.jpg')}

        wireframe={false}

      />
      </View>

    );
  }
};
