import MAX_QUIZ_LENGTH from "../utils/constant.js";

export default function Question({ target, initialState, onClick }) {
  this.element = document.createElement("ul");
  this.element.classList.add("question__wrap");

  target.appendChild(this.element);

  this.state = {
    step: initialState.step,
    data: initialState.data,
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
    const { step, data, showResult } = this.state;

    if (showResult) {
      this.element.innerHTML = ``;
      return;
    }

    if (step === MAX_QUIZ_LENGTH) {
      return;
    }

    if (data.length === 0) {
      this.element.innerHTML = `<div>Loading...</div>`;
      return;
    }

    const { q, a } = data[step];

    this.element.innerHTML = `
      <li class="tilte">${q}</li>
      ${a.map((info, idx) => `
        <li class="answer" data-idx="${idx}">
          ${info.answer}
        </li>`)
        .join('')}
    `
  }

  this.render();

  this.element.addEventListener("click", (e) => {
    if (e.target.classList.contains("answer")) {
      const { step, data } = this.state;

      if (step === MAX_QUIZ_LENGTH) {
        return;
      }

      const { a } = data[step];
      const idx = e.target.dataset.idx;
      const { type } = a[idx]

      onClick(step + 1, type);
    }
  })
}