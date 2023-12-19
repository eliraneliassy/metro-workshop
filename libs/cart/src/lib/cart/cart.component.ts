import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStateService } from '@office/cart-state';
import { Observable } from 'rxjs';
import { Book, BookComponent } from '@office/books';

@Component({
  selector: 'office-cart',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {


  cartState = inject(CartStateService);
  cart$: Observable<Book[]> = this.cartState.getCart();


}
