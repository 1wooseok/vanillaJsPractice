import { initialState, reducer } from "./reducer.js";

function Store(initialState, reducer) {
  let singleton = this;
  Store = function () {
    return singleton;
  }

  let state = initialState;
  let subscribers = new Set();

  const notify = () => {
    if (subscribers.size === 0) {
      return;
    }
    subscribers.forEach(setStateFn => {
      setStateFn(state);
    })
  };

  const setState = (newState) => {
    // 비교가 정확한지 모르겟음.
    if (state === newState) { // 원시타입
      return;
    }
    if (JSON.stringify(state) === JSON.stringify(newState)) { // 참조타입
      return;
    }

    state = { ...state, ...newState };
    notify();
  };

  // 외부에서 사용만 가능하고 바꾸지 못하게 해야함.
  this.subscribe = (setStateFn) => {
    if (typeof setStateFn !== "function") {
      throw new Error("Only setState function can subscribe to store");
    };
    subscribers.add(setStateFn);
  },

    // 외부에서 사용만 가능하고 바꾸지 못하게 해야함.
    this.getState = (key) => {
      if (key) {
        return state[key];
      }
      return state;
    },

    // 외부에서 사용만 가능하고 바꾸지 못하게 해야함.
    this.dispatch = (action = { type: null, payload: null }) => {
      if (!action.type) {
        throw new Error(`"type" attr required`);
      }
      const newState = reducer(action, state);
      setState(newState);
    }
}

export const store = new Store(initialState, reducer);