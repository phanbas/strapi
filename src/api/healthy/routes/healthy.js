'use strict';

/**
 * healthy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::healthy.healthy');
