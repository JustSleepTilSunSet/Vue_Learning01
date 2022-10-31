/**
 * User table simulator.
 */
class UserTable{
    constructor(){
    }

    initalize(){
        this.tableRecords = [];
        return this;
    }

    create(record){
        if(Array.prototype.findIndex.call(this.tableRecords, ({mail}) => mail == record.mail)>=0){
            throw new Error(`The mail is signed.`);
        }
        this.tableRecords.push(Object.assign({},record));
        return this;
    }

    getTop(){
        return this.tableRecords[0];
    }
}

exports.UserTable = UserTable;