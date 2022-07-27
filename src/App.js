import ProgressBar from "./components/ProgressBar.js";
import Question from "./components/Question.js";
import Button from "./components/Button.js";
import Result from "./components/Result.js";
// import { ANIMAL_TYPES } from "./components/AnimatedTypes";

import { fetchQnA } from "./utils/api.js";

export default function App({ target }) {
  this.state = {
    step: 0,
    data: [], // 굳이 state로 관리할 필요가 없음.
    answers: {},
    showResult: false,
  }

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };

    progressBar.setState({
      step: this.state.step,
      showResult: this.state.showResult,
    });

    button.setState({
      step: this.state.step,
      answers: this.state.answers,
      showResult: this.state.showResult,
    });

    question.setState({
      step: this.state.step,
      data: this.state.data,
      showResult: this.state.showResult,
    });

    result.setState({
      data: this.state.data,
      answers: this.state.answers,
      showResult: this.state.showResult,
    })
  }

  const progressBar = new ProgressBar({
    target,
    initialState: {
      step: this.state.step,
      showResult: this.state.showResult,
    }
  });

  const question = new Question({
    target,
    initialState: {
      step: this.state.step,
      data: this.state.data,
      showResult: this.state.showResult,
    },
    QnA: this.state.data,
    onClick: (newStep, type) => {
      const userPick = {};
      userPick[newStep] = type;

      this.setState({
        step: newStep,
        answers: {
          ...this.state.answers,
          ...userPick
        }
      });
    }
  });

  const button = new Button({
    target,
    initialState: {
      step: this.state.step,
      answers: this.state.answers,
      showResult: this.state.showResult,
    },
    onClick: (newStep) => this.setState({ step: newStep }),
    onResult: () => this.setState({ showResult: true }),
  });

  const result = new Result({
    target,
    initialState: {
      data: this.state.data,
      answers: this.state.answers,
      showResult: this.state.showResult,
    },
    onReset: () => this.setState({
      step: 0,
      data: this.state.data,
      answers: {},
      showResult: false,
    })
  });

  window.onload = async () => {
    const data = await fetchQnA();
    this.setState({ data });
  }
}
