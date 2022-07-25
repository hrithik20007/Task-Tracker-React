import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
  return <button 
  style={{background:color}} 
  className="btn"
  onClick={onClick}
  >{text}</button>
}

Button.defaultProps = {
    background:'black',
    text:'Add Task',
}

Button.propTypes = {
    background: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button