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

const ProfileScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <View>
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
    width: 200,
    height: 200,
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
});

export default ProfileScreen;
