import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { LogService } from './log/log-service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class LoggerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [LogService]
    };
  }
}
