import {NativeModules, NativeEventEmitter} from 'react-native';

class Counter extends NativeEventEmitter {
    constructor(nativeModule) {
        super(nativeModule);

        this.initialCount = nativeModule.initialCount
        this.getCount = nativeModule.getCount
        this.increment = nativeModule.increment
        this.decrement = async function() {
            try {
              const res = await nativeModule.decrement()
              console.warn(res)
            } catch(e) {
              console.warn(e.message, e.code)
            }
          }
    }
}

export default new Counter(NativeModules.Counter)