import "../style/progressBar.module.css";

export default function ProgressBar({ target, initialState }) {
  this.element = document.createElement("div");
  this.element.classList.add("progressBar__wrap");

  target.appendChild(this.element);

  this.state = {
    index: initialState
  };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState
    }
    this.render();
  }

  this.render = () => {
    const RATIO = 10;
    const { index } = this.state;
    this.element.innerHTML = `
      <progress max="100" value="${index * RATIO}" id="bar">${this.state.index}</progress>
    `
  }

  this.render();
}