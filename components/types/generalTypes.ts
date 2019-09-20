interface IDeleteMongoRes {
  ok?: number;
  n?: number;
  deletedCount?: number;
}

interface IObj {
  [key: string]: any;
}

type Nullable<T> = T | null;
