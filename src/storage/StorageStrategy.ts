/**
 *  Creator: Christian Hotz
 *  Company: hydra newmedia GmbH
 *  Date: 11.06.16
 *
 *  Copyright hydra newmedia GmbH
 */

/**
 *  Imports
 */
import { Entity } from '../utils/Entity';
import { Snapshot } from '../utils/Snapshot';
import { Diff } from '../utils/Diff';

export interface StorageStrategy {
    insertSnapshot(snapshot: Snapshot, callback: (err: Error, snapshot?: Snapshot) => void);
    upsertSnapshot(snapshot: Snapshot, callback: (err: Error, snapshot?: Snapshot) => void);
    insertDiff(diff: Diff, callback: (err: Error, diff?: Diff) => void);
    findLatestSnapshotBefore(id: string, timestamp: Date, entity: Entity, callback: (err: Error, snapshot?: Snapshot) => void);
    findLatestDiffBefore(id: string, timestamp: Date, entity: Entity, callback: (err: Error, diff?: Diff) => void);
}
