import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartStateService } from '@office/cart-state';

@Component({
  selector: 'office-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  cartState = inject(CartStateService);

  numberOfItemsInCart$ =  this.cartState.getNumOfItemsInCarT();
}
