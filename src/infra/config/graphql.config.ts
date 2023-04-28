// import { ApolloFederationDriverConfig } from '@nestjs/apollo';
// import { Injectable, Logger } from '@nestjs/common';
// import { GqlOptionsFactory } from '@nestjs/graphql';
// import { join } from 'path';

// @Injectable()
// export class GqlConfigService implements GqlOptionsFactory {
//   private readonly logger = new Logger(GqlConfigService.name);

//   createGqlOptions(): ApolloFederationDriverConfig {
//     return {
//       autoSchemaFile: isLocalDev()
//         ? join(process.cwd(), 'src/schema.gql')
//         : false, // only auto-generate schema in dev
//       buildSchemaOptions: { dateScalarMode: 'timestamp' },
//       playground: false,
//       sortSchema: isLocalDev(),
//       typePaths: !isLocalDev() ? ['src/schema.gql'] : [], // use generated graphql schema in prod
//       // cors: true, // TODO: { origin: FE_URL!, credentials: true} for production?
//       cache: 'bounded',
//     };

//     // import { buildSchemaFromSDL } from '@apollo/subgraph/dist/schema-helper';
//     // import {
//     //   ApolloServerPluginInlineTrace,
//     //   ApolloServerPluginLandingPageLocalDefault,
//     //   ApolloServerPluginUsageReporting,
//     //   ApolloServerPluginUsageReportingDisabled,
//     // } from 'apollo-server-core';
//     // return {
//     //   autoSchemaFile: isLocalDev()
//     //     ? join(process.cwd(), 'src/schema.gql')
//     //     : false, // only auto-generate schema in dev
//     //   buildSchemaOptions: { dateScalarMode: 'timestamp' },
//     //   playground: false,
//     //   sortSchema: isLocalDev(),
//     //   typePaths: !isLocalDev() ? ['src/schema.gql'] : [], // use generated graphql schema in prod
//     //   cors: true, // TODO: { origin: FE_URL!, credentials: true} for production?
//     //   server: {
//     //     apollo: {
//     //       // key: '***********************************',
//     //       //ref: 'enrollme-gateway-i0l5ie@dev',
//     //       // graphId: 'enrollme-gateway-i0l5ie',
//     //     },
//     //   },
//     //   // To fix the issue with error that says "... and are using an unbound cache."
//     //   // https://stackoverflow.com/questions/73731489/nestjs-displays-error-during-production-that-persisted-queries-are-enabled-and
//     //   cache: 'bounded',
//     //   plugins: [
//     //     ApolloServerPluginLandingPageLocalDefault(),
//     //     ApolloServerPluginInlineTrace(),
//     //     // ApolloServerPluginUsageReportingDisabled(),
//     //     // {},
//     //     isLocalDev()
//     //       ? ApolloServerPluginUsageReportingDisabled()
//     //       : ApolloServerPluginUsageReporting({
//     //           sendVariableValues: { all: true },
//     //         }),
//     //   ],
//     // } as ApolloFederationDriverConfig;
//   }
// }

// const isLocalDev = (): boolean => {
//   return process.env.NODE_ENV !== 'production';
// };
