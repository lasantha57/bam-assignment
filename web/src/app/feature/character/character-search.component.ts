import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gender } from 'src/app/core/enum/gender.enum';
import { HairColor } from 'src/app/core/enum/hair-color.enum';
import { Race } from 'src/app/core/enum/race.enum';
import { Character } from 'src/app/core/model/character';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit, OnDestroy {

  constructor(private characterService: CharacterService) {
  }

  private subscriptions: { [key: string]: Subscription } = {};
  private defaultOptionText = 'Please Select';
  currentPageIndex = 1;
  characters: Character[] = [];
  busy = true;

  // harcoded names based on query result
  names = [
    'Adanel',
    'Armrod'
  ]

  genderStatuses = [
    Gender.Male,
    Gender.Female
  ];

  races = [
    Race.Human,
    Race.Elf
  ];

  hairColors = [
    HairColor.Dark,
    HairColor['Dark Brown'],
    HairColor.Golden
  ];

  selectedHairColor = this.defaultOptionText;
  selectedRace = this.defaultOptionText;
  selectedGenderStatus = this.defaultOptionText;
  selectedName = this.defaultOptionText;

  ngOnInit() {
    this.search();
  }

  filterByGender(option?: Gender) {
    this.selectedGenderStatus = option ? option : this.defaultOptionText;
  }

  filterByHairColor(option?: HairColor) {
    this.selectedHairColor = option ? option : this.defaultOptionText;
  }

  filterByRace(option?: Race) {
    this.selectedGenderStatus = option ? option : this.defaultOptionText;
  }

  filterByName(option?: string) {
    this.selectedName = option ? option : this.defaultOptionText;
  }

  reset() {
    this.selectedHairColor = this.defaultOptionText;
    this.selectedRace = this.defaultOptionText;
    this.selectedGenderStatus = this.defaultOptionText;
    this.selectedName = this.defaultOptionText;

    this.search();
  }

  search() {
    this.busy = true;
    const queryParams = {};

    queryParams['page'] = this.currentPageIndex;

    if (this.selectedName !== this.defaultOptionText) {
      queryParams['name'] = this.selectedName;
    }

    if (this.selectedGenderStatus !== this.defaultOptionText) {
      queryParams['gender'] = this.selectedGenderStatus;
    }

    if (this.selectedRace !== this.defaultOptionText) {
      queryParams['race'] = this.selectedRace;
    }

    if (this.selectedHairColor !== this.defaultOptionText) {
      queryParams['hair'] = this.selectedHairColor;
    }

    this.subscriptions['characters'] = this.characterService.search(queryParams).subscribe((result: Character[]) => {
      this.busy = false;
      this.characters = result;
    }, (error) => {
      this.busy = false;
      // TODO: notify error
    });
  }

  previous($event: any) {
    $event.preventDefault();
    if (this.currentPageIndex < 1) {
      this.currentPageIndex = this.currentPageIndex - 1;
      this.search();
    }
  }

  next($event: any) {
    $event.preventDefault();
    this.currentPageIndex = this.currentPageIndex + 1;
    this.search();
  }

  ngOnDestroy() {
    Object.keys(this.subscriptions).forEach((item) =>
      this.subscriptions[item].unsubscribe()
    );
  }
}
