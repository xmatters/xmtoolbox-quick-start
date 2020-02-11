# xMatters Sync

This project contains example applications that can be used to load, synchronize, or migrate data with xMatters. The source of the data can be a file, multiple files, or another xMatters instance. Included examples are explained below. This project leverages xmtoolbox which is a npm package that makes it simpler to interact with the xMatters APIs and contains some utilities to assist with the synchronization of xMatters. Please refer to the xmtoolbox documentation available on [npm](https://www.npmjs.com/package/xmtoolbox) or [github](https://github.com/brannonvann/xmtoolbox) for other available functionality. xMatters REST API Documentation is available [here](https://help.xmatters.com/xmapi/index.html)

## Setup

1. Download or fork this project to a local directory
1. Install [node.js](https://nodejs.org/en/download/)
1. Run `npm install` from the directory where this package exists in a terminal or command prompt.
1. Set your values in the config.js file. Please see the [Usage](#usage) section below for more details.
1. Run one of the examples `node UserUploadFileToxMatters`

This project can be run locally or deployed to a PaaS solution such as Heroku.

## Usage

This project is a node application. To run an example follow the setup above and change the 'UserUploadFileToxMatters' in the last step to the name of the example you want to try. The examples are setup to leverage a config.js file for storing xMatters credentials. This is not a best practice for production deployment. An alternative is to leverage environment variables loaded into your environment or leverage the environment variable management solutions available with PaaS solutions. Another way to manage the values of the environment variables is to use a solution like [dotenv](https://www.npmjs.com/package/dotenv). Please keep in mind that this information needs to remain secure so please choose a solution that is secure in your situation. An example .env file is included to assist if you choose to use this option.

If you use environment variables to store your configuration you will need to change the line near the top of the examples like below.

Using config.js:

        const { NP_SUBDOMAIN, NP_USERNAME, NP_PASSWORD } = require('./config');

Using Environment Variables:

        const { NP_SUBDOMAIN, NP_USERNAME, NP_PASSWORD } = process.env;

The examples explained below cover a small subset of the available functionality. There is a lot more data that can be synchronized to loaded into xMatters with a small change to the scripts. These examples have been created to cover the most common situations. Please refer to the [xmtoolbox sync documentation](https://github.com/brannonvann/xmtoolbox#Sync) for more details on other sync options. Please refer to the [xmtoolbox documentation](https://github.com/brannonvann/xmtoolbox) for more information on the any of the data modules that are leveraged by this project.

## Examples

### xMattersToxMatters.js

This is an example of synchronizing a xMatters production environment to non-production xMatters instance. It synchronizes people, devices, groups, and shifts in non-mirror mode. Data will not be deleted from either environment. A default supervisor will be used in the event any matching supervisors are not found in non-production.

### UserUploadFileToxMatters.js

This is an example of synchronizing the xMatters UserUpload formatted file to xMatters. This can be created from scratch or downloaded from xMatters using the Users --> Export.

### Cleanup.js

Running this will remove users and groups contained in the example files. It also will remove any unused sites.

### Extract.js

This is an example of extracting data from your xMatters instance. The data will be saved as a single JSON file. This json file can be read in as used to synchronize data into a xMatters instance. An example of that is available in JsonToxMatters.js.

### JsonToxMatters.js

This demonstrates how to read in a single JSON file that has many data objects represented in it and synchronizing a few of those data elements into an xMatters instance. The file is the same one that is produced in the Extract.js example.

### FilesToxMatters.js

This demonstrates how to read in a csv (Comma Separated Value) file for people and devices and one for groups. Then, synchronizing a that data into an xMatters instance. The file is the same one that is produced in the Extract.js example.
