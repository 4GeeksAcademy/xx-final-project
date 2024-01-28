import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const AttractionCard = () => {    
    return(
        <div>
            <div>
                <h2>My Favorites:</h2>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Park Name</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Link to="/parkprofilepage">
                            <Button variant="primary">Learn More</Button>
                        </Link>
                        <Button>Heart</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
