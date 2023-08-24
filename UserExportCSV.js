// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;
const path = `./data/${env.subdomain}-userexport.csv`;

(async () => {

  const users = await xm.people.getMany(env, {embed: 'devices'});

  let tableTop = 'User Id,';
  tableTop += 'First Name,';
  tableTop += 'Last Name,';
  tableTop += 'Last Login,';
  tableTop += 'Groups,';
  tableTop += 'Devices\n';

  let tableRows = '';

  for (let i = 0; i < users.length; i++) { 

      tableRows += users[i].targetName +',';
      tableRows += users[i].firstName +',';
      tableRows += users[i].lastName +',';
      tableRows += users[i].lastLogin + ',';

      const groups = await xm.people.getGroups(env, {}, users[i].id);

      tableRows += groups
        .map(
          o =>
            `${o.group.targetName}|`
        )
        .join('');


      tableRows += ',';

      tableRows += users[i].devices.data
        .map(
          y =>
            `${y.targetName},${y.status},${y.testStatus},`
        )
        .join('');

      tableRows += '\n';
      
  }
  const csv = tableTop + tableRows;
  require('fs').writeFileSync(path, csv);
})();
