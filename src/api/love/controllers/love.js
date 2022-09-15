'use strict';

/**
 * love controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::love.love');
