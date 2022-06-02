import type { ConfigFile } from '@rtk-query/codegen-openapi';
import dotenv from 'dotenv';

dotenv.config({
  path: '../.env',
});

const config: ConfigFile = {
  schemaFile: process.env.SCHEMA_FILE as string,
  apiFile: '../src/shared/api/instance-api.ts',
  apiImport: 'instanceApi',
  exportName: 'generatedApi',
  hooks: true,
  outputFiles: {
    '../src/shared/api/characteristics/api.generated.ts': {
      filterEndpoints: [/Characteristic/i],
    },
    '../src/shared/api/auth/api.generated.ts': {
      filterEndpoints: [/Auth/i],
    },
    '../src/shared/api/selects/measures/api.generated.ts': {
      filterEndpoints: [/Measures/i],
    },
  },
};

export default config;
