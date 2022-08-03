import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const About = () => {
  return (
    <div className='container'>
        <Header title="Task Tracker"/>
        <h3>Version 1.0.0</h3>
        <Link to="/">Go Back</Link>
        <Footer />
    </div>
  )
}

export default About