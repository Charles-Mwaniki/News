const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const jwtsecret = require('./ConfigSecret');
const configMongoose = require('./ConfigMongoose');
const User = configMongoose.User;

module.exports = [
    {
        route: ['login'],
        call: (callPath, args) => {
            const { username, password } = args[0];
            const saltedPassword = password+'pubapp';
            const saltedPassHash = crypto.createHash('sha256').update(saltedPassword).digest('hex');
            const userStatementQuery = {
                $and:[
                    {'username': username},
                    {'password': saltedPassHash}
                ]
            }
            return User.find(userStatementQuery, function(err, user){
                if(err) throw err;
            }).then( (result) => {
                if(result.length){
                    //return null;
                    const role = result[0].role;
                    const userDetailsToHash = username+role;
                    const token = jwt.sign(userDetailsToHash, jwtsecret.secret);
                    return [
                        {
                            path: ['login', 'token'],
                            value: token
                        },
                        {
                            path: ['login', 'username'],
                            value: username
                        },
                        {
                            path: ['login', 'role'],
                            value: role
                        },
                        {
                            path: ['login', 'error'],
                            value: false
                        }
                    ]
                }else{
                    return [
                        {
                            path: ['login', 'token'],
                            value: 'INVALID'
                        },
                        {
                            path: ['login', 'error'],
                            value: 'No user found, incorrect login information'
                        }
                    ];
                }
                return result;
            })
        }
    }
];