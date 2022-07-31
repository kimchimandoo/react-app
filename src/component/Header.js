import PropTypes from 'prop-types'
// shortcut: impt
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('clicked');
     }
  return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green'text='Add' onClick={onClick}/>
        </header>
  )
}
// props is object, so you can change props to {}
// const Header = (props) => {
//     return (
//           <header>
//               <h1>{props.title}</h1>
//           </header>
//     )
//   }

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// function Header(props) {
//     return (
//         <header>
//             <h1>{props.title}, {props.name}.</h1>
//         </header>
//     )
// }


// CSS in JS
const headingStyle = {
    color: 'red',
    backgroundColor: '#000',
}
export default Header;