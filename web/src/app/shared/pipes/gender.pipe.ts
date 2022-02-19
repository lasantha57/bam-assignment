import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from 'src/app/core/enum/gender.enum';
import { CommonHelper } from '../helpers/common-helper';

@Pipe({
  name: 'genderStatus'
})
export class GenderStatusPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let status = Gender[value];
    return CommonHelper.splitCasedString(status);
  }
}
