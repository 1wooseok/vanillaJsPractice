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