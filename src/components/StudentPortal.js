import React,{useContext, useEffect} from 'react'
import questionContext from "../context/question/questioncontext"
import teacherContext from '../context/teachercontext';
import TeacherOptions from './TeacherOptions';
import TestQuestion from './TestQuestion'



const StudentPortal = () => {
    const context = useContext(questionContext);
    const context2 =useContext(teacherContext)

    const { questions, getallteacherQuestions, getQuestions} = context
    const {teachers, getallteacher}=context2

    
    useEffect(() => {
      getallteacher()


    }, [])

  return (
    <>
    <div className="row my-3">
      
    {teachers.map((teacher) => {
        console.log(teacher._id)
        return <TeacherOptions teacher={teacher} key={teacher._id} />
      })
      }

    </div>
    </>
  )
}

export default StudentPortal