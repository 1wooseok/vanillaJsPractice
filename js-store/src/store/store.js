// interface MyStore {
//   state: object;
//   getStore: (key: string) => any,
//   setStore: (newState) => void;
//   dispatch: (action: { type: string, payload?: any }): void;
//   subscribe: (fn:() => void) => void;
//   publish: () => void;
// }
// const store = (function () {
//   let subscribers = [];
//   let globalState = {
//     modal: false,
//   };

//   return {
//     getStore: (key) => {
//       if (globalState[key] === undefined) {
//         throw new Error(`${key} : Invalid state`);
//       }
//       return globalState[key];
//     },

//     setStore: (newState) => {
//       const keys = Object.keys(newState);

//       if (keys.length > 1) {
//         throw new Error("'setStore' method can add 1 state at a time");
//       }
//       if (typeof keys[0] !== "string") {
//         throw new Error("'state key' must be a string");
//       }

//       globalState = { ...globalState, ...newState };
//     },

//     dispatch: (action = { type: null, payload: null }) => {
//       const { type, payload } = action;

//       switch (type) {
//         case "TOGGLE-MODAL":
//           this.setStore({ ...state, modal: !globalState.modal });
//           break;
//         default:
//           throw new Error(`${type} : Invalid action Type`);
//       };

//       this.pusblish();
//     },

//     subscribe: (setStateFn) => {
//       if (typeof setStateFn !== "function") {
//         throw new Error("Only setState function can subscribe to store");
//       };
//       subscribers.push(setStateFn);
//     },

//     publish: () => {
//       if (subscribers.length === 0) {
//         return;
//       }
//       subscribers.forEach(setStateFn => {
//         setStateFn(globalState);
//       })
//     },
//   }
// })();

// ex) 모달 on/off같이 모든 컴포넌트에서 사용 하는 상태는
// props로 주는 대신, store에서 꺼내서 써보기

function Store() {
  let subscribers = [];
  let globalState = {
    modal: false,
  };

  this.subscribe = (setStateFn) => {
    if (typeof setStateFn !== "function") {
      throw new Error("Only setState function can subscribe to store");
    };
    subscribers.push(setStateFn);
  };

  this.publish = () => {
    if (subscribers.length === 0) {
      return;
    }
    subscribers.forEach(setStateFn => {
      setStateFn(globalState);
    })
  };

  this.getStore = (key) => {
    if (globalState[key] === undefined) {
      throw new Error(`${key} : Invalid state`);
    }
    return globalState[key];
  };

  this.setStore = (newState) => {
    const keys = Object.keys(newState);

    if (!keys.every(key => typeof key === 'string')) {
      throw new Error("key must be string");
    }
    globalState = { ...globalState, ...newState };
    this.publish();
  };

  this.dispatch = (action = { type: null, payload: null }) => {
    const { type, payload } = action;

    switch (type) {
      case "TOGGLE-MODAL":
        this.setStore({ ...globalState, modal: !globalState.modal });
        break;
      default:
        throw new Error(`${type} : Invalid action Type`);
    };
  };
}

const store = new Store();

export default store;