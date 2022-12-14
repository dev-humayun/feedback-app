import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'
export default function FeedbackList() {
    const {feedback,isLoading}=useContext(FeedbackContext)
    console.log(feedback)

    if(!isLoading && (!feedback|| feedback.length===0))
    {
       return <p>No Feedback Item Yet!!!!</p>
    }

    return isLoading ? <Spinner /> :(
      <div className='feedback-list'>
      {
          feedback.map((item)=>(

            
              <FeedbackItem key={item.id} item={item}/>
          ))
      }
    
  </div>
    )
  // return (
  
  //   <div className='feedback-list'>
  //       {
  //           feedback.map((item)=>(

              
  //               <FeedbackItem key={item.id} item={item}/>
  //           ))
  //       }
      
  //   </div>
  // )
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
