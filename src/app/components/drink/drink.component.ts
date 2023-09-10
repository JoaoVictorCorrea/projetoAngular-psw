import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { Observable, map } from 'rxjs';

interface Drink{
  idDrink: string,
  strDrinkThumb: string,
  strDrink: string
}

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  drinksList$: Observable<Drink[]> = new Observable<Drink[]>();

  constructor(
    private drinkService: DrinkService
  ) { }
  
  ngOnInit(): void{

    this.drinksList$ = this.drinkService.fecthData('lemon').pipe(
      map(response => {
        return response.drinks;
      })
    );
  }
}
