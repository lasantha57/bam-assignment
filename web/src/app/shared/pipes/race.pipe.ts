import { Pipe, PipeTransform } from '@angular/core';
import { Race } from 'src/app/core/enum/race.enum';
import { CommonHelper } from '../helpers/common-helper';

@Pipe({
  name: 'raceStatus'
})
export class RaceStatusPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let status = Race[value];
    return CommonHelper.splitCasedString(status);
  }
}
