// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribeText: 'Subscribe'}

  onSubscribe = () => {
    const {subscribeText} = this.state
    if (subscribeText === 'Subscribe') {
      this.setState({subscribeText: 'Subscribed'})
    } else {
      this.setState({subscribeText: 'Subscribe'})
    }
  }

  render() {
    const {subscribeText} = this.state

    return (
      <div className="welcome-bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div className="btn-container">
          <button type="button" className="button" onClick={this.onSubscribe}>
            {subscribeText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
