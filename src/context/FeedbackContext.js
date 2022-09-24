import { createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is Item 1",
            rating: 10
        },
        {
            id: 2,
            text: "This is item 2",
            rating: 9
        },
        {
            id: 3,
            text: "This is item 3",
            rating: 7
        }
    ])
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
    useEffect(()=>{
        fetchFeedback()
    })

    const fetchFeedback=async ()=>{
        const response=await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data=await response.json()

        console.log(data)
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    
    
      }
      //Set item to be updated
      const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
      }

      const updateFeedback=(id,updItem)=>{
        setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}:item))
      }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to Delete?")) {

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{ feedback, deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback }}>
        {
            children
        }
    </FeedbackContext.Provider>
}

export default FeedbackContext