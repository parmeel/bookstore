import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [];
  constructor(private http: HttpClient) { }

  addBook(book) {
    const bookData = new FormData();
    bookData.append("title", book.title);
    bookData.append("disc", book.disc);
    bookData.append("author", book.author);
    bookData.append("isbn", book.isbn);
    bookData.append("price", book.price);
    bookData.append("date", Date.now().toString());
    bookData.append("image", book.image);
    this.http.post<{ message: string, book: Book }>('http://localhost:3000/api/book', bookData)
      .subscribe((res) => {

        const resbook = res.book;

        this.books.push(resbook);
        this.updateBookList();
      });
  }



  deleteBook(book) {
    return this.http.delete(`http://localhost:3000/api/book/${book._id}`);
  }

  getBook(id){
    return this.http.get(`http://localhost:3000/api/book/${id}`);
  }



  getBooks() {
    return this.http.get(`http://localhost:3000/api/book/`)
  }

  updateBookList() {
    this.getBooks().subscribe((bookslist: Book[]) => {
      this.books = bookslist['Books'];
      console.log(this.books)
    })
  }
}

