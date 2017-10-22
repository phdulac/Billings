import { Day } from '../classes/day';
import { Cycle } from '../classes/cycle';
import { Observation } from '../classes/observation';
 
export const DAYS: Day[] = [
  { id: 11, date: '2017-09-01', observationId: 1, description: "Lorem ipsum", cycleId: 1},
  { id: 12, date: '2017-09-02', observationId: 1, description: "Lorem ipsum", cycleId: 1},
  { id: 13, date: '2017-09-03', observationId: 1, description: "Lorem ipsum", cycleId: 2},
  { id: 14, date: '2017-09-04', observationId: 1, description: "Lorem ipsum", cycleId: 2},
  { id: 15, date: '2017-09-05', observationId: 1, description: "Lorem ipsum", cycleId: 3},
  { id: 16, date: '2017-09-06', observationId: 1, description: "Lorem ipsum", cycleId: 4},
  { id: 17, date: '2017-09-07', observationId: 1, description: "Lorem ipsum", cycleId: 4},
  { id: 18, date: '2017-09-08', observationId: 1, description: "Lorem ipsum", cycleId: 4},
  { id: 19, date: '2017-09-09', observationId: 1, description: "Lorem ipsum", cycleId: 4},
  { id: 20, date: '2017-09-10', observationId: 1, description: "Lorem ipsum", cycleId: 1}
];


export const CYCLES: Cycle[] = [
  { id: 1, startDate: '2017-09-01',endDate:  '2017-09-30'},
  { id: 2, startDate: '2017-10-01',endDate:  '2017-10-30'},
  { id: 3, startDate: '2017-11-01',endDate:  '2017-11-30'},
  { id: 4, startDate: '2017-12-01',endDate:  '2017-12-30'}
];


export const OBSERVATIONS: Observation[] = [
  { id: 1, color: 'green',name:  'Test'},
  { id: 2, color: 'red',name:  'Test2'},
  { id: 3, color: 'yellow',name:  'Test3'},
  { id: 4, color: 'brown',name:  'Test4'},
  { id: 5, color: 'grey',name:  'Test5'},
];