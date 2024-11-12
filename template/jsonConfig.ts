const util = require('util');
const ConfigTemp = require('./configTemplate');

class JsonConfig extends ConfigTemp {
    _deserialize(data: any): any {
        return JSON.parse(data);
    }

    _serialize(data: any) : string {
        return JSON.stringify(data, null, ' ');
    }
}

module.exports = JsonConfig;