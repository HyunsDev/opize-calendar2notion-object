import { Endpoint } from 'endpoint-client';
import { SyncBotStatusDto } from 'src/dto';

// POST /syncbots
export type PostSyncBotParameter = {
    prefix: string;
    name: string;
    url: string;
    controlSecret: string;
};
export type PostSyncBotResponse = {};
export const postSyncBot: Endpoint<PostSyncBotParameter, PostSyncBotResponse> =
    {
        method: 'POST',
        path: () => '/syncbots',
        bodyParams: ['name', 'url', 'prefix', 'controlSecret'],
        pathParams: [],
        queryParams: [],
    };

// GET /syncbots

export type GetSyncBotsParameter = {};
export type GetSyncBotsResponse = {
    id: number;
    name: string;
    url: string;
    prefix: string;
    createdAt: Date;
    status: 'good' | 'error';
    data: SyncBotStatusDto;
}[];
export const getSyncBots: Endpoint<GetSyncBotsParameter, GetSyncBotsResponse> =
    {
        method: 'GET',
        path: () => '/syncbots',
        bodyParams: [],
        pathParams: [],
        queryParams: [],
    };

// DELETE /syncbots/:prefix
export type DeleteSyncBotParameter = {
    prefix: string;
};
export type DeleteSyncBotResponse = {};
export const deleteSyncBot: Endpoint<
    DeleteSyncBotParameter,
    DeleteSyncBotResponse
> = {
    method: 'DELETE',
    path: (e) => `/syncbots/${e.prefix}`,
    bodyParams: [],
    pathParams: ['prefix'],
    queryParams: [],
};

// POST /syncbot/:prefix/stop
export type PostSyncBotStopParameter = {
    prefix: string;
};
export type PostSyncBotStopResponse = {};
export const postSyncBotStop: Endpoint<
    PostSyncBotStopParameter,
    PostSyncBotStopResponse
> = {
    method: 'POST',
    path: (e) => `/syncbots/${e.prefix}/stop`,
    bodyParams: [],
    pathParams: ['prefix'],
    queryParams: [],
};

// POST /syncbot/:prefix/exit
export type PostSyncBotExitParameter = {
    prefix: string;
};
export type PostSyncBotExitResponse = {};
export const postSyncBotExit: Endpoint<
    PostSyncBotExitParameter,
    PostSyncBotExitResponse
> = {
    method: 'POST',
    path: (e) => `/syncbots/${e.prefix}/exit`,
    bodyParams: [],
    pathParams: ['prefix'],
    queryParams: [],
};

// GET /syncbot/:prefix/logs/:date
export type GetSyncBotLogsParameter = {
    prefix: string;
    date: 'today' | string;
};
export type GetSyncBotLogsResponse = {
    runnerLog: string;
    serverLog: string;
    workerLog: string;
};
export const getSyncBotLogs: Endpoint<
    GetSyncBotLogsParameter,
    GetSyncBotLogsResponse
> = {
    path: (e) => `/syncbots/${e.prefix}/logs/${e.date}`,
    method: 'GET',
    bodyParams: [],
    pathParams: ['date', 'prefix'],
    queryParams: [],
};

// GET /syncbot/:prefix/logs-static/:fileName
export type GetSyncBotStaticLogParameter = {
    prefix: string;
    fileName: string;
};
export type GetSyncBotStaticLogResponse = {
    data: string;
};

export const getSyncBotStaticLog: Endpoint<
    GetSyncBotStaticLogParameter,
    GetSyncBotStaticLogResponse
> = {
    path: (e) => `/syncbots/${e.prefix}/logs-static`,
    method: 'GET',
    bodyParams: [],
    pathParams: ['prefix'],
    queryParams: ['fileName'],
};

// GET /syncbot/:prefix/logs
export type GetSyncBotLogListParameter = {
    prefix: string;
};
export type GetSyncBotLogListResponse = {
    runnerLogs: string[];
    serverLogs: string[];
    workerLogs: string[];
    runnerErrorLogs: string[];
    serverErrorLogs: string[];
    workerErrorLogs: string[];
};
export const getSyncBotLogList: Endpoint<
    GetSyncBotLogListParameter,
    GetSyncBotLogListResponse
> = {
    path: (e) => `/syncbots/${e.prefix}/logs`,
    method: 'GET',
    bodyParams: [],
    pathParams: ['prefix'],
    queryParams: [],
};
