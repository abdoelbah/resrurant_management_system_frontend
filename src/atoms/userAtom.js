import { atom } from 'recoil';

const storedUser = JSON.parse(localStorage.getItem('user')) || null;

export const userState = atom({
  key: 'userState',
  default: storedUser,  // Initialize Recoil state from local storage
});