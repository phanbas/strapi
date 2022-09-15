'use strict';

/**
 * healthy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::healthy.healthy');
