/*
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
*/

'use strict';
const shim = require('fabric-shim');
const util = require('util');
const model = require('./model');

let Chaincode = class {

    // The Init method is called when the Smart Contract 'invoices' is instantiated by the blockchain network
    // Best practice is to have any Ledger initialization in separate function -- see initLedger()
    async Init(stub) {
        console.info('=========== Instantiated invoices chaincode ===========');
        return shim.success();
    }

    // The Invoke method is called as a result of an application request to run the Smart Contract
    // 'fileStore'. The calling application program has also specified the particular smart contract
    // function to be called, with arguments
    async Invoke(stub) {
        let ret = stub.getFunctionAndParameters();
        console.info(ret);

        let method = this[ret.fcn];
        if (!method) {
            console.error('no function of name:' + ret.fcn + ' found');
            throw new Error('Received unknown function ' + ret.fcn + ' invocation');
        }
        try {
            let payload = await method(stub, ret.params);
            return shim.success(payload);
        } catch (err) {
            console.log(err);
            return shim.error(err);
        }
    }

    async initLedger(stub, args) {
        console.info('============= START : Initialize Ledger ===========');
        let models = [];

        const model = new Model('prop1','prop2');
        files.push(model);

        for (let i = 0; i < files.length; i++) {
            await stub.putState(models.generateKeyByNumber(i), Buffer.from(JSON.stringify(models[i].propsToValue())));
            console.info('Added <--> ', models[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }
};

module.exports = Chaincode;
