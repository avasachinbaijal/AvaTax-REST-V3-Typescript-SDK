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

import fetch, { Response, RequestInfo, RequestInit } from 'node-fetch';
export const PRODUCTION_TOKEN_URL = 'https://TO-BE-SET';
export const SANDBOX_TOKEN_URL = 'https://TO-BE-SET';

const isBlob = (value: any) => (typeof Blob) !== 'undefined' && value instanceof Blob;

/**
 * This is the base class for all generated API classes.
 */
export class ApiClient {

    private middleware: Middleware[];
    public sdkVersion: string = null;

    constructor(public configuration: Configuration) {
        if (!configuration) {
            throw new Error('Configuration object is a required parameter for ApiClient.');
        }
        this.middleware = configuration.middleware || [];
    }

    withMiddleware<T extends ApiClient>(this: T, ...middlewares: Middleware[]) {
        const next = this.clone<T>();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }

    withPreMiddleware<T extends ApiClient>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware<T>(...middlewares);
    }

    withPostMiddleware<T extends ApiClient>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware<T>(...middlewares);
    }

    protected async request(context: RequestOpts, initOverrides?: RequestInit): Promise<Response> {
        const { url, init, timeoutId } = this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        clearTimeout(timeoutId);
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        throw response;
    }

    private createFetchParams(context: RequestOpts, initOverrides?: RequestInit) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }
        const body = ((typeof FormData !== "undefined" && context.body instanceof FormData) || context.body instanceof URLSearchParams || isBlob(context.body))
        ? context.body
        : JSON.stringify(context.body);
        // timeout logic
        const controller = new AbortController();
        const timeout = this.configuration.timeout || 1200;
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const headers = Object.assign({}, this.configuration.headers, context.headers);
        const { appName, appVersion, machineName } = this.configuration;
        headers['X-Avalara-Client'] = `${appName}; ${appVersion}; JavascriptSdk; ${this.sdkVersion}; ${machineName}`
        const init: RequestInit = {
            method: context.method,
            headers,
            body,
            signal: controller.signal,
            ...initOverrides
        };
        return { url, init, timeoutId };
    }

    private fetchApi = async (url: RequestInfo, init?: RequestInit) => {
        let fetchParams = { url, init };
        for (const middleware of this.middleware) {
            if (middleware.pre) {
                fetchParams = await middleware.pre({
                    fetch: this.fetchApi,
                    ...fetchParams,
                }) || fetchParams;
            }
        }
        
        let response = await fetch(fetchParams.url, fetchParams.init);
        for (const middleware of this.middleware) {
            if (middleware.post) {
                response = await middleware.post({
                    fetch: this.fetchApi,
                    url: fetchParams.url,
                    init: fetchParams.init,
                    response: response.clone(),
                }) || response;
            }
        }
        return response;
    }

    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone<T extends ApiClient>(this: T): T {
        const constructor = this.constructor as any;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
};

export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export type FetchAPI = typeof fetch;

export interface ConfigurationParameters {
    testBasePath?: string; // override base path when using the test environment
    testTokenUrl?: string // override token URL for OAuth 2.0 flows when using the test environment
    // fetchApi?: FetchAPI; // override for fetch implementation
    middleware?: Middleware[]; // middleware to apply before/after fetch requests
    queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
    username?: string; // parameter for basic security
    password?: string; // parameter for basic security
    bearerToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
    headers?: HTTPHeaders; //header params we want to use on every request
    appName: string; // Specify the name of your application here.  Should not contain any semicolons.
    appVersion: string; // Specify the version number of your application here.  Should not contain any semicolons.
    machineName: string; // Specify the machine name of the machine on which this code is executing here.  Should not contain any semicolons.
    environment: AvaTaxEnvironment; // Indicates which server to use.
    clientId?: string; // The ClientId used for the OAuth2 Client Credentials flow
    clientSecret?: string; // The ClientSecret used for the OAuth2 Client Credentials flow
    timeout?: number; // Specify the timeout for AvaTax requests in seconds; default value 20 minutes.
}

