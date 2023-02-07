import React, { useContext, useEffect, useRef, useState } from 'react'
import questionContext from "../context/question/questioncontext"
import Questionitem from './Questionitem';
import AddQuestion from './AddQuestion';
import { useHistory } from 'react-router-dom';
const Questions = () => {
    let history = useHistory();
    const context = useContext(questionContext);
    const { questions, getQuestions, editQuestion } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
        getQuestions()}
        else{
            history.pushState("/login")
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)          
    const [question, setQuestions] = useState({id: "", ecurrentquestion: "", eoption1: "",eoption2: "",eoption3: "",eoption4: "",eanswer: ""})

    const updateQuestion = (currentQuestion) => {
        ref.current.click();
        setQuestions({id: currentQuestion._id, ecurrentquestion: currentQuestion.currentquestion, eoption1: currentQuestion.option1, eoption2: currentQuestion.option2, eoption3: currentQuestion.option3, eoption4: currentQuestion.option4, eanswer: currentQuestion.answer})
    }

    const handleClick = (e)=>{ 
        editQuestion(question.id, question.ecurrentquestion, question.eoption1, question.eoption2, question.eoption3, question.eoption4, question.eanswer)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setQuestions({...question, [e.target.name]: e.target.value})
    }

    return (
        <>
            <h1> Hello </h1>
            <AddQuestion />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Question</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Question</label>
                                    <input type="text" className="form-control" id="ecurrentquestion" name="ecurrentquestion" value={question.ecurrentquestion} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Option1</label>
                                    <input type="text" className="form-control" id="eoption1" name="eoption1" value={question.eoption1} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Option2</label>
                                    <input type="text" className="form-control" id="eoption2" name="eoption2" value={question.eoption2} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Option3</label>
                                    <input type="text" className="form-control" id="eoption3" name="eoption3" value={question.eoption3} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Option4</label>
                                    <input type="text" className="form-control" id="eoption4" name="eoption4" value={question.eoption4} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Answer</label>
                                    <input type="text" className="form-control" id="eanswer" name="eanswer" value={question.eanswer} onChange={onChange} minLength={5} required/>
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={question.ecurrentquestion.length<3 || question.eoption1.length<3} onClick={handleClick} type="button" className="btn btn-primary">Update Question</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h1>Questions</h1>
                <div className="container mx-2"> 
                {questions.length===0 && 'No questions to display'}
                </div>
                {questions.map((question) => {
                    return <Questionitem key={question._id} updateQuestion={updateQuestion} question={question} />
                })}
            </div>
        </>
    )
}

export default Questions
