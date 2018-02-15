import { Observable } from 'rxjs/Observable';
import { AUTH } from '../exports';

export const streamLoginStatus = () => {
  return Observable.create(obs => {
    AUTH.onAuthStateChanged(user => {
      if(!user) {
        obs.next(false);
      } else {
        obs.next(user);
      }
    })
  });
}