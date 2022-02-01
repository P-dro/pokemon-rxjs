import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';

import { delay, take, tap } from 'rxjs';
import { PokemonListResponse } from 'src/app/models/pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemons(page:number) {
    const offset = (page - 1) * 20; 
    console.log(offset)
    return this.http.get<PokemonListResponse>(`${environment.pokeApi}pokemon?limit=20&offset=${offset}`).
      pipe(
        delay(2000),
        take(1)
      );

  }

  public getPokemon(url: string) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/161/`).
    pipe(
      take(1),
    );
  }

}
