import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Keyboard,
  Button,
} from 'react-native';
import { auth, db } from '../../services/Firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Geocoder from 'react-native-geocoding';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import FulfillCard from './FulfillCardComponent';
import { ScrollView } from 'react-native-gesture-handler';

const FulfillScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.categorycontainer}>
        <View style={styles.categoryrowcontainer}>
          <View style={styles.subcategorycontainer}>
            <TouchableOpacity
              style={styles.categorybutton}
              onPress={() => {
                console.log('Pending Orders button pressed!');
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: '500' }}>
                Pending Orders
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subcategorycontainer}>
            <TouchableOpacity
              style={styles.categorybutton}
              onPress={() => {
                console.log('Pending Orders button pressed!');
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: '500' }}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.allrequestcontainer}>
        <ScrollView>
          <View>
            <FulfillCard />
          </View>
          <View>
            <FulfillCard />
          </View>
          <View>
            <FulfillCard />
          </View>
          <View>
            <FulfillCard />
          </View>
          <View>
            <FulfillCard />
          </View>
          <View>
            <FulfillCard />
          </View>
          <View>
            <FulfillCard />
          </View>
          <View>
            <FulfillCard />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5DDF9',
  },

  categorycontainer: {
    flex: 1,
    backgroundColor: '#D5DDF9',
  },

  categoryrowcontainer: {
    flexDirection: 'row',
  },

  subcategorycontainer: {
    flex: 1,
    alignItems: 'center',
  },

  allrequestcontainer: {
    flex: 9,
  },

  categorybutton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 18,
    padding: 10,
  },

  requestcontainer: {
    flex: 1,
    alignItems: 'center',
  },

  input_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 44,
    width: 310,
    marginVertical: 6,
  },

  inputBox: {
    height: '77%',
    width: 173,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingTop: 8,
    paddingHorizontal: 10,
  },
});
export default FulfillScreen;
