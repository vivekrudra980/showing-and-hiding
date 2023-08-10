import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowingFirstName: false, isShowingLastName: false}

  showHideFirstName = () => {
    this.setState(prevState => ({
      isShowingFirstName: !prevState.isShowingFirstName,
    }))
  }

  showHideLastName = () => {
    this.setState(prevState => ({
      isShowingLastName: !prevState.isShowingLastName,
    }))
  }

  render() {
    const {isShowingFirstName, isShowingLastName} = this.state
    const firstName = isShowingFirstName && <p className="name">Joe</p>
    const lastName = isShowingLastName && <p className="name">Jonas</p>

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
