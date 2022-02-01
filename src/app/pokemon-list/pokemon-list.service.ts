import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';
import { PokemonListResponse } from '../models/pokemon-list';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor(private http: HttpClient) { }

  public getPokemons(page:number) {
    const offset = (page - 1) * 20; 
    console.log(offset)
    return this.http.get<PokemonListResponse>(`${environment.pokeApi}pokemon?limit=20&offset=${offset}`).
      pipe(
        delay(2000),
        take(1),
        tap()
      );

  }

  public getPokemon(url: string) {
    console.log('pokemon ->', url)
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/161/`).
    pipe(
      delay(2000),
      take(1),
      tap()
    );
  }

}
