import React, {useContext} from 'react'
import Test from './Test';
import { Link } from 'react-router-dom';
import questionContext from "../context/question/questioncontext"
import Questionitem from './Questionitem';

const TeacherOptions = (props) => {
    const { teacher } = props;
    const context = useContext(questionContext);
    const {questions, addQuestion, deleteQuestion, editQuestion, getQuestions, getallteacherQuestions}=context



    return (
        <>
            <div className="container mx-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{teacher.subject}</h5>
                        {console.log(teacher)}
                        <p className="card-text">{teacher.name}</p>
                        <Link className="btn btn-primary mx-1" to="/Test" role="button" onClick={()=>  {<Test id={teacher.id} />; {getallteacherQuestions(teacher._id)} } } >Test</Link>
                        <a href="#" className="btn btn-primary" onClick={()=>   {getallteacherQuestions(teacher._id)} } >Go somewhere</a>
                    </div>
                </div>
            </div>

            <h1>Questions</h1>
      
            <div className="container mx-2">
                {questions.length === 0 && 'No questions to display'}
            </div>
            {questions.map((question) => {
                console.log(question)
                return <Questionitem question={question} key={question._id} />
            })}



        </>
    )
}

export default TeacherOptions
