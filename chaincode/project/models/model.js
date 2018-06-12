'use strict';


class Model {

    /**
     *
     * @param property1
     * @param property2
     * @param key
     */
    constructor(property1, property2, key = 0) {
        this._property1 = property1;
        this._property2 = property2;
        this._key = key;
    }

    static get docType(){
        return 'model';
    }
    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }

    get property1() {
        return this._property1;
    }

    set property1(value) {
        this._property1 = value;
    }

    get property2() {
        return this._property2;
    }

    set property2(value) {
        this._property2 = value;
    }

    propsToArray() {
        return [this.key, this._property1, this._property2];
    }

    propsToValue(){
        return {property1 : this.property1, property2 : this.property2   }
    }

    static generateKeyByNumber(number){
        return `MODEL${number}`;
    }

    static parseChainResultToFile(chainResult) {
        let newModel = new Model(null,null);
        if (Model.docType === 'model') {
            newModel.property1 = chainResult.property1;
            newModel.property2 = chainResult.property2;
        }
        return newModel;
    }

}

module.exports = Model;
