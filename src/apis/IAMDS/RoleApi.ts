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
import {
    Role,
    RoleFromJSON,
    RoleToJSON,
    RoleList,
    RoleListFromJSON,
    RoleListToJSON,
    VersionError,
    VersionErrorFromJSON,
    VersionErrorToJSON,
} from '../../packages/IAMDS';

export interface CreateRoleRequest {
    avalaraVersion?: CreateRoleAvalaraVersionEnum;
    xCorrelationId?: string;
    role?: Role;
}

export interface DeleteRoleRequest {
    roleId: string;
    avalaraVersion?: DeleteRoleAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
}

export interface GetRoleRequest {
    roleId: string;
    avalaraVersion?: GetRoleAvalaraVersionEnum;
    xCorrelationId?: string;
    ifNoneMatch?: string;
}

export interface ListRolesRequest {
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: ListRolesAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface PatchRoleRequest {
    roleId: string;
    avalaraVersion?: PatchRoleAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
}

export interface ReplaceRoleRequest {
    roleId: string;
    avalaraVersion?: ReplaceRoleAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
    role?: Role;
}

/**
 * 
 */
export class RoleApi extends runtime.ApiClient {

    /**
     * The response contains the same object as posted and fills in the newly assigned role ID.
     * Create a role.
     */
    async createRoleRaw(requestParameters: CreateRoleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Role>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.avalaraVersion !== undefined && requestParameters.avalaraVersion !== null) {
            headerParameters['avalara-version'] = String(requestParameters.avalaraVersion);
        }

        if (requestParameters.xCorrelationId !== undefined && requestParameters.xCorrelationId !== null) {
            headerParameters['X-Correlation-Id'] = String(requestParameters.xCorrelationId);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth", ["iam", "TestScope", "TestScope1"]);
        }

        const response = await this.request({
            path: `/roles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RoleToJSON(requestParameters.role),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleFromJSON(jsonValue));
    }

    /**
     * The response contains the same object as posted and fills in the newly assigned role ID.
     * Create a role.
     */
    async createRole(requestParameters: CreateRoleRequest = {}, initOverrides?: RequestInit): Promise<Role> {
        const response = await this.createRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the specified role.
     * Delete a role.
     */
    async deleteRoleRaw(requestParameters: DeleteRoleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.roleId === null || requestParameters.roleId === undefined) {
            throw new runtime.RequiredError('roleId','Required parameter requestParameters.roleId was null or undefined when calling deleteRole.');
        }

        const queryParameters: any = {};

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

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth", ["iam", "TestScope", "TestScope1"]);
        }

        const response = await this.request({
            path: `/roles/{role-id}`.replace(`{${"role-id"}}`, encodeURIComponent(String(requestParameters.roleId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the specified role.
     * Delete a role.
     */
    async deleteRole(requestParameters: DeleteRoleRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteRoleRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a role based on its ID.
     * Retrieve a role.
     */
    async getRoleRaw(requestParameters: GetRoleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Role>> {
        if (requestParameters.roleId === null || requestParameters.roleId === undefined) {
            throw new runtime.RequiredError('roleId','Required parameter requestParameters.roleId was null or undefined when calling getRole.');
        }

        const queryParameters: any = {};

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

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth", ["iam", "TestScope", "TestScope1"]);
        }

        const response = await this.request({
            path: `/roles/{role-id}`.replace(`{${"role-id"}}`, encodeURIComponent(String(requestParameters.roleId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleFromJSON(jsonValue));
    }

    /**
     * Retrieves a role based on its ID.
     * Retrieve a role.
     */
    async getRole(requestParameters: GetRoleRequest, initOverrides?: RequestInit): Promise<Role> {
        const response = await this.getRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all roles the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * system/identifier * type * permissions
     * Get all roles which the user has access to.
     */
    async listRolesRaw(requestParameters: ListRolesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RoleList>> {
        const queryParameters: any = {};

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

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth", ["iam", "TestScope", "TestScope1"]);
        }

        const response = await this.request({
            path: `/roles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleListFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all roles the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * system/identifier * type * permissions
     * Get all roles which the user has access to.
     */
    async listRoles(requestParameters: ListRolesRequest = {}, initOverrides?: RequestInit): Promise<RoleList> {
        const response = await this.listRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update only the fields passed into the patch operation.
     * Update the fields present in the message body on the role.
     */
    async patchRoleRaw(requestParameters: PatchRoleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.roleId === null || requestParameters.roleId === undefined) {
            throw new runtime.RequiredError('roleId','Required parameter requestParameters.roleId was null or undefined when calling patchRole.');
        }

        const queryParameters: any = {};

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

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth", ["iam", "TestScope", "TestScope1"]);
        }

        const response = await this.request({
            path: `/roles/{role-id}`.replace(`{${"role-id"}}`, encodeURIComponent(String(requestParameters.roleId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update only the fields passed into the patch operation.
     * Update the fields present in the message body on the role.
     */
    async patchRole(requestParameters: PatchRoleRequest, initOverrides?: RequestInit): Promise<void> {
        await this.patchRoleRaw(requestParameters, initOverrides);
    }

    /**
     * Replaces the specified role with the role in the body.
     * Update all fields on a role.
     */
    async replaceRoleRaw(requestParameters: ReplaceRoleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.roleId === null || requestParameters.roleId === undefined) {
            throw new runtime.RequiredError('roleId','Required parameter requestParameters.roleId was null or undefined when calling replaceRole.');
        }

        const queryParameters: any = {};

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

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth", ["iam", "TestScope", "TestScope1"]);
        }

        const response = await this.request({
            path: `/roles/{role-id}`.replace(`{${"role-id"}}`, encodeURIComponent(String(requestParameters.roleId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RoleToJSON(requestParameters.role),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Replaces the specified role with the role in the body.
     * Update all fields on a role.
     */
    async replaceRole(requestParameters: ReplaceRoleRequest, initOverrides?: RequestInit): Promise<void> {
        await this.replaceRoleRaw(requestParameters, initOverrides);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum CreateRoleAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteRoleAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum GetRoleAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRolesAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum PatchRoleAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ReplaceRoleAvalaraVersionEnum {
    _100 = '1.0.0'
}
