import {makeAutoObservable} from 'mobx';
export default class CreateStore {
  constructor() {
    makeAutoObservable(this);
    // Initialize your store properties here
  }

  // Define your store methods and actions here
}