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

import { exists, mapValues } from '../../runtime';
import {
    AgeVerifyRequestAddress,
    AgeVerifyRequestAddressFromJSON,
    AgeVerifyRequestAddressFromJSONTyped,
    AgeVerifyRequestAddressToJSON,
} from './AgeVerifyRequestAddress';

/**
 * The Request for the /ageVerification/verify endpoint. Describes information about the person whose age is being verified.
 * @export
 * @interface AgeVerifyRequest
 */
export interface AgeVerifyRequest {
    /**
     * 
     * @type {string}
     * @memberof AgeVerifyRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof AgeVerifyRequest
     */
    lastName?: string;
    /**
     * 
     * @type {AgeVerifyRequestAddress}
     * @memberof AgeVerifyRequest
     */
    address?: AgeVerifyRequestAddress;
    /**
     * The value should be ISO-8601 compliant (e.g. 2020-07-21).
     * @type {string}
     * @memberof AgeVerifyRequest
     */
    dOB?: string;
}



export function AgeVerifyRequestFromJSON(json: any): AgeVerifyRequest {
    return AgeVerifyRequestFromJSONTyped(json, false);
}

export function AgeVerifyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeVerifyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'address': !exists(json, 'address') ? undefined : AgeVerifyRequestAddressFromJSON(json['address']),
        'dOB': !exists(json, 'DOB') ? undefined : json['DOB'],
    };
}

export function AgeVerifyRequestToJSON(value?: AgeVerifyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'address': AgeVerifyRequestAddressToJSON(value.address),
        'DOB': value.dOB,
    };
}
