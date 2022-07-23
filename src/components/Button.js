export default function Button({ target, initialState, onClick }) {
  this.element = document.createElement("div");
  this.element.classList.add("button__wrap");

  target.appendChild(this.element);

  this.state = { index: initialState };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState
    }
    this.render();
  }

  this.render = () => {
    this.element.innerHTML = `
      <button class="prev">Prev</button>
      <button class="next">Next</button>
    `
  }

  this.render();

  this.element.addEventListener("click", (e) => {
    const cssClass = e.target.className;
    const { index } = this.state;

    if (cssClass === 'prev') {
      if (index === 0) {
        return
      };
      onClick(index - 1);
    }

    if (cssClass === 'next') {
      if (index === 10) {
        return
      };
      onClick(index + 1);
    }
  })
}