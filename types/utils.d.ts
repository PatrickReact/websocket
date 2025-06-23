export type PrimitiveConstructors =
  | StringConstructor
  | NumberConstructor
  | BooleanConstructor
  | DateConstructor
  | ObjectConstructor;

export type ConstructorMapping<T> =
  T extends StringConstructor ? string :
  T extends NumberConstructor ? number :
  T extends BooleanConstructor ? boolean :
  T extends DateConstructor ? Date :
  T extends ObjectConstructor ? object :
  never;

  type ExtractMongooseType<T> =
  T extends { type: infer U } ? ConstructToType<U> : ConstructToType<T>;

  type ConstructToType<T> =
  T extends PrimitiveConstructors ? ConstructorMapping<T> :
  T extends Array<infer U> ? ConstructToType<U>[] :
  T extends { type: infer U } ? (
    U extends Array<infer I> ? ConstructToType<I>[] :
    ConstructToType<U>
  ) :
  T extends object ? {
    [K in keyof T as K extends 'default' ? never : K]: ExtractMongooseType<T[K]>
  } :
  never;