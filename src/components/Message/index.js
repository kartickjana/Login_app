// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const massage = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="massage">{massage}</h1>
}
export default Message
