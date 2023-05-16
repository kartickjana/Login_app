// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onclickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onclickButton} />
          ) : (
            <Login login={this.onclickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
