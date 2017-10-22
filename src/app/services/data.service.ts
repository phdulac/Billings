import { Injectable } from '@angular/core';

import { Cycle } from '../classes/cycle';
import { Day } from '../classes/day';
import { Observation } from '../classes/observation';
import { CYCLES, DAYS, OBSERVATIONS } from '../mocks/mock-billing';

@Injectable()
export class DataService {
  getCycles(): Promise<Cycle[]> {
    return Promise.resolve(CYCLES);
  }
  getDays(): Promise<Day[]> {
    return Promise.resolve(DAYS);
  }
  getObservations(): Promise<Observation[]> {
    return Promise.resolve(OBSERVATIONS);
  }
}

