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

const OrderCard = ({ order = {} }) => {
  // default dummy data
  const {
    orderNumber = 'CM187-T',
    collectionPlace = 'PGP Canteen',
    deliveryPlace = 'KE7 Hall',
    status = 'Pending',
  } = order;

  return (
    <Card elevation={5} style={styles.card}>
      <View style={styles.ordernumbercontainer}>
        <Text>{orderNumber}</Text>
        <Text>Collection Location: {collectionPlace}</Text>
        <Text>Delivery Location: {deliveryPlace}</Text>
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
});

export default OrderCard;
