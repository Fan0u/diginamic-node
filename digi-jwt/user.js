const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hash = async(password) => {
    return await bcrypt.hash(password, saltRounds)
} 

exports.compare = async(password , hash) => {
    return await bcrypt.compare(password, hash)
} 