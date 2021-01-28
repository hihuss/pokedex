import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  pokemonId = 0;
  pokemon: any;
  pokemonDataTree: any;
  possibleEvolution: any;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private pokemonService: PokemonService) {
    this.route.params.subscribe(value => this.pokemonId = value.id);
  }

  ngOnInit(): void {
    this.pokemonService.getSinglePokemon(this.pokemonId).subscribe(data => {
      this.pokemon = data;

      this.pokemonService.getPokemonSpecies(this.pokemon.species.url).subscribe(species => {
        this.pokemonService.getEvolutionChain(species.evolution_chain.url).subscribe(evolution => {
          this.possibleEvolution  = this.pokemonService.findSpecies(evolution.chain, species.name);
          this.createPokemonDataTree();
        });
      });
    });

  }

  createPokemonDataTree(): void {
    const abilities: any[] = [];
    this.pokemon.abilities.forEach((ability: any) => {
      const child = {
        label: ability.ability.name,
        icon: 'pi pi-circle-on'
      };
      abilities.push(child);
    });

    const types: any[] = [];
    this.pokemon.types.forEach((type: any) => {
      const child = {
        label: type.type.name,
        icon: 'pi pi-circle-on'
      };
      types.push(child);
    });

    const stats: any[] = [];
    this.pokemon.stats.forEach((stat: any) => {
      const child = {
        label: 'base stat: ' + stat.base_stat + '; effort: ' + stat.effort,
        icon: 'pi pi-circle-on'
      };
      stats.push(child);
    });

    const moves: any[] = [];
    this.pokemon.moves.forEach((move: any) => {
      const child = {
        label: move.move.name,
        icon: 'pi pi-circle-on'
      };
      moves.push(child);
    });


    this.pokemonDataTree = [
      {
        label: 'Order number: ' + this.pokemon.order,
      },
      {
        label: 'Possible evolution: ' + (this.possibleEvolution ? this.possibleEvolution
          : 'None, this species is at the top of evolution chain.')
      },
      {
        label: 'Abilities',
        children: abilities
      },
      {
        label: 'Types',
        children: types
      },
      {
        label: 'Stats',
        children: stats
      },
      {
        label: 'Moves',
        children: moves
      },
    ];
  }
}
