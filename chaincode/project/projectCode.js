'use strict';
const shim = require('fabric-shim');
const ChainCode = require('./models/FileStoreChaincode');

shim.start(new ChainCode());
