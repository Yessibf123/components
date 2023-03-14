import { Component, Input} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '';

  products: Product[]=[
    {
      id: '1',
      name: 'El mejor Producto',
      price: 100,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colección de albumes ',
      price: 565,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros ',
      price: 565,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'Gafas para que vaya a la playa',
      price: 23,
      image: './assets/images/glasses.jpg'
    },
    {
      id: '6',
      name: 'Para tu mascota',
      price: 165,
      image: './assets/images/house.jpg'
    },
  ];

  onLoaded (img: string){
    console.log('log padre', img);
  }
}
