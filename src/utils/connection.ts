import { global, isProd } from './appGlobal';
import './utils/loadEnv.js';
import dynamoose from 'dynamoose';
import { logger } from './logger';

export const configDynamoose = () => {
  if (global.configuredDynamoose) return;
  global.configuredDynamoose = true;

  dynamoose.setDefaults({
    create: true,
    update: true,
  });

  dynamoose.AWS.config.update({
    accessKeyId: process.env.app__accessKeyId,
    secretAccessKey: process.env.app__secretAccessKey,
    region: process.env.app__aws_region,
  });

  if (!isProd()) {
    dynamoose.local(process.env.app__DynamoDb_endpoint);
  }

  logger.trace('-- config: dynamoose with success');
};

const init = () => {
  if (global.initialized) return;
  global.initialized = true;

  configDynamoose();
};

init();
