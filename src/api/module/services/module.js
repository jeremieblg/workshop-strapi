'use strict';

/**
 * module service.
 */

const { createCoreService } = require('@strapi/strapi').factories;


module.exports = createCoreService('api::module.module', ({strapi})=>({
  async findOne(ctx, params) {
    console.log(ctx)
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
}));
