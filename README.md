<h1 align="center">
  react-plain-modal 🐣
</h1>
<p align="center" style="font-size: 1.2rem;">Extremely simple React modal</p>

<hr />

<img src="https://img.shields.io/badge/🦋-Extremely Lightweight-7799cc.svg"/> <img src="https://img.shields.io/badge/🦄-Just Works-cc00cc.svg"/>

## Installation

`npm i --save react-plain-modal`

## Usage

```javascript
import { Modal } from 'react-plain-modal';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>

        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <div>Content</div>
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}
```
