/**
 * 
 * @param { object: { type: string, payload: any }} action 
 * @param { object } state 
 */
// setState가 애매해짐.
export default function reducer(action, state) {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE-MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          show: !state.modal.show,
          children: payload
        }
      }
    default:
      throw new Error(`${type} : Invalid action Type`);
  };
}