// See README.md for a description of this script.
const { np, prod, xm } = require('./config');
const fs = require('fs');

const options = {
  people: true,
  peopleFilter: p => p.targetName.startsWith('U000'),
  //devicesFilter: d => d.targetName.includes('bvann'),
  //devices: true,
  //groups: true,
  //shifts: true,
  dataExtracted: (destinationData, destinationEnv, sourceData, sourceEnv) => {
    const text = JSON.stringify(destinationData);
    const date = new Date();
    const path = `./data/${destinationEnv.subdomain}-${date.toISOString()}.backup.json`;
    fs.writeFileSync(path, text);
  },
};

(async () => {
  const { syncResults } = await xm.sync.xMattersToxMatters(prod, np, options);

  if (syncResults.failure) {
    console.log('sync failed');
    console.log(...np.errors.map(e => e.message));
  }
})();
