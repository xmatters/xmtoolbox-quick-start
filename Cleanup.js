// See README.md for a description of this script.
const { np, prod, xm } = require('./config');
const env = np;

const peopleQuery = { search: 'U0' }; //All with U0 in the targetName or name
const groupQuery = { search: 'Example Group' }; //all that have Example Group in name or description.
const sitesQuery = {}; //all - only unused sites can be deleted.

Cleanup();

async function Cleanup() {
  const people = await xm.people.getMany(env, peopleQuery);
  await Promise.all(people.map(p => xm.people.delete(env, p.id)));

  const groups = await xm.groups.getMany(env, groupQuery);
  await Promise.all(groups.map(g => xm.groups.delete(env, g.id)));

  const sites = await xm.sites.getMany(env, sitesQuery);
  await Promise.all(sites.map(s => xm.sites.delete(env, s.id)));
}
