export interface Fixture {
  entity: any;
  data: any[];
}

export interface ConfigurationInterface {
  port: number;
  env: string;
  database: {
    host: string;
    port: number;
    type: string;
    username: string;
    password: string;
    database: string;
  };
}
