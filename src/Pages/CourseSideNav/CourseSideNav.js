import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const CourseSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCourses(data)
        })
    }

    ,[] )
    return (
        <div>
            {
                courses.map(course => 
                 <>
                 <p><Link to={`/courses/${course.course_id}`}><Button variant="success" className='p-2 w-75'>{course.courseName} </Button></Link></p>
                 </>
                 
                ) 
}          
        </div>
    );
};

export default CourseSideNav;