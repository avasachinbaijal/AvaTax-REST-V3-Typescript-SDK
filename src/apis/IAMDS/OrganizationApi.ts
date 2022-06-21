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


import * as runtime from '../../runtime';
import { RequestInit } from 'node-fetch';
import {
    AppList,
    AppListFromJSON,
    AppListToJSON,
    Organization,
    OrganizationFromJSON,
    OrganizationToJSON,
    OrganizationList,
    OrganizationListFromJSON,
    OrganizationListToJSON,
    TenantList,
    TenantListFromJSON,
    TenantListToJSON,
    UserList,
    UserListFromJSON,
    UserListToJSON,
    VersionError,
    VersionErrorFromJSON,
    VersionErrorToJSON,
} from '../../packages/IAMDS';

export interface CreateOrganizationsRequest {
    avalaraVersion?: CreateOrganizationsAvalaraVersionEnum;
    xCorrelationId?: string;
    organization?: Organization;
}

export interface DeleteOrganizationRequest {
    organizationId: string;
    avalaraVersion?: DeleteOrganizationAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
}

export interface GetOrganizationRequest {
    organizationId: string;
    avalaraVersion?: GetOrganizationAvalaraVersionEnum;
    xCorrelationId?: string;
    ifNoneMatch?: string;
}

export interface ListOrganizationAppsRequest {
    organizationId: string;
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: ListOrganizationAppsAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface ListOrganizationTenantsRequest {
    organizationId: string;
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: ListOrganizationTenantsAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface ListOrganizationUsersRequest {
    organizationId: string;
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: ListOrganizationUsersAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface ListOrganizationsRequest {
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: ListOrganizationsAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface PatchOrganizationRequest {
    organizationId: string;
    avalaraVersion?: PatchOrganizationAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
    organization?: Organization;
}

export interface ReplaceOrganizationRequest {
    organizationId: string;
    avalaraVersion?: ReplaceOrganizationAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
    organization?: Organization;
}

/**
 * 
 */
export class OrganizationApi extends runtime.ApiClient {
    public sdkVersion: string = '2.4.41';

    constructor(apiClient: runtime.ApiClient) {
        super(apiClient.configuration);
    }

    /**
     * The response contains the same object as posted and fills in the newly assigned organization ID.
     * Create an organization.
     */
    async createOrganizationsRaw(requestParameters: CreateOrganizationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Organization>> {
        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationToJSON(requestParameters.organization),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

    /**
     * The response contains the same object as posted and fills in the newly assigned organization ID.
     * Create an organization.
     */
    async createOrganizations(requestParameters: CreateOrganizationsRequest = {}, initOverrides?: RequestInit): Promise<Organization> {
        const response = await this.createOrganizationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the specified organization.
     * Delete an organization.
     */
    async deleteOrganizationRaw(requestParameters: DeleteOrganizationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling deleteOrganization.');
        }

        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations/{organization-id}`.replace(`{${"organization-id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the specified organization.
     * Delete an organization.
     */
    async deleteOrganization(requestParameters: DeleteOrganizationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteOrganizationRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a specific organization which the current ID has access to.
     * Get an organization.
     */
    async getOrganizationRaw(requestParameters: GetOrganizationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Organization>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getOrganization.');
        }

        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations/{organization-id}`.replace(`{${"organization-id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

    /**
     * Retrieves a specific organization which the current ID has access to.
     * Get an organization.
     */
    async getOrganization(requestParameters: GetOrganizationRequest, initOverrides?: RequestInit): Promise<Organization> {
        const response = await this.getOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of applications associated with an organization.  Filterable properties:   * displayName * type * tenants/identifier * grants/identifier
     * Get all apps within an organization.
     */
    async listOrganizationAppsRaw(requestParameters: ListOrganizationAppsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AppList>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling listOrganizationApps.');
        }

        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        if (requestParameters.$orderBy !== undefined) {
            queryParameters['$orderBy'] = requestParameters.$orderBy;
        }

        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        if (requestParameters.countOnly !== undefined) {
            queryParameters['countOnly'] = requestParameters.countOnly;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations/{organization-id}/apps`.replace(`{${"organization-id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppListFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of applications associated with an organization.  Filterable properties:   * displayName * type * tenants/identifier * grants/identifier
     * Get all apps within an organization.
     */
    async listOrganizationApps(requestParameters: ListOrganizationAppsRequest, initOverrides?: RequestInit): Promise<AppList> {
        const response = await this.listOrganizationAppsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all tenants within the organization which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName
     * Get all tenants within an organization.
     */
    async listOrganizationTenantsRaw(requestParameters: ListOrganizationTenantsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TenantList>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling listOrganizationTenants.');
        }

        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        if (requestParameters.$orderBy !== undefined) {
            queryParameters['$orderBy'] = requestParameters.$orderBy;
        }

        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        if (requestParameters.countOnly !== undefined) {
            queryParameters['countOnly'] = requestParameters.countOnly;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations/{organization-id}/tenants`.replace(`{${"organization-id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TenantListFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all tenants within the organization which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName
     * Get all tenants within an organization.
     */
    async listOrganizationTenants(requestParameters: ListOrganizationTenantsRequest, initOverrides?: RequestInit): Promise<TenantList> {
        const response = await this.listOrganizationTenantsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all users within the organization which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * emails/value * active * userName
     * Get all users within an organization.
     */
    async listOrganizationUsersRaw(requestParameters: ListOrganizationUsersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UserList>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling listOrganizationUsers.');
        }

        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        if (requestParameters.$orderBy !== undefined) {
            queryParameters['$orderBy'] = requestParameters.$orderBy;
        }

        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        if (requestParameters.countOnly !== undefined) {
            queryParameters['countOnly'] = requestParameters.countOnly;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations/{organization-id}/users`.replace(`{${"organization-id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserListFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all users within the organization which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * emails/value * active * userName
     * Get all users within an organization.
     */
    async listOrganizationUsers(requestParameters: ListOrganizationUsersRequest, initOverrides?: RequestInit): Promise<UserList> {
        const response = await this.listOrganizationUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all organizations the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName
     * List all organizations which the user has access to.
     */
    async listOrganizationsRaw(requestParameters: ListOrganizationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OrganizationList>> {
        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        if (requestParameters.$orderBy !== undefined) {
            queryParameters['$orderBy'] = requestParameters.$orderBy;
        }

        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        if (requestParameters.countOnly !== undefined) {
            queryParameters['countOnly'] = requestParameters.countOnly;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationListFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all organizations the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName
     * List all organizations which the user has access to.
     */
    async listOrganizations(requestParameters: ListOrganizationsRequest = {}, initOverrides?: RequestInit): Promise<OrganizationList> {
        const response = await this.listOrganizationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an organization, only applying the changes delivered in the payload. 
     * Update the fields present in the message body on the organization.
     */
    async patchOrganizationRaw(requestParameters: PatchOrganizationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling patchOrganization.');
        }

        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations/{organization-id}`.replace(`{${"organization-id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationToJSON(requestParameters.organization),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates an organization, only applying the changes delivered in the payload. 
     * Update the fields present in the message body on the organization.
     */
    async patchOrganization(requestParameters: PatchOrganizationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.patchOrganizationRaw(requestParameters, initOverrides);
    }

    /**
     * Replaces the specified organization with the organization in the body.
     * Update all fields on an organization.
     */
    async replaceOrganizationRaw(requestParameters: ReplaceOrganizationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling replaceOrganization.');
        }

        const queryParameters: any = {};
        const requiredScopes = "iam TestScope TestScope1";
        const authNames: string[] = ['OAuth'];
        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }

        await this.applyAuthToRequest(headerParameters, authNames, requiredScopes);
        const response = await this.request({
            path: `/organizations/{organization-id}`.replace(`{${"organization-id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationToJSON(requestParameters.organization),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Replaces the specified organization with the organization in the body.
     * Update all fields on an organization.
     */
    async replaceOrganization(requestParameters: ReplaceOrganizationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.replaceOrganizationRaw(requestParameters, initOverrides);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum CreateOrganizationsAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteOrganizationAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOrganizationAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ListOrganizationAppsAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ListOrganizationTenantsAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ListOrganizationUsersAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ListOrganizationsAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum PatchOrganizationAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ReplaceOrganizationAvalaraVersionEnum {
    _100 = '1.0.0'
}
