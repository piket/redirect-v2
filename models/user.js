'use strict';

var encryption = require('../services/encryption.js');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    version: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user, options) {
        var emailHashObj = encryption.encrypt(user.email, process.env.HASH_PASSWORD);
        console.log("current email",user.email);
        console.log("email hash obj", emailHashObj);
        user.email = emailHashObj.iv + emailHashObj.cipher_text + emailHashObj.salt;
      }
    }
  });
  return user;
};