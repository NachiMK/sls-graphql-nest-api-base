import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { ListModule } from './infra/list/list.module'
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => {
        const schemaModuleOptions: Partial<GqlModuleOptions> = {};

        // If we are in development, we want to generate the schema.graphql
        if (process.env.NODE_ENV !== 'production' || process.env.IS_OFFLINE) {
          schemaModuleOptions.autoSchemaFile = 'src/schema.gql';
        } else {
          // For production, the file should be generated
          schemaModuleOptions.typePaths = ['src/*.gql'];
        }

        return {
          context: ({ req }) => ({ req }),
          buildSchemaOptions: { dateScalarMode: 'timestamp' },
          playground: true, // Allow playground in production
          introspection: true, // Allow introspection in production
          ...schemaModuleOptions,
          sortSchema: true,
          server : {
            apollo : {
              // key: '***********************************',
              // ref: 'sf-gateway-12345@dev',
              // graphId: 'sf-gateway-12345',
            }
          },
          cache: 'bounded',
        };
      },
    }),
    HttpModule,
    DatabaseModule,
    ListModule,
  ],
})
export class AppModule {}
