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
/**
 * 
 * @export
 * @interface ShippingVerifyResultLines
 */
export interface ShippingVerifyResultLines {
    /**
     * Describes whether the line is compliant or not. In cases where a determination could not be made, resultCode will provide the reason why.
     * @type {string}
     * @memberof ShippingVerifyResultLines
     */
    resultCode?: ShippingVerifyResultLinesResultCodeEnum;
    /**
     * The lineNumber of the line evaluated.
     * @type {string}
     * @memberof ShippingVerifyResultLines
     */
    lineNumber?: string;
    /**
     * A short description of the result of the checks made against this line.
     * @type {string}
     * @memberof ShippingVerifyResultLines
     */
    message?: string;
    /**
     * A detailed description of the result of each of the passed checks made against this line.
     * @type {string}
     * @memberof ShippingVerifyResultLines
     */
    successMessages?: string;
    /**
     * A detailed description of the result of each of the failed checks made against this line.
     * @type {string}
     * @memberof ShippingVerifyResultLines
     */
    failureMessages?: string;
    /**
     * An enumeration of all the failure codes received for this line.
     * @type {Array<string>}
     * @memberof ShippingVerifyResultLines
     */
    failureCodes?: Array<ShippingVerifyResultLinesFailureCodesEnum>;
}

/**
* @export
* @enum {string}
*/
export enum ShippingVerifyResultLinesResultCodeEnum {
    Compliant = 'Compliant',
    NotCompliant = 'NotCompliant',
    UnsupportedTaxCode = 'UnsupportedTaxCode',
    UnsupportedAddress = 'UnsupportedAddress',
    InvalidLine = 'InvalidLine'
}/**
* @export
* @enum {string}
*/
export enum ShippingVerifyResultLinesFailureCodesEnum {
    BelowLegalDrinkingAge = 'BelowLegalDrinkingAge',
    ShippingProhibitedToAddress = 'ShippingProhibitedToAddress',
    MissingRequiredLicense = 'MissingRequiredLicense',
    VolumeLimitExceeded = 'VolumeLimitExceeded',
    InvalidFieldValue = 'InvalidFieldValue',
    MissingRequiredField = 'MissingRequiredField',
    InvalidFieldType = 'InvalidFieldType',
    InvalidFormat = 'InvalidFormat',
    InvalidDate = 'InvalidDate'
}

export function ShippingVerifyResultLinesFromJSON(json: any): ShippingVerifyResultLines {
    return ShippingVerifyResultLinesFromJSONTyped(json, false);
}

export function ShippingVerifyResultLinesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingVerifyResultLines {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resultCode': !exists(json, 'resultCode') ? undefined : json['resultCode'],
        'lineNumber': !exists(json, 'lineNumber') ? undefined : json['lineNumber'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'successMessages': !exists(json, 'successMessages') ? undefined : json['successMessages'],
        'failureMessages': !exists(json, 'failureMessages') ? undefined : json['failureMessages'],
        'failureCodes': !exists(json, 'failureCodes') ? undefined : json['failureCodes'],
    };
}

export function ShippingVerifyResultLinesToJSON(value?: ShippingVerifyResultLines | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resultCode': value.resultCode,
        'lineNumber': value.lineNumber,
        'message': value.message,
        'successMessages': value.successMessages,
        'failureMessages': value.failureMessages,
        'failureCodes': value.failureCodes,
    };
}
