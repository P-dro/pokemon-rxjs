import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  
  idPokemon: string = '';
  pokemon: Subscription = this.router.params.subscribe((param: any ) => {
    this.idPokemon = param['url'];
  }) 

  constructor(
    private router: ActivatedRoute,
    private PokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    console.log('---> ', this.idPokemon)
    this.getPokemon(this.idPokemon)
  }

  getPokemon(idPokemon: string) {
    this.PokemonService.getPokemon(idPokemon);
  }

}
