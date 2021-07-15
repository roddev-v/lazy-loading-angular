import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  async get(): Promise<string> {
    return 'Test data';
  }
}
