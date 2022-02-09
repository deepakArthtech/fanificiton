import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../Component/Container';
import {appColors} from '../../Utils/appColors';
import {getIcon} from '../../Utils/getIcon';
import Styles from '../../Utils/Styles';
import Slider from 'react-native-slider';

const WriteBook = ({navigation}) => {
  const sheetRef = React.useRef(null);
  const [show, setShow] = useState(false);

  const [sliderValue, setSliderValue] = useState(0.2);
  const [fontSize, setFontSize] = useState(16);
  const [mode, setMode] = useState('day');
  const [data, setData] = useState('');

  const increaseFontSize = () => {
    setFontSize(pre => pre + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(pre => pre - 1);
  };

  const BottomSheet = () => {
    return (
      <View style={[styles.bottomSheet]}>
        <View style={[Styles.fd, styles.bottomSheetFd]}>
          <Text style={styles.font}>Font</Text>
          <View style={[Styles.fd]}>
            {[1, 2, 3, 4, 5].map((data, ind) => {
              return (
                <TouchableOpacity style={styles.selectFamily}>
                  <Text style={[styles.Aa]}>Aa</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={[Styles.fd, styles.bottomSheetFd]}>
          <Text style={[styles.font]}>Size</Text>
          <View
            style={[
              Styles.fd,
              {justifyContent: 'flex-start', flex: 1, left: 25},
            ]}>
            <TouchableOpacity
              style={styles.selectFamily}
              onPress={() => decreaseFontSize()}>
              <Text style={{fontSize: 30}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, marginHorizontal: 10}}>{fontSize}</Text>
            <TouchableOpacity
              style={styles.selectFamily}
              onPress={() => increaseFontSize()}>
              <Text style={{fontSize: 30}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[Styles.fd, styles.bottomSheetFd]}>
          <Text style={[styles.font, {width: 60}]}>Light</Text>
          <Slider
            value={sliderValue}
            onValueChange={value => setSliderValue(value)}
            style={{flex: 1}}
            thumbStyle={{
              backgroundColor: appColors.white,
              borderColor: appColors.borderColor,
              borderWidth: 1,
            }}
          />
        </View>
        <View style={[Styles.fd, styles.bottomSheetFd]}>
          <Text style={[styles.font]}>Mode</Text>
          <View
            style={[
              Styles.fd,
              {justifyContent: 'flex-start', flex: 1, left: 15},
            ]}>
            <TouchableOpacity
              style={styles.modeBtn}
              onPress={() => setMode('day')}>
              <Text style={styles.modeTxt}>Day</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modeBtn,
                {backgroundColor: appColors.titleColor, left: 20},
              ]}
              onPress={() => setMode('night')}>
              <Text style={styles.modeTxt}>Night</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <Container>
        <View style={[Styles.fd, {justifyContent: 'space-between'}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={getIcon('back')}
              style={{height: 30, width: 30, marginBottom: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShow(pre => !pre)}>
            <Image
              source={getIcon('filter')}
              style={{height: 30, width: 30, marginBottom: 20}}
            />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.title} placeholder={'Chapter Title'} />
        <TextInput
          style={[styles.data, {fontSize: fontSize}]}
          placeholder={'Keep Calm and be creative'}
          multiline
          value={data}
          onChangeText={val => setData(val)}
        />
      </Container>
      {show && <BottomSheet />}
      {/* <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 300, 0]}
                borderRadius={10}
                renderHeader={renderContent}
            /> */}
    </View>
  );
};

export default WriteBook;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 10,
    borderBottomColor: appColors.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  data: {
    paddingBottom: 10,
  },
  bottomSheetFd: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bottomSheet: {
    backgroundColor: '#fefefe',
    padding: 16,
    height: 300,
    borderColor: appColors.borderColor,
    borderWidth: 1,
  },
  font: {
    fontSize: 20,
    color: appColors.black,
  },
  selectFamily: {
    height: 50,
    width: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: appColors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  Aa: {
    fontSize: 20,
  },
  modeBtn: {
    height: 40,
    width: 80,
    backgroundColor: appColors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modeTxt: {
    color: appColors.white,
    fontSize: 18,
    fontWeight: '700',
  },
});
//
