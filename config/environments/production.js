/* @ts-check */
/* eslint-disable no-param-reassign */

export default async (app) => {
  app.config.logLevel = 'info';
  app.config.cacheModules = true;

  app.config.db = {
    type: 'postgres',
    database: 'test-github-actions-ci_production',
  };
};
