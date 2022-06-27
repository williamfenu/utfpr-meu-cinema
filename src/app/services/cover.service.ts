import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

import { Cover } from '../models/types/cover';

@Injectable({
  providedIn: 'root',
})
export class CoverService {
  url = 'http://localhost:3000/covers';
  constructor(private client: HttpClient) {}

  save(cover: Cover) {
    return lastValueFrom(this.client.post<Cover>(this.url, cover));
  }

  delete(coverId: number) {
    return lastValueFrom(this.client.delete<Cover>(`${this.url}/${coverId}`));
  }
}
