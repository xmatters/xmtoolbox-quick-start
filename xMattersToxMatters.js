const xm = require('xmtoolbox');
const { np, prod } = require('./config');

const options = {
  syncPeople: true,
  syncDevices: true,
  syncGroups: true,
  syncShifts: true
};

(async () => {
  await xm.sync.xMattersToxMatters(prod, np, options);
})();
