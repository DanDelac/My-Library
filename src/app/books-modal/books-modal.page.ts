import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;
  books: any;

  slideOps = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  }
  constructor( 
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
    console.log(" Autor: ",this.author.id);

    this.libraryService.getBooksAuthor(this.author.id).then( res => {
      this.books = res;
    })
    }
    async showBook(book: any){
      const modal = await this.modalController.create({
        component: BookDetailModalPage,
        componentProps: {
          book: book
        }
      });
      return await modal.present();
    }
  closeModal(){
    this.modalController.dismiss();
  }
}