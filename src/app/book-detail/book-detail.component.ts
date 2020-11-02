import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  bookId;

  constructor(private http: HttpClient, public bookservice: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId = this.route.params.subscribe(params => {
      this.bookservice.getBook(params['id']).subscribe((book: Book) => {

        this.book = book;
        console.log(this.book)

      });
    });
  }

}
