import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Container from '../../Component/Container'
import Styles from '../../Utils/Styles'
import StepIndicator from 'react-native-step-indicator';
import UploadCover from './UploadCover';
import PagerView from 'react-native-pager-view';
import UploadStory from './UploadStory';
import { launchImageLibrary,launchCamera, } from 'react-native-image-picker';


const labels = ["page1","page2","Page3"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

const UploadBook = () => {

    const [position,setPosition]=useState(0)

    useEffect(() => {
        renderScreen()
    }, [position])

    const renderScreen=(val)=>{
        switch (val) {
            case 0:
                return (
                    <View style={{height:400,width
                    :400,backgroundColor:'red'}}>
                        <Text>Scean One</Text>
                    </View>
                )
            case 1:
                return (
                    <View style={{height:400,width
                    :400,backgroundColor:'blue'}}>
                        <Text>Scean Two</Text>
                    </View>
                )
            default:
                return null;
        }
    }

    const uploadCover=()=>{
     launchImageLibrary({},(res)=>{
          if (res.didCancel) {
              console.log("User Cenceled Process");
          } else if(res.errorCode==='camera_unavailable') {
              console.log('Camera Not Available');
          }else if(res.errorCode==='others') {
              console.log("Somwthing wrong");
          }else if(res.errorCode==='permission'){
            console.log("Don't have permissions");
          }else if(res.errorMessage){
              console.log('THis is the error messags');
          }else{
              console.log(res);
          }
        })
    }


    return (
        <View style={Styles.container}>
            <Container >
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={position}
                    stepCount={3}
                    labels={labels}
                    onPress={(val)=>renderScreen(val)}
                    direction='horizontal'

              />
                    
                {/* <UploadStory/> */}

                {/* <PagerView
                    transitionStyle='scroll'
                    onPageSelected={e=>setPosition(e.nativeEvent.position)}
                    
                >
                        <UploadCover onNext={()=>setPosition(pre=>pre+1)}
                        onUploadCover={()=>uploadCover()}
                        />
                        <UploadStory/>
                
                </PagerView> */}
            </Container>
        </View>
    )
}

export default UploadBook

const styles = StyleSheet.create({})
