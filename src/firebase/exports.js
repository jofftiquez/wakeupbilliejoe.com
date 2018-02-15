import firebase from 'firebase';
import config from '../../.env.json';

const fb = firebase.initializeApp(config);

export const FB = fb;
export const DB = fb.database();
export const REF = DB.ref();
export const AUTH = fb.auth();