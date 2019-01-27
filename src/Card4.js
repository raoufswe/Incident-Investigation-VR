import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Pano,VrButton, Video, asset, VideoControl, MediaPlayerState,} from 'react-vr';
import Gallery, { imageTypes } from "react-vr-image-gallery";


export default class Incidentde extends React.Component {


  render() {

    return (

      <View>
        <Pano source={asset('test1.jpg')}/>

      <VrButton style={styles.iCard} onClick={()=>{
        this.props.history.push('/')
      }}>

          <Text style={styles.iTitle}>Date</Text>
          <Text style={styles.iText}>{this.props.object.Date}</Text>
          <Text style={styles.iTitle}>Direct Cause</Text>
          <Text style={styles.iText}>{this.props.object.DirectCause}</Text>
          <Text style={styles.iTitle}>Subdirect Cause</Text>
          <Text style={styles.iText}>{this.props.object.SubDirectCause}</Text>
          <Text style={styles.iTitle}>Incident Rating </Text>
          <Text style={styles.iText}>{this.props.object.IncidentRating}</Text>
          <Text style={styles.iTitle}>Incident Type</Text>
          <Text style={styles.iText}>{this.props.object.IncidentType}</Text>
          <Text style={styles.iTitle}>Assigned To</Text>
            <Text style={styles.iText}>{this.props.object.AssignedTo}</Text>
          </VrButton>

          <VrButton style={styles.iCard2} onClick={()=>{
            this.props.history.push(`/test`)
          }}>
          <View >
            <Text style={styles.iText2}>BACK</Text>
         </View>

         <Image
                source={asset('1.jpg')}
                style={{
                  layoutOrigin: [0.5, 0.5],
                  transform: [{translate: [-6, 3, 4.5]}, {rotateY: 90}],
                width: 2.9,
                height: 2.6,

                layoutOrigin: [0, 0],
                      }}
            />
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
            transform: [{translate: [-5, 0, 1]}, {rotateY: 90}],
            padding: 0.2
  },
  iText: {
    fontSize: 0.2,
    fontWeight: '600',
    color: 'black'
  },
  iTitle: {
    fontSize: 0.15,
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
            transform: [{translate: [-3,1.7 , 0.6]}, {rotateY: 90}],
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
