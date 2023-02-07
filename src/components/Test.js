import React,{useContext, useEffect} from 'react'
import questionContext from "../context/question/questioncontext"
import TestQuestion from './TestQuestion';
import Questionitem from './Questionitem';

const Test = (props) => {

    const context = useContext(questionContext);
    const {id} = props
    const { questions, addQuestion, deleteQuestion, editQuestion, getQuestions, getallteacherQuestions} = context
    useEffect(() => {
      getallteacherQuestions(id)
  
      }, [])

  return (
    <>
      
      <h1>Questions</h1>
      
      <div className="container mx-2">
        {questions.length === 0 && 'No questions to display'}
      </div>
      {questions.map((question) => {
        console.log(question)
        return <Questionitem question={question} key={question._id}  />
      })}

    </>
  )
}

export default Test
