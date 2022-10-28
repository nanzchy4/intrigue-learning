import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = (props) => {
    console.log(props);
    const {img, about, courseName } = props.singleCourse;
    console.log(courseName)
    return (
        <div className='m-2' >
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{courseName}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
            {/* <img src={img} ></img> */}
            {/* <h2>{courseName}</h2> */}
            {/* {
                course.about.length > 50 ?
                    <>
                        <p>{course.about.slice(0, 50) + '...'}</p>
                        <Link to='/details'>Details</Link>
                    </>
                    : <p>{course.about}</p>
            } */}

        </div>
    );
};

export default SingleCard;