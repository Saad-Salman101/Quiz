import React,{useContext} from 'react'
import questionContext from "../context/notes/questioncontext"

const TestQuestion = (props) => {
    const context = useContext(questionContext);
    // const { deleteQuestion } = context;
    // const { question, updateQuestion } = props;
    const {question}=props
  return (
    
    <div>
              <div className="container">
            <div className="card my-3 p-4">
                <div className="card-body p-4">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{question.currentquestion}</h5>
                    </div>
                    {/* <p className="card-text">{question.answer}</p> */}
                    {/* <i className="far fa-trash-alt mx-4" onClick={() => { deleteQuestion(question._id) }}>delete</i>
                        <i className="far fa-edit mx-4" onClick={() => { updateQuestion(question) }}>edit</i> */}

                    <div className="form-check m-2">
                        <input className="form-check-input" type="radio" name="question.option1" id="exampleRadios1" value="question.option1" />
                            <label className="form-check-label" htmlFor="question.option1">
                                {question.option1}
                            </label>
                    </div>
                    <div className="form-check m-2">
                        <input className="form-check-input" type="radio" name="question.option2" id="question.option2" value="question.option2" />
                            <label className="form-check-label" htmlFor="question.option2">
                                {question.option2}
                            </label>
                    </div>
                    <div className="form-check m-2">
                        <input className="form-check-input" type="radio" name="question.option3" id="question.option3" value="question.option3" />
                            <label className="form-check-label" htmlFor="question.option3">
                                {question.option3}
                            </label>
                    </div>
                    <div className="form-check m-2">
                        <input className="form-check-input" type="radio" name="question.option4" id="question.option4" value="question.option4" />
                            <label className="form-check-label" htmlFor="question.option4">
                                {question.option4}
                            </label>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default TestQuestion

