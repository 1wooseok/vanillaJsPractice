export default function B({ target }) {
  const div = document.createElement('div');
  this.div = div;
  this.div.classList.add('B');
  this.div.classList.add('Component');
  this.div.textContent = 'B';

  const button = document.createElement('button');
  this.button = button;
  this.button.textContent = 'modal';
  this.button.classList.add('ModalToggle');

  this.div.appendChild(this.button);
  target.appendChild(div);
}
