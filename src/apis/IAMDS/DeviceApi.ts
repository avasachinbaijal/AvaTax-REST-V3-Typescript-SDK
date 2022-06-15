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
    Device,
    DeviceFromJSON,
    DeviceToJSON,
    DeviceList,
    DeviceListFromJSON,
    DeviceListToJSON,
    GroupList,
    GroupListFromJSON,
    GroupListToJSON,
    VersionError,
    VersionErrorFromJSON,
    VersionErrorToJSON,
} from '../../packages/IAMDS';

export interface AddGrantToDeviceRequest {
    deviceId: string;
    grantId: string;
    avalaraVersion?: AddGrantToDeviceAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface CreateDeviceRequest {
    avalaraVersion?: CreateDeviceAvalaraVersionEnum;
    xCorrelationId?: string;
    device?: Device;
}

export interface DeleteDeviceRequest {
    deviceId: string;
    avalaraVersion?: DeleteDeviceAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
}

export interface GetDeviceRequest {
    deviceId: string;
    avalaraVersion?: GetDeviceAvalaraVersionEnum;
    xCorrelationId?: string;
    ifNoneMatch?: string;
}

export interface GetDeviceGroupsRequest {
    deviceId: string;
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: GetDeviceGroupsAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface ListDeviceGrantsRequest {
    deviceId: string;
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: ListDeviceGrantsAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface ListDevicesRequest {
    $filter?: string;
    $top?: string;
    $skip?: string;
    $orderBy?: string;
    count?: boolean;
    countOnly?: boolean;
    avalaraVersion?: ListDevicesAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface PatchDeviceRequest {
    deviceId: string;
    avalaraVersion?: PatchDeviceAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
    device?: Device;
}

export interface RemoveGrantFromDeviceRequest {
    deviceId: string;
    grantId: string;
    avalaraVersion?: RemoveGrantFromDeviceAvalaraVersionEnum;
    xCorrelationId?: string;
}

export interface ReplaceDeviceRequest {
    deviceId: string;
    avalaraVersion?: ReplaceDeviceAvalaraVersionEnum;
    xCorrelationId?: string;
    ifMatch?: string;
    device?: Device;
}

/**
 * 
 */
export class DeviceApi extends runtime.ApiClient {

    /**
     * Adds a grant to a device.
     * Add a grant to a device.
     */
    async addGrantToDeviceRaw(requestParameters: AddGrantToDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling addGrantToDevice.');
        }

        if (requestParameters.grantId === null || requestParameters.grantId === undefined) {
            throw new runtime.RequiredError('grantId','Required parameter requestParameters.grantId was null or undefined when calling addGrantToDevice.');
        }

        const queryParameters: any = {};

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
            path: `/devices/{device-id}/grants/{grant-id}`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))).replace(`{${"grant-id"}}`, encodeURIComponent(String(requestParameters.grantId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a grant to a device.
     * Add a grant to a device.
     */
    async addGrantToDevice(requestParameters: AddGrantToDeviceRequest, initOverrides?: RequestInit): Promise<void> {
        await this.addGrantToDeviceRaw(requestParameters, initOverrides);
    }

    /**
     * The response contains the same object as posted and fills in the newly assigned device ID.
     * Create a device.
     */
    async createDeviceRaw(requestParameters: CreateDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Device>> {
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
            path: `/devices`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeviceToJSON(requestParameters.device),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceFromJSON(jsonValue));
    }

    /**
     * The response contains the same object as posted and fills in the newly assigned device ID.
     * Create a device.
     */
    async createDevice(requestParameters: CreateDeviceRequest = {}, initOverrides?: RequestInit): Promise<Device> {
        const response = await this.createDeviceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the device by ID.
     * Delete the device.
     */
    async deleteDeviceRaw(requestParameters: DeleteDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deleteDevice.');
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
            path: `/devices/{device-id}`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the device by ID.
     * Delete the device.
     */
    async deleteDevice(requestParameters: DeleteDeviceRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteDeviceRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the specified device.
     * Get a device.
     */
    async getDeviceRaw(requestParameters: GetDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Device>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling getDevice.');
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
            path: `/devices/{device-id}`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceFromJSON(jsonValue));
    }

    /**
     * Retrieves the specified device.
     * Get a device.
     */
    async getDevice(requestParameters: GetDeviceRequest, initOverrides?: RequestInit): Promise<Device> {
        const response = await this.getDeviceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all groups a device belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * grants/identifier 
     * List all groups for the device.
     */
    async getDeviceGroupsRaw(requestParameters: GetDeviceGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GroupList>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling getDeviceGroups.');
        }

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
            path: `/devices/{device-id}/groups`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupListFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all groups a device belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * grants/identifier 
     * List all groups for the device.
     */
    async getDeviceGroups(requestParameters: GetDeviceGroupsRequest, initOverrides?: RequestInit): Promise<GroupList> {
        const response = await this.getDeviceGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all grants a device belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * system/identifier * type * role/identifier
     * List all grants for the device.
     */
    async listDeviceGrantsRaw(requestParameters: ListDeviceGrantsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeviceList>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling listDeviceGrants.');
        }

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
            path: `/devices/{device-id}/grants`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceListFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all grants a device belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * system/identifier * type * role/identifier
     * List all grants for the device.
     */
    async listDeviceGrants(requestParameters: ListDeviceGrantsRequest, initOverrides?: RequestInit): Promise<DeviceList> {
        const response = await this.listDeviceGrantsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all devices the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * tenant/identifier * active * grants/identifier * groups/identifier
     * List all devices which the user has access to.
     */
    async listDevicesRaw(requestParameters: ListDevicesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeviceList>> {
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
            path: `/devices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceListFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all devices the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * tenant/identifier * active * grants/identifier * groups/identifier
     * List all devices which the user has access to.
     */
    async listDevices(requestParameters: ListDevicesRequest = {}, initOverrides?: RequestInit): Promise<DeviceList> {
        const response = await this.listDevicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates only the fields passed in for the specified device.
     * Update only the fields in the body for the device.
     */
    async patchDeviceRaw(requestParameters: PatchDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling patchDevice.');
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
            path: `/devices/{device-id}`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: DeviceToJSON(requestParameters.device),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates only the fields passed in for the specified device.
     * Update only the fields in the body for the device.
     */
    async patchDevice(requestParameters: PatchDeviceRequest, initOverrides?: RequestInit): Promise<void> {
        await this.patchDeviceRaw(requestParameters, initOverrides);
    }

    /**
     * Removes a grant from a device.
     * Remove a grant from a device.
     */
    async removeGrantFromDeviceRaw(requestParameters: RemoveGrantFromDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling removeGrantFromDevice.');
        }

        if (requestParameters.grantId === null || requestParameters.grantId === undefined) {
            throw new runtime.RequiredError('grantId','Required parameter requestParameters.grantId was null or undefined when calling removeGrantFromDevice.');
        }

        const queryParameters: any = {};

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
            path: `/devices/{device-id}/grants/{grant-id}`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))).replace(`{${"grant-id"}}`, encodeURIComponent(String(requestParameters.grantId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes a grant from a device.
     * Remove a grant from a device.
     */
    async removeGrantFromDevice(requestParameters: RemoveGrantFromDeviceRequest, initOverrides?: RequestInit): Promise<void> {
        await this.removeGrantFromDeviceRaw(requestParameters, initOverrides);
    }

    /**
     * Replaces the specified device with the device in the body.
     * Update all fields on a device.
     */
    async replaceDeviceRaw(requestParameters: ReplaceDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling replaceDevice.');
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
            path: `/devices/{device-id}`.replace(`{${"device-id"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DeviceToJSON(requestParameters.device),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Replaces the specified device with the device in the body.
     * Update all fields on a device.
     */
    async replaceDevice(requestParameters: ReplaceDeviceRequest, initOverrides?: RequestInit): Promise<void> {
        await this.replaceDeviceRaw(requestParameters, initOverrides);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum AddGrantToDeviceAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDeviceAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteDeviceAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum GetDeviceAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum GetDeviceGroupsAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDeviceGrantsAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDevicesAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum PatchDeviceAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum RemoveGrantFromDeviceAvalaraVersionEnum {
    _100 = '1.0.0'
}
/**
    * @export
    * @enum {string}
    */
export enum ReplaceDeviceAvalaraVersionEnum {
    _100 = '1.0.0'
}
