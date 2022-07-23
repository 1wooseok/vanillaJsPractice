import ProgressBar from "./components/ProgressBar.js";
import Question from "./components/Question.js";
import Button from "./components/Button.js";

import { fetchQnA } from "./utils/api.js";

export default function App({ target }) {
  this.state = {
    index: 0
  }

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    }
    progressBar.setState({
      index: this.state.index
    })
    button.setState({
      index: this.state.index
    })
    question.setState({
      index: this.state.index
    })
  }

  const progressBar = new ProgressBar({
    target,
    initialState: this.state.index
  });

  const question = new Question({
    target,
    initialState: this.state.index,
    QnA: fetchQnA(),
    onClick: (newIndex) => this.onClick(newIndex)
  });

  const button = new Button({
    target,
    initialState: this.state.index,
    onClick: (newIndex) => this.onClick(newIndex)
  });

  this.onClick = (newIndex) => {
    this.setState({ index: newIndex });
  }
}