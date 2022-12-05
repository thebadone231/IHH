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
        status: "Pending",
      }).then(() => console.log("test"));
  };

  export const completeRequest = async (
    orderNumber,
  ) => {
    firebase.firestore().collection("Request")
    .doc(orderNumber)
    .update({
      status: "Delivered"
    });
  };

  export const collectRequest = async (
    orderNumber
  ) => {
    firebase.firestore().collection("Request")
    .doc(orderNumber)
    .update({
        status: "Collected"
      }).then(() => console.log("test"));
  };

  export const getUnfulfilledRequests = async () => {
    firebase.firestore().collection("Request").where('status', '==', "Pending").get();
  }

  export const getPendingRequests = async () => {
    firebase.firestore().collection("Request").where('status', '!=', "Delivered").get();
  }

  export const getCompletedRequests = async () => {
    firebase.firestore().collection("CompletedRequest").where('status', '==', "Delivered").get();
  }