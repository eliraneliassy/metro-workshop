import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Book } from '@office/books';
import { ButtonComponent } from '@office/ui-components';

@Component({
  selector: 'office-book',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book?: Book;
  @Output() addToCart = new EventEmitter<Book>();

  addToCartHandler(){
    this.addToCart.emit(this.book);
  }
}
