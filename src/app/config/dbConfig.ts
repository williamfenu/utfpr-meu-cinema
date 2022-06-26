import { DBConfig } from 'ngx-indexed-db';

export const indexedDBConfig: DBConfig = {
  name: 'utfpr-meu-cinema/user-movies',
  version: 1,
  objectStoresMeta: [
    {
      store: 'covers',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'data', keypath: 'data', options: { unique: false } },
      ],
    },
  ],
};
