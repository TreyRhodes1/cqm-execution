const fs = require('fs');
const path = require('path');

const basePath = path.join('spec', 'fixtures', 'json');

module.exports.getJSONFixture = (fixturePath) => {
  var contents = fs.readFileSync(path.join(basePath, fixturePath));
  return JSON.parse(contents);
}

module.exports.getEpisodeResults = (episodeResults) => {
  results = [];
  Object.keys(episodeResults).forEach( function(result) {
    results = episodeResults[result].values.concat(results);
  });
  return results;
}