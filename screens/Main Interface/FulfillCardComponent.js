import React, { useContext, useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Card } from 'react-native-paper';
import { doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db, auth, AuthenticationContext } from '../../services/Firebase';
import { completeRequest } from '../../services/request.js';
import { collectRequest } from '../../services/request.js';

const FulfillCard = ({ fulfill = {}, navigation }) => {
  //   const [requestdata, setRequestData] = useState([]);

  //   const { user } = useContext(AuthenticationContext);
  //   const requestDocRef = doc(db, 'requests/' + request['requestid']);
  //   const sessionDocRef = doc(db, 'session/' + user.email);

  //   useEffect(() => {
  //     const getRequestData = async () => {
  //       const requestDatabase = await getDoc(requestDocRef);
  //       setRequestData(requestDatabase.data());
  //     };

  //     getRequestData()
  //       .then(() => {})
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  // default dummy data
  const {
    orderNumber = 'CM187-T',
    collectionPlace = 'PGP Canteen',
    deliveryPlace = 'KE7 Hall',
    status = 'Pending',
  } = fulfill;

  return (
    <Card elevation={5} style={styles.card}>
      <View style={styles.ordernumbercontainer}>
        <Text>{orderNumber}</Text>
        <Text>Collection Location: {collectionPlace}</Text>
        <Text>Delivery Location: {deliveryPlace}</Text>
      </View>
      <View style={styles.buttonrowcontainer}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('Collect now button pressed!');
              collectRequest(orderNumber);
              Alert.alert('You may proceed to collect the order now');
            }}
          >
            <Text>Collect now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttoncontainer}>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log('Delivered now button pressed!');
                completeRequest(orderNumber);
                Alert.alert('Thank you for your service!');
              }}
            >
              <Text>Delivered</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  ordernumbercontainer: {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonrowcontainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttoncontainer: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15,
    padding: 7,
  },
});

export default FulfillCard;
