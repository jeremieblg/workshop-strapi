'use strict';

/**
 * module service.
 */

const { createCoreService } = require('@strapi/strapi').factories;


module.exports = createCoreService('api::module.module', ({strapi})=>({
  async findOne(ctx, params) {
    return strapi.query("api::module.module").findOne({
      where: {
        id: ctx
      },
      ...params,
      populate: {
        signatures:{
          populate:{
            user:{
              populate:{
                role: true
              }
            }
          }
        },
      },
    });
  },
  async find(params) {
    return await super.find({
      ...params,
      populate: {
        signatures:{
          populate:{
            user:{
              populate:{
                role: true
              }
            }
          }
        },
      },
    });
  },
}));
