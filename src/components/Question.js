export default function Question({ target, initialState, QnA, onClick }) {
  this.element = document.createElement("div");
  this.element.classList.add("question__wrap");

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
      <div class="tilte">1. Lorem ipsum ...</div>
      <div class="answer">a. I like Apple</div>
      <div class="answer">b. I hate Apple</div>
      <div class="answer">c. I loveeee Apple</div>
    `
  }

  this.render();

  this.element.addEventListener("click", (e) => {
    const { index } = this.state;
    onClick(index + 1);
  })
}