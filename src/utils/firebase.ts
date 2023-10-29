import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import firebaseConfig from '../configs/firebase';


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)