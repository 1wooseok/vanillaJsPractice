import { A, B, C, D, Modal } from "./components/index.js";

export default function App({ target }) {
  const a = new A({ target });

  const b = new B({ target });

  const c = new C({ target });

  const d = new D({ target });

  const modal = new Modal({
    target,
    props: this.state,
  })
}

class MyPromise {
  constructor(resolve, reject) {

  }
}