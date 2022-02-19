import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  catchError,
  map,
} from 'rxjs/operators';
import { Entity } from '../model/entity';
import { ApiError, ErrorCode } from './api-error';

@Injectable()
export abstract class ApiService {
  constructor(
    public httpClient: HttpClient,
  ) {}

  private defaultPageSize = 20;

  get<T extends Entity>(
    type: new (...args) => T,
    params?: {
      [param: string]: string;
    },
    queryParams? : {}
  ): Observable<T | T[] | ApiError> {
    let url = `${this.getEntityName(type)}?limit=${this.defaultPageSize}`;

    for (let key in queryParams) {
      const value = queryParams[key];
      url = `${url}&${key}=${value}`;
    }

    return this.httpClient.get(url, params ? { params } : {}).pipe(
      map((result) => {
        if (Array.isArray(result)) {
          return result.map((r) => new type(r));
        } else if (result) {
          return new type(result);
        } else {
          return null;
        }
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  protected handleError(
    error: HttpErrorResponse | TypeError | any
  ): Observable<ApiError> {
    if (error instanceof HttpErrorResponse) {
      return throwError(
        new ApiError(
          error.status as ErrorCode,
          error.statusText,
          error.message,
          error
        )
      );
    } else if (error instanceof TypeError) {
      return throwError(new ApiError(1, error.name, error.message, error));
    } else {
      return throwError(error);
    }
  }

  public getEntityName(type: new (...args) => any): string {
    return (type as any).entityType;
  }

}