export class Configuration {
    constructor(private configuration: ConfigurationParameters) {}

    get basePath(): string {
        const { environment, testBasePath } = this.configuration;
        let basePath = '';
        if (environment === AvaTaxEnvironment.Sandbox) {
            basePath = 'https://sandbox-rest.avatax.com';
         } else if (environment === AvaTaxEnvironment.Production) {
            basePath = 'https://rest.avatax.com';     
         } else if (environment === AvaTaxEnvironment.Test) {
            if (!testBasePath) {
                throw new Error('TestBasePath must be configured to run in test environment mode.');
            }
            basePath = testBasePath; 
         } else {
            throw new Error('Environment not configured correctly, Acceptable values are "production", "sandbox", and "test".');
         }
        return basePath;
    }

    get tokenUrl(): string {
        const { environment, testTokenUrl } = this.configuration;
        switch (environment) {
            case AvaTaxEnvironment.Production:
                return PRODUCTION_TOKEN_URL;
            case AvaTaxEnvironment.Sandbox:
                return SANDBOX_TOKEN_URL;
            case AvaTaxEnvironment.Test:
                return testTokenUrl ? testTokenUrl : PRODUCTION_TOKEN_URL;
         }
    }

    // get fetchApi(): FetchAPI | undefined {
    //     return this.configuration.fetchApi;
    // }

    get middleware(): Middleware[] {
        return this.configuration.middleware || [];
    }

    get queryParamsStringify(): (params: HTTPQuery) => string {
        return this.configuration.queryParamsStringify || querystring;
    }

    get appName(): string {
        return this.configuration.appName;
    }

    get appVersion(): string {
        return this.configuration.appVersion;
    }

    get machineName(): string {
        return this.configuration.machineName;
    }

    get username(): string | undefined {
        return this.configuration.username;
    }

    get password(): string | undefined {
        return this.configuration.password;
    }

    get timeout(): number {
        return this.configuration.timeout || 20;
    }

    get bearerToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
        const { bearerToken } = this.configuration;
        if (bearerToken) {
            return typeof bearerToken === 'function' ? bearerToken : async () => bearerToken;
        }
        return undefined;
    }

    get headers(): HTTPHeaders | undefined {
        return this.configuration.headers;
    }
}

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | HTTPQuery };
export type HTTPBody = Json | FormData | URLSearchParams;
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

export interface FetchParams {
    url: string;
    init: RequestInit;
}

export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}

export function exists(json: any, key: string) {
    const value = json[key];
    return value !== null && value !== undefined;
}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
    return Object.keys(params)
        .map((key) => {
            const fullKey = prefix + (prefix.length ? `[${key}]` : key);
            const value = params[key];
            if (value instanceof Array) {
                const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
                    .join(`&${encodeURIComponent(fullKey)}=`);
                return `${encodeURIComponent(fullKey)}=${multiValue}`;
            }
            if (value instanceof Date) {
                return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
            }
            if (value instanceof Object) {
                return querystring(value as HTTPQuery, fullKey);
            }
            return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
        })
        .filter(part => part.length > 0)
        .join('&');
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function canConsumeForm(consumes: Consume[]): boolean {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}

export interface Consume {
    contentType: string
}

export interface RequestContext {
    fetch: FetchAPI;
    url: RequestInfo;
    init: RequestInit;
}

export interface ResponseContext {
    fetch: FetchAPI;
    url: RequestInfo;
    init: RequestInit;
    response: Response;
}

export interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams>;
    post?(context: ResponseContext): Promise<Response>;
}

export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}

export interface ResponseTransformer<T> {
    (json: any): T;
}

export class JSONApiResponse<T> {
    constructor(public raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {}

    async value(): Promise<T> {
        return this.transformer(await this.raw.json());
    }
}

export class VoidApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<void> {
        return undefined;
    }
}

export class BlobApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<Blob> {
        return await this.raw.blob();
    };
}

export class TextApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<string> {
        return await this.raw.text();
    };
}

export enum AvaTaxEnvironment {
    Production = 'prod',
    Sandbox = 'sandbox',
    Test = 'test'
}
