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
 * Representation of a Permission belonging to a System
 * @export
 * @interface Permission
 */
export interface Permission {
    /**
     * 
     * @type {Reference}
     * @memberof Permission
     */
    resource: Reference;
    /**
     * Access permission type
     * @type {string}
     * @memberof Permission
     */
    access: string;
    /**
     * Name of the permission, used in roles and grants
     * @type {string}
     * @memberof Permission
     */
    readonly name?: string;
    /**
     * Unique identifier for the Object
     * @type {string}
     * @memberof Permission
     */
    readonly id: string;
    /**
     * 
     * @type {InstanceMeta}
     * @memberof Permission
     */
    meta?: InstanceMeta;
    /**
     * Identifier of the Resource (if any) in other systems
     * @type {Array<Aspect>}
     * @memberof Permission
     */
    aspects?: Array<Aspect>;
    /**
     * User defined tags in the form of key:value pair
     * @type {Array<Tag>}
     * @memberof Permission
     */
    tags?: Array<Tag>;
}



export function PermissionFromJSON(json: any): Permission {
    return PermissionFromJSONTyped(json, false);
}

export function PermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Permission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resource': ReferenceFromJSON(json['resource']),
        'access': json['access'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'id': json['id'],
        'meta': !exists(json, 'meta') ? undefined : InstanceMetaFromJSON(json['meta']),
        'aspects': !exists(json, 'aspects') ? undefined : ((json['aspects'] as Array<any>).map(AspectFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function PermissionToJSON(value?: Permission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource': ReferenceToJSON(value.resource),
        'access': value.access,
        'meta': InstanceMetaToJSON(value.meta),
        'aspects': value.aspects === undefined ? undefined : ((value.aspects as Array<any>).map(AspectToJSON)),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}
