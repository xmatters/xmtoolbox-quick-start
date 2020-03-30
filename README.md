# xmtoolbox Quick Start Template

This is template project that can be used to do the following with xMatters:

- Backup
- Restore
- Report
- Load
- Synchronize
- Migrate

The source of the data can be:

- A file
- Multiple files
- Another xMatters instance

The included [examples](#Examples) are explained below. This project leverages [xmtoolbox](https://www.npmjs.com/package/xmtoolbox) which is a npm package that makes it simpler to interact with the xMatters APIs and contains some utilities to assist with the movement of xMatters. Please refer to the xmtoolbox documentation available [https://brannonvann.github.io/xmtoolbox/](https://brannonvann.github.io/xmtoolbox/) for other available functionality. xMatters REST API Documentation is available [here](https://help.xmatters.com/xmapi/index.html)

[xmtoolbox API docs](https://brannonvann.github.io/xmtoolbox/index.html) | [xmtoolbox@npm](https://www.npmjs.com/package/xmtoolbox) | [xmtoolbox@github](https://github.com/brannonvann/xmtoolbox)

This project can be run locally or deployed to a PaaS solution such as Heroku.

## Warning

This package has the ability to modify data within your xMatters for good and bad. Please use it responsibly. Test in non-production and don't make unnecessary requests against your xMatters instance. Also be aware that according to xMatters, the inbound events and flow posts share the same bandwidth any interactions with the xMatters APIs, including the ones this package uses, so again please use responsibly. This project is an open source project and is not owned or supported by xMatters directly. If you are having trouble please [refer to or open a github issue](https://github.com/brannonvann/xmtoolbox-quick-start/issues).

## Setup

1. Click "Use This Template" from the github page, download, or fork this project to a local directory.
1. Install latest [node.js](https://nodejs.org/en/download/)
1. Run `npm install` from the directory where this was downloaded locally in a MacOS or Linux terminal or Windows command prompt.
1. Rename the provided `example.config.js` to `config.js` and updated with your credentials. If you are using environment variables to store your credentials, no further update is needed.
1. Run one of the examples `node Backup.js`

## Usage

This project is a node package. To run an example follow the setup as described above and change the 'Backup' in the last step to the name of the example you want to try.

The examples are setup to leverage a `config.js` file for storing xMatters credentials or accessing your credentials stored in environment variables. If you choose to implement another solution for storing your credentials you will just need to make sure the credentials are passed when creating your environment as the `example.config.js` demonstrates.

Please keep in mind that this information needs to remain secure. Choose a solution that is secure in your situation. The config.js file is only used to make it easy to try multiple examples. There is no dependency on it, if you choose to configure the credentials or environment another way.

## Updating

You can update the referenced packages, including xmtoolbox, by using the command `npm update`.

## Examples

The examples explained below cover a small subset of the available functionality. There is a lot more data that can be synchronized, migrated, backed-up, restores, and reported on, with a small change to the scripts. These examples have been created to cover the most common situations. Refer to the [xmtoolbox documentation](https://brannonvann.github.io/xmtoolbox/) for more information on the any of the data modules that are leveraged by this project.

### SendToFlow.js

This is an example of sending data to a xMatters Workflow Flow and reporting on data within xMatters. In this case it's looking for groups that contain groups but this could be any supported object and with any qualifiers.

### xMattersToxMatters.js

This is an example of synchronizing a xMatters production environment to non-production xMatters instance. It synchronizes people, devices, groups, and shifts in non-mirror mode. Data will not be deleted from either environment however where matching records are found it will be updated in the destination. A default supervisor will be used in the event any matching supervisors are not found in non-production.

### Cleanup.js

Running this will remove users and groups contained in the example files. It also will remove any unused sites.

### Backup.js

This is an example of extracting data from your xMatters instance. The data will be saved as a single JSON file. This json file can be read in as used to synchronize data into a xMatters instance. An example of that is available in [Restore.js](#restorejs).

### Restore.js

This demonstrates how to read in a single JSON file that has many data objects represented in it and synchronizing a few of those data elements into an xMatters instance. The file is the same one that is produced in the [Backup.js](#backupjs) example.

### FilesToxMatters.js

This demonstrates how to read in a csv (Comma Separated Value) file for people and devices and one for groups. Then, synchronizing a that data into an xMatters instance. The file is the same one that is produced in the Extract.js example.

### UserExportFileToxMatters.js

This is an example of synchronizing the xMatters Users Export formatted file to xMatters. This can be created from scratch or downloaded from xMatters using the Users --> Export.

### WhosOnCallToHTML.js

This will extract all groups from your production environment and write to a very simple HTML page in table form.
