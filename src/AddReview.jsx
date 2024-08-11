import React, {useState} from 'react'

function AddReview() {
    const [reviews, setReviews] = useState([])
    const letter = 20
    const Inputvalue =(e)=>{
        const text = e.target.value
        if(text.length > letter){
            alert(`you exceed the limit please enter only ${letter}_words`)
        } 
    }
    const clickMe = ()=>{
            const textValue = document.getElementById('inputtext').value
            const review = {
                text:textValue,
                date:new Date().toLocaleDateString()
            }
            setReviews([...reviews,review])
    }
    const deleteMe = (del)=>{
        setReviews(reviews.filter((i)=> i !==del))
    }


  return (
    <>
        <input type="text" id='inputtext' onChange={Inputvalue} />
        <button onClick={clickMe}>Add review</button>
        <div>
            {
                reviews.map((rev)=>{
                    return(
                        <>
                            <h1>{rev.text}</h1>
                            <h1>{rev.date}</h1>
                            <h1>{rev.text.length}</h1>
                            <button onClick={()=>deleteMe(rev)}>Delete</button>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default AddReview