const fs = require('fs');
const objectPath = require('object-path')

class ConfigTemplate {
    data: any;

    read(file: string) {
        console.log(`Deserializing from ${file}`);
    }

    save(file: string) {
        console.log(`Serializing to ${file}`);
        fs.writeFileSync(file, this._serialize(this.data));
    }

    get(path: string) {
        return objectPath.get(this.data, path);
    }

    set(path: string, value: string) {
        return objectPath.set(this.data, path, value);
    }

    _serialize(data: any) {
        throw new Error('not implemented');
    }

    _deserialize(data: any){
        throw new Error('not implemented');
    }
}

module.exports = ConfigTemplate;