import React, {useContext, useState} from 'react'
import questionContext from "../context/question/questioncontext"

const AddQuestion = () => {
    const context = useContext(questionContext);
    const {addQuestion} = context;
    const [question, setQuestion] = useState({ currentquestion: "", option1: "",option2: "",option3: "",option4: "",answer: ""}
   )

    const handleClick = (e)=>{
        e.preventDefault();
        addQuestion(question.currentquestion, question.option1, question.option2, question.option3, question.option4, question.answer);
        setQuestion({currentquestion: "", option1: "",option2: "",option3: "",option4: "",answer: ""})
    }

    const onChange = (e)=>{
        setQuestion({...question, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Question</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="currentquestion" className="form-label">currentquestion</label>
                    <input type="text" className="form-control" id="currentquestion" name="currentquestion" aria-describedby="emailHelp" value={question.currentquestion} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="option1" className="form-label">option1</label>
                    <input type="text" className="form-control" id="option1" name="option1" aria-describedby="emailHelp" value={question.option1} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="option2" className="form-label">option2</label>
                    <input type="text" className="form-control" id="option2" name="option2" aria-describedby="emailHelp" value={question.option2} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="option3" className="form-label">option3</label>
                    <input type="text" className="form-control" id="option3" name="option3" aria-describedby="emailHelp" value={question.option3} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="option4" className="form-label">option4</label>
                    <input type="text" className="form-control" id="option4" name="option4" aria-describedby="emailHelp" value={question.option4} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="answer" className="form-label">answer</label>
                    <input type="text" className="form-control" id="answer" name="answer" value={question.answer} onChange={onChange} minLength={5} required />
                </div>
               
                <button disabled={question.currentquestion.length<3 || question.option1.length<3} type="submit" className="btn btn-primary" onClick={handleClick}>Add Question</button>
            </form>
        </div>
    )
}

export default AddQuestion
