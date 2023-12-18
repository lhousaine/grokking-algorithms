function travelingSalesperson(cities: Record<string, Record<string, number>>) {
  const citiesCount: number = Object.keys(cities).length;
  const visitedCities: Set<string> = new Set();
  let currentCity: string = 'Casablanca';

  visitedCities.add(currentCity);
  let totalDistance: number = 0;
  let result: string[] = [currentCity];

  while (visitedCities.size < citiesCount) {
    let nearestCity: string = '';
    let shortestDistance: number = Infinity;

    for (let city in cities[currentCity]) {
      if (
        !visitedCities.has(city) &&
        cities[currentCity][city] < shortestDistance
      ) {
        shortestDistance = cities[currentCity][city];
        nearestCity = city;
      }
    }

    if (nearestCity !== null) {
      visitedCities.add(nearestCity);
      result.push(nearestCity);
      totalDistance += shortestDistance;
      currentCity = nearestCity;
    }
  }

  return { path: result, distance: totalDistance };
}

const cities: Record<string, Record<string, number>> = {
  Casablanca: { Rabat: 90, Marrakech: 240, Fes: 320, Tangier: 330 },
  Rabat: { Casablanca: 90, Marrakech: 210, Fes: 180, Tangier: 260 },
  Marrakech: { Casablanca: 240, Rabat: 210, Fes: 540, Tangier: 510 },
  Fes: { Casablanca: 320, Rabat: 180, Marrakech: 540, Tangier: 320 },
  Tangier: { Casablanca: 330, Rabat: 260, Marrakech: 510, Fes: 320 },
};

const { path, distance } = travelingSalesperson(cities);

console.log('Approximate Path: ', path);
console.log('Approximate Total Distance: ', distance, 'km');
