'use strict';

const generate = require('../helpers/generateSecret');
const hash = require('../helpers/hash');

const crypto = require('crypto');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    Secret: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(models) { //after create itu msk k database dlu renata doang, trs before create gnti dlu tmbahin @gmail trs baru save d database
        const secret = generate();
        const hashData = hash(secret, models.password);
        models.password=hashData;
        models.Secret = secret;
      }
    }
  });
  return User;
};
//
// var Model = require('../models');
//
// }, {
//   hooks: {
//     beforeCreate: function(models) { //after create itu msk k database dlu renata doang, trs before create gnti dlu tmbahin @gmail trs baru save d database
//       const secret = generate();
//       const hashData = hash(secret, models.password);
//       models.password=hashData;
//       models.Secret = secret;
//     }
//   }
// });
// return User;
// };
//
//
// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//   var memberclass = sequelize.define('memberclass', {
//     MemberId: DataTypes.INTEGER,
//     ClassnameId: DataTypes.INTEGER
//   }, {
//     hooks: {
//       beforeCreate: function(models) { //after create itu msk k database dlu renata doang, trs before create gnti dlu tmbahin @gmail trs baru save d database
//         if (memberclass.ClassnameId.count() == Model.member.kuota) {
//           throw new Error("This member kuota is finished")
//         }
//       }
//     }
//   });
//   memberclass.associate = (models) => {
//     memberclass.belongsTo(models.member, {foreignKey:'MemberId'});
//     memberclass.belongsTo(models.classname, {foreignKey:'ClassnameId'});
//   }
//   return memberclass;
// };
