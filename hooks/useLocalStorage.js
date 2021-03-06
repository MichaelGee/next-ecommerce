import {useState} from 'react';
const useLocalStorage = (key = '', initialValue = '') => {
    // Use lazy initialization
    const [state, setState] = useState(() => {
       try {
           const item = window.localStorage.getItem(key);
           return item ? JSON.parse(item) : initialValue;
       } catch (error) {
          return initialValue; 
       }
    });

    //Update state and keyvalue pairs in localStorage
   const setLocalStorageState = newState => {
       try {
           const newStateValue = typeof newState === 'function' ? newState(state) : newState;
           setState(newStateValue, state);
           window.localStorage.setItem(key, JSON.stringify(newStateValue));
       } catch (error) {
           console.error(`Unable to store new value for ${key} in localStorage`);
       }
   }
   return [state, setLocalStorageState]
};

export default useLocalStorage;