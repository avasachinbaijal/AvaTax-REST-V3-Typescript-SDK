/* tslint:disable */
/* eslint-disable */
/**
 * Avalara Shipping Verification for Beverage Alcohol
 * API for evaluating transactions against direct-to-consumer Beverage Alcohol shipping regulations.  This API is currently in beta. 
 *
 * The version of the OpenAPI document: 2.1.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import {
    ErrorDetailsError,
    ErrorDetailsErrorFromJSON,
    ErrorDetailsErrorFromJSONTyped,
    ErrorDetailsErrorToJSON,
} from './ErrorDetailsError';

/**
 * Message Object
 * @export
 * @interface ErrorDetails
 */
export interface ErrorDetails {
    /**
     * 
     * @type {ErrorDetailsError}
     * @memberof ErrorDetails
     */
    error?: ErrorDetailsError;
}



export function ErrorDetailsFromJSON(json: any): ErrorDetails {
    return ErrorDetailsFromJSONTyped(json, false);
}

export function ErrorDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ErrorDetailsErrorFromJSON(json['error']),
    };
}

export function ErrorDetailsToJSON(value?: ErrorDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ErrorDetailsErrorToJSON(value.error),
    };
}
