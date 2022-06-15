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
    App,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';

/**
 * 
 * @export
 * @interface AppList
 */
export interface AppList {
    /**
     * 
     * @type {number}
     * @memberof AppList
     */
    recordsetCount?: number;
    /**
     * 
     * @type {string}
     * @memberof AppList
     */
    nextLink?: string;
    /**
     * 
     * @type {string}
     * @memberof AppList
     */
    pageKey?: string;
    /**
     * 
     * @type {Array<App>}
     * @memberof AppList
     */
    items?: Array<App>;
}



export function AppListFromJSON(json: any): AppList {
    return AppListFromJSONTyped(json, false);
}

export function AppListFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsetCount': !exists(json, '@recordsetCount') ? undefined : json['@recordsetCount'],
        'nextLink': !exists(json, '@nextLink') ? undefined : json['@nextLink'],
        'pageKey': !exists(json, 'pageKey') ? undefined : json['pageKey'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(AppFromJSON)),
    };
}

export function AppListToJSON(value?: AppList | null): any {
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
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(AppToJSON)),
    };
}
