import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError } from 'src/app/core/api/api-error';
import { ApiService } from 'src/app/core/api/api.service';
import { Character } from 'src/app/core/model/character';

@Injectable({ providedIn: 'root' })
export class CharacterService extends ApiService {

    constructor(
      httpClient: HttpClient,
    ) {
      super(httpClient);
     }

    search(queryParams: {}): Observable<Character[] | ApiError> {
      return <Observable<Character[] | ApiError>>(
        this.get<Character>(
          Character,
          undefined,
          queryParams
        )
      );
    }
}

