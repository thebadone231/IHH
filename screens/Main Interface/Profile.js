import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import { auth, db } from '../../services/Firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { updatePassword, updateEmail } from 'firebase/auth';
import AwesomeAlert from 'react-native-awesome-alerts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthenticationContext } from '../../services/Firebase';
import { signout } from '../../services/Firebase';

const ProfileScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text style={styles.headline}> Profile </Text>
      </View>

      <Image
        style={styles.findIcon}
        source={require('../../assets/user.png')}
      />

      <View style={{ flex: 4, justifyContent: 'flex-end' }}>
        <View>
          <Text> Name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View style={styles.input_box}>
          <Text> Contact No: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            keyboardType={'number-pad'}
          />
        </View>

        <View style={styles.input_box}>
          <Text> Email Address: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            keyboardType={'email-address'}
          />
        </View>

        <View style={styles.input_box}>
          <Text> Payment Method: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.bottombuttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('Update profile button pressed!');
              Alert.alert('Profile updated!');
            }}
          >
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottombuttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('Logout button pressed!');
              signout();
              navigation.navigate('LoginScreen');
            }}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5DDF9',
    padding: '3%',
  },

  mainLogo: {
    fontSize: 50,
    fontWeight: '800',
  },

  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 48,
    marginTop: 10,
    width: '100%',
  },

  input_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 43,
    width: 310,
  },

  inputBox: {
    height: '77%',
    width: '88%',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  iconDimension: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  findIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },

  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 30,
    marginTop: 10,
    width: '35%',
  },

  botNavBar: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  bottomcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  bottombuttoncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#735e7d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
  },
});

export default ProfileScreen;
