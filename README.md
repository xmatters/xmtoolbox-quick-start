# xmtoolbox Quick Start Template

This is template that can be used to load, synchronize, or migrate data with xMatters. The source of the data can be a file, multiple files, or another xMatters instance. Included [examples](#Examples) are explained below. This project leverages xmtoolbox which is a npm package that makes it simpler to interact with the xMatters APIs and contains some utilities to assist with the movement of xMatters. Please refer to the xmtoolbox documentation available  [https://brannonvann.github.io/xmtoolbox/](https://brannonvann.github.io/xmtoolbox/) for other available functionality. xMatters REST API Documentation is available [here](https://help.xmatters.com/xmapi/index.html)

[xmtoolbox@npm](https://www.npmjs.com/package/xmtoolbox) | [xmtoolbox@github](https://github.com/brannonvann/xmtoolbox)

## Setup

1. Click "Use This Template" from the github page, download, or fork this project to a local directory.
1. Install latest [node.js](https://nodejs.org/en/download/)
1. Run `npm install` from the directory where this was downloaded locally in a terminal or command prompt.
1. Create a config.js file. Please see the [Usage](#usage) section below for more details.
1. Run one of the examples `node Backup.js`

This project can be run locally or deployed to a PaaS solution such as Heroku.

## Usage

This project is a node package. To run an example follow the setup as described above and change the 'Backup' in the last step to the name of the example you want to try.

The examples are setup to leverage a config.js file for storing xMatters credentials. This is not a best practice for production deployment. An alternative is to leverage environment variables loaded into your environment or the environment variable management solutions available with PaaS solutions. Another way to manage the values of the environment variables is to use a solution like [dotenv](https://www.npmjs.com/package/dotenv).

Please keep in mind that this information needs to remain secure so please choose a solution that is secure in your situation. The config.js file is only used to make it easy to try multiple examples. There is no dependency on it if you choose to configure the credentials or environment another way.

**Create a config.js file in the same directory as the examples.**

    const xm = require('xmtoolbox');

    const PROD_SUBDOMAIN = 'company';
    const PROD_USERNAME = 'rest-username';
    const PROD_PASSWORD = 'PASSWORD HERE'

    const NP_SUBDOMAIN = 'company-np';
    const NP_USERNAME = 'rest-username';
    const NP_PASSWORD = 'PASSWORD HERE';

    exports.prod = xm.environments.create(PROD_SUBDOMAIN, PROD_USERNAME, PROD_PASSWORD, { logLevel: 'info' }); //Adjust logLevel as necessary.
    exports.np = xm.environments.create(NP_SUBDOMAIN, NP_USERNAME, NP_PASSWORD, { logLevel: 'info' }); //Adjust logLevel as necessary.

**If Using Environment Variables:**

Use the below example to set the values from environment variables.

        const PROD_USERNAME = process.env.PROD_USERNAME;

## Examples

The examples explained below cover a small subset of the available functionality. There is much more data that can be synchronized to loaded into xMatters with a small change to the scripts. These examples have been created to cover the most common situations. Please refer to the [xmtoolbox sync documentation](https://brannonvann.github.io/xmtoolbox/module-sync.html) for more details on other sync options. Please refer to the [xmtoolbox documentation](https://brannonvann.github.io/xmtoolbox/) for more information on the any of the data modules that are leveraged by this project.

### xMattersToxMatters.js

This is an example of synchronizing a xMatters production environment to non-production xMatters instance. It synchronizes people, devices, groups, and shifts in non-mirror mode. Data will not be deleted from either environment however where matching records are found it will be updated in the destination. A default supervisor will be used in the event any matching supervisors are not found in non-production.

### Cleanup.js

Running this will remove users and groups contained in the example files. It also will remove any unused sites.

### Backup.js

This is an example of extracting data from your xMatters instance. The data will be saved as a single JSON file. This json file can be read in as used to synchronize data into a xMatters instance. An example of that is available in Restore.js.

### Restore.js

This demonstrates how to read in a single JSON file that has many data objects represented in it and synchronizing a few of those data elements into an xMatters instance. The file is the same one that is produced in the Backup.js example.

### FilesToxMatters.js

This demonstrates how to read in a csv (Comma Separated Value) file for people and devices and one for groups. Then, synchronizing a that data into an xMatters instance. The file is the same one that is produced in the Extract.js example.

### UserExportFileToxMatters.js

This is an example of synchronizing the xMatters Users Export formatted file to xMatters. This can be created from scratch or downloaded from xMatters using the Users --> Export.