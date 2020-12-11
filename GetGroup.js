// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = np;
const name = 'Database Operations';

(async () => {
  try {
    const group = await xm.groups.get(env, name, { embed: 'supervisors,observers' });
    console.log(JSON.stringify(group, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
