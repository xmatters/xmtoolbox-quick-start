// See README.md for a description of this script.
const fs = require('fs').promises;
const { np, prod, xm } = require('./config');
const env = np;

const syncOptions = {
  groups: true,
  people: true,
  devices: true,
  shifts: true,
  sites: true,
};

const path = `./data/${env.subdomain}.backup.json`;

(async () => {
  const text = await fs.readFile(path, 'utf8');
  await xm.sync.DataToxMatters(JSON.parse(text), env, syncOptions);
})();
