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
    Tenant,
    TenantFromJSON,
    TenantFromJSONTyped,
    TenantToJSON,
} from './Tenant';

/**
 * 
 * @export
 * @interface TenantList
 */
export interface TenantList {
    /**
     * 
     * @type {number}
     * @memberof TenantList
     */
    recordsetCount?: number;
    /**
     * 
     * @type {string}
     * @memberof TenantList
     */
    nextLink?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantList
     */
    pageKey?: string;
    /**
     * 
     * @type {Array<Tenant>}
     * @memberof TenantList
     */
    items?: Array<Tenant>;
}



export function TenantListFromJSON(json: any): TenantList {
    return TenantListFromJSONTyped(json, false);
}

export function TenantListFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsetCount': !exists(json, '@recordsetCount') ? undefined : json['@recordsetCount'],
        'nextLink': !exists(json, '@nextLink') ? undefined : json['@nextLink'],
        'pageKey': !exists(json, 'pageKey') ? undefined : json['pageKey'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(TenantFromJSON)),
    };
}

export function TenantListToJSON(value?: TenantList | null): any {
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
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(TenantToJSON)),
    };
}
