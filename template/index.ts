const JsonConfiguration = require('./jsonConfig');

const jsonConfig = new JsonConfiguration();
jsonConfig.read('samples/conf.json');
jsonConfig.set('nodejs', 'design patterns');
jsonConfig.save('samples/conf_mod.json');