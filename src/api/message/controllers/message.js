'use strict';
const jwt = require('jsonwebtoken');
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::message.message',({ strapi }) => ({
    async find(ctx) {
        const token=ctx.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        const entity = await strapi.db.query('api::message.message').findMany({
            where: { user: decodedToken["id"] }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return sanitizedEntity;
    }
}));