import React, { Component } from 'react';

import { View, Text, Image, StyleSheet,VrButton } from 'react-vr';

export default class Card extends React.Component {
  render() {

    return (
      <VrButton onClick={()=>{
        this.props.history.push(`/test_1?id=${this.props.object.Id}`)
      }}>
      <View style={styles.iCard}>
       <Image
              source={{uri: this.props.object.ImageUrl}}
              style={{
              position: 'absolute',
              width: 2.9,
              height: 2.6,
              borderWidth: 0.04,
              borderColor: '#00b1a9',
              layoutOrigin: [0, 0],
                    }}
          />
          <Text style={styles.iText}>{this.props.object.Name}</Text>
          <Text style={styles.iText}>Asset : {this.props.object.AssetName}</Text>

     </View>
     </VrButton>
    )
  }
}
const styles = StyleSheet.create({
  iCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    margin: .1,
    width: 3,
    height: 2,
    padding: .2,
    layoutOrigin: [0, 0],
    transform: [
      {translate: [-3.3,1, -5]}
    ]
  },
  iText: {
    textAlign: 'center',
    fontSize: 0.3,
    color: '#fff'
  }
})
