import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
