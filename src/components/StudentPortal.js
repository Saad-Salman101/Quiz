import React,{useContext, useEffect} from 'react'
import questionContext from "../context/notes/questioncontext"
import TestQuestion from './TestQuestion'



const StudentPortal = () => {
    const context = useContext(questionContext);
    const { questions, getallteacherQuestions, getQuestions} = context
    
    useEffect(() => {
      getallteacherQuestions()


    }, [])

  return (
    <div className="row my-3">
    <h1>Questions</h1>
    <div className="container mx-2"> 
    {questions.length===0 && 'No questions to display'}
    </div>
    {questions.map((question) => {
        console.log(question)
        return <TestQuestion question={question} key={question._id} />
    })}
</div>
  )
}

export default StudentPortal