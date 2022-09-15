'use strict';

/**
 * love service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::love.love');
