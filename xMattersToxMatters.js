const { np, prod, xm } = require('./config');

const options = {
  //people: true,
  //peopleFilter: p => p.targetName.startsWith('U001'),
  devicesFilter: d => d.targetName.includes('bvann'),
  devices: true,
  //groups: true,
  //shifts: true,
};

(async () => {
  const { syncResults } = await xm.sync.xMattersToxMatters(prod, np, options);

  if (syncResults.failure) {
    console.log('sync failed');
    console.log(...np.errors.map(e => e.message));
  }
})();
