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
 * Representation of an User
 * @export
 * @interface User
 */
export interface User {
    /**
     * Identifier for the user in external systems (clients). The external systems manage this
     * @type {string}
     * @memberof User
     */
    externalId?: string;
    /**
     * Human readable unique identifier of the user, typically used to authenticate with an identity provider
     * @type {string}
     * @memberof User
     */
    userName: string;
    /**
     * 
     * @type {Reference}
     * @memberof User
     */
    organization: Reference;
    /**
     * The components of the user's real name.  Providers MAY return just the full name as a single string in the formatted sub-attribute, or they MAY return just the individual component attributes using the other sub-attributes, or they MAY return both.  If both variants are returned, they SHOULD be describing the same name, with the formatted name indicating how the component attributes should be combined.
     * @type {object}
     * @memberof User
     */
    name?: object;
    /**
     * The name of the User, suitable for display to end-users.  The name SHOULD be the full name of the User being described, if known
     * @type {string}
     * @memberof User
     */
    displayName?: string;
    /**
     * The casual way to address the user in real life, e.g., 'Bob' or 'Bobby' instead of 'Robert'.  This attribute SHOULD NOT be used to represent a User's username (e.g., 'bjensen' or 'mpepperidge')
     * @type {string}
     * @memberof User
     */
    nickName?: string;
    /**
     * A fully qualified URL pointing to a page representing the User's online profile
     * @type {string}
     * @memberof User
     */
    profileUrl?: string;
    /**
     * The user's title, such as "Vice President."
     * @type {string}
     * @memberof User
     */
    title?: string;
    /**
     * Used to identify the relationship between the organization and the user.  Typical values used might be 'Contractor', 'Employee', 'Intern', 'Temp', 'External', and 'Unknown', but any value may be used
     * @type {string}
     * @memberof User
     */
    userType?: string;
    /**
     * Indicates the User's preferred written or spoken language.  Generally used for selecting a localized user interface; e.g., 'en_US' specifies the language English and country US
     * @type {string}
     * @memberof User
     */
    preferredLanguage?: string;
    /**
     * Used to indicate the User's default location for purposes of localizing items such as currency, date time format, or numerical representations
     * @type {string}
     * @memberof User
     */
    locale?: string;
    /**
     * The User's time zone in the 'Olson' time zone database format, e.g., 'America/Los_Angeles'
     * @type {string}
     * @memberof User
     */
    timezone?: string;
    /**
     * A Boolean value indicating the User's administrative status
     * @type {boolean}
     * @memberof User
     */
    active?: boolean;
    /**
     * The User's cleartext password.  This attribute is intended to be used as a means to specify an initial password when creating a new User or to reset an existing User's password
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     * A List of email addresses associated with the user
     * @type {Array<object>}
     * @memberof User
     */
    emails: Array<object>;
    /**
     * A List of phone numbers associated with the user
     * @type {Array<object>}
     * @memberof User
     */
    phoneNumbers?: Array<object>;
    /**
     * A physical mailing address for this User, as described in (address Element). Canonical Type Values of work, home, and other. The value attribute is a complex type with the following sub-attributes
     * @type {Array<object>}
     * @memberof User
     */
    addresses?: Array<object>;
    /**
     * 
     * @type {Reference}
     * @memberof User
     */
    defaultTenant?: Reference;
    /**
     * Custom claims that are returned along with a requested scope during authentication
     * @type {Array<object>}
     * @memberof User
     */
    customClaims?: Array<object>;
    /**
     * Unique identifier for the Object
     * @type {string}
     * @memberof User
     */
    readonly id: string;
    /**
     * 
     * @type {InstanceMeta}
     * @memberof User
     */
    meta?: InstanceMeta;
    /**
     * Identifier of the Resource (if any) in other systems
     * @type {Array<Aspect>}
     * @memberof User
     */
    aspects?: Array<Aspect>;
    /**
     * User defined tags in the form of key:value pair
     * @type {Array<Tag>}
     * @memberof User
     */
    tags?: Array<Tag>;
}



export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'userName': json['userName'],
        'organization': ReferenceFromJSON(json['organization']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'nickName': !exists(json, 'nickName') ? undefined : json['nickName'],
        'profileUrl': !exists(json, 'profileUrl') ? undefined : json['profileUrl'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'userType': !exists(json, 'userType') ? undefined : json['userType'],
        'preferredLanguage': !exists(json, 'preferredLanguage') ? undefined : json['preferredLanguage'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'emails': json['emails'],
        'phoneNumbers': !exists(json, 'phoneNumbers') ? undefined : json['phoneNumbers'],
        'addresses': !exists(json, 'addresses') ? undefined : json['addresses'],
        'defaultTenant': !exists(json, 'defaultTenant') ? undefined : ReferenceFromJSON(json['defaultTenant']),
        'customClaims': !exists(json, 'customClaims') ? undefined : json['customClaims'],
        'id': json['id'],
        'meta': !exists(json, 'meta') ? undefined : InstanceMetaFromJSON(json['meta']),
        'aspects': !exists(json, 'aspects') ? undefined : ((json['aspects'] as Array<any>).map(AspectFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalId': value.externalId,
        'userName': value.userName,
        'organization': ReferenceToJSON(value.organization),
        'name': value.name,
        'displayName': value.displayName,
        'nickName': value.nickName,
        'profileUrl': value.profileUrl,
        'title': value.title,
        'userType': value.userType,
        'preferredLanguage': value.preferredLanguage,
        'locale': value.locale,
        'timezone': value.timezone,
        'active': value.active,
        'password': value.password,
        'emails': value.emails,
        'phoneNumbers': value.phoneNumbers,
        'addresses': value.addresses,
        'defaultTenant': ReferenceToJSON(value.defaultTenant),
        'customClaims': value.customClaims,
        'meta': InstanceMetaToJSON(value.meta),
        'aspects': value.aspects === undefined ? undefined : ((value.aspects as Array<any>).map(AspectToJSON)),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}