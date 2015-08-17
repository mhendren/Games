/**
 * Created by mhendren on 8/16/15.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Games', function() {
    console.log('mongodb connected')
});
module.exports = mongoose;