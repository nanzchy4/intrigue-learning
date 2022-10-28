import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoursePageMain from '../CoursePageMain/CoursePageMain';
import CourseSideNav from '../CourseSideNav/CourseSideNav';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    // const courseList = useLoaderData();
    return (
        <div>
            <Container className='' >
            <Row>
                <Col xs={12} md={10}>
                   <CoursePageMain></CoursePageMain>
                </Col>
                <Col xs={6} md={2}>
                    <CourseSideNav></CourseSideNav>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Courses;