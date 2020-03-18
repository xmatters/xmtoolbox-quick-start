const { np, xm } = require('./config');

//DeleteGroups(np, { search: 'Example Group' });
DeletePeople(np, { search: 'U0' });
//DeleteSites(np);

async function DeletePeople(env, query) {
  const people = await xm.people.getMany(env, query);
  await Promise.all(people.map(p => xm.people.delete(env, p.id)));
}

async function DeleteGroups(env, query) {
  const groups = await xm.groups.getMany(env, query);
  await Promise.all(groups.map(g => xm.groups.delete(env, g.id)));
}

async function DeleteSites(env, query) {
  const sites = await xm.sites.getMany(env, query);
  await Promise.all(sites.map(s => xm.sites.delete(env, s.id)));
}
