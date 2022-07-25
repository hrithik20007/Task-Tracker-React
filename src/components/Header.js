import Button from './Button'

const Header = (props) => {
  const onclick = () => {
    console.log('Click')
  }

  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button color='green' text='Add' onClick={onclick}/>
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
