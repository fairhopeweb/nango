import type { NangoConnection, NangoIntegrationData } from '@nangohq/shared';

export interface InitialSyncArgs {
    syncId: string;
    syncJobId: number;
    syncName: string;
    activityLogId: number;
    nangoConnection: NangoConnection;
}

export interface ContinuousSyncArgs {
    syncId: string;
    activityLogId: number;
    syncName: string;
    syncData: NangoIntegrationData;
    nangoConnection: NangoConnection;
}
