import React from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookList from "../components/BookList";
import BookResult from "../components/BookResult";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            books: [],
            book: "",
            savedBook: "",
            showSaved: false,
            showError: false
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;

        this.setState({
            query: encodeURI(value)
        });
        console.log(this.state.query);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.query)
            .then(res => {
                this.setState({ books: res.data.items });
            }).catch(err => {
                console.log(err);
            });
    }

    handleSave(data) {
        const book = {
            title: data.title,
            authors: data.authors,
            description: data.description,
            image: data.imageLinks.thumbnail,
            link: data.previewLink
        };
        
        API.saveBook(book)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
                this.setState({showError: true});
            });
    }

    render() {
        const closeModal = () => this.setState({ showSaved: false, showError: false });
        return (
            <div>
                <Nav />
                <div>
                    <Jumbotron style={{ backgroundImage: "url(/images/books.jpg)" }}>
                        <Container>
                            <h1>(React) Google Books Search</h1>
                            <h6>Search for and Save Books of Interest</h6>
                        </Container>
                    </Jumbotron>
                    <Container>
                        <Row>
                            <Col size="md-12">
                                <h4>Book Search</h4>
                                <br />
                                <form>
                                    <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                        <Input
                                            name="bookSearch"
                                            onChange={this.handleInputChange}
                                            placeholder="Type in a book to begin"
                                        />
                                        </Col>
                                        <Col size="xs-3 sm-2">  
                                            <Button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
                                                Search
                                            </Button>
                                        </Col>
                                    </Row>
                                    </Container>
                                </form>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            {this.state.books.map((book, index) =>
                                <BookList
                                    key={index}
                                    book={book.volumeInfo}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    link={book.volumeInfo.previewLink}
                                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                                    description={book.volumeInfo.description}
                                    buttonText="fa-save"
                                    onSelect={() => this.handleSave(book.volumeInfo)}
                                />
                            )}
                        </Row>
                    </Container>
                </div>
                <BookResult
                    show={this.state.showSaved}
                    onHide={closeModal}
                    heading="Saved!"
                >
                    ({this.state.savedBook}) was successfuly saved.
                </BookResult>
                <BookResult
                    show={this.state.showError}
                    onHide={closeModal}
                    heading="Error!"
                >
                    This book is already saved. Please choose another book to save.
                </BookResult>
            </div>
        );
    };
}
export default Search;