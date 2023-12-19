import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Book } from '@office/books';

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  private readonly cartState$ = new BehaviorSubject<Book[]>([]);

  getCart(): Observable<Book[]> {
    return  this.cartState$.asObservable();
  }

  addToCart(book: Book) {
    const currentCart = this.cartState$.value;
    const newCart = [...currentCart, book];
    this.cartState$.next(newCart)
  }

  getNumOfItemsInCarT(): Observable<number>{
    return this.cartState$.pipe(
      map((cart) => cart.length)
    )
  }
}
