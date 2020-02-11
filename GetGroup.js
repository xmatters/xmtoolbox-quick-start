const xm = require('xmtoolbox');
const { np, prod } = require('./config');

(async (env, name) => {
  const group = await xm.groups.get(np, name, { embed: 'supervisors,observers' });
  console.log(JSON.stringify(group, null, 2));
})(np, 'Database Operations');
