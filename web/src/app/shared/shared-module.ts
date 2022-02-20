import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RaceStatusPipe } from './pipes/race.pipe';
import { GenderStatusPipe } from './pipes/gender.pipe';
import { HairColorStatusPipe } from './pipes/hair-color.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule,
    ],
    declarations: [
      RaceStatusPipe,
      GenderStatusPipe,
      HairColorStatusPipe
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbModule,
        GenderStatusPipe,
        RaceStatusPipe,
        HairColorStatusPipe
    ]
})
export class SharedModule {
}
