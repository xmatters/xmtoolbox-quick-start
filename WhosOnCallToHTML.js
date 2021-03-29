// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;
const path = `./data/${env.subdomain}-xMattersWhosOnCall.html`;

(async () => {
  const { onCall } = await xm.sync.ExtractData(env, { onCall: true, groups: true });

  const top = `<h1>Who is on call?</h1>`;

  let tableTop = '<table ><tbody>';
  tableTop += '<tr>';
  tableTop += '<th>Group</th>';
  tableTop += '<th>Shift</th>';
  tableTop += '<th>Primary</th>';
  tableTop += '</tr>';

  const tableRows = onCall
    .map(
      o =>
        `<tr><td><strong>${o.group.targetName}</strong></td><td>${
          o.shift ? o.shift.name : 'NO SHIFT'
        }</td><td>${
          o.members && o.members.data && o.members.data[0] ? o.members.data[0].member.targetName : ''
        }</td></tr>`
    )
    .join('');

  const tableBottom = `</tbody></table>`;

  const html = top + tableTop + tableRows + tableBottom;
  require('fs').writeFileSync(path, html);
})();
