import teacherContext from "./teachercontext";
import { useState } from "react";

const TeacherState = (props) => {
  const host = "http://localhost:5000"
  const Initialteachers = []
  const [teachers, setTeachers] = useState(Initialteachers)


    // Get all  teachers Options
    const getallteacher = async () => {
      // API Call 
      const response = await fetch(`${host}/api/teacherauth/getallteachers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      // const json = await response.json()
      // console.log(json)
      // setTeachers(json)

      const teacher = await response.json();
      setTeachers(teachers.concat(teacher))
    }





  return (
    <teacherContext.Provider value={{ teachers, getallteacher }}>
      {props.children}
    </teacherContext.Provider>
  )

}
export default TeacherState;