const { prod, np, xm } = require('./config');
const env = np;

UserUploadToxMatters('./examples/userupload.100.csv', env);

async function UserUploadToxMatters(path, env) {
  env.log.time('Upload');
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
    //'supervisors',
    'targetName',
    'timezone',
    'webLogin',
  ];

  const deviceFields = ['name', 'deviceType', 'owner', 'recipientType', 'emailAddress', 'targetName'];

  const syncOptions = {
    people: true,
    devices: true,
    peopleOptions: { fields: peopleFields },
    devicesOptions: { fields: deviceFields },
  };

  const json = await xm.util.CsvToJsonFromFile(path);

  const data = await xm.sync.UserUploadToImport(json, env);

  await xm.sync.DataToxMatters(data, env, syncOptions);
  env.log.timeEnd('Upload');
}
