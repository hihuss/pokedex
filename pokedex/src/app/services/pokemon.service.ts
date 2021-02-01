import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/';
  private pokemonSuffix = 'pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonWithOffset(offset: number): Observable<any> {
    return this.http.get(this.url + this.pokemonSuffix + '?offset=' + offset + '&limit=20"',
      {headers: { 'Access-Control-Allow-Origin': '*' }});
  }

  getSinglePokemon(id: number): Observable<any> {
    return this.http.get(this.url + this.pokemonSuffix + id,
      {headers: { 'Access-Control-Allow-Origin': '*' }});

  }

  getPokemonSpecies(speciesUrl: string): Observable<any> {
    return this.http.get(speciesUrl, {headers: { 'Access-Control-Allow-Origin': '*' }});
  }

  getEvolutionChain(urlToEvolution: string): Observable<any> {
    return this.http.get(urlToEvolution, {headers: { 'Access-Control-Allow-Origin': '*' }});
  }

  findSpecies(chain: any, speciesName: string): any {
    // for this logic, it is assumed that each species can only evolve into one species (step-by-step evolution)
    if (chain.species.name === speciesName) {
      if (chain.evolves_to[0]) {
        return chain.evolves_to[0].species.name;
      } else  {
        // we are at the top of evolution chain
        return '';
      }
    } else {
      return this.findSpecies(chain.evolves_to[0], speciesName);
    }
  }
}
