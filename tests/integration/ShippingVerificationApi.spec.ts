import 'dotenv/config';
import * as AvalaraSdk from '../../src/index';
import { Runtime } from '../../src/index';
import { AvaTaxEnvironment, Configuration } from '../../src/runtime';

const username = process.env.npm_config_username;
const password = process.env.npm_config_password;
const configParams: Runtime.ConfigurationParameters = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: AvaTaxEnvironment.Sandbox,
    machineName: 'test-machine',
    timeout:3000,
    username,
    password
};

describe('Integration Test Shipping Verification API: ', () => {
    const config = new Configuration(configParams);
    var client = new Runtime.ApiClient(config);
    // const client = null;
    let api: AvalaraSdk.Shipping.ShippingVerificationApi;

    beforeEach(() => {
        api = new AvalaraSdk.Shipping.ShippingVerificationApi(client);
    });

    it('should be able to call Verify Shipment endpoint', (done) => {
        const request: AvalaraSdk.Shipping.VerifyShipmentRequest ={
            companyCode: "DEFAULT",
            transactionCode: "063e1af4-11d3-4489-b8ba-ae1149758df4"
        };
        api.verifyShipment(request).then(result => {
           expect(result).toBeTruthy();
           expect(result.compliant).toBeFalsy();
           expect(result.message.toLowerCase()).toBe('transaction is not compliant');
           done();
        }).catch(err => {
            console.log(err);
        });
    });
});