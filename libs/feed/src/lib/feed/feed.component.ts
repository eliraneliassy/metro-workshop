import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Book, BookComponent, BooksService } from '@office/books';
import { Observable } from 'rxjs';
import { CartStateService } from '@office/cart-state';

@Component({
  selector: 'office-feed',
  standalone: true,
  imports: [NgFor, BookComponent, AsyncPipe],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent{


  booksService = inject(BooksService);
  cartService = inject(CartStateService)

  books$: Observable<Book[]> = this.booksService.getBooks('angular');

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }




}
