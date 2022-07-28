import Button from './Button'

const Header = (props) => {

  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button 
          color={props.showAdd? 'red':'green'} 
          text={props.showAdd? 'Close':'Add'} 
          onClick={props.showtask}
        />
        {/* <button className="btn">Add</button> */}


    </header>
  )
}

Header.defaultProps = {
    title: 'This is a task tracker',
}

// const headstyle={
//     color:'red',
//     backgroundColor:'black',
// }

export default Header
