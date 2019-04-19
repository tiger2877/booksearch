import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

    handleDelete(id) {
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
                <div className="pb-5">
                    <Jumbotron style={{ backgroundImage: "url(/images/books.jpg)" }}>
                        <Container>
                            <h1><i className="fab fa-react"></i> <i className="fab fa-google"></i> Books Search</h1>
                            <h6>Search for and Save Books of Interest</h6>
                        </Container>
                    </Jumbotron>
                    <Container>
                        <Row>
                            <Col sm={12} className="text-left">
                                <h2><i className="fas fa-save"></i> SAVED BOOKS</h2>
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
                                    onSelect={() => this.handleDelete(book._id)}
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