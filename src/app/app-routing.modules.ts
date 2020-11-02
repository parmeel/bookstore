import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'list', component: BookListComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'contact', component: ContactComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

