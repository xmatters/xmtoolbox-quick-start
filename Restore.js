const fs = require('fs').promises;
const { np, xm } = require('./config');

const syncOptions = {
  people: true,
  devices: true,
  groups: true,
  shifts: true
};

const path = `./data/${np.subdomain}.all.json`;

(async () => {
  const text = await fs.readFile(path, 'utf8');
  await xm.sync.DataToxMatters(JSON.parse(text), np, syncOptions);
})();
