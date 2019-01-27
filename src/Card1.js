import React, { Component } from 'react';

import { View, Text, Image, StyleSheet,VrButton } from 'react-vr';

export default class Card1 extends React.Component {
  render() {

    return (

      <VrButton onClick={()=>{
        this.props.history.push(`/test_2?id=${this.props.object.IncidentId}`)
      }}>
      <View style={styles.iCard}>

          <Text style={styles.iText}>FLOOR NUMBER:</Text>
          <Text style={styles.iText2}>{this.props.object.FloorId}</Text>

     </View>
     </VrButton>
    )
  }
}
const styles = StyleSheet.create({
  iCard: {
            flex: 1,
            margin: 0.02,
            width: 1,
            opacity: 1,
            borderWidth: 0.04,
            flexDirection: 'column',
            backgroundColor: 'white',
            borderColor: 'white',
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [-2, 0, -3]}]
  },
  iText: {
    fontSize: 0.1,
    color: 'black',
  },
  iText2: {
    fontSize: 0.15,
    color: 'black',
    fontWeight: '500'
  }
})
