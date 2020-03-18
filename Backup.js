const { np, xm } = require('./config');
const fs = require('fs');

const extractOptions = {
  audits: true,
  deviceNames: true,
  devices: true,
  deviceTypes: true,
  dynamicTeams: true,
  events: true,
  forms: true,
  groupMembers: true,
  groups: true,
  integrations: true,
  people: true,
  personSupervisors: true,
  planConstants: true,
  planEndpoints: true,
  planProperties: true,
  plans: true,
  roles: true,
  scenarios: true,
  sharedLibraries: true,
  shifts: true,
  sites: true,
  subscriptionForms: true,
  subscriptions: true,
  temporaryAbsences: true
};

const path = `./data/${np.subdomain}.all.json`;

(async () => {
  console.time('Backup');
  const data = await xm.sync.ExtractData(np, extractOptions);
  const text = JSON.stringify(data, null, 2);
  fs.writeFileSync(path, text);
  console.timeEnd('Backup');
})();
