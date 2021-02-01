import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  pokemonData: any;
  pokemonList: any;

  loading = true;
  firstLoad = true;

  constructor(private route: Router,
              private pokemonService: PokemonService) {
  }

  ngOnInit(): void {}


  loadPokemon($event: any): void {
    this.loading = true;

    this.pokemonService.getPokemonWithOffset($event.first ? $event.first : 0).subscribe(data => {
      this.pokemonData = data;
      this.pokemonList = data.results;

      this.loading = false;
    });
  }

  showDetails(pokemon: any): void{
    const urlParts = pokemon.url.split('\/');
    this.route.navigate(['details/' + urlParts[urlParts.length - 2]]);
  }
}
