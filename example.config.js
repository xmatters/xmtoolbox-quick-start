const xm = require('xmtoolbox');

/***
 ****RENAME THIS FILE***
 * to: config.js
 * to use with the provided examples.
 */

//Set credentials environment variables or in this file by replaceing the examples below.
//Defaults to using environment variables if they are set.
// xMatters API keys may be used rather than one's username/password. https://help.xmatters.com/ondemand/user/apikeys.htm
const PROD_SUBDOMAIN = process.env.PROD_SUBDOMAIN || 'company'; //company from url--> https://company.xmatters.com
const PROD_USERNAME = process.env.PROD_USERNAME || 'restuser';
const PROD_PASSWORD = process.env.PROD_PASSWORD || 'PASSWORD_HERE';

const NP_SUBDOMAIN = process.env.NP_SUBDOMAIN || 'company-np'; //company-np from url--> https://company-np.xmatters.com
const NP_USERNAME = process.env.NP_USERNAME || 'restuser';
const NP_PASSWORD = process.env.NP_PASSWORD || 'PASSWORD_HERE';

exports.xm = xm;

exports.prod = xm.environments.create(PROD_SUBDOMAIN, PROD_USERNAME, PROD_PASSWORD, {
  logLevel: 'info',
  readOnly: false,
  //proxy: { port: 8001, host: '10.10.10.123' },
});
exports.np = xm.environments.create(NP_SUBDOMAIN, NP_USERNAME, NP_PASSWORD, {
  logLevel: 'info',
  readOnly: false,
  //proxy: { port: 8001, host: '10.10.10.123' },
});
