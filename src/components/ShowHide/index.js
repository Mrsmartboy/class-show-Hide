import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {onShowFirstName: true, onShowLastName: true}

  onClickFirstName = () => {
    this.setState(prevState => ({onShowFirstName: !prevState.onShowFirstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({onShowLastName: !prevState.onShowLastName}))
  }

  render() {
    const {onShowFirstName, onShowLastName} = this.state
    return (
      <div className="container">
        <h1 className="header">Show/Hide</h1>
        <div className="button-container">
          <div className="container1">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide FirstName
            </button>
            {!onShowFirstName && <p className="para">Joe</p>}
          </div>
          <div className="container1">
            <button
              type="button"
              className="button"
              onClick={this.onClickLastName}
            >
              Show/Hide LastName
            </button>
            {!onShowLastName && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
