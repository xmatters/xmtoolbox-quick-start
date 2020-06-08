const { np, xm } = require('./config');
const fs = require('fs');

const extractOptions = {
  groups: true,
  people: true,
  shifts: true,
  sites: true,
};

const path = `./data/${np.subdomain}.all.json`;

(async () => {
  console.time('Backup');
  const data = await xm.sync.ExtractData(np, extractOptions);
  const text = JSON.stringify(data, null, 2);
  fs.writeFileSync(path, text);
  console.timeEnd('Backup');
})();
