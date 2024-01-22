/*

Problem: process the movies releases data
-keep only releases that have both id and title properties
-keep only the id and title data
-id is always > 0, title is always a non-empty string

Data:
-release data is an array of objects
-each object is for a movie release, with various properties/values
-id value is a number > 0; title value is a non-empty string

Abstractions/Algorithm:
1. filter out the movies missing one of the needed properties
2. transform the array of those objects to one with objects with only id & title

*/

// further exploration: changed condition to `(release.id >= 0)` to account for
// possible (falsey) id value 0. undefined compared to 0 will always be false.
function processReleaseData(data) {
  return data.filter(release => ((release.id >= 0) && release.title))
    .map(release => ({id: release.id, title: release.title}));
}

let newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id:432534, time:65876586 }],
  },
  {
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];