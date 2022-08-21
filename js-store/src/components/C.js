import store from "../store/store.js";

export default function C({ target }) {
  const div = document.createElement('div');
  this.div = div;
  this.div.classList.add('C');
  this.div.classList.add('Component');
  this.div.textContent = 'C';

  const button = document.createElement('button');
  this.button = button;
  this.button.textContent = 'modal';
  this.button.classList.add('ModalToggle');

  this.div.appendChild(this.button);
  target.appendChild(div);

  this.button.addEventListener('click', () => {
    store.dispatch({ type: "TOGGLE-MODAL" });
  })
}
