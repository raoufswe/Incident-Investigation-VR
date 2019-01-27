import React, {Component} from 'react';
import {
  Pano,
  Text,
  View,
  asset,
  VrButton,
  Video,
  VideoControl,
  MediaPlayerState,
  StyleSheet
} from 'react-vr';


class Hello extends Component {
    constructor(){
        super()
        this.state = {
            styles: {
                button: {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    fontSize: 0.2,
                    fontWeight: '400',
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    margin: 0.1,
                    borderRadius: 0.01
                },
                dropdownButton: {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    fontSize: 0.1,
                    fontWeight: '200',
                    paddingLeft: 0.15,
                    paddingRight: 0.15,
                    paddingTop: 0.05,
                    paddingBottom: 0.05,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: 'black',
                    borderRadius: 0
                }
            },
            page: 1,
            video: '',
            size: 1,
            dropDown: false,
            playerState: new MediaPlayerState({
                loop:true,
                autoPlay: true
            })
        }
    }
    changeVideo(content){
        const videoList = {
            1: "FB-VR-Demo.mp4",
            2: "FB-VR-Demo2.mp4",
            3: "FB-F8.mp4"
        }
        this.setState({
            video: videoList[content]
        })
    }
    changeSize(size){
        this.setState({
            size
        })
    }
    triggerDropDown(){
        this.setState({
            dropDown: !this.state.dropDown
        })
    }
  render() {
    const {styles, dropDown} = this.state;
    return (
      <View>
        <Pano source={asset('360_world.jpg')}/>

        <Text style={styless.iText2}>
          UHSE Online with VR
        </Text>

        <VrButton style={styless.iCard} onClick={()=>{
          this.props.history.push(`/test0`)
        }}>
        <View>
            <Text style={styless.iText}>START</Text>

       </View>
       </VrButton>
            <View
        style={{
            transform: [{translateY: 0.2}]
        }}
        >
            <View
                style={{
                    opacity: this.state.dropDown? 1: 0,
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [1.5, 0.2, this.state.size*-3]}],
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    width: 0.72,
                    borderRadius: 0.02
            }}
            >
                <VrButton
                    onClick={()=>{
                        if(this.state.dropDown){
                            this.triggerDropDown()
                        }
                        this.changeSize(1)}
                    }
                ><Text style={styles.dropdownButton}>100%</Text></VrButton>
                <VrButton
                    onClick={()=>{
                        if(this.state.dropDown){
                            this.triggerDropDown()
                        }
                        this.changeSize(1.5)}
                    }
                ><Text style={styles.dropdownButton}>75%</Text></VrButton>
                <VrButton
                    onClick={()=>{
                        if(this.state.dropDown){
                            this.triggerDropDown()
                        }
                        this.changeSize(2)}
                    }
                ><Text style={styles.dropdownButton}>50%</Text></VrButton>
                <VrButton
                    onClick={()=>{
                        this.triggerDropDown()
                        this.changeSize(4)}
                    }
                ><Text style={styles.dropdownButton}>25%</Text></VrButton>
            </View>
            <View
                style={{
                layoutOrigin: [0.5, 0.5],
                transform: [{translate: [0, 2, this.state.size*-4]}],
                backgroundColor: 'rgba(0,0,0,0.8)',
                flexDirection: 'row',
                width: 'auto',
                borderRadius: 0.01
            }}
            >
                <Text style={{...styles.button, backgroundColor: "rgba(0,0,0,0)"}}>
                    VRPlayer
                </Text>

                <VrButton
                    onClick={()=>this.changeVideo(2)}
                    onEnter={()=>console.log('Button2 onEnter?')}
                ><Text style={styles.button}>Exxon Safety Video</Text></VrButton>
                <VrButton
                    onClick={()=>this.changeVideo(3)}
                    onEnter={()=>console.log('Button2 onEnter?')}
                ><Text style={styles.button}>KLCC Safety Video</Text></VrButton>
                <VrButton
                    onClick={()=>this.changeVideo('about')}
                    onEnter={()=>{
                        console.log('hey')
                        this.triggerDropDown()
                    }}
                ><Text style={styles.button}>Setting</Text></VrButton>
            </View>
            <View
                style={{
                layoutOrigin: [0.5, 0.5],
                transform: [{translate: [0, 0.4, this.state.size*-4]}],
                backgroundColor: 'rgba(0,0,0,0.8)',
                height: 3.5,
                flexDirection: 'row',
                width: 'auto',
                borderRadius: 0.01
            }}
            >
            <Video
            style={{
                width: 6.4, height: 3.5
            }}
             source={asset(this.state.video)}
             playerState={this.state.playerState}
             />
            </View>
            <View
            style={{
                width: 'auto',
            }}
            >
                <VideoControl
                    style={{
                        width: 'auto',
                        height: 0.5,
                        padding: 0.15,
                        backgroundColor: 'red',
                        transform: [{translate: [-3.5, 1.3, this.state.size*-5]}],
                    }}
                    playerState={this.state.playerState}
                />
            </View>
        </View>
        </View>
    );
  }
};

const styless = StyleSheet.create({
  iCard: {
            flex: 1,
            width:.8,
            height: .3,
            borderWidth: 0.03,
            borderColor: '#00b1a9',
            backgroundColor: '#00b1a9',
            alignItems: 'stretch',


            color: 'black',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 2.4, -5]}]
  },
  iText: {

textAlign: 'center',
paddingTop: 0.02,
fontSize: 0.2,
fontWeight: "500"
  },
  iText2: {
    flex: 1,
    width:2,
    borderWidth: 0.03,
    backgroundColor: 'white',
    opacity: .9,
    borderColor: '#00b1a9',
    alignItems: 'stretch',
    layoutOrigin: [0.5, 0.5],
    transform: [{translate: [0, 1.5, -5]}],
    textAlign: 'center',
    fontSize: 0.2,
    color: 'black',
    fontWeight: "500"
  }
})


export default Hello;
