const xm = require('xmtoolbox');
const { np, prod } = require('./config');

UserUploadToxMatters('./examples/userupload.10.csv', np);

async function UserUploadToxMatters(path, env) {
  const peopleFields = [
    //'externalKey',
    //'externallyOwned',
    'firstName',
    //'id',
    'language',
    'lastName',
    //'phoneLogin',
    //'properties',
    'recipientType',
    'roles',
    'site',
    'status',
    'supervisors',
    'targetName',
    'timezone',
    'webLogin'
  ];

  const syncOptions = {
    syncPeople: true,
    syncDevices: true,
    peopleOptions: { fields: peopleFields }
  };

  const json = await xm.util.csvToJsonFromFile(path);

  const data = await xm.sync.userUploadToImport(json, env);

  await xm.sync.DataToxMatters(data, env, syncOptions);
}
