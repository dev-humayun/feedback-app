import React from "react";

export default function Conditional(){
    const title="First Blog Post"
    const body="First Body Tag"
    const comments=[
        
        {id:1,text:"First Comment"},
        {id:2,text:"Second Comment"},
        {id:3,text:"Third Comment"},
    
]

/** 
 * *Conditional JSX
*/


    const showComment=true

    const commentBlock=(  <div>
        <div className="comment">
            <h3>Comments : {comments.length}</h3>

            <ul>
                    {comments.map((comment,index)=> (<li key={index}>{comment.text}</li>))}
            </ul>
            
            
            </div>
    </div>)

    
    return (
        <div>
             <h1>{title}</h1>
            <p>{body}</p>
            /**
            ** Two method
            *! One is return componeny and in else pass null
            *! Other is the one Below
             */
            {showComment && commentBlock}
        </div>
        
    )
}