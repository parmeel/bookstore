import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public bookService: BookService) { }

  books: Book[]=[];


  ngOnInit() {
    this.bookService.updateBookList();

  }

  deleteBook(book){
    this.bookService.deleteBook(book).subscribe(()=>{
      this.bookService.updateBookList();
    })
  }

}
