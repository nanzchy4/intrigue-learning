import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';

const CoursePageMain = () => {
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
        <div className='d-flex flex-wrap'  >  
                {
                    courses.map(course => <SingleCard key={course.course_id} singleCourse={course}></SingleCard> )
                }
            
        </div>
    );
};

export default CoursePageMain;