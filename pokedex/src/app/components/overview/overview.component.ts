import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  pokemonData: any;
  pokemonList: any;

  loading = false;
  firstLoad = true;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {}


  loadPokemon($event: any): void {
    this.loading = true;

    if (!$event.first) {
      this.pokemonService.getAllPokemon().subscribe(data => {
        this.pokemonData = data;
        this.pokemonList = data.results;
        console.log(this.pokemonList);

        this.loading = false;
      });
    } else {
      this.pokemonService.getPokemonWithOffset($event.first).subscribe(data => {
        this.pokemonData = data;
        this.pokemonList = data.results;
        console.log(this.pokemonList);

        this.loading = false;
      });
    }
  }

  showDetails() {

  }
}
