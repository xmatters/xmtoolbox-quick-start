const fs = require('fs').promises;
const xm = require('xmtoolbox');
const { np } = require('./config');

const options = {
  syncPeople: true,
  syncDevices: true,
  syncGroups: true,
  syncShifts: true
};

const path = `./data/${np.subdomain}.all.json`;

(async () => {
  const text = await fs.readFile(path, 'utf8');
  await xm.sync.DataToxMatters(JSON.parse(text), np, options);
})();
