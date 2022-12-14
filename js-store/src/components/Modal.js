import store from "../store/store.js";

export default function Modal({ target }) {
  const div = document.createElement('div');
  this.div = div;
  this.div.classList.add('modal-container');

  target.appendChild(this.div);

  this.render = () => {
    const show = store.getStore("modal");

    if (show) {
      this.div.innerHTML = `
      <div class="modal-bg"></div>
      <div class="modal-box">
      <div class="modal-header">
      <button class="close">×</button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer"></div>
      </div>
      `;

      this.div.classList.add('show');
    } else {
      this.div.classList.remove('show');
    }
  }

  this.div.addEventListener('click', e => {
    const seletor = e.target.classList;
    if (seletor.contains('modal-bg') || seletor.contains('close')) {
      store.dispatch({ type: 'TOGGLE-MODAL' });
    }
  });

  store.subscribe(this.render);
}
