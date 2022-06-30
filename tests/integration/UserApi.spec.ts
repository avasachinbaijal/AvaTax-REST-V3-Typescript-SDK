import 'dotenv/config';
import * as AvalaraSdk from '../../src/index';
import { Runtime } from '../../src/index';
import { AvaTaxEnvironment, Configuration } from '../../src/runtime';

const username = process.env.npm_config_username;
const password = process.env.npm_config_password;
const configParams: Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Test,
    machineName: 'test-machine',
    timeout:3000,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    testBasePath: 'https://localhost:3000',
    testTokenUrl: 'https://dev-75323271.okta.com/oauth2/default/v1/token'
};

describe('Integration Test UserAPI: ', () => {
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    // const client = null;
    let api: AvalaraSdk.IAMDS.UserApi;

    beforeEach(() => {
        api = new AvalaraSdk.IAMDS.UserApi(client);
    });

    it('should be able to call Create User endpoint', async () =>  {
        try {
            const result = await api.createUser();
            console.log(result);
        } catch (err) {
            console.log(err);
        }
        try {
            const result2 = await api.createUser();
            console.log(result2);
        } catch (err) {
            console.log(err);
        }
    });
});

describe('Integration Test For Token Verification: ', () => {
    configParams.environment = AvaTaxEnvironment.QA;
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    // const client = null;
    let api: AvalaraSdk.IAMDS.UserApi;

    beforeEach(() => {
        api = new AvalaraSdk.IAMDS.UserApi(client);
    });

    it('Configuration token URL should be as expected', async () =>  {
        try {
            const result = await api.createUser();
            console.log(result);
        } catch (err) {
            console.log(err);
        }
        expect(api.tokenUrl).toBe('https://ai-awscqa.avlr.sh/connect/token');
    });
});