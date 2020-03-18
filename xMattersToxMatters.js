const { np, prod, xm } = require('./config');

const options = {
  people: true,
  peopleFilter: p => p.targetName.startsWith('U001'),
  devices: true,
  groups: true,
  shifts: true
};

(async () => {
  await xm.sync.xMattersToxMatters(prod, np, options);
})();
