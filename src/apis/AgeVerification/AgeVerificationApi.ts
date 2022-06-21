/* tslint:disable */
/* eslint-disable */
/**
 * Avalara Shipping Verification only
 * API for evaluating transactions against direct-to-consumer Beverage Alcohol shipping regulations.  This API is currently in beta. 
 *
 * The version of the OpenAPI document: 3.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../runtime';
import { RequestInit } from 'node-fetch';
import {
    AgeVerifyFailureCode,
    AgeVerifyFailureCodeFromJSON,
    AgeVerifyFailureCodeToJSON,
    AgeVerifyRequest,
    AgeVerifyRequestFromJSON,
    AgeVerifyRequestToJSON,
    AgeVerifyResult,
    AgeVerifyResultFromJSON,
    AgeVerifyResultToJSON,
} from '../../packages/AgeVerification';

export interface VerifyAgeRequest {
    ageVerifyRequest: AgeVerifyRequest;
    simulatedFailureCode?: AgeVerifyFailureCode;
}

/**
 * 
 */
export class AgeVerificationApi extends runtime.ApiClient {
    public sdkVersion: string = '2.4.41';

    constructor(apiClient: runtime.ApiClient) {
        super(apiClient.configuration);
    }

    /**
     * The request must meet the following criteria in order to be evaluated: * *firstName*, *lastName*, and *address* are required fields. * One of the following sets of attributes are required for the *address*:   * *line1, city, region*   * *line1, postalCode*  Optionally, the transaction and its lines may use the following parameters: * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21). * Beyond the required *address* fields above, a *country* field is permitted   * The valid values for this attribute are [*US, USA*]  **Security Policies** This API depends on the active subscription *AgeVerification*
     * Determines whether an individual meets or exceeds the minimum legal drinking age.
     */
    async verifyAgeRaw(requestParameters: VerifyAgeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AgeVerifyResult>> {
        if (requestParameters.ageVerifyRequest === null || requestParameters.ageVerifyRequest === undefined) {
            throw new runtime.RequiredError('ageVerifyRequest','Required parameter requestParameters.ageVerifyRequest was null or undefined when calling verifyAge.');
        }

        const queryParameters: any = {};

        if (requestParameters.simulatedFailureCode !== undefined) {
            queryParameters['simulatedFailureCode'] = requestParameters.simulatedFailureCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/ageverification/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AgeVerifyRequestToJSON(requestParameters.ageVerifyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AgeVerifyResultFromJSON(jsonValue));
    }

    /**
     * The request must meet the following criteria in order to be evaluated: * *firstName*, *lastName*, and *address* are required fields. * One of the following sets of attributes are required for the *address*:   * *line1, city, region*   * *line1, postalCode*  Optionally, the transaction and its lines may use the following parameters: * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21). * Beyond the required *address* fields above, a *country* field is permitted   * The valid values for this attribute are [*US, USA*]  **Security Policies** This API depends on the active subscription *AgeVerification*
     * Determines whether an individual meets or exceeds the minimum legal drinking age.
     */
    async verifyAge(requestParameters: VerifyAgeRequest, initOverrides?: RequestInit): Promise<AgeVerifyResult> {
        const response = await this.verifyAgeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
