import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {
    const subject = useLoaderData();
    const {img, about, rating, instructor, courseName, duration} = subject;
    console.log(subject)
    return (
        <div>
             <Card style={{ width: '18rem', height:"400px"}}  >
                 <Card.Img variant="top" src={img} className='sizing' />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        {
                             about.length > 50 ?
                             <>
                                 <p>{about.slice(0,100) + '...'}</p>
                                 
                             </>
                             : <p>{about}</p>
                        }
                    </Card.Text>
                    <Link to='/details'><Button variant="primary">Show Details</Button></Link>
                     
                 </Card.Body>
            </Card> 
        </div>
    );
};

export default Details;