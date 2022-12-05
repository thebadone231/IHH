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
  Alert,
} from 'react-native';
import { auth, db } from '../../services/Firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Geocoder from 'react-native-geocoding';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { createRequest } from '../../services/request';

const OrderScreen = () => {
  //const [requestData, setRequestData] = useState({});
  const [heightDimension, setHeightDimension] = useState({
    OrderNo: '77%',
  }); //auto update the height of text input
  const [text, onChangeText] = React.useState(text);

  // for Collection Location dropdown list
  const [openCollectionLocation, setOpenCollectionLocation] = useState(false);
  const [valueCollectionLocation, setValueCollectionLocation] = useState(valueCollectionLocation);
  const [itemsCollectionLocation, setItemsCollectionLocation] = useState([
    { label: 'PGP', value: 'PGP' },
    { label: 'Frontier (non AC)', value: 'Frontier (non AC)' },
    { label: 'Frontier (AC)', value: 'Frontier (AC)' },
    { label: 'NUH', value: 'NUH' },
  ]);
  const [selectedCollectionLocation, setSelectedCollectionLocation] =
    useState(null);

  // for Delivery Location dropdown list
  const [openDeliveryLocation, setOpenDeliveryLocation] = useState(false);
  const [valueDeliveryLocation, setValueDeliveryLocation] = useState(valueDeliveryLocation);
  const [itemsDeliveryLocation, setItemsDeliveryLocation] = useState([
    { label: 'KE7 foyer', value: 'KE7 foyer' },
    { label: 'PGP bus stop', value: 'PGP bus stop' },
    { label: 'AB lounge', value: 'AB lounge' },
    { label: 'CD lounge', value: 'CD lounge' },
    { label: 'E lounge', value: 'E lounge' },
    { label: 'F lounge', value: 'F lounge' },
    { label: 'GH lounge', value: 'GH lounge' },
  ]);
  const [selectedDeliveryLocation, setSelectedDeliveryLocation] =
    useState(null);

  //logic for writing of requests to firebase
  const write_request = async () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const id = date + ' ' + time;

    let request = {
      type: 'requests',
      'time of request': time,
      location: {
        address: '119224',
      },
      'order details': {
        orderNo: 'abc1',
        'order specifics': selectedPrice,
        'collection location': selectedCollectionLocation,
        'delivery location': selectedDeliveryLocation,
      },
    };

    //writing to database
    const requestsRef = doc(db, 'requests/' + id);
    await setDoc(userDocRef, { requests: { [id]: request } }, { merge: true })
      .then(
        await setDoc(
          requestsRef,
          { ...request, user: auth.currentUser.email },
          { merge: true }
        )
      )
      .then(
        setAlert({
          status: true,
          title: 'Success',
          message: 'Your +1 request has been received',
        })
      )
      .catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_container}></View>
      <View>
        <Text style={styles.headline}> Place Order </Text>
      </View>
      <View>
        <Text> Order Number: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <View style={styles.input_container}>
        <Text>Delivery Location:</Text>
        <View style={{ flex: 2.5, marginLeft: 5, zIndex: 200 }}>
          <DropDownPicker
            open={openCollectionLocation}
            value={valueCollectionLocation}
            items={itemsCollectionLocation}
            setOpen={setOpenCollectionLocation}
            setValue={setValueCollectionLocation}
            setItems={setItemsCollectionLocation}
            placeholder="Select a location"
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            //onOpen={() => {
            //setOpenPrice(false);
            //}}
            onChangeValue={(value) => {
              setSelectedCollectionLocation(value);
            }}
            textStyle={{
              fontSize: 12,
            }}
            containerProps={{
              height: openCollectionLocation ? 220 : null,
            }}
          />
        </View>
      </View>
      <View style={styles.input_container}>
        <Text>Collection Location:</Text>
        <View style={{ flex: 2.5, marginLeft: 5, zIndex: 200 }}>
          <DropDownPicker
            open={openDeliveryLocation}
            value={valueDeliveryLocation}
            items={itemsDeliveryLocation}
            setOpen={setOpenDeliveryLocation}
            setValue={setValueDeliveryLocation}
            setItems={setItemsDeliveryLocation}
            placeholder="Select a location"
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            //onOpen={() => {
            //setOpenPrice(false);
            //}}
            onChangeValue={(value) => {
              setSelectedDeliveryLocation(value);
            }}
            textStyle={{
              fontSize: 12,
            }}
            containerProps={{
              height: openDeliveryLocation ? 220 : null,
            }}
          />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          onPress={ async () => {
            await createRequest(text, valueCollectionLocation, valueDeliveryLocation)
            Alert.alert('Order successful')
          }}
          title="Submit Order"
          color="#11CC28"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => Alert.alert('Pending orders')}
          title="Pending Orders"
          color="#B1B2BB"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => Alert.alert('Your past orders')}
          title="Past Orders"
          color="#B1B2BB"
          accessibilityLabel="Learn more about this purple button"
        />
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

  input_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 44,
    width: '95%',
    marginVertical: 6,
    marginLeft: 3,
  },

  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 48,
    marginTop: 10,
    width: '100%',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  inputBox: {
    height: '77%',
    width: 173,
    borderRadius: 8,
    paddingTop: 8,
    paddingHorizontal: 10,
  },

  buttons: {
    flex: 1,
    height: '77%',
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
  },

  submit_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 84,
    width: 310,
    marginVertical: 6,
    backgroundColor: '#A1B2AA',
  },
});

export default OrderScreen;
