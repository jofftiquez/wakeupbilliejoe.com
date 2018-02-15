import { Observable } from 'rxjs/Observable';
import { REF, FB } from '../exports';
import Vue from 'vue';

const v = new Vue();

async function userExists(uid) {
  try {
    const snap = await REF.child('wake-up-list')
      .child(uid)
      .once('value');
    return snap.exists();
  } catch (e) {
    throw e;
  }
}

export const streamWakeupList = () => {
  return Observable.create(obs => {
    REF.child('wake-up-list')
      .on('value', snap => {
        let arr = [];
        snap.forEach(child => {
          arr.push({
            createdFormatted: v.$morphDate(child.val().created, 'MMM DD, YYYY'),
            uid: child.key,
            ...child.val()
          });
        });
        arr = new Array(arr)[0].sort((a, b) => {
          return b.created - a.created;
        });
        obs.next(arr);
      }, e => {
        obs.error(e);
      });
  });
}

export const addToWakeupList = async (user) => {
  try {
    if(await userExists(user.uid)) return;
    await REF.child('wake-up-list')
      .child(user.uid)
      .set({
        created: new Date().getTime(),
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email
      });
  } catch(e) {
    throw e;
  }
}