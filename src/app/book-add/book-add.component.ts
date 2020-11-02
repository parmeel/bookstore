import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {



  book: Book = {
    title: '',
    disc: '',
    price: null,
    author: '',
    isbn: null
  };
  imagePreview: any;
  image;

  constructor(private http: HttpClient, public bookservice: BookService, private router: Router) { }



  ngOnInit() {
  }

  addBook() {
    this.bookservice.addBook(this.book);
    this.book = {
      title: '',
      disc: '',
      price: null,
      author: '',
      isbn: null
    };
    this.router.navigate(['/list']);
  }

  onImagePicked(event) {
    const file = event.target.files[0];
    console.log(file);
    this.book.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(reader.result);
    }
    reader.readAsDataURL(file);
  }
}
