// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;
const path = `./data/${env.subdomain}-subscriptionexport.csv`;

(async () => {

  const subscriptions = await xm.subscriptions.getMany(env, {});

  let tableTop = 'Subscription Id,';
  tableTop += 'Name,';
  tableTop += 'Owner,';
  tableTop += 'Date Created,';
  tableTop += 'Subscriber Id,';
  tableTop += 'SubscriberName\n';

  let tableRows = '';

  for (let i = 0; i < subscriptions.length; i++) { 

      const subscribers = await xm.subscriptions.getSubscribers(env, {}, subscriptions[i].id);

      for (let x = 0; x < subscribers.length; x++) {

        tableRows += subscriptions[i].id +',';
        tableRows += subscriptions[i].name +',';
        tableRows += subscriptions[i].owner.targetName +',';
        tableRows += subscriptions[i].created + ',';
        tableRows += subscribers[x].targetName + ',';
        tableRows += subscribers[x].firstName + ' ' + subscribers[x].lastName + '\n';

      }
  }
  const csv = tableTop + tableRows;
  require('fs').writeFileSync(path, csv);
})();
