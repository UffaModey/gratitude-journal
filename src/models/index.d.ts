import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type EntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Entry {
  readonly id: string;
  readonly date?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Entry, EntryMetaData>);
  static copyOf(source: Entry, mutator: (draft: MutableModel<Entry, EntryMetaData>) => MutableModel<Entry, EntryMetaData> | void): Entry;
}