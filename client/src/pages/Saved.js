import React from 'react';
import { Container, Row, Col } from "../components/Grid";
import API from '../utils/API';
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import BookList from '../components/BookList';
import BookResult from '../components/BookResult';

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            deletedBook: "",
            showDeleted: false
        }
    }

    getBooks = () => {
        API.getSavedBooks()
            .then(res => {
                this.setState({
                    books: res.data
                })
            }).catch(err => {
                console.log(err);
            });
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => {
                this.getBooks();
            }).catch(err => {
                console.log(err);
            });
    }

    componentDidMount = () => {
        API.getSavedBooks()
            .then(res => {
                this.getBooks();
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        const closeDeleted = () => this.setState({ showDeleted: false });
        return (
            <div>
                <Nav/>
                <div>
                    <Jumbotron style={{ backgroundImage: "url(/images/books.jpg)" }}>
                        <Container>
                            <h1>(React) Google Books Search</h1>
                            <h4>Search for and Save Books of Interest</h4>
                        </Container>
                    </Jumbotron>
                    <Container>
                        <Row>
                            <Col size="md-12">
                                <h4>Saved Books</h4>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.books.map((book, index) =>
                                <BookList
                                    key={index}
                                    title={book.title}
                                    authors={book.authors}
                                    link={book.link}
                                    image={book.image}
                                    description={book.description}
                                    buttonText="fa-trash-alt"
                                    onSelect={() => this.deleteBook(book._id)}
                                />
                            )}
                        </Row>
                    </Container>
                </div>
                <BookResult
                    show={this.state.showDeleted}
                    onHide={closeDeleted}
                    heading="Deleted!"
                >
                    ({this.state.savedBook}) was successfuly deleted.
                </BookResult>
            </div>
        );
    };
}
export default Saved;