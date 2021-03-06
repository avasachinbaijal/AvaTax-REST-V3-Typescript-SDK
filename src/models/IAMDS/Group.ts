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
 * Representation of a Group that can contain other principals
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * Identifier for the group in external systems (clients). The external systems manage this
     * @type {string}
     * @memberof Group
     */
    externalId?: string;
    /**
     * Name of the group, unique within the Tenant
     * @type {string}
     * @memberof Group
     */
    displayName: string;
    /**
     * 
     * @type {Reference}
     * @memberof Group
     */
    tenant: Reference;
    /**
     * List of members belonging to the group
     * @type {Array<object>}
     * @memberof Group
     */
    members?: Array<object>;
    /**
     * List of grants assigned to the Group
     * @type {Array<Reference>}
     * @memberof Group
     */
    grants?: Array<Reference>;
    /**
     * Unique identifier for the Object
     * @type {string}
     * @memberof Group
     */
    readonly id: string;
    /**
     * 
     * @type {InstanceMeta}
     * @memberof Group
     */
    meta?: InstanceMeta;
    /**
     * Identifier of the Resource (if any) in other systems
     * @type {Array<Aspect>}
     * @memberof Group
     */
    aspects?: Array<Aspect>;
    /**
     * User defined tags in the form of key:value pair
     * @type {Array<Tag>}
     * @memberof Group
     */
    tags?: Array<Tag>;
}



export function GroupFromJSON(json: any): Group {
    return GroupFromJSONTyped(json, false);
}

export function GroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): Group {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'displayName': json['displayName'],
        'tenant': ReferenceFromJSON(json['tenant']),
        'members': !exists(json, 'members') ? undefined : json['members'],
        'grants': !exists(json, 'grants') ? undefined : ((json['grants'] as Array<any>).map(ReferenceFromJSON)),
        'id': json['id'],
        'meta': !exists(json, 'meta') ? undefined : InstanceMetaFromJSON(json['meta']),
        'aspects': !exists(json, 'aspects') ? undefined : ((json['aspects'] as Array<any>).map(AspectFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function GroupToJSON(value?: Group | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalId': value.externalId,
        'displayName': value.displayName,
        'tenant': ReferenceToJSON(value.tenant),
        'members': value.members,
        'grants': value.grants === undefined ? undefined : ((value.grants as Array<any>).map(ReferenceToJSON)),
        'meta': InstanceMetaToJSON(value.meta),
        'aspects': value.aspects === undefined ? undefined : ((value.aspects as Array<any>).map(AspectToJSON)),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}
