'use strict';

/**
 * healthy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::healthy.healthy');
