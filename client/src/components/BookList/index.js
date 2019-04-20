import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class BookList extends React.Component {

    render() {
        
        return (
            <Col sm={12} className="card-wrapper">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col size="xs-12">
                                <h3>{this.props.title}</h3>
                                <p>Author:{this.props.authors ? this.props.authors.join(', ') : 'N/A'}</p>

                                <a href={this.props.link ? this.props.link : '#'} role="button" className="badge badge-info">
                                View
                                </a>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-4">
                                <img src={this.props.image ? this.props.image : ""} alt={this.props.title} />
                            
                            </Col>
                            <Col size="xs-8">
                                {this.props.description ? this.props.description : 'N/A'}
                                <br />
                                <Button variant="secondary" type="button" onClick={() => this.props.onSelect()}><i className={`fas ${this.props.buttonText}`}></i></Button>  
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default BookList;