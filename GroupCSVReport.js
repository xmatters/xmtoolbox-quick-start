// See README.md for a description of this script.
const xm = require('xmtoolbox');
const fs = require('fs').promises;
const { np } = require('./config');

const env = np;
const path = `./data/${env.subdomain}-groups.csv`;

(async () => {
  //get all groups with their supervisors
  const groups = await xm.groups.getMany(env, { embed: 'supervisors' });

  //flatten group data and only extract the group name and the supervisors name and id
  const data = groups.map(({ targetName, supervisors }) => {
    const Supervisors = supervisors.data.map(
      ({ targetName, firstName, lastName }) => `${firstName} ${lastName}(${targetName})`
    );
    return { Group: targetName, Supervisors };
  });

  //convert json array to csv with xmtoolbox utilities
  const csv = xm.util.JsonToCsv(data);

  //write the report to a file
  fs.writeFile(path, csv); //Note: multiple supervisors are delimited by a comma.

  /*
  Example Output:
  Group,Supervisors
  Web Team,"Brannon Vann(bvann),John Smith(jsmith)"
  Database Operations,Brannon Vann(bvann)
  */
})();
