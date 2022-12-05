import firebase from 'firebase/compat/app';
import {
  getAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from '@firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firestore from '@firebase/firestore';
import React, { useState, createContext } from 'react';
import { FIREBASEAPIKEY } from './config.js';


export const createRequest = async (
    orderNumber,
    collectionPlace,
    deliveryPlace,
  ) => {
    firebase.firestore().collection("Request")
    .doc(orderNumber)
    .set({
        orderNumber: orderNumber,
        collectionPlace: collectionPlace,
        deliveryPlace: deliveryPlace,
      }).then(() => console.log("test"));
  };

  export const deleteRequest = async (
    orderNumber,
  ) => {
    firebase.firestore().collection("Request")
    .doc(orderNumber)
    .delete();
  };

  export const updateRequest = async (
    orderNumber,
    collectionPlace,
    deliveryPlace,
  ) => {
    firebase.firestore().collection("Request")
    .doc(orderNumber)
    .update({
        orderNumber: orderNumber,
        collectionPlace: collectionPlace,
        deliveryPlace: deliveryPlace,
      }).then(() => console.log("test"));
  };