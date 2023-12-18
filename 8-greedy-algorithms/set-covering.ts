import { getTwoSetsDifference, getTwoSetsIntersection } from './utils';

let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations: Record<string, Set<string>> = {};

stations['kone'] = new Set(['id', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'id', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'ca']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['ca', 'az']);

const finalStations: Set<string> = new Set();

while (statesNeeded.size > 0) {
  let bestStation: string = 'None';
  let statesCovered: Set<string> = new Set();

  for (const [station, statesInStation] of Object.entries(stations)) {
    const covered = getTwoSetsIntersection<string>(
      statesNeeded,
      statesInStation
    );
    if (covered.size > statesCovered.size) {
      statesCovered = covered;
      bestStation = station;
    }
  }

  finalStations.add(bestStation);
  statesNeeded = getTwoSetsDifference<string>(statesNeeded, statesCovered);
}

console.log('final solution ====> ', finalStations);
