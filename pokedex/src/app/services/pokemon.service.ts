import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any> {
    return this.http.get(this.url, {headers: { 'Access-Control-Allow-Origin': '*' }});
  }

  getPokemonWithOffset(offset: number): Observable<any> {
    return this.http.get(this.url + '?offset=' + offset + '&limit=20"', {headers: { 'Access-Control-Allow-Origin': '*' }});
  }
}
