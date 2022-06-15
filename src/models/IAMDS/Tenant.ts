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
    Reference,
    ReferenceFromJSON,
    ReferenceFromJSONTyped,
    ReferenceToJSON,
} from './Reference';
import {
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * A Tenant represents a virtual space that provides a logical container and security boundary for customer data
 * @export
 * @interface Tenant
 */
export interface Tenant {
    /**
     * Human readable name for this Tenant
     * @type {string}
     * @memberof Tenant
     */
    displayName: string;
    /**
     * 
     * @type {Reference}
     * @memberof Tenant
     */
    organization: Reference;
    /**
     * Unique identifier for the Object
     * @type {string}
     * @memberof Tenant
     */
    readonly id: string;
    /**
     * 
     * @type {InstanceMeta}
     * @memberof Tenant
     */
    meta?: InstanceMeta;
    /**
     * Identifier of the Resource (if any) in other systems
     * @type {Array<Aspect>}
     * @memberof Tenant
     */
    aspects?: Array<Aspect>;
    /**
     * User defined tags in the form of key:value pair
     * @type {Array<Tag>}
     * @memberof Tenant
     */
    tags?: Array<Tag>;
}



export function TenantFromJSON(json: any): Tenant {
    return TenantFromJSONTyped(json, false);
}

export function TenantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tenant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': json['displayName'],
        'organization': ReferenceFromJSON(json['organization']),
        'id': json['id'],
        'meta': !exists(json, 'meta') ? undefined : InstanceMetaFromJSON(json['meta']),
        'aspects': !exists(json, 'aspects') ? undefined : ((json['aspects'] as Array<any>).map(AspectFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function TenantToJSON(value?: Tenant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'organization': ReferenceToJSON(value.organization),
        'meta': InstanceMetaToJSON(value.meta),
        'aspects': value.aspects === undefined ? undefined : ((value.aspects as Array<any>).map(AspectToJSON)),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}