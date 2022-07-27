import MAX_QUIZ_LENGTH from "../utils/constant.js";
import "../style/global.css"
import "../style/button.module.css"

export default function Button({ target, initialState, onClick, onResult }) {
  this.element = document.createElement("div");
  this.element.classList.add("button__wrap");

  target.appendChild(this.element);

  this.state = {
    step: initialState.step,
    answers: initialState.answers,
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
    const { step, answers, showResult } = this.state;

    if (showResult) {
      this.element.innerHTML = ``;
      return;
    }

    // console.log(Object.keys(answers).length);
    if (Object.keys(answers).length === (MAX_QUIZ_LENGTH)) {

      this.element.innerHTML = `
        <button class="prev">Prev</button>
        <button class="next" ${step === (MAX_QUIZ_LENGTH - 1) ? "disabled" : ""}>Next</button>
        <button class="result">Result</button>
      `
      return;
    }

    this.element.innerHTML = `
      <button class="prev" ${step === 0 ? "disabled" : ""}>Prev</button>
      <button class="next">Next</button>
    `
  }

  this.render();

  this.element.addEventListener("click", (e) => {
    const cssClass = e.target.className;
    const { step } = this.state;

    if (cssClass === 'prev') {
      if (step === 0) {
        return;
      };
      onClick(step - 1);
    }

    if (cssClass === 'next') {
      if (step === MAX_QUIZ_LENGTH - 1) {
        return;
      };
      onClick(step + 1);
    }

    if (cssClass === 'result') {
      onResult();
    }
  })
}