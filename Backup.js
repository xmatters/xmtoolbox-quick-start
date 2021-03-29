// See README.md for a description of this script.
const fs = require('fs');
const { np, prod, xm } = require('./config');
const env = np;

const extractOptions = {
  //docs: https://brannonvann.github.io/xmtoolbox/module-sync.html#~ExtractOptions
  groups: true,
  people: true,
  devices: true,
  shifts: true,
  sites: true,
};

//const path = `./data/${env.subdomain}.${new Date().toISOString()}.backup.json`; //save all with unique name
//const path = `./data/${env.subdomain}.${new Date().getDay()}.backup.json`; //maintains backup from last 7 days.
const path = `./data/${env.subdomain}.backup.json`; //save only one file

(async () => {
  console.time('Backup');
  const data = await xm.sync.ExtractData(env, extractOptions);
  const text = JSON.stringify(data, null, 2);
  fs.writeFileSync(path, text);
  console.timeEnd('Backup');
})();
