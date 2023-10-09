// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.production.ts`.
// `ng test --configuration test` replaces `environment.ts` with `environment.test.ts`.
// The list of file replacements can be found in `angular.json`.

import { BuildConfig } from '../config/build-config.interface';

export const environment: Partial<BuildConfig> = {
  production: false,

  // Angular Universal settings
  universal: {
    preboot: false,
    async: true,
    time: false
  },

  // ui: {
  //   ssl: false,
  //   host: 'localhost',
  //   port: 4000,
  //   // NOTE: Space is capitalized because 'namespace' is a reserved string in TypeScript
  //   nameSpace: '/',
  //   baseUrl: 'http://localhost',
  //   // The rateLimiter settings limit each IP to a 'max' of 500 requests per 'windowMs' (1 minute).
  //   rateLimiter: {
  //     windowMs: 1 * 60 * 1000, // 1 minute
  //     max: 500 // limit each IP to 500 requests per windowMs
  //   },
  //   useProxies: false,
  // },

  // // The REST API server settings.
  //  rest: {
  //    ssl: true,
  //    host: 'dspace2023.ort.edu.uy',
  //    port: 443,
  //    // NOTE: Space is capitalized because 'namespace' is a reserved string in TypeScript
  //    nameSpace: '/server',
  //    baseUrl: 'https://dspace2023.ort.edu.uy'
  // },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
