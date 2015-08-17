/**
 * Created by mhendren on 8/17/15.
 */
var db = require('../db');
var account = db.schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false},
    displayName: {type: String, required: false},
    userImage: {data: Buffer, contentType: String}
});
module.exports = db.model('Account', account);