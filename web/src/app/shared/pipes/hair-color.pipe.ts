import { Pipe, PipeTransform } from '@angular/core';
import { HairColor } from 'src/app/core/enum/hair-color.enum';
import { CommonHelper } from '../helpers/common-helper';

@Pipe({
  name: 'hairColor'
})
export class HairColorStatusPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let status = HairColor[value];
    return CommonHelper.splitCasedString(status);
  }
}
