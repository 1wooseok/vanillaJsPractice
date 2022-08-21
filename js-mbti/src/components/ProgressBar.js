import "../style/progressBar.module.css";
import MAX_QUIZ_LENGTH from "../utils/constant.js";

export default function ProgressBar({ target, initialState }) {
  this.element = document.createElement("div");
  this.element.classList.add("progressBar__wrap");

  target.appendChild(this.element);

  this.state = {
    step: initialState.step,
    showResult: initialState.showResult,
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
    const { step, showResult } = this.state;

    if (showResult) {
      this.element.innerHTML = ``;
      return;
    }

    this.element.innerHTML = `
      <progress max="${MAX_QUIZ_LENGTH * RATIO}" value="${step * RATIO}" id="bar">${this.state.step}</progress>
    `
  }

  this.render();
}