import PropTypes from 'prop-types'

const Button = ({color,text}) => {
  return <button style={{background:color}} className="btn">{text}</button>
}

Button.defaultProps = {
    background:'black',
    text:'Add Task',
}

Button.propTypes = {
    background: PropTypes.string,
    text: PropTypes.string,
}

export default Button