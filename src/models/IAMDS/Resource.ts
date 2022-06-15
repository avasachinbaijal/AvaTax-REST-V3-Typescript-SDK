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
 * Representation of a Resource belonging to a System
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * The resource name space used to organize permissions. Must be unique within the System
     * @type {string}
     * @memberof Resource
     */
    namespace: string;
    /**
     * Name of the resource. Used for display purposes
     * @type {string}
     * @memberof Resource
     */
    displayName?: string;
    /**
     * 
     * @type {Reference}
     * @memberof Resource
     */
    system: Reference;
    /**
     * Properties of the resource that are accessible to define conditions in Grants
     * @type {Array<string>}
     * @memberof Resource
     */
    properties?: Array<string>;
    /**
     * Unique identifier for the Object
     * @type {string}
     * @memberof Resource
     */
    readonly id: string;
    /**
     * 
     * @type {InstanceMeta}
     * @memberof Resource
     */
    meta?: InstanceMeta;
    /**
     * Identifier of the Resource (if any) in other systems
     * @type {Array<Aspect>}
     * @memberof Resource
     */
    aspects?: Array<Aspect>;
    /**
     * User defined tags in the form of key:value pair
     * @type {Array<Tag>}
     * @memberof Resource
     */
    tags?: Array<Tag>;
}



export function ResourceFromJSON(json: any): Resource {
    return ResourceFromJSONTyped(json, false);
}

export function ResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': json['namespace'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'system': ReferenceFromJSON(json['system']),
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'id': json['id'],
        'meta': !exists(json, 'meta') ? undefined : InstanceMetaFromJSON(json['meta']),
        'aspects': !exists(json, 'aspects') ? undefined : ((json['aspects'] as Array<any>).map(AspectFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function ResourceToJSON(value?: Resource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
        'displayName': value.displayName,
        'system': ReferenceToJSON(value.system),
        'properties': value.properties,
        'meta': InstanceMetaToJSON(value.meta),
        'aspects': value.aspects === undefined ? undefined : ((value.aspects as Array<any>).map(AspectToJSON)),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}
