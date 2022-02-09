import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

const UploadCover = () => {
  const [checked, setChecked] = useState('first');
  const [story, selectstory] = useState('Novel');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, padding: 10}}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat',
              alignSelf: 'center',
              fontWeight: 'bold',
              color: 'black',
            }}>
            Add Story Info
          </Text>
        </View>

        <View
          style={{
            height: 128,
            justifyContent: 'center',
            marginBottom: 32,
            backgroundColor: '#F5F6F8',
          }}>
          <TouchableOpacity>
            <Image
              style={{width: 42, height: 30, alignSelf: 'center'}}
              source={require('../../assests/icons/cloud.png')}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 18,
              color: '#000000',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Upload Cover
          </Text>
        </View>

        <View>
          <TextInput
            style={{flex: 1}}
            label={'Title'}
            fontFamily={'Montserrat'}
            activeOutlineColor="#67686D"
            placeholder="Test Book"
            mode="outlined"></TextInput>

          <TextInput
            style={{flex: 1, marginTop: 15}}
            fontFamily={'Montserrat'}
            activeOutlineColor="#640000"
            passwordRules="true"
            placeholder="Novel"
            mode="outlined"
            selectionColor="#67686D"
            render={() => (
              <RNPickerSelect
                items={[
                  {label: 'Football', value: 'football'},
                  {label: 'Baseball', value: 'baseball'},
                  {label: 'Hockey', value: 'hockey'},
                ]}
                // Icon={() => {
                //     return <Icon name="chevron-down-outline" size={24} color="gray"/>;
                // }}
              />
            )}></TextInput>

          <TextInput
            style={{flex: 1, marginTop: 15}}
            label={'Genre'}
            fontFamily={'Montserrat'}
            secureTextEntry
            right={<TextInput.Icon name="eye" forceTextInputFocus={false} />}
            selectionColor="#67686D"
            activeOutlineColor="#640000"
            passwordRules="true"
            placeholder="Romance"
            mode="outlined"></TextInput>

          <TextInput
            style={{flex: 1, marginTop: 15}}
            label={'Language'}
            fontFamily={'Montserrat'}
            right={<TextInput.Icon name="eye" forceTextInputFocus={false} />}
            selectionColor="#67686D"
            activeOutlineColor="#67686D"
            passwordRules="true"
            placeholder="English"
            mode="outlined"></TextInput>
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: '#640000',
              fontSize: 14,
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
            }}>
            Content Rating
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 100,
            marginTop: 10,
          }}>
          <RadioButton
            value="first"
            color="#640000"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text
            style={{
              marginTop: 8,
              color: checked === 'first' ? 'black' : 'gray',
              fontWeight: '600',
            }}>
            4+
          </Text>
          <RadioButton
            value="second"
            color="#640000"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text
            style={{
              marginTop: 8,
              color: checked === 'second' ? 'black' : 'gray',
              fontWeight: '600',
            }}>
            12+
          </Text>
          <RadioButton
            value="third"
            color="#640000"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
          <Text
            style={{
              marginTop: 8,
              color: checked === 'third' ? 'black' : 'gray',
              fontWeight: '600',
            }}>
            16+
          </Text>
          <RadioButton
            value="fourth"
            color="#640000"
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fourth')}
          />
          <Text
            style={{
              marginTop: 8,
              color: checked === 'fourth' ? 'black' : 'gray',
              fontWeight: '600',
            }}>
            18+
          </Text>
        </View>
        <View>
          {/* <TouchableOpacity style={{alignItems: 'center', margin: 20}}>
            <Text
              style={{
                color: COLORS.white,
                flexWrap: 'wrap',
                paddingHorizontal: 30,
                paddingVertical: 10,
                backgroundColor: COLORS.chocklate,
                borderRadius: 10,
              }}>
              Next
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: 339,
    backgroundColor: 'white',
    alignSelf: 'center',
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  carBackground: {
    width: 362,
    height: 120,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 80,
    backgroundColor: '#640000',
    marginRight: 275,
    top: -95,
    marginLeft: 16,
  },
  circleGrey: {
    width: 35,
    height: 35,
    borderRadius: 80,
    backgroundColor: '#EDEDEF',
    alignSelf: 'center',
    top: -26,
  },
  circleGrey2: {
    width: 35,
    height: 35,
    borderRadius: 80,
    backgroundColor: '#EDEDEF',
    marginLeft: 275,
    top: -60,
  },

  firsthree: {
    alignSelf: 'center',
    marginTop: 7,
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  checkin: {
    width: '95%',
    height: 37,
    backgroundColor: '#EDEDEF',
    borderRadius: 17,
    marginTop: 22,
    alignSelf: 'center',
  },
  card2: {
    height: 119,
    width: 339,
    backgroundColor: '#F5F6F8',
    alignSelf: 'center',
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'column',
  },

  Text1View: {
    width: 206,
    height: 22,
    marginLeft: 20,
  },
  Text2View: {
    width: 192,
    height: 15,
    marginLeft: 20,
  },

  fiveCoins: {
    width: 100,
    height: 28,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#CC583B7D',
    borderRadius: 90,
    marginBottom: 19,
    flexDirection: 'row',
  },

  claimbutton: {
    width: 89,
    height: 27,
    borderRadius: 17,
    backgroundColor: '#640000',
    marginLeft: 110,
  },
  claimText: {
    alignSelf: 'center',
    marginTop: 2,
    color: '#FFFFFF',
  },

  romancesearchbarView: {
    width: '100%',
    height: 18,
    backgroundColor: '#C4C4C4',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 26,
  },

  imageView: {
    width: '100%',
    height: '40%',
    backgroundColor: '#F5F6F8',
    alignSelf: 'center',
    marginTop: 48,
  },
});

export default UploadCover;
