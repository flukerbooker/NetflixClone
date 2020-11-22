import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { hideConfig } from './config';
//we need to somehow seed the database

//we need a config here
const config = hideConfig;

const firebase = Firebase.initializeApp(config);

export { firebase };