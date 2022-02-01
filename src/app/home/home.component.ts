import { Component, OnInit } from '@angular/core';
import { PokemonListService } from '../pokemon-list/pokemon-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private pokemonListService: PokemonListService) { }

  ngOnInit(): void {
    this.pokemonListService.getPokemons(2)
  }

}
