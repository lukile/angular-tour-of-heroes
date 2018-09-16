import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Winston' },
      { id: 2, name: 'Doomfist' },
      { id: 3, name: 'Genji' },
      { id: 4, name: 'McCree' },
      { id: 5, name: 'Pharah' },
      { id: 6, name: 'Reaper' },
      { id: 7, name: 'Soldier:76' },
      { id: 8, name: 'Sombra' },
      { id: 9, name: 'Tracer' },
      { id: 10, name: 'Bastion' },
      { id: 11, name: 'Hanzo' },
      { id: 12, name: 'Junkrat' },
      { id: 13, name: 'Mei' },
      { id: 14, name: 'Torbjörn' },
      { id: 15, name: 'WidowMaker' },
      { id: 16, name: 'D.va' },
      { id: 17, name: 'Orisa' },
      { id: 18, name: 'Reinhardt' },
      { id: 19, name: 'RoadHog' },
      { id: 20, name: 'Zarya' },
      { id: 21, name: 'Ana' },
      { id: 22, name: 'Brigitte' },
      { id: 23, name: 'Lucio' },
      { id: 24, name: 'Mercy' },
      { id: 25, name: 'Moira' },
      { id: 26, name: 'Symmetra' },
      { id: 27, name: 'Zenyatta' }
    ];
    return { heroes };
  }
}
