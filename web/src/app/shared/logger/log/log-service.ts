import { Injectable } from '@angular/core';

export type LogType = 'warn' | 'info' | 'error';

@Injectable()
export class LogService {

  constructor() {
  }

  warn(eventName: string): void {
    this.logError(eventName);
  }

  info(eventName: string): void {
    this.logError(eventName);
  }

  error(eventName: string): void {
    this.logError(eventName);
  }

  logError(eventName: string) {
    // TODO: log error with event
    console.log(eventName);
  }
}
