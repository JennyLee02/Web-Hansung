'use strict';

/**
 * user-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-guide.user-guide');
