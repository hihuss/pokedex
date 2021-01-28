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

    if (!$event.first) {
      this.pokemonService.getAllPokemon().subscribe(data => {
        this.pokemonData = data;
        this.pokemonList = data.results;

        this.loading = false;
      });
    } else {

      this.pokemonService.getPokemonWithOffset($event.first).subscribe(data => {
        this.pokemonData = data;
        this.pokemonList = data.results;

        this.loading = false;
      });
    }
  }

  showDetails(index: number): void{
    // becuase ids start from 1 and not zero
    this.route.navigate(['details/' + (index + 1)]);
  }
}
