export class SyncBotStatusDto {
    worker: {
        loopId: string;
        nowWorkUserId?: number;
        completedSyncCount: number;
        startedAt?: string;
    }[];

    syncBot: {
        prefix: string;
        startedAt: Date;
        version: string;
        workerAmount: {
            init: number;
            pro: number;
            free: number;
            sponsor: number;
        };

        timeout: number;
        stop: boolean;
    };
}
