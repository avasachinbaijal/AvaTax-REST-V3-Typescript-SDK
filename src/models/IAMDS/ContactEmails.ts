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
/**
 * 
 * @export
 * @interface ContactEmails
 */
export interface ContactEmails {
    /**
     * Email address of the contact
     * @type {string}
     * @memberof ContactEmails
     */
    emailId?: string;
    /**
     * Is this the primary email Id for the contact
     * @type {boolean}
     * @memberof ContactEmails
     */
    isPrimary?: boolean;
}



export function ContactEmailsFromJSON(json: any): ContactEmails {
    return ContactEmailsFromJSONTyped(json, false);
}

export function ContactEmailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactEmails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailId': !exists(json, 'emailId') ? undefined : json['emailId'],
        'isPrimary': !exists(json, 'isPrimary') ? undefined : json['isPrimary'],
    };
}

export function ContactEmailsToJSON(value?: ContactEmails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailId': value.emailId,
        'isPrimary': value.isPrimary,
    };
}
