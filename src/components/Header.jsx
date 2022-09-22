import React from 'react'
import PropTypes from 'prop-types'


function Header({text,bgColor,txtColor}) {

    const styling={
        backgroundColor:bgColor,
        color:txtColor,
    }
  return (
    <header style={styling}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}
Header.defaultProps={
    text:"FeedBack UI",
    bgColor:'rgba(0,0,0,0.4)',
    txtColor:'#ff6a95',
}
// Header.protoTypes={
//     text:PropTypes.string,
// }
export default Header