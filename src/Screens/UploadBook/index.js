import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '../../Utils/appColors';
import UploadStory from './UploadStory';
import WriteBook from './Write';
import UploadCover from './UploadCover';

const UploadBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onStepPress = position => {
    setCurrentPage(position);
  };

  const renderStepIndicator = params => {
    switch (params.position) {
      case 0:
        return (
          <Feather
            name={'upload'}
            size={15}
            color={params.stepStatus === 'finished' ? '#ffffff' : '#000'}
          />
        );
      case 1:
        return (
          <MaterialCommunityIcons
            name={'pencil'}
            size={15}
            color={params.stepStatus === 'finished' ? '#ffffff' : '#000'}
          />
        );
      case 2:
        return (
          <Foundation
            name={'megaphone'}
            size={15}
            color={params.stepStatus === 'finished' ? '#ffffff' : '#000'}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, paddingTop: 10}}>
      <StepIndicator
        customStyles={secondIndicatorStyles}
        currentPosition={currentPage}
        onPress={onStepPress}
        renderStepIndicator={renderStepIndicator}
        stepCount={3}
      />
      <Swiper
        style={{flexGrow: 1}}
        loop={false}
        index={currentPage}
        autoplay={false}
        showsPagination={false}
        onIndexChanged={page => setCurrentPage(page)}>
        <UploadCover />
        <UploadStory />
        <WriteBook />
      </Swiper>
    </View>
  );
};

export default UploadBook;

const styles = StyleSheet.create({});

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: appColors.primary,
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: appColors.primary,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: appColors.primary,
  separatorUnFinishedColor: '#DEDEDE',
  stepIndicatorFinishedColor: appColors.primary,
  stepIndicatorUnFinishedColor: '#DEDEDE',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '',
  // stepIndicatorLabelFinishedColor: 'red',
  stepIndicatorLabelUnFinishedColor: '#DEDEDE',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};
