import React from 'react';

const Books = (props) => {
    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>
                <th scope="col">Actions2</th>
                </tr>
            </thead>
            <tbody>
                {props.books.length > 0 ? (
                    props.books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => {
                                        props.editBook(book)
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No Books Available</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Books;