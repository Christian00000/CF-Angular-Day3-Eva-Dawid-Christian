import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animals } from '../animals';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  animal;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(animal) {
    window.alert('Your animal has been added to the cart!');
    this.cartService.addToCart(animal);
  }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.animal = animals[+params.get('animalId')];
    });

  }
}