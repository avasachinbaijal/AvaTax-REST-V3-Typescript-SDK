/* tslint:disable */
/* eslint-disable */
/**
 * foundation
 * Platform foundation consists of services on top of which the Avalara Compliance Cloud platform is built. These services are foundational and provide functionality such as common organization, tenant and user management for the rest of the compliance platform.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import {
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
} from './Organization';

/**
 * 
 * @export
 * @interface OrganizationList
 */
export interface OrganizationList {
    /**
     * 
     * @type {number}
     * @memberof OrganizationList
     */
    recordsetCount?: number;
    /**
     * 
     * @type {string}
     * @memberof OrganizationList
     */
    nextLink?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationList
     */
    pageKey?: string;
    /**
     * 
     * @type {Array<Organization>}
     * @memberof OrganizationList
     */
    items?: Array<Organization>;
}



export function OrganizationListFromJSON(json: any): OrganizationList {
    return OrganizationListFromJSONTyped(json, false);
}

export function OrganizationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsetCount': !exists(json, '@recordsetCount') ? undefined : json['@recordsetCount'],
        'nextLink': !exists(json, '@nextLink') ? undefined : json['@nextLink'],
        'pageKey': !exists(json, 'pageKey') ? undefined : json['pageKey'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(OrganizationFromJSON)),
    };
}

export function OrganizationListToJSON(value?: OrganizationList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@recordsetCount': value.recordsetCount,
        '@nextLink': value.nextLink,
        'pageKey': value.pageKey,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(OrganizationToJSON)),
    };
}
