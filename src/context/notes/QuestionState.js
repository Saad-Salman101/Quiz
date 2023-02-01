import QuestionContext from "./questioncontext";
import { useState } from "react";

const QuestionState = (props) => {
  const host = "http://localhost:5000"
  const questionsInitial = []
  const [questions, setQuestions] = useState(questionsInitial)

  // Get all Questions
  const getQuestions = async () => {
    // API Call 
    const response = await fetch(`${host}/api/questions/fetchallquestions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setQuestions(json)
  }

    // Get all  teachers Questions
    const getallteacherQuestions = async () => {
      // API Call 
      const response = await fetch(`${host}/api/questions/fetchallteacherquestions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json()
      // console.log(json) 
      console.log("printed")
      setQuestions(json)
    }

  // Add a Question
  const addQuestion = async (currentquestion, option1, option2, option3, option4, answer) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/questions/addquestion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({currentquestion, option1, option2, option3, option4, answer})
    });

    const question = await response.json();
    setQuestions(questions.concat(question))
  }

  // Edit a Question
  const editQuestion = async (id, currentquestion, option1, option2, option3, option4, answer) => {
    // API Call 
    const response = await fetch(`${host}/api/questions/updatequestion/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({currentquestion, option1, option2, option3, option4, answer})
    });
    const json = await response.json(); 

     let newQuestions = JSON.parse(JSON.stringify(questions))
    // Logic to edit in client
    for (let index = 0; index < newQuestions.length; index++) {
      const element = newQuestions[index];
      if (element._id === id) {
        newQuestions.currentquestion = currentquestion;
        newQuestions.option1 = option1;
        newQuestions.option2 = option2;
        newQuestions.option3 = option3;
        newQuestions.option4 = option4;
        newQuestions.answer = answer; 
        break; 
      }
    }  
    setQuestions(newQuestions)}




  // Delete a Question
  const deleteQuestion = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/questions/deletequestion/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newQuestions = questions.filter((question) => { return question._id !== id })
    setQuestions(newQuestions)
  }



  return (
    <QuestionContext.Provider value={{ questions, addQuestion, deleteQuestion, editQuestion, getQuestions, getallteacherQuestions }}>
      {props.children}
    </QuestionContext.Provider>
  )

}
export default QuestionState;