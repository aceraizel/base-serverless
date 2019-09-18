/**
 * this object is for saving global state of application
 */
export const global = {
  initialized: false,
  configuredDynamoose: false,
  apps: {
    realTime: {
      modelPrefix: 'real_time_',
    },
  },
};

export const isProd = () => process.env.NODE_ENV === 'production';
export const isTest = () => process.env.NODE_ENV === 'test';
export const isOffline = () => !!process.env.IS_OFFLINE;
