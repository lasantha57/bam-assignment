import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-module';
import { CharacterSearchComponent } from './character-search.component';

@NgModule({
    declarations: [
      CharacterSearchComponent
    ],
    imports: [
      SharedModule
    ]
})
export class CharacterModule { }
