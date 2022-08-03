import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = (props) => {

  return (
    <header className="header">
        <h1>{props.title}</h1>
        {useLocation().pathname ==='/' && (<Button 
          color={props.showAdd? 'red':'green'} 
          text={props.showAdd? 'Close':'Add'} 
          onClick={props.showtask}
        />)}
        {/* <button className="btn">Add</button> */}


    </header>
  )
}

Header.defaultProps = {
    title: 'This is a Task Tracker',
}

// const headstyle={
//     color:'red',
//     backgroundColor:'black',
// }

export default Header
