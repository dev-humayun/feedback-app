import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackList() {
    const {feedback}=useContext(FeedbackContext)
    console.log(feedback)
  return (
  
    <div className='feedback-list'>
        {
            feedback.map((item)=>(
                <FeedbackItem key={item.id} item={item}/>
            ))
        }
      
    </div>
  )
}



// FeedbackList.propTypes={
//   feedback:PropTypes.arrayOf(
//     PropTypes.shape(
//       {
//         id:PropTypes.number.isRequired,
//         rating:PropTypes.number.isRequired,
//         text:PropTypes.string.isRequired,
//       }
//     )
//   )

// }