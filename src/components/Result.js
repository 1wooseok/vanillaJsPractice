import { fetchResult } from "../utils/api.js";
import { getMaxAnimal } from "../utils/utils.js";

export default function Result({ target, initialState, onReset }) {
  this.element = document.createElement("div");
  this.element.classList.add("result__wrap");

  target.appendChild(this.element);

  this.state = {
    data: initialState.data,
    result: [],
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

  this.render = async () => {
    const { answers, showResult } = this.state;

    if (showResult) {
      const res = await fetchResult();
      const resultData = await res[0];

      const result = resultData[getMaxAnimal(answers)];

      this.element.style.display = "block";
      this.element.innerHTML = `
        <div>
          <img /> 
          <h2>${result.name}</h2>
          <hr>
          <p>${result.desc}</p>
          <button>Again</button><button>Share</button>
        </div>
      `;
    } else {
      this.element.style.display = "none";
      this.element.innerHTML = "";
    }
  }

  this.render();

  this.element.addEventListener("click", e => {
    if (e.target.textContent === "Again") {
      onReset();
    }
  })
}
