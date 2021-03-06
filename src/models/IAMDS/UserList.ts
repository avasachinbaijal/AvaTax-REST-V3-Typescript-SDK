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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UserList
 */
export interface UserList {
    /**
     * 
     * @type {number}
     * @memberof UserList
     */
    recordsetCount?: number;
    /**
     * 
     * @type {string}
     * @memberof UserList
     */
    nextLink?: string;
    /**
     * 
     * @type {string}
     * @memberof UserList
     */
    pageKey?: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof UserList
     */
    items?: Array<User>;
}



export function UserListFromJSON(json: any): UserList {
    return UserListFromJSONTyped(json, false);
}

export function UserListFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsetCount': !exists(json, '@recordsetCount') ? undefined : json['@recordsetCount'],
        'nextLink': !exists(json, '@nextLink') ? undefined : json['@nextLink'],
        'pageKey': !exists(json, 'pageKey') ? undefined : json['pageKey'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(UserFromJSON)),
    };
}

export function UserListToJSON(value?: UserList | null): any {
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
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(UserToJSON)),
    };
}
