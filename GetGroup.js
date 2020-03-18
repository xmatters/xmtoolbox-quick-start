const { np, xm } = require('./config');

//The name of the group it is looking for is "Database Operations"

(async (env, name) => {
  const group = await xm.groups.get(env, name, { embed: 'supervisors,observers' });
  console.log(JSON.stringify(group, null, 2));
})(np, 'Database Operations');
