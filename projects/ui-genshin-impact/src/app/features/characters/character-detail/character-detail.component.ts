import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterService, ImageApiService } from '../../../shared';

@Component({
  selector: 'mrlonis-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  character?: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    public imageApiService: ImageApiService
  ) {
    console.log('CharacterDetailComponent: constructor()');
  }

  ngOnInit(): void {
    console.log('CharacterDetailComponent: ngOnInit()');
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      const name = params.get('name');
      if (name !== null) {
        console.log('Name is not NULL');
        this.characterService.getCollection(0, 1, new HttpParams().set('name', name)).subscribe((response) => {
          console.log(response);
          if (response.page.totalElements == 1) {
            console.log('Setting this.character');
            this.character = response._embedded.data[0];
          }
        });
      }
    });
  }
}
