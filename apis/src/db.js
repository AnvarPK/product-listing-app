const mongoos = require('mongoose');

mongoos.connect('mongodb://root:root@127.0.0.1:27017/product-list-apis?authSource=admin&readPreference=primary&authMechanism=SCRAM-SHA-1&appname=MongoDB%20Compass&ssl=false');