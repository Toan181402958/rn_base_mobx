import {makeAutoObservable} from 'mobx';
export default class UserStore  {
    fcmToken: string = '';
    constructor() {
      makeAutoObservable(this);
        // Initialize your store properties here
      }
    
      // Define your store methods and actions here
}