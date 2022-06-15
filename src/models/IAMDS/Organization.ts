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
    Aspect,
    AspectFromJSON,
    AspectFromJSONTyped,
    AspectToJSON,
} from './Aspect';
import {
    Contact,
    ContactFromJSON,
    ContactFromJSONTyped,
    ContactToJSON,
} from './Contact';
import {
    Instance,
    InstanceFromJSON,
    InstanceFromJSONTyped,
    InstanceToJSON,
} from './Instance';
import {
    InstanceMeta,
    InstanceMetaFromJSON,
    InstanceMetaFromJSONTyped,
    InstanceMetaToJSON,
} from './InstanceMeta';
import {
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * An IAM Organization defines a logical context in which Users and Tenants are managed
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * Human-readable name of the Organization
     * @type {string}
     * @memberof Organization
     */
    displayName?: string;
    /**
     * Organization contacts
     * @type {Array<Contact>}
     * @memberof Organization
     */
    contacts?: Array<Contact>;
    /**
     * Address of the Organization
     * @type {object}
     * @memberof Organization
     */
    address?: object;
    /**
     * Unique identifier for the Object
     * @type {string}
     * @memberof Organization
     */
    readonly id: string;
    /**
     * 
     * @type {InstanceMeta}
     * @memberof Organization
     */
    meta?: InstanceMeta;
    /**
     * Identifier of the Resource (if any) in other systems
     * @type {Array<Aspect>}
     * @memberof Organization
     */
    aspects?: Array<Aspect>;
    /**
     * User defined tags in the form of key:value pair
     * @type {Array<Tag>}
     * @memberof Organization
     */
    tags?: Array<Tag>;
}



export function OrganizationFromJSON(json: any): Organization {
    return OrganizationFromJSONTyped(json, false);
}

export function OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Organization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'contacts': !exists(json, 'contacts') ? undefined : ((json['contacts'] as Array<any>).map(ContactFromJSON)),
        'address': !exists(json, 'address') ? undefined : json['address'],
        'id': json['id'],
        'meta': !exists(json, 'meta') ? undefined : InstanceMetaFromJSON(json['meta']),
        'aspects': !exists(json, 'aspects') ? undefined : ((json['aspects'] as Array<any>).map(AspectFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function OrganizationToJSON(value?: Organization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'contacts': value.contacts === undefined ? undefined : ((value.contacts as Array<any>).map(ContactToJSON)),
        'address': value.address,
        'meta': InstanceMetaToJSON(value.meta),
        'aspects': value.aspects === undefined ? undefined : ((value.aspects as Array<any>).map(AspectToJSON)),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}
