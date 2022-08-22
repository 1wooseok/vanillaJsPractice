import { A, B, C, D, Modal } from "./components/index.js";

export default function App({ target }) {
  const a = new A({
    target,
    onToggle: () => this.onToggle(),
  });

  const b = new B({
    target,
    onToggle: () => this.onToggle(),
  });

  const c = new C({
    target,
    onToggle: () => this.onToggle(),
  });

  const d = new D({
    target,
    onToggle: () => this.onToggle(),
  });

  const modal = new Modal({
    target,
    props: this.state,
  })
}
