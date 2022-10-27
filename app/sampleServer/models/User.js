/**
 * User table simulator.
 */
class UserTable{
    constructor(schema){
        this.schema = schema;
    }

    initalize(){
        this.tableRecords = [];
        return this;
    }

    create(record){
        this.tableRecords.push(Object.assign({},record));
        return this;
    }
    getTop(){
        return this.tableRecords[0];
    }
}

exports.UserTable = UserTable;