
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model IncidentEvidence
 * 
 */
export type IncidentEvidence = $Result.DefaultSelection<Prisma.$IncidentEvidencePayload>
/**
 * Model ArchivedIncident
 * 
 */
export type ArchivedIncident = $Result.DefaultSelection<Prisma.$ArchivedIncidentPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model VerifiedContact
 * 
 */
export type VerifiedContact = $Result.DefaultSelection<Prisma.$VerifiedContactPayload>
/**
 * Model AnomalyReport
 * 
 */
export type AnomalyReport = $Result.DefaultSelection<Prisma.$AnomalyReportPayload>
/**
 * Model AnomalyVerification
 * 
 */
export type AnomalyVerification = $Result.DefaultSelection<Prisma.$AnomalyVerificationPayload>
/**
 * Model KycRequest
 * 
 */
export type KycRequest = $Result.DefaultSelection<Prisma.$KycRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Institutions
 * const institutions = await prisma.institution.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Institutions
   * const institutions = await prisma.institution.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentEvidence`: Exposes CRUD operations for the **IncidentEvidence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentEvidences
    * const incidentEvidences = await prisma.incidentEvidence.findMany()
    * ```
    */
  get incidentEvidence(): Prisma.IncidentEvidenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archivedIncident`: Exposes CRUD operations for the **ArchivedIncident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArchivedIncidents
    * const archivedIncidents = await prisma.archivedIncident.findMany()
    * ```
    */
  get archivedIncident(): Prisma.ArchivedIncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verifiedContact`: Exposes CRUD operations for the **VerifiedContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerifiedContacts
    * const verifiedContacts = await prisma.verifiedContact.findMany()
    * ```
    */
  get verifiedContact(): Prisma.VerifiedContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anomalyReport`: Exposes CRUD operations for the **AnomalyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnomalyReports
    * const anomalyReports = await prisma.anomalyReport.findMany()
    * ```
    */
  get anomalyReport(): Prisma.AnomalyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anomalyVerification`: Exposes CRUD operations for the **AnomalyVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnomalyVerifications
    * const anomalyVerifications = await prisma.anomalyVerification.findMany()
    * ```
    */
  get anomalyVerification(): Prisma.AnomalyVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kycRequest`: Exposes CRUD operations for the **KycRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KycRequests
    * const kycRequests = await prisma.kycRequest.findMany()
    * ```
    */
  get kycRequest(): Prisma.KycRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Institution: 'Institution',
    User: 'User',
    Incident: 'Incident',
    IncidentEvidence: 'IncidentEvidence',
    ArchivedIncident: 'ArchivedIncident',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    VerifiedContact: 'VerifiedContact',
    AnomalyReport: 'AnomalyReport',
    AnomalyVerification: 'AnomalyVerification',
    KycRequest: 'KycRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "institution" | "user" | "incident" | "incidentEvidence" | "archivedIncident" | "session" | "account" | "verification" | "verifiedContact" | "anomalyReport" | "anomalyVerification" | "kycRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      IncidentEvidence: {
        payload: Prisma.$IncidentEvidencePayload<ExtArgs>
        fields: Prisma.IncidentEvidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentEvidenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentEvidenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>
          }
          findFirst: {
            args: Prisma.IncidentEvidenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentEvidenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>
          }
          findMany: {
            args: Prisma.IncidentEvidenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>[]
          }
          create: {
            args: Prisma.IncidentEvidenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>
          }
          createMany: {
            args: Prisma.IncidentEvidenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentEvidenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>[]
          }
          delete: {
            args: Prisma.IncidentEvidenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>
          }
          update: {
            args: Prisma.IncidentEvidenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>
          }
          deleteMany: {
            args: Prisma.IncidentEvidenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentEvidenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentEvidenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>[]
          }
          upsert: {
            args: Prisma.IncidentEvidenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEvidencePayload>
          }
          aggregate: {
            args: Prisma.IncidentEvidenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentEvidence>
          }
          groupBy: {
            args: Prisma.IncidentEvidenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentEvidenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentEvidenceCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentEvidenceCountAggregateOutputType> | number
          }
        }
      }
      ArchivedIncident: {
        payload: Prisma.$ArchivedIncidentPayload<ExtArgs>
        fields: Prisma.ArchivedIncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchivedIncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchivedIncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>
          }
          findFirst: {
            args: Prisma.ArchivedIncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchivedIncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>
          }
          findMany: {
            args: Prisma.ArchivedIncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>[]
          }
          create: {
            args: Prisma.ArchivedIncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>
          }
          createMany: {
            args: Prisma.ArchivedIncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchivedIncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>[]
          }
          delete: {
            args: Prisma.ArchivedIncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>
          }
          update: {
            args: Prisma.ArchivedIncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>
          }
          deleteMany: {
            args: Prisma.ArchivedIncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchivedIncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArchivedIncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>[]
          }
          upsert: {
            args: Prisma.ArchivedIncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedIncidentPayload>
          }
          aggregate: {
            args: Prisma.ArchivedIncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivedIncident>
          }
          groupBy: {
            args: Prisma.ArchivedIncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivedIncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchivedIncidentCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivedIncidentCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      VerifiedContact: {
        payload: Prisma.$VerifiedContactPayload<ExtArgs>
        fields: Prisma.VerifiedContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerifiedContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerifiedContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>
          }
          findFirst: {
            args: Prisma.VerifiedContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerifiedContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>
          }
          findMany: {
            args: Prisma.VerifiedContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>[]
          }
          create: {
            args: Prisma.VerifiedContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>
          }
          createMany: {
            args: Prisma.VerifiedContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerifiedContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>[]
          }
          delete: {
            args: Prisma.VerifiedContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>
          }
          update: {
            args: Prisma.VerifiedContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>
          }
          deleteMany: {
            args: Prisma.VerifiedContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerifiedContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerifiedContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>[]
          }
          upsert: {
            args: Prisma.VerifiedContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifiedContactPayload>
          }
          aggregate: {
            args: Prisma.VerifiedContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerifiedContact>
          }
          groupBy: {
            args: Prisma.VerifiedContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerifiedContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerifiedContactCountArgs<ExtArgs>
            result: $Utils.Optional<VerifiedContactCountAggregateOutputType> | number
          }
        }
      }
      AnomalyReport: {
        payload: Prisma.$AnomalyReportPayload<ExtArgs>
        fields: Prisma.AnomalyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnomalyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnomalyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          findFirst: {
            args: Prisma.AnomalyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnomalyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          findMany: {
            args: Prisma.AnomalyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>[]
          }
          create: {
            args: Prisma.AnomalyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          createMany: {
            args: Prisma.AnomalyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnomalyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>[]
          }
          delete: {
            args: Prisma.AnomalyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          update: {
            args: Prisma.AnomalyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          deleteMany: {
            args: Prisma.AnomalyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnomalyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnomalyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>[]
          }
          upsert: {
            args: Prisma.AnomalyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          aggregate: {
            args: Prisma.AnomalyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnomalyReport>
          }
          groupBy: {
            args: Prisma.AnomalyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnomalyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnomalyReportCountArgs<ExtArgs>
            result: $Utils.Optional<AnomalyReportCountAggregateOutputType> | number
          }
        }
      }
      AnomalyVerification: {
        payload: Prisma.$AnomalyVerificationPayload<ExtArgs>
        fields: Prisma.AnomalyVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnomalyVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnomalyVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>
          }
          findFirst: {
            args: Prisma.AnomalyVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnomalyVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>
          }
          findMany: {
            args: Prisma.AnomalyVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>[]
          }
          create: {
            args: Prisma.AnomalyVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>
          }
          createMany: {
            args: Prisma.AnomalyVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnomalyVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>[]
          }
          delete: {
            args: Prisma.AnomalyVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>
          }
          update: {
            args: Prisma.AnomalyVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>
          }
          deleteMany: {
            args: Prisma.AnomalyVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnomalyVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnomalyVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>[]
          }
          upsert: {
            args: Prisma.AnomalyVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyVerificationPayload>
          }
          aggregate: {
            args: Prisma.AnomalyVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnomalyVerification>
          }
          groupBy: {
            args: Prisma.AnomalyVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnomalyVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnomalyVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<AnomalyVerificationCountAggregateOutputType> | number
          }
        }
      }
      KycRequest: {
        payload: Prisma.$KycRequestPayload<ExtArgs>
        fields: Prisma.KycRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KycRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KycRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>
          }
          findFirst: {
            args: Prisma.KycRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KycRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>
          }
          findMany: {
            args: Prisma.KycRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>[]
          }
          create: {
            args: Prisma.KycRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>
          }
          createMany: {
            args: Prisma.KycRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KycRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>[]
          }
          delete: {
            args: Prisma.KycRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>
          }
          update: {
            args: Prisma.KycRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>
          }
          deleteMany: {
            args: Prisma.KycRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KycRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KycRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>[]
          }
          upsert: {
            args: Prisma.KycRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycRequestPayload>
          }
          aggregate: {
            args: Prisma.KycRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKycRequest>
          }
          groupBy: {
            args: Prisma.KycRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<KycRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.KycRequestCountArgs<ExtArgs>
            result: $Utils.Optional<KycRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    institution?: InstitutionOmit
    user?: UserOmit
    incident?: IncidentOmit
    incidentEvidence?: IncidentEvidenceOmit
    archivedIncident?: ArchivedIncidentOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    verifiedContact?: VerifiedContactOmit
    anomalyReport?: AnomalyReportOmit
    anomalyVerification?: AnomalyVerificationOmit
    kycRequest?: KycRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    contacts: number
    anomalies: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | InstitutionCountOutputTypeCountContactsArgs
    anomalies?: boolean | InstitutionCountOutputTypeCountAnomaliesArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerifiedContactWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountAnomaliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyReportWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    incidents: number
    verifications: number
    anomalyVerifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    incidents?: boolean | UserCountOutputTypeCountIncidentsArgs
    verifications?: boolean | UserCountOutputTypeCountVerificationsArgs
    anomalyVerifications?: boolean | UserCountOutputTypeCountAnomalyVerificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnomalyVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyVerificationWhereInput
  }


  /**
   * Count Type IncidentCountOutputType
   */

  export type IncidentCountOutputType = {
    evidence: number
  }

  export type IncidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evidence?: boolean | IncidentCountOutputTypeCountEvidenceArgs
  }

  // Custom InputTypes
  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentCountOutputType
     */
    select?: IncidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountEvidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentEvidenceWhereInput
  }


  /**
   * Count Type AnomalyReportCountOutputType
   */

  export type AnomalyReportCountOutputType = {
    verifications: number
  }

  export type AnomalyReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | AnomalyReportCountOutputTypeCountVerificationsArgs
  }

  // Custom InputTypes
  /**
   * AnomalyReportCountOutputType without action
   */
  export type AnomalyReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReportCountOutputType
     */
    select?: AnomalyReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnomalyReportCountOutputType without action
   */
  export type AnomalyReportCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyVerificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    publicKey: string | null
    officialWebsite: string | null
    officialHotline: string | null
    recoverySteps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    publicKey: string | null
    officialWebsite: string | null
    officialHotline: string | null
    recoverySteps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    publicKey: number
    officialWebsite: number
    officialHotline: number
    recoverySteps: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstitutionMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    publicKey?: true
    officialWebsite?: true
    officialHotline?: true
    recoverySteps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    publicKey?: true
    officialWebsite?: true
    officialHotline?: true
    recoverySteps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    publicKey?: true
    officialWebsite?: true
    officialHotline?: true
    recoverySteps?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    id: string
    name: string
    domain: string | null
    publicKey: string | null
    officialWebsite: string | null
    officialHotline: string | null
    recoverySteps: string | null
    createdAt: Date
    updatedAt: Date
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    publicKey?: boolean
    officialWebsite?: boolean
    officialHotline?: boolean
    recoverySteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contacts?: boolean | Institution$contactsArgs<ExtArgs>
    anomalies?: boolean | Institution$anomaliesArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    publicKey?: boolean
    officialWebsite?: boolean
    officialHotline?: boolean
    recoverySteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    publicKey?: boolean
    officialWebsite?: boolean
    officialHotline?: boolean
    recoverySteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    publicKey?: boolean
    officialWebsite?: boolean
    officialHotline?: boolean
    recoverySteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "publicKey" | "officialWebsite" | "officialHotline" | "recoverySteps" | "createdAt" | "updatedAt", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | Institution$contactsArgs<ExtArgs>
    anomalies?: boolean | Institution$anomaliesArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      contacts: Prisma.$VerifiedContactPayload<ExtArgs>[]
      anomalies: Prisma.$AnomalyReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string | null
      publicKey: string | null
      officialWebsite: string | null
      officialHotline: string | null
      recoverySteps: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends Institution$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Institution$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anomalies<T extends Institution$anomaliesArgs<ExtArgs> = {}>(args?: Subset<T, Institution$anomaliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly id: FieldRef<"Institution", 'String'>
    readonly name: FieldRef<"Institution", 'String'>
    readonly domain: FieldRef<"Institution", 'String'>
    readonly publicKey: FieldRef<"Institution", 'String'>
    readonly officialWebsite: FieldRef<"Institution", 'String'>
    readonly officialHotline: FieldRef<"Institution", 'String'>
    readonly recoverySteps: FieldRef<"Institution", 'String'>
    readonly createdAt: FieldRef<"Institution", 'DateTime'>
    readonly updatedAt: FieldRef<"Institution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.contacts
   */
  export type Institution$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    where?: VerifiedContactWhereInput
    orderBy?: VerifiedContactOrderByWithRelationInput | VerifiedContactOrderByWithRelationInput[]
    cursor?: VerifiedContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerifiedContactScalarFieldEnum | VerifiedContactScalarFieldEnum[]
  }

  /**
   * Institution.anomalies
   */
  export type Institution$anomaliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    where?: AnomalyReportWhereInput
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    cursor?: AnomalyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnomalyReportScalarFieldEnum | AnomalyReportScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    reputationPoints: number | null
  }

  export type UserSumAggregateOutputType = {
    reputationPoints: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    isKycVerified: boolean | null
    reputationPoints: number | null
    lastClaimedAt: Date | null
    badges: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    isKycVerified: boolean | null
    reputationPoints: number | null
    lastClaimedAt: Date | null
    badges: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    isKycVerified: number
    reputationPoints: number
    lastClaimedAt: number
    badges: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    reputationPoints?: true
  }

  export type UserSumAggregateInputType = {
    reputationPoints?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    isKycVerified?: true
    reputationPoints?: true
    lastClaimedAt?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    isKycVerified?: true
    reputationPoints?: true
    lastClaimedAt?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    isKycVerified?: true
    reputationPoints?: true
    lastClaimedAt?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    role: string
    isKycVerified: boolean
    reputationPoints: number
    lastClaimedAt: Date | null
    badges: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    isKycVerified?: boolean
    reputationPoints?: boolean
    lastClaimedAt?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    anomalyVerifications?: boolean | User$anomalyVerificationsArgs<ExtArgs>
    kycRequest?: boolean | User$kycRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    isKycVerified?: boolean
    reputationPoints?: boolean
    lastClaimedAt?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    isKycVerified?: boolean
    reputationPoints?: boolean
    lastClaimedAt?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    isKycVerified?: boolean
    reputationPoints?: boolean
    lastClaimedAt?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "isKycVerified" | "reputationPoints" | "lastClaimedAt" | "badges" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    anomalyVerifications?: boolean | User$anomalyVerificationsArgs<ExtArgs>
    kycRequest?: boolean | User$kycRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      verifications: Prisma.$IncidentPayload<ExtArgs>[]
      anomalyVerifications: Prisma.$AnomalyVerificationPayload<ExtArgs>[]
      kycRequest: Prisma.$KycRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      role: string
      isKycVerified: boolean
      reputationPoints: number
      lastClaimedAt: Date | null
      badges: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends User$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, User$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifications<T extends User$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anomalyVerifications<T extends User$anomalyVerificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$anomalyVerificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kycRequest<T extends User$kycRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$kycRequestArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isKycVerified: FieldRef<"User", 'Boolean'>
    readonly reputationPoints: FieldRef<"User", 'Int'>
    readonly lastClaimedAt: FieldRef<"User", 'DateTime'>
    readonly badges: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.incidents
   */
  export type User$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.verifications
   */
  export type User$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.anomalyVerifications
   */
  export type User$anomalyVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    where?: AnomalyVerificationWhereInput
    orderBy?: AnomalyVerificationOrderByWithRelationInput | AnomalyVerificationOrderByWithRelationInput[]
    cursor?: AnomalyVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnomalyVerificationScalarFieldEnum | AnomalyVerificationScalarFieldEnum[]
  }

  /**
   * User.kycRequest
   */
  export type User$kycRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    where?: KycRequestWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    story: string | null
    scammerNumber: string | null
    spoofedBank: string | null
    status: string | null
    isArchived: boolean | null
    authorId: string | null
    verifierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    story: string | null
    scammerNumber: string | null
    spoofedBank: string | null
    status: string | null
    isArchived: boolean | null
    authorId: string | null
    verifierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    story: number
    scammerNumber: number
    spoofedBank: number
    status: number
    isArchived: number
    authorId: number
    verifierId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentMinAggregateInputType = {
    id?: true
    story?: true
    scammerNumber?: true
    spoofedBank?: true
    status?: true
    isArchived?: true
    authorId?: true
    verifierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    story?: true
    scammerNumber?: true
    spoofedBank?: true
    status?: true
    isArchived?: true
    authorId?: true
    verifierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    story?: true
    scammerNumber?: true
    spoofedBank?: true
    status?: true
    isArchived?: true
    authorId?: true
    verifierId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    story: string
    scammerNumber: string | null
    spoofedBank: string | null
    status: string
    isArchived: boolean
    authorId: string
    verifierId: string | null
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    story?: boolean
    scammerNumber?: boolean
    spoofedBank?: boolean
    status?: boolean
    isArchived?: boolean
    authorId?: boolean
    verifierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evidence?: boolean | Incident$evidenceArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Incident$verifierArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    story?: boolean
    scammerNumber?: boolean
    spoofedBank?: boolean
    status?: boolean
    isArchived?: boolean
    authorId?: boolean
    verifierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Incident$verifierArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    story?: boolean
    scammerNumber?: boolean
    spoofedBank?: boolean
    status?: boolean
    isArchived?: boolean
    authorId?: boolean
    verifierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Incident$verifierArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    story?: boolean
    scammerNumber?: boolean
    spoofedBank?: boolean
    status?: boolean
    isArchived?: boolean
    authorId?: boolean
    verifierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "story" | "scammerNumber" | "spoofedBank" | "status" | "isArchived" | "authorId" | "verifierId" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evidence?: boolean | Incident$evidenceArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Incident$verifierArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Incident$verifierArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Incident$verifierArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      evidence: Prisma.$IncidentEvidencePayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
      verifier: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      story: string
      scammerNumber: string | null
      spoofedBank: string | null
      status: string
      isArchived: boolean
      authorId: string
      verifierId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evidence<T extends Incident$evidenceArgs<ExtArgs> = {}>(args?: Subset<T, Incident$evidenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifier<T extends Incident$verifierArgs<ExtArgs> = {}>(args?: Subset<T, Incident$verifierArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly story: FieldRef<"Incident", 'String'>
    readonly scammerNumber: FieldRef<"Incident", 'String'>
    readonly spoofedBank: FieldRef<"Incident", 'String'>
    readonly status: FieldRef<"Incident", 'String'>
    readonly isArchived: FieldRef<"Incident", 'Boolean'>
    readonly authorId: FieldRef<"Incident", 'String'>
    readonly verifierId: FieldRef<"Incident", 'String'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.evidence
   */
  export type Incident$evidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    where?: IncidentEvidenceWhereInput
    orderBy?: IncidentEvidenceOrderByWithRelationInput | IncidentEvidenceOrderByWithRelationInput[]
    cursor?: IncidentEvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentEvidenceScalarFieldEnum | IncidentEvidenceScalarFieldEnum[]
  }

  /**
   * Incident.verifier
   */
  export type Incident$verifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model IncidentEvidence
   */

  export type AggregateIncidentEvidence = {
    _count: IncidentEvidenceCountAggregateOutputType | null
    _min: IncidentEvidenceMinAggregateOutputType | null
    _max: IncidentEvidenceMaxAggregateOutputType | null
  }

  export type IncidentEvidenceMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    sanitizedUrl: string | null
    originalEvidenceUrl: string | null
    createdAt: Date | null
  }

  export type IncidentEvidenceMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    sanitizedUrl: string | null
    originalEvidenceUrl: string | null
    createdAt: Date | null
  }

  export type IncidentEvidenceCountAggregateOutputType = {
    id: number
    incidentId: number
    sanitizedUrl: number
    originalEvidenceUrl: number
    createdAt: number
    _all: number
  }


  export type IncidentEvidenceMinAggregateInputType = {
    id?: true
    incidentId?: true
    sanitizedUrl?: true
    originalEvidenceUrl?: true
    createdAt?: true
  }

  export type IncidentEvidenceMaxAggregateInputType = {
    id?: true
    incidentId?: true
    sanitizedUrl?: true
    originalEvidenceUrl?: true
    createdAt?: true
  }

  export type IncidentEvidenceCountAggregateInputType = {
    id?: true
    incidentId?: true
    sanitizedUrl?: true
    originalEvidenceUrl?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentEvidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentEvidence to aggregate.
     */
    where?: IncidentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvidences to fetch.
     */
    orderBy?: IncidentEvidenceOrderByWithRelationInput | IncidentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentEvidences
    **/
    _count?: true | IncidentEvidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentEvidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentEvidenceMaxAggregateInputType
  }

  export type GetIncidentEvidenceAggregateType<T extends IncidentEvidenceAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentEvidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentEvidence[P]>
      : GetScalarType<T[P], AggregateIncidentEvidence[P]>
  }




  export type IncidentEvidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentEvidenceWhereInput
    orderBy?: IncidentEvidenceOrderByWithAggregationInput | IncidentEvidenceOrderByWithAggregationInput[]
    by: IncidentEvidenceScalarFieldEnum[] | IncidentEvidenceScalarFieldEnum
    having?: IncidentEvidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentEvidenceCountAggregateInputType | true
    _min?: IncidentEvidenceMinAggregateInputType
    _max?: IncidentEvidenceMaxAggregateInputType
  }

  export type IncidentEvidenceGroupByOutputType = {
    id: string
    incidentId: string
    sanitizedUrl: string
    originalEvidenceUrl: string
    createdAt: Date
    _count: IncidentEvidenceCountAggregateOutputType | null
    _min: IncidentEvidenceMinAggregateOutputType | null
    _max: IncidentEvidenceMaxAggregateOutputType | null
  }

  type GetIncidentEvidenceGroupByPayload<T extends IncidentEvidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentEvidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentEvidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentEvidenceGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentEvidenceGroupByOutputType[P]>
        }
      >
    >


  export type IncidentEvidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    sanitizedUrl?: boolean
    originalEvidenceUrl?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentEvidence"]>

  export type IncidentEvidenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    sanitizedUrl?: boolean
    originalEvidenceUrl?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentEvidence"]>

  export type IncidentEvidenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    sanitizedUrl?: boolean
    originalEvidenceUrl?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentEvidence"]>

  export type IncidentEvidenceSelectScalar = {
    id?: boolean
    incidentId?: boolean
    sanitizedUrl?: boolean
    originalEvidenceUrl?: boolean
    createdAt?: boolean
  }

  export type IncidentEvidenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "sanitizedUrl" | "originalEvidenceUrl" | "createdAt", ExtArgs["result"]["incidentEvidence"]>
  export type IncidentEvidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentEvidenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentEvidenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentEvidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentEvidence"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      sanitizedUrl: string
      originalEvidenceUrl: string
      createdAt: Date
    }, ExtArgs["result"]["incidentEvidence"]>
    composites: {}
  }

  type IncidentEvidenceGetPayload<S extends boolean | null | undefined | IncidentEvidenceDefaultArgs> = $Result.GetResult<Prisma.$IncidentEvidencePayload, S>

  type IncidentEvidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentEvidenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentEvidenceCountAggregateInputType | true
    }

  export interface IncidentEvidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentEvidence'], meta: { name: 'IncidentEvidence' } }
    /**
     * Find zero or one IncidentEvidence that matches the filter.
     * @param {IncidentEvidenceFindUniqueArgs} args - Arguments to find a IncidentEvidence
     * @example
     * // Get one IncidentEvidence
     * const incidentEvidence = await prisma.incidentEvidence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentEvidenceFindUniqueArgs>(args: SelectSubset<T, IncidentEvidenceFindUniqueArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentEvidence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentEvidenceFindUniqueOrThrowArgs} args - Arguments to find a IncidentEvidence
     * @example
     * // Get one IncidentEvidence
     * const incidentEvidence = await prisma.incidentEvidence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentEvidenceFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentEvidenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentEvidence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEvidenceFindFirstArgs} args - Arguments to find a IncidentEvidence
     * @example
     * // Get one IncidentEvidence
     * const incidentEvidence = await prisma.incidentEvidence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentEvidenceFindFirstArgs>(args?: SelectSubset<T, IncidentEvidenceFindFirstArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentEvidence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEvidenceFindFirstOrThrowArgs} args - Arguments to find a IncidentEvidence
     * @example
     * // Get one IncidentEvidence
     * const incidentEvidence = await prisma.incidentEvidence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentEvidenceFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentEvidenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentEvidences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEvidenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentEvidences
     * const incidentEvidences = await prisma.incidentEvidence.findMany()
     * 
     * // Get first 10 IncidentEvidences
     * const incidentEvidences = await prisma.incidentEvidence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentEvidenceWithIdOnly = await prisma.incidentEvidence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentEvidenceFindManyArgs>(args?: SelectSubset<T, IncidentEvidenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentEvidence.
     * @param {IncidentEvidenceCreateArgs} args - Arguments to create a IncidentEvidence.
     * @example
     * // Create one IncidentEvidence
     * const IncidentEvidence = await prisma.incidentEvidence.create({
     *   data: {
     *     // ... data to create a IncidentEvidence
     *   }
     * })
     * 
     */
    create<T extends IncidentEvidenceCreateArgs>(args: SelectSubset<T, IncidentEvidenceCreateArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentEvidences.
     * @param {IncidentEvidenceCreateManyArgs} args - Arguments to create many IncidentEvidences.
     * @example
     * // Create many IncidentEvidences
     * const incidentEvidence = await prisma.incidentEvidence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentEvidenceCreateManyArgs>(args?: SelectSubset<T, IncidentEvidenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentEvidences and returns the data saved in the database.
     * @param {IncidentEvidenceCreateManyAndReturnArgs} args - Arguments to create many IncidentEvidences.
     * @example
     * // Create many IncidentEvidences
     * const incidentEvidence = await prisma.incidentEvidence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentEvidences and only return the `id`
     * const incidentEvidenceWithIdOnly = await prisma.incidentEvidence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentEvidenceCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentEvidenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentEvidence.
     * @param {IncidentEvidenceDeleteArgs} args - Arguments to delete one IncidentEvidence.
     * @example
     * // Delete one IncidentEvidence
     * const IncidentEvidence = await prisma.incidentEvidence.delete({
     *   where: {
     *     // ... filter to delete one IncidentEvidence
     *   }
     * })
     * 
     */
    delete<T extends IncidentEvidenceDeleteArgs>(args: SelectSubset<T, IncidentEvidenceDeleteArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentEvidence.
     * @param {IncidentEvidenceUpdateArgs} args - Arguments to update one IncidentEvidence.
     * @example
     * // Update one IncidentEvidence
     * const incidentEvidence = await prisma.incidentEvidence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentEvidenceUpdateArgs>(args: SelectSubset<T, IncidentEvidenceUpdateArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentEvidences.
     * @param {IncidentEvidenceDeleteManyArgs} args - Arguments to filter IncidentEvidences to delete.
     * @example
     * // Delete a few IncidentEvidences
     * const { count } = await prisma.incidentEvidence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentEvidenceDeleteManyArgs>(args?: SelectSubset<T, IncidentEvidenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentEvidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEvidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentEvidences
     * const incidentEvidence = await prisma.incidentEvidence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentEvidenceUpdateManyArgs>(args: SelectSubset<T, IncidentEvidenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentEvidences and returns the data updated in the database.
     * @param {IncidentEvidenceUpdateManyAndReturnArgs} args - Arguments to update many IncidentEvidences.
     * @example
     * // Update many IncidentEvidences
     * const incidentEvidence = await prisma.incidentEvidence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentEvidences and only return the `id`
     * const incidentEvidenceWithIdOnly = await prisma.incidentEvidence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentEvidenceUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentEvidenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentEvidence.
     * @param {IncidentEvidenceUpsertArgs} args - Arguments to update or create a IncidentEvidence.
     * @example
     * // Update or create a IncidentEvidence
     * const incidentEvidence = await prisma.incidentEvidence.upsert({
     *   create: {
     *     // ... data to create a IncidentEvidence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentEvidence we want to update
     *   }
     * })
     */
    upsert<T extends IncidentEvidenceUpsertArgs>(args: SelectSubset<T, IncidentEvidenceUpsertArgs<ExtArgs>>): Prisma__IncidentEvidenceClient<$Result.GetResult<Prisma.$IncidentEvidencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentEvidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEvidenceCountArgs} args - Arguments to filter IncidentEvidences to count.
     * @example
     * // Count the number of IncidentEvidences
     * const count = await prisma.incidentEvidence.count({
     *   where: {
     *     // ... the filter for the IncidentEvidences we want to count
     *   }
     * })
    **/
    count<T extends IncidentEvidenceCountArgs>(
      args?: Subset<T, IncidentEvidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentEvidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentEvidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEvidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentEvidenceAggregateArgs>(args: Subset<T, IncidentEvidenceAggregateArgs>): Prisma.PrismaPromise<GetIncidentEvidenceAggregateType<T>>

    /**
     * Group by IncidentEvidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEvidenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentEvidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentEvidenceGroupByArgs['orderBy'] }
        : { orderBy?: IncidentEvidenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentEvidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentEvidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentEvidence model
   */
  readonly fields: IncidentEvidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentEvidence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentEvidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncidentEvidence model
   */
  interface IncidentEvidenceFieldRefs {
    readonly id: FieldRef<"IncidentEvidence", 'String'>
    readonly incidentId: FieldRef<"IncidentEvidence", 'String'>
    readonly sanitizedUrl: FieldRef<"IncidentEvidence", 'String'>
    readonly originalEvidenceUrl: FieldRef<"IncidentEvidence", 'String'>
    readonly createdAt: FieldRef<"IncidentEvidence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentEvidence findUnique
   */
  export type IncidentEvidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvidence to fetch.
     */
    where: IncidentEvidenceWhereUniqueInput
  }

  /**
   * IncidentEvidence findUniqueOrThrow
   */
  export type IncidentEvidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvidence to fetch.
     */
    where: IncidentEvidenceWhereUniqueInput
  }

  /**
   * IncidentEvidence findFirst
   */
  export type IncidentEvidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvidence to fetch.
     */
    where?: IncidentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvidences to fetch.
     */
    orderBy?: IncidentEvidenceOrderByWithRelationInput | IncidentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentEvidences.
     */
    cursor?: IncidentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentEvidences.
     */
    distinct?: IncidentEvidenceScalarFieldEnum | IncidentEvidenceScalarFieldEnum[]
  }

  /**
   * IncidentEvidence findFirstOrThrow
   */
  export type IncidentEvidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvidence to fetch.
     */
    where?: IncidentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvidences to fetch.
     */
    orderBy?: IncidentEvidenceOrderByWithRelationInput | IncidentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentEvidences.
     */
    cursor?: IncidentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentEvidences.
     */
    distinct?: IncidentEvidenceScalarFieldEnum | IncidentEvidenceScalarFieldEnum[]
  }

  /**
   * IncidentEvidence findMany
   */
  export type IncidentEvidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvidences to fetch.
     */
    where?: IncidentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvidences to fetch.
     */
    orderBy?: IncidentEvidenceOrderByWithRelationInput | IncidentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentEvidences.
     */
    cursor?: IncidentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentEvidences.
     */
    distinct?: IncidentEvidenceScalarFieldEnum | IncidentEvidenceScalarFieldEnum[]
  }

  /**
   * IncidentEvidence create
   */
  export type IncidentEvidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentEvidence.
     */
    data: XOR<IncidentEvidenceCreateInput, IncidentEvidenceUncheckedCreateInput>
  }

  /**
   * IncidentEvidence createMany
   */
  export type IncidentEvidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentEvidences.
     */
    data: IncidentEvidenceCreateManyInput | IncidentEvidenceCreateManyInput[]
  }

  /**
   * IncidentEvidence createManyAndReturn
   */
  export type IncidentEvidenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentEvidences.
     */
    data: IncidentEvidenceCreateManyInput | IncidentEvidenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentEvidence update
   */
  export type IncidentEvidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentEvidence.
     */
    data: XOR<IncidentEvidenceUpdateInput, IncidentEvidenceUncheckedUpdateInput>
    /**
     * Choose, which IncidentEvidence to update.
     */
    where: IncidentEvidenceWhereUniqueInput
  }

  /**
   * IncidentEvidence updateMany
   */
  export type IncidentEvidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentEvidences.
     */
    data: XOR<IncidentEvidenceUpdateManyMutationInput, IncidentEvidenceUncheckedUpdateManyInput>
    /**
     * Filter which IncidentEvidences to update
     */
    where?: IncidentEvidenceWhereInput
    /**
     * Limit how many IncidentEvidences to update.
     */
    limit?: number
  }

  /**
   * IncidentEvidence updateManyAndReturn
   */
  export type IncidentEvidenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * The data used to update IncidentEvidences.
     */
    data: XOR<IncidentEvidenceUpdateManyMutationInput, IncidentEvidenceUncheckedUpdateManyInput>
    /**
     * Filter which IncidentEvidences to update
     */
    where?: IncidentEvidenceWhereInput
    /**
     * Limit how many IncidentEvidences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentEvidence upsert
   */
  export type IncidentEvidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentEvidence to update in case it exists.
     */
    where: IncidentEvidenceWhereUniqueInput
    /**
     * In case the IncidentEvidence found by the `where` argument doesn't exist, create a new IncidentEvidence with this data.
     */
    create: XOR<IncidentEvidenceCreateInput, IncidentEvidenceUncheckedCreateInput>
    /**
     * In case the IncidentEvidence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentEvidenceUpdateInput, IncidentEvidenceUncheckedUpdateInput>
  }

  /**
   * IncidentEvidence delete
   */
  export type IncidentEvidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
    /**
     * Filter which IncidentEvidence to delete.
     */
    where: IncidentEvidenceWhereUniqueInput
  }

  /**
   * IncidentEvidence deleteMany
   */
  export type IncidentEvidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentEvidences to delete
     */
    where?: IncidentEvidenceWhereInput
    /**
     * Limit how many IncidentEvidences to delete.
     */
    limit?: number
  }

  /**
   * IncidentEvidence without action
   */
  export type IncidentEvidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvidence
     */
    select?: IncidentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvidence
     */
    omit?: IncidentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEvidenceInclude<ExtArgs> | null
  }


  /**
   * Model ArchivedIncident
   */

  export type AggregateArchivedIncident = {
    _count: ArchivedIncidentCountAggregateOutputType | null
    _min: ArchivedIncidentMinAggregateOutputType | null
    _max: ArchivedIncidentMaxAggregateOutputType | null
  }

  export type ArchivedIncidentMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    encryptedStory: string | null
    metadata: string | null
    archivedAt: Date | null
  }

  export type ArchivedIncidentMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    encryptedStory: string | null
    metadata: string | null
    archivedAt: Date | null
  }

  export type ArchivedIncidentCountAggregateOutputType = {
    id: number
    incidentId: number
    encryptedStory: number
    metadata: number
    archivedAt: number
    _all: number
  }


  export type ArchivedIncidentMinAggregateInputType = {
    id?: true
    incidentId?: true
    encryptedStory?: true
    metadata?: true
    archivedAt?: true
  }

  export type ArchivedIncidentMaxAggregateInputType = {
    id?: true
    incidentId?: true
    encryptedStory?: true
    metadata?: true
    archivedAt?: true
  }

  export type ArchivedIncidentCountAggregateInputType = {
    id?: true
    incidentId?: true
    encryptedStory?: true
    metadata?: true
    archivedAt?: true
    _all?: true
  }

  export type ArchivedIncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchivedIncident to aggregate.
     */
    where?: ArchivedIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedIncidents to fetch.
     */
    orderBy?: ArchivedIncidentOrderByWithRelationInput | ArchivedIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchivedIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArchivedIncidents
    **/
    _count?: true | ArchivedIncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivedIncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivedIncidentMaxAggregateInputType
  }

  export type GetArchivedIncidentAggregateType<T extends ArchivedIncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivedIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivedIncident[P]>
      : GetScalarType<T[P], AggregateArchivedIncident[P]>
  }




  export type ArchivedIncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivedIncidentWhereInput
    orderBy?: ArchivedIncidentOrderByWithAggregationInput | ArchivedIncidentOrderByWithAggregationInput[]
    by: ArchivedIncidentScalarFieldEnum[] | ArchivedIncidentScalarFieldEnum
    having?: ArchivedIncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivedIncidentCountAggregateInputType | true
    _min?: ArchivedIncidentMinAggregateInputType
    _max?: ArchivedIncidentMaxAggregateInputType
  }

  export type ArchivedIncidentGroupByOutputType = {
    id: string
    incidentId: string
    encryptedStory: string
    metadata: string | null
    archivedAt: Date
    _count: ArchivedIncidentCountAggregateOutputType | null
    _min: ArchivedIncidentMinAggregateOutputType | null
    _max: ArchivedIncidentMaxAggregateOutputType | null
  }

  type GetArchivedIncidentGroupByPayload<T extends ArchivedIncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivedIncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivedIncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivedIncidentGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivedIncidentGroupByOutputType[P]>
        }
      >
    >


  export type ArchivedIncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    encryptedStory?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["archivedIncident"]>

  export type ArchivedIncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    encryptedStory?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["archivedIncident"]>

  export type ArchivedIncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    encryptedStory?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["archivedIncident"]>

  export type ArchivedIncidentSelectScalar = {
    id?: boolean
    incidentId?: boolean
    encryptedStory?: boolean
    metadata?: boolean
    archivedAt?: boolean
  }

  export type ArchivedIncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "encryptedStory" | "metadata" | "archivedAt", ExtArgs["result"]["archivedIncident"]>

  export type $ArchivedIncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArchivedIncident"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      encryptedStory: string
      metadata: string | null
      archivedAt: Date
    }, ExtArgs["result"]["archivedIncident"]>
    composites: {}
  }

  type ArchivedIncidentGetPayload<S extends boolean | null | undefined | ArchivedIncidentDefaultArgs> = $Result.GetResult<Prisma.$ArchivedIncidentPayload, S>

  type ArchivedIncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchivedIncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchivedIncidentCountAggregateInputType | true
    }

  export interface ArchivedIncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArchivedIncident'], meta: { name: 'ArchivedIncident' } }
    /**
     * Find zero or one ArchivedIncident that matches the filter.
     * @param {ArchivedIncidentFindUniqueArgs} args - Arguments to find a ArchivedIncident
     * @example
     * // Get one ArchivedIncident
     * const archivedIncident = await prisma.archivedIncident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchivedIncidentFindUniqueArgs>(args: SelectSubset<T, ArchivedIncidentFindUniqueArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArchivedIncident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchivedIncidentFindUniqueOrThrowArgs} args - Arguments to find a ArchivedIncident
     * @example
     * // Get one ArchivedIncident
     * const archivedIncident = await prisma.archivedIncident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchivedIncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchivedIncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchivedIncident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedIncidentFindFirstArgs} args - Arguments to find a ArchivedIncident
     * @example
     * // Get one ArchivedIncident
     * const archivedIncident = await prisma.archivedIncident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchivedIncidentFindFirstArgs>(args?: SelectSubset<T, ArchivedIncidentFindFirstArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchivedIncident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedIncidentFindFirstOrThrowArgs} args - Arguments to find a ArchivedIncident
     * @example
     * // Get one ArchivedIncident
     * const archivedIncident = await prisma.archivedIncident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchivedIncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchivedIncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArchivedIncidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedIncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArchivedIncidents
     * const archivedIncidents = await prisma.archivedIncident.findMany()
     * 
     * // Get first 10 ArchivedIncidents
     * const archivedIncidents = await prisma.archivedIncident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archivedIncidentWithIdOnly = await prisma.archivedIncident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchivedIncidentFindManyArgs>(args?: SelectSubset<T, ArchivedIncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArchivedIncident.
     * @param {ArchivedIncidentCreateArgs} args - Arguments to create a ArchivedIncident.
     * @example
     * // Create one ArchivedIncident
     * const ArchivedIncident = await prisma.archivedIncident.create({
     *   data: {
     *     // ... data to create a ArchivedIncident
     *   }
     * })
     * 
     */
    create<T extends ArchivedIncidentCreateArgs>(args: SelectSubset<T, ArchivedIncidentCreateArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArchivedIncidents.
     * @param {ArchivedIncidentCreateManyArgs} args - Arguments to create many ArchivedIncidents.
     * @example
     * // Create many ArchivedIncidents
     * const archivedIncident = await prisma.archivedIncident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchivedIncidentCreateManyArgs>(args?: SelectSubset<T, ArchivedIncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArchivedIncidents and returns the data saved in the database.
     * @param {ArchivedIncidentCreateManyAndReturnArgs} args - Arguments to create many ArchivedIncidents.
     * @example
     * // Create many ArchivedIncidents
     * const archivedIncident = await prisma.archivedIncident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArchivedIncidents and only return the `id`
     * const archivedIncidentWithIdOnly = await prisma.archivedIncident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchivedIncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchivedIncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArchivedIncident.
     * @param {ArchivedIncidentDeleteArgs} args - Arguments to delete one ArchivedIncident.
     * @example
     * // Delete one ArchivedIncident
     * const ArchivedIncident = await prisma.archivedIncident.delete({
     *   where: {
     *     // ... filter to delete one ArchivedIncident
     *   }
     * })
     * 
     */
    delete<T extends ArchivedIncidentDeleteArgs>(args: SelectSubset<T, ArchivedIncidentDeleteArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArchivedIncident.
     * @param {ArchivedIncidentUpdateArgs} args - Arguments to update one ArchivedIncident.
     * @example
     * // Update one ArchivedIncident
     * const archivedIncident = await prisma.archivedIncident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchivedIncidentUpdateArgs>(args: SelectSubset<T, ArchivedIncidentUpdateArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArchivedIncidents.
     * @param {ArchivedIncidentDeleteManyArgs} args - Arguments to filter ArchivedIncidents to delete.
     * @example
     * // Delete a few ArchivedIncidents
     * const { count } = await prisma.archivedIncident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchivedIncidentDeleteManyArgs>(args?: SelectSubset<T, ArchivedIncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchivedIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedIncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArchivedIncidents
     * const archivedIncident = await prisma.archivedIncident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchivedIncidentUpdateManyArgs>(args: SelectSubset<T, ArchivedIncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchivedIncidents and returns the data updated in the database.
     * @param {ArchivedIncidentUpdateManyAndReturnArgs} args - Arguments to update many ArchivedIncidents.
     * @example
     * // Update many ArchivedIncidents
     * const archivedIncident = await prisma.archivedIncident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArchivedIncidents and only return the `id`
     * const archivedIncidentWithIdOnly = await prisma.archivedIncident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArchivedIncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, ArchivedIncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArchivedIncident.
     * @param {ArchivedIncidentUpsertArgs} args - Arguments to update or create a ArchivedIncident.
     * @example
     * // Update or create a ArchivedIncident
     * const archivedIncident = await prisma.archivedIncident.upsert({
     *   create: {
     *     // ... data to create a ArchivedIncident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArchivedIncident we want to update
     *   }
     * })
     */
    upsert<T extends ArchivedIncidentUpsertArgs>(args: SelectSubset<T, ArchivedIncidentUpsertArgs<ExtArgs>>): Prisma__ArchivedIncidentClient<$Result.GetResult<Prisma.$ArchivedIncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArchivedIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedIncidentCountArgs} args - Arguments to filter ArchivedIncidents to count.
     * @example
     * // Count the number of ArchivedIncidents
     * const count = await prisma.archivedIncident.count({
     *   where: {
     *     // ... the filter for the ArchivedIncidents we want to count
     *   }
     * })
    **/
    count<T extends ArchivedIncidentCountArgs>(
      args?: Subset<T, ArchivedIncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivedIncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArchivedIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedIncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchivedIncidentAggregateArgs>(args: Subset<T, ArchivedIncidentAggregateArgs>): Prisma.PrismaPromise<GetArchivedIncidentAggregateType<T>>

    /**
     * Group by ArchivedIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedIncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArchivedIncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchivedIncidentGroupByArgs['orderBy'] }
        : { orderBy?: ArchivedIncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArchivedIncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivedIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArchivedIncident model
   */
  readonly fields: ArchivedIncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArchivedIncident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchivedIncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArchivedIncident model
   */
  interface ArchivedIncidentFieldRefs {
    readonly id: FieldRef<"ArchivedIncident", 'String'>
    readonly incidentId: FieldRef<"ArchivedIncident", 'String'>
    readonly encryptedStory: FieldRef<"ArchivedIncident", 'String'>
    readonly metadata: FieldRef<"ArchivedIncident", 'String'>
    readonly archivedAt: FieldRef<"ArchivedIncident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArchivedIncident findUnique
   */
  export type ArchivedIncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedIncident to fetch.
     */
    where: ArchivedIncidentWhereUniqueInput
  }

  /**
   * ArchivedIncident findUniqueOrThrow
   */
  export type ArchivedIncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedIncident to fetch.
     */
    where: ArchivedIncidentWhereUniqueInput
  }

  /**
   * ArchivedIncident findFirst
   */
  export type ArchivedIncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedIncident to fetch.
     */
    where?: ArchivedIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedIncidents to fetch.
     */
    orderBy?: ArchivedIncidentOrderByWithRelationInput | ArchivedIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchivedIncidents.
     */
    cursor?: ArchivedIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchivedIncidents.
     */
    distinct?: ArchivedIncidentScalarFieldEnum | ArchivedIncidentScalarFieldEnum[]
  }

  /**
   * ArchivedIncident findFirstOrThrow
   */
  export type ArchivedIncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedIncident to fetch.
     */
    where?: ArchivedIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedIncidents to fetch.
     */
    orderBy?: ArchivedIncidentOrderByWithRelationInput | ArchivedIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchivedIncidents.
     */
    cursor?: ArchivedIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchivedIncidents.
     */
    distinct?: ArchivedIncidentScalarFieldEnum | ArchivedIncidentScalarFieldEnum[]
  }

  /**
   * ArchivedIncident findMany
   */
  export type ArchivedIncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedIncidents to fetch.
     */
    where?: ArchivedIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedIncidents to fetch.
     */
    orderBy?: ArchivedIncidentOrderByWithRelationInput | ArchivedIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArchivedIncidents.
     */
    cursor?: ArchivedIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchivedIncidents.
     */
    distinct?: ArchivedIncidentScalarFieldEnum | ArchivedIncidentScalarFieldEnum[]
  }

  /**
   * ArchivedIncident create
   */
  export type ArchivedIncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * The data needed to create a ArchivedIncident.
     */
    data: XOR<ArchivedIncidentCreateInput, ArchivedIncidentUncheckedCreateInput>
  }

  /**
   * ArchivedIncident createMany
   */
  export type ArchivedIncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArchivedIncidents.
     */
    data: ArchivedIncidentCreateManyInput | ArchivedIncidentCreateManyInput[]
  }

  /**
   * ArchivedIncident createManyAndReturn
   */
  export type ArchivedIncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * The data used to create many ArchivedIncidents.
     */
    data: ArchivedIncidentCreateManyInput | ArchivedIncidentCreateManyInput[]
  }

  /**
   * ArchivedIncident update
   */
  export type ArchivedIncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * The data needed to update a ArchivedIncident.
     */
    data: XOR<ArchivedIncidentUpdateInput, ArchivedIncidentUncheckedUpdateInput>
    /**
     * Choose, which ArchivedIncident to update.
     */
    where: ArchivedIncidentWhereUniqueInput
  }

  /**
   * ArchivedIncident updateMany
   */
  export type ArchivedIncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArchivedIncidents.
     */
    data: XOR<ArchivedIncidentUpdateManyMutationInput, ArchivedIncidentUncheckedUpdateManyInput>
    /**
     * Filter which ArchivedIncidents to update
     */
    where?: ArchivedIncidentWhereInput
    /**
     * Limit how many ArchivedIncidents to update.
     */
    limit?: number
  }

  /**
   * ArchivedIncident updateManyAndReturn
   */
  export type ArchivedIncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * The data used to update ArchivedIncidents.
     */
    data: XOR<ArchivedIncidentUpdateManyMutationInput, ArchivedIncidentUncheckedUpdateManyInput>
    /**
     * Filter which ArchivedIncidents to update
     */
    where?: ArchivedIncidentWhereInput
    /**
     * Limit how many ArchivedIncidents to update.
     */
    limit?: number
  }

  /**
   * ArchivedIncident upsert
   */
  export type ArchivedIncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * The filter to search for the ArchivedIncident to update in case it exists.
     */
    where: ArchivedIncidentWhereUniqueInput
    /**
     * In case the ArchivedIncident found by the `where` argument doesn't exist, create a new ArchivedIncident with this data.
     */
    create: XOR<ArchivedIncidentCreateInput, ArchivedIncidentUncheckedCreateInput>
    /**
     * In case the ArchivedIncident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchivedIncidentUpdateInput, ArchivedIncidentUncheckedUpdateInput>
  }

  /**
   * ArchivedIncident delete
   */
  export type ArchivedIncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
    /**
     * Filter which ArchivedIncident to delete.
     */
    where: ArchivedIncidentWhereUniqueInput
  }

  /**
   * ArchivedIncident deleteMany
   */
  export type ArchivedIncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchivedIncidents to delete
     */
    where?: ArchivedIncidentWhereInput
    /**
     * Limit how many ArchivedIncidents to delete.
     */
    limit?: number
  }

  /**
   * ArchivedIncident without action
   */
  export type ArchivedIncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedIncident
     */
    select?: ArchivedIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedIncident
     */
    omit?: ArchivedIncidentOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model VerifiedContact
   */

  export type AggregateVerifiedContact = {
    _count: VerifiedContactCountAggregateOutputType | null
    _min: VerifiedContactMinAggregateOutputType | null
    _max: VerifiedContactMaxAggregateOutputType | null
  }

  export type VerifiedContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    whatsapp: string | null
    domain: string | null
    email: string | null
    instagram: string | null
    isOfficial: boolean | null
    signature: string | null
    institutionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerifiedContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    whatsapp: string | null
    domain: string | null
    email: string | null
    instagram: string | null
    isOfficial: boolean | null
    signature: string | null
    institutionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerifiedContactCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    whatsapp: number
    domain: number
    email: number
    instagram: number
    isOfficial: number
    signature: number
    institutionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerifiedContactMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    whatsapp?: true
    domain?: true
    email?: true
    instagram?: true
    isOfficial?: true
    signature?: true
    institutionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerifiedContactMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    whatsapp?: true
    domain?: true
    email?: true
    instagram?: true
    isOfficial?: true
    signature?: true
    institutionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerifiedContactCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    whatsapp?: true
    domain?: true
    email?: true
    instagram?: true
    isOfficial?: true
    signature?: true
    institutionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerifiedContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerifiedContact to aggregate.
     */
    where?: VerifiedContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifiedContacts to fetch.
     */
    orderBy?: VerifiedContactOrderByWithRelationInput | VerifiedContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerifiedContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifiedContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifiedContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerifiedContacts
    **/
    _count?: true | VerifiedContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerifiedContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerifiedContactMaxAggregateInputType
  }

  export type GetVerifiedContactAggregateType<T extends VerifiedContactAggregateArgs> = {
        [P in keyof T & keyof AggregateVerifiedContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerifiedContact[P]>
      : GetScalarType<T[P], AggregateVerifiedContact[P]>
  }




  export type VerifiedContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerifiedContactWhereInput
    orderBy?: VerifiedContactOrderByWithAggregationInput | VerifiedContactOrderByWithAggregationInput[]
    by: VerifiedContactScalarFieldEnum[] | VerifiedContactScalarFieldEnum
    having?: VerifiedContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerifiedContactCountAggregateInputType | true
    _min?: VerifiedContactMinAggregateInputType
    _max?: VerifiedContactMaxAggregateInputType
  }

  export type VerifiedContactGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    whatsapp: string | null
    domain: string | null
    email: string | null
    instagram: string | null
    isOfficial: boolean
    signature: string | null
    institutionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: VerifiedContactCountAggregateOutputType | null
    _min: VerifiedContactMinAggregateOutputType | null
    _max: VerifiedContactMaxAggregateOutputType | null
  }

  type GetVerifiedContactGroupByPayload<T extends VerifiedContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerifiedContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerifiedContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerifiedContactGroupByOutputType[P]>
            : GetScalarType<T[P], VerifiedContactGroupByOutputType[P]>
        }
      >
    >


  export type VerifiedContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    whatsapp?: boolean
    domain?: boolean
    email?: boolean
    instagram?: boolean
    isOfficial?: boolean
    signature?: boolean
    institutionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | VerifiedContact$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["verifiedContact"]>

  export type VerifiedContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    whatsapp?: boolean
    domain?: boolean
    email?: boolean
    instagram?: boolean
    isOfficial?: boolean
    signature?: boolean
    institutionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | VerifiedContact$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["verifiedContact"]>

  export type VerifiedContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    whatsapp?: boolean
    domain?: boolean
    email?: boolean
    instagram?: boolean
    isOfficial?: boolean
    signature?: boolean
    institutionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | VerifiedContact$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["verifiedContact"]>

  export type VerifiedContactSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    whatsapp?: boolean
    domain?: boolean
    email?: boolean
    instagram?: boolean
    isOfficial?: boolean
    signature?: boolean
    institutionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerifiedContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "whatsapp" | "domain" | "email" | "instagram" | "isOfficial" | "signature" | "institutionId" | "createdAt" | "updatedAt", ExtArgs["result"]["verifiedContact"]>
  export type VerifiedContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | VerifiedContact$institutionArgs<ExtArgs>
  }
  export type VerifiedContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | VerifiedContact$institutionArgs<ExtArgs>
  }
  export type VerifiedContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | VerifiedContact$institutionArgs<ExtArgs>
  }

  export type $VerifiedContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerifiedContact"
    objects: {
      institution: Prisma.$InstitutionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      whatsapp: string | null
      domain: string | null
      email: string | null
      instagram: string | null
      isOfficial: boolean
      signature: string | null
      institutionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verifiedContact"]>
    composites: {}
  }

  type VerifiedContactGetPayload<S extends boolean | null | undefined | VerifiedContactDefaultArgs> = $Result.GetResult<Prisma.$VerifiedContactPayload, S>

  type VerifiedContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerifiedContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerifiedContactCountAggregateInputType | true
    }

  export interface VerifiedContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerifiedContact'], meta: { name: 'VerifiedContact' } }
    /**
     * Find zero or one VerifiedContact that matches the filter.
     * @param {VerifiedContactFindUniqueArgs} args - Arguments to find a VerifiedContact
     * @example
     * // Get one VerifiedContact
     * const verifiedContact = await prisma.verifiedContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerifiedContactFindUniqueArgs>(args: SelectSubset<T, VerifiedContactFindUniqueArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerifiedContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerifiedContactFindUniqueOrThrowArgs} args - Arguments to find a VerifiedContact
     * @example
     * // Get one VerifiedContact
     * const verifiedContact = await prisma.verifiedContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerifiedContactFindUniqueOrThrowArgs>(args: SelectSubset<T, VerifiedContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerifiedContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifiedContactFindFirstArgs} args - Arguments to find a VerifiedContact
     * @example
     * // Get one VerifiedContact
     * const verifiedContact = await prisma.verifiedContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerifiedContactFindFirstArgs>(args?: SelectSubset<T, VerifiedContactFindFirstArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerifiedContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifiedContactFindFirstOrThrowArgs} args - Arguments to find a VerifiedContact
     * @example
     * // Get one VerifiedContact
     * const verifiedContact = await prisma.verifiedContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerifiedContactFindFirstOrThrowArgs>(args?: SelectSubset<T, VerifiedContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerifiedContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifiedContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerifiedContacts
     * const verifiedContacts = await prisma.verifiedContact.findMany()
     * 
     * // Get first 10 VerifiedContacts
     * const verifiedContacts = await prisma.verifiedContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verifiedContactWithIdOnly = await prisma.verifiedContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerifiedContactFindManyArgs>(args?: SelectSubset<T, VerifiedContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerifiedContact.
     * @param {VerifiedContactCreateArgs} args - Arguments to create a VerifiedContact.
     * @example
     * // Create one VerifiedContact
     * const VerifiedContact = await prisma.verifiedContact.create({
     *   data: {
     *     // ... data to create a VerifiedContact
     *   }
     * })
     * 
     */
    create<T extends VerifiedContactCreateArgs>(args: SelectSubset<T, VerifiedContactCreateArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerifiedContacts.
     * @param {VerifiedContactCreateManyArgs} args - Arguments to create many VerifiedContacts.
     * @example
     * // Create many VerifiedContacts
     * const verifiedContact = await prisma.verifiedContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerifiedContactCreateManyArgs>(args?: SelectSubset<T, VerifiedContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerifiedContacts and returns the data saved in the database.
     * @param {VerifiedContactCreateManyAndReturnArgs} args - Arguments to create many VerifiedContacts.
     * @example
     * // Create many VerifiedContacts
     * const verifiedContact = await prisma.verifiedContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerifiedContacts and only return the `id`
     * const verifiedContactWithIdOnly = await prisma.verifiedContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerifiedContactCreateManyAndReturnArgs>(args?: SelectSubset<T, VerifiedContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerifiedContact.
     * @param {VerifiedContactDeleteArgs} args - Arguments to delete one VerifiedContact.
     * @example
     * // Delete one VerifiedContact
     * const VerifiedContact = await prisma.verifiedContact.delete({
     *   where: {
     *     // ... filter to delete one VerifiedContact
     *   }
     * })
     * 
     */
    delete<T extends VerifiedContactDeleteArgs>(args: SelectSubset<T, VerifiedContactDeleteArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerifiedContact.
     * @param {VerifiedContactUpdateArgs} args - Arguments to update one VerifiedContact.
     * @example
     * // Update one VerifiedContact
     * const verifiedContact = await prisma.verifiedContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerifiedContactUpdateArgs>(args: SelectSubset<T, VerifiedContactUpdateArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerifiedContacts.
     * @param {VerifiedContactDeleteManyArgs} args - Arguments to filter VerifiedContacts to delete.
     * @example
     * // Delete a few VerifiedContacts
     * const { count } = await prisma.verifiedContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerifiedContactDeleteManyArgs>(args?: SelectSubset<T, VerifiedContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerifiedContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifiedContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerifiedContacts
     * const verifiedContact = await prisma.verifiedContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerifiedContactUpdateManyArgs>(args: SelectSubset<T, VerifiedContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerifiedContacts and returns the data updated in the database.
     * @param {VerifiedContactUpdateManyAndReturnArgs} args - Arguments to update many VerifiedContacts.
     * @example
     * // Update many VerifiedContacts
     * const verifiedContact = await prisma.verifiedContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerifiedContacts and only return the `id`
     * const verifiedContactWithIdOnly = await prisma.verifiedContact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerifiedContactUpdateManyAndReturnArgs>(args: SelectSubset<T, VerifiedContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerifiedContact.
     * @param {VerifiedContactUpsertArgs} args - Arguments to update or create a VerifiedContact.
     * @example
     * // Update or create a VerifiedContact
     * const verifiedContact = await prisma.verifiedContact.upsert({
     *   create: {
     *     // ... data to create a VerifiedContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerifiedContact we want to update
     *   }
     * })
     */
    upsert<T extends VerifiedContactUpsertArgs>(args: SelectSubset<T, VerifiedContactUpsertArgs<ExtArgs>>): Prisma__VerifiedContactClient<$Result.GetResult<Prisma.$VerifiedContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerifiedContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifiedContactCountArgs} args - Arguments to filter VerifiedContacts to count.
     * @example
     * // Count the number of VerifiedContacts
     * const count = await prisma.verifiedContact.count({
     *   where: {
     *     // ... the filter for the VerifiedContacts we want to count
     *   }
     * })
    **/
    count<T extends VerifiedContactCountArgs>(
      args?: Subset<T, VerifiedContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerifiedContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerifiedContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifiedContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerifiedContactAggregateArgs>(args: Subset<T, VerifiedContactAggregateArgs>): Prisma.PrismaPromise<GetVerifiedContactAggregateType<T>>

    /**
     * Group by VerifiedContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifiedContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerifiedContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerifiedContactGroupByArgs['orderBy'] }
        : { orderBy?: VerifiedContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerifiedContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerifiedContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerifiedContact model
   */
  readonly fields: VerifiedContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerifiedContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerifiedContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institution<T extends VerifiedContact$institutionArgs<ExtArgs> = {}>(args?: Subset<T, VerifiedContact$institutionArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerifiedContact model
   */
  interface VerifiedContactFieldRefs {
    readonly id: FieldRef<"VerifiedContact", 'String'>
    readonly name: FieldRef<"VerifiedContact", 'String'>
    readonly phone: FieldRef<"VerifiedContact", 'String'>
    readonly whatsapp: FieldRef<"VerifiedContact", 'String'>
    readonly domain: FieldRef<"VerifiedContact", 'String'>
    readonly email: FieldRef<"VerifiedContact", 'String'>
    readonly instagram: FieldRef<"VerifiedContact", 'String'>
    readonly isOfficial: FieldRef<"VerifiedContact", 'Boolean'>
    readonly signature: FieldRef<"VerifiedContact", 'String'>
    readonly institutionId: FieldRef<"VerifiedContact", 'String'>
    readonly createdAt: FieldRef<"VerifiedContact", 'DateTime'>
    readonly updatedAt: FieldRef<"VerifiedContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerifiedContact findUnique
   */
  export type VerifiedContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * Filter, which VerifiedContact to fetch.
     */
    where: VerifiedContactWhereUniqueInput
  }

  /**
   * VerifiedContact findUniqueOrThrow
   */
  export type VerifiedContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * Filter, which VerifiedContact to fetch.
     */
    where: VerifiedContactWhereUniqueInput
  }

  /**
   * VerifiedContact findFirst
   */
  export type VerifiedContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * Filter, which VerifiedContact to fetch.
     */
    where?: VerifiedContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifiedContacts to fetch.
     */
    orderBy?: VerifiedContactOrderByWithRelationInput | VerifiedContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerifiedContacts.
     */
    cursor?: VerifiedContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifiedContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifiedContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerifiedContacts.
     */
    distinct?: VerifiedContactScalarFieldEnum | VerifiedContactScalarFieldEnum[]
  }

  /**
   * VerifiedContact findFirstOrThrow
   */
  export type VerifiedContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * Filter, which VerifiedContact to fetch.
     */
    where?: VerifiedContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifiedContacts to fetch.
     */
    orderBy?: VerifiedContactOrderByWithRelationInput | VerifiedContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerifiedContacts.
     */
    cursor?: VerifiedContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifiedContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifiedContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerifiedContacts.
     */
    distinct?: VerifiedContactScalarFieldEnum | VerifiedContactScalarFieldEnum[]
  }

  /**
   * VerifiedContact findMany
   */
  export type VerifiedContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * Filter, which VerifiedContacts to fetch.
     */
    where?: VerifiedContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifiedContacts to fetch.
     */
    orderBy?: VerifiedContactOrderByWithRelationInput | VerifiedContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerifiedContacts.
     */
    cursor?: VerifiedContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifiedContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifiedContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerifiedContacts.
     */
    distinct?: VerifiedContactScalarFieldEnum | VerifiedContactScalarFieldEnum[]
  }

  /**
   * VerifiedContact create
   */
  export type VerifiedContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * The data needed to create a VerifiedContact.
     */
    data: XOR<VerifiedContactCreateInput, VerifiedContactUncheckedCreateInput>
  }

  /**
   * VerifiedContact createMany
   */
  export type VerifiedContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerifiedContacts.
     */
    data: VerifiedContactCreateManyInput | VerifiedContactCreateManyInput[]
  }

  /**
   * VerifiedContact createManyAndReturn
   */
  export type VerifiedContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * The data used to create many VerifiedContacts.
     */
    data: VerifiedContactCreateManyInput | VerifiedContactCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerifiedContact update
   */
  export type VerifiedContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * The data needed to update a VerifiedContact.
     */
    data: XOR<VerifiedContactUpdateInput, VerifiedContactUncheckedUpdateInput>
    /**
     * Choose, which VerifiedContact to update.
     */
    where: VerifiedContactWhereUniqueInput
  }

  /**
   * VerifiedContact updateMany
   */
  export type VerifiedContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerifiedContacts.
     */
    data: XOR<VerifiedContactUpdateManyMutationInput, VerifiedContactUncheckedUpdateManyInput>
    /**
     * Filter which VerifiedContacts to update
     */
    where?: VerifiedContactWhereInput
    /**
     * Limit how many VerifiedContacts to update.
     */
    limit?: number
  }

  /**
   * VerifiedContact updateManyAndReturn
   */
  export type VerifiedContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * The data used to update VerifiedContacts.
     */
    data: XOR<VerifiedContactUpdateManyMutationInput, VerifiedContactUncheckedUpdateManyInput>
    /**
     * Filter which VerifiedContacts to update
     */
    where?: VerifiedContactWhereInput
    /**
     * Limit how many VerifiedContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerifiedContact upsert
   */
  export type VerifiedContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * The filter to search for the VerifiedContact to update in case it exists.
     */
    where: VerifiedContactWhereUniqueInput
    /**
     * In case the VerifiedContact found by the `where` argument doesn't exist, create a new VerifiedContact with this data.
     */
    create: XOR<VerifiedContactCreateInput, VerifiedContactUncheckedCreateInput>
    /**
     * In case the VerifiedContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerifiedContactUpdateInput, VerifiedContactUncheckedUpdateInput>
  }

  /**
   * VerifiedContact delete
   */
  export type VerifiedContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
    /**
     * Filter which VerifiedContact to delete.
     */
    where: VerifiedContactWhereUniqueInput
  }

  /**
   * VerifiedContact deleteMany
   */
  export type VerifiedContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerifiedContacts to delete
     */
    where?: VerifiedContactWhereInput
    /**
     * Limit how many VerifiedContacts to delete.
     */
    limit?: number
  }

  /**
   * VerifiedContact.institution
   */
  export type VerifiedContact$institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    where?: InstitutionWhereInput
  }

  /**
   * VerifiedContact without action
   */
  export type VerifiedContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifiedContact
     */
    select?: VerifiedContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerifiedContact
     */
    omit?: VerifiedContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifiedContactInclude<ExtArgs> | null
  }


  /**
   * Model AnomalyReport
   */

  export type AggregateAnomalyReport = {
    _count: AnomalyReportCountAggregateOutputType | null
    _avg: AnomalyReportAvgAggregateOutputType | null
    _sum: AnomalyReportSumAggregateOutputType | null
    _min: AnomalyReportMinAggregateOutputType | null
    _max: AnomalyReportMaxAggregateOutputType | null
  }

  export type AnomalyReportAvgAggregateOutputType = {
    consensusCount: number | null
  }

  export type AnomalyReportSumAggregateOutputType = {
    consensusCount: number | null
  }

  export type AnomalyReportMinAggregateOutputType = {
    id: string | null
    sourceUrl: string | null
    detectedNumber: string | null
    detectedContext: string | null
    severity: string | null
    status: string | null
    consensusCount: number | null
    institutionId: string | null
    createdAt: Date | null
  }

  export type AnomalyReportMaxAggregateOutputType = {
    id: string | null
    sourceUrl: string | null
    detectedNumber: string | null
    detectedContext: string | null
    severity: string | null
    status: string | null
    consensusCount: number | null
    institutionId: string | null
    createdAt: Date | null
  }

  export type AnomalyReportCountAggregateOutputType = {
    id: number
    sourceUrl: number
    detectedNumber: number
    detectedContext: number
    severity: number
    status: number
    consensusCount: number
    institutionId: number
    createdAt: number
    _all: number
  }


  export type AnomalyReportAvgAggregateInputType = {
    consensusCount?: true
  }

  export type AnomalyReportSumAggregateInputType = {
    consensusCount?: true
  }

  export type AnomalyReportMinAggregateInputType = {
    id?: true
    sourceUrl?: true
    detectedNumber?: true
    detectedContext?: true
    severity?: true
    status?: true
    consensusCount?: true
    institutionId?: true
    createdAt?: true
  }

  export type AnomalyReportMaxAggregateInputType = {
    id?: true
    sourceUrl?: true
    detectedNumber?: true
    detectedContext?: true
    severity?: true
    status?: true
    consensusCount?: true
    institutionId?: true
    createdAt?: true
  }

  export type AnomalyReportCountAggregateInputType = {
    id?: true
    sourceUrl?: true
    detectedNumber?: true
    detectedContext?: true
    severity?: true
    status?: true
    consensusCount?: true
    institutionId?: true
    createdAt?: true
    _all?: true
  }

  export type AnomalyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyReport to aggregate.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnomalyReports
    **/
    _count?: true | AnomalyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnomalyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnomalyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnomalyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnomalyReportMaxAggregateInputType
  }

  export type GetAnomalyReportAggregateType<T extends AnomalyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAnomalyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnomalyReport[P]>
      : GetScalarType<T[P], AggregateAnomalyReport[P]>
  }




  export type AnomalyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyReportWhereInput
    orderBy?: AnomalyReportOrderByWithAggregationInput | AnomalyReportOrderByWithAggregationInput[]
    by: AnomalyReportScalarFieldEnum[] | AnomalyReportScalarFieldEnum
    having?: AnomalyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnomalyReportCountAggregateInputType | true
    _avg?: AnomalyReportAvgAggregateInputType
    _sum?: AnomalyReportSumAggregateInputType
    _min?: AnomalyReportMinAggregateInputType
    _max?: AnomalyReportMaxAggregateInputType
  }

  export type AnomalyReportGroupByOutputType = {
    id: string
    sourceUrl: string
    detectedNumber: string
    detectedContext: string | null
    severity: string
    status: string
    consensusCount: number
    institutionId: string | null
    createdAt: Date
    _count: AnomalyReportCountAggregateOutputType | null
    _avg: AnomalyReportAvgAggregateOutputType | null
    _sum: AnomalyReportSumAggregateOutputType | null
    _min: AnomalyReportMinAggregateOutputType | null
    _max: AnomalyReportMaxAggregateOutputType | null
  }

  type GetAnomalyReportGroupByPayload<T extends AnomalyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnomalyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnomalyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnomalyReportGroupByOutputType[P]>
            : GetScalarType<T[P], AnomalyReportGroupByOutputType[P]>
        }
      >
    >


  export type AnomalyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceUrl?: boolean
    detectedNumber?: boolean
    detectedContext?: boolean
    severity?: boolean
    status?: boolean
    consensusCount?: boolean
    institutionId?: boolean
    createdAt?: boolean
    institution?: boolean | AnomalyReport$institutionArgs<ExtArgs>
    verifications?: boolean | AnomalyReport$verificationsArgs<ExtArgs>
    _count?: boolean | AnomalyReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyReport"]>

  export type AnomalyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceUrl?: boolean
    detectedNumber?: boolean
    detectedContext?: boolean
    severity?: boolean
    status?: boolean
    consensusCount?: boolean
    institutionId?: boolean
    createdAt?: boolean
    institution?: boolean | AnomalyReport$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyReport"]>

  export type AnomalyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceUrl?: boolean
    detectedNumber?: boolean
    detectedContext?: boolean
    severity?: boolean
    status?: boolean
    consensusCount?: boolean
    institutionId?: boolean
    createdAt?: boolean
    institution?: boolean | AnomalyReport$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyReport"]>

  export type AnomalyReportSelectScalar = {
    id?: boolean
    sourceUrl?: boolean
    detectedNumber?: boolean
    detectedContext?: boolean
    severity?: boolean
    status?: boolean
    consensusCount?: boolean
    institutionId?: boolean
    createdAt?: boolean
  }

  export type AnomalyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceUrl" | "detectedNumber" | "detectedContext" | "severity" | "status" | "consensusCount" | "institutionId" | "createdAt", ExtArgs["result"]["anomalyReport"]>
  export type AnomalyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | AnomalyReport$institutionArgs<ExtArgs>
    verifications?: boolean | AnomalyReport$verificationsArgs<ExtArgs>
    _count?: boolean | AnomalyReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnomalyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | AnomalyReport$institutionArgs<ExtArgs>
  }
  export type AnomalyReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | AnomalyReport$institutionArgs<ExtArgs>
  }

  export type $AnomalyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnomalyReport"
    objects: {
      institution: Prisma.$InstitutionPayload<ExtArgs> | null
      verifications: Prisma.$AnomalyVerificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceUrl: string
      detectedNumber: string
      detectedContext: string | null
      severity: string
      status: string
      consensusCount: number
      institutionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["anomalyReport"]>
    composites: {}
  }

  type AnomalyReportGetPayload<S extends boolean | null | undefined | AnomalyReportDefaultArgs> = $Result.GetResult<Prisma.$AnomalyReportPayload, S>

  type AnomalyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnomalyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnomalyReportCountAggregateInputType | true
    }

  export interface AnomalyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnomalyReport'], meta: { name: 'AnomalyReport' } }
    /**
     * Find zero or one AnomalyReport that matches the filter.
     * @param {AnomalyReportFindUniqueArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnomalyReportFindUniqueArgs>(args: SelectSubset<T, AnomalyReportFindUniqueArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnomalyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnomalyReportFindUniqueOrThrowArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnomalyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AnomalyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportFindFirstArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnomalyReportFindFirstArgs>(args?: SelectSubset<T, AnomalyReportFindFirstArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportFindFirstOrThrowArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnomalyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AnomalyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnomalyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnomalyReports
     * const anomalyReports = await prisma.anomalyReport.findMany()
     * 
     * // Get first 10 AnomalyReports
     * const anomalyReports = await prisma.anomalyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anomalyReportWithIdOnly = await prisma.anomalyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnomalyReportFindManyArgs>(args?: SelectSubset<T, AnomalyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnomalyReport.
     * @param {AnomalyReportCreateArgs} args - Arguments to create a AnomalyReport.
     * @example
     * // Create one AnomalyReport
     * const AnomalyReport = await prisma.anomalyReport.create({
     *   data: {
     *     // ... data to create a AnomalyReport
     *   }
     * })
     * 
     */
    create<T extends AnomalyReportCreateArgs>(args: SelectSubset<T, AnomalyReportCreateArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnomalyReports.
     * @param {AnomalyReportCreateManyArgs} args - Arguments to create many AnomalyReports.
     * @example
     * // Create many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnomalyReportCreateManyArgs>(args?: SelectSubset<T, AnomalyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnomalyReports and returns the data saved in the database.
     * @param {AnomalyReportCreateManyAndReturnArgs} args - Arguments to create many AnomalyReports.
     * @example
     * // Create many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnomalyReports and only return the `id`
     * const anomalyReportWithIdOnly = await prisma.anomalyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnomalyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AnomalyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnomalyReport.
     * @param {AnomalyReportDeleteArgs} args - Arguments to delete one AnomalyReport.
     * @example
     * // Delete one AnomalyReport
     * const AnomalyReport = await prisma.anomalyReport.delete({
     *   where: {
     *     // ... filter to delete one AnomalyReport
     *   }
     * })
     * 
     */
    delete<T extends AnomalyReportDeleteArgs>(args: SelectSubset<T, AnomalyReportDeleteArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnomalyReport.
     * @param {AnomalyReportUpdateArgs} args - Arguments to update one AnomalyReport.
     * @example
     * // Update one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnomalyReportUpdateArgs>(args: SelectSubset<T, AnomalyReportUpdateArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnomalyReports.
     * @param {AnomalyReportDeleteManyArgs} args - Arguments to filter AnomalyReports to delete.
     * @example
     * // Delete a few AnomalyReports
     * const { count } = await prisma.anomalyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnomalyReportDeleteManyArgs>(args?: SelectSubset<T, AnomalyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnomalyReportUpdateManyArgs>(args: SelectSubset<T, AnomalyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyReports and returns the data updated in the database.
     * @param {AnomalyReportUpdateManyAndReturnArgs} args - Arguments to update many AnomalyReports.
     * @example
     * // Update many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnomalyReports and only return the `id`
     * const anomalyReportWithIdOnly = await prisma.anomalyReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnomalyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, AnomalyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnomalyReport.
     * @param {AnomalyReportUpsertArgs} args - Arguments to update or create a AnomalyReport.
     * @example
     * // Update or create a AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.upsert({
     *   create: {
     *     // ... data to create a AnomalyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnomalyReport we want to update
     *   }
     * })
     */
    upsert<T extends AnomalyReportUpsertArgs>(args: SelectSubset<T, AnomalyReportUpsertArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnomalyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportCountArgs} args - Arguments to filter AnomalyReports to count.
     * @example
     * // Count the number of AnomalyReports
     * const count = await prisma.anomalyReport.count({
     *   where: {
     *     // ... the filter for the AnomalyReports we want to count
     *   }
     * })
    **/
    count<T extends AnomalyReportCountArgs>(
      args?: Subset<T, AnomalyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnomalyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnomalyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnomalyReportAggregateArgs>(args: Subset<T, AnomalyReportAggregateArgs>): Prisma.PrismaPromise<GetAnomalyReportAggregateType<T>>

    /**
     * Group by AnomalyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnomalyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnomalyReportGroupByArgs['orderBy'] }
        : { orderBy?: AnomalyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnomalyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnomalyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnomalyReport model
   */
  readonly fields: AnomalyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnomalyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnomalyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institution<T extends AnomalyReport$institutionArgs<ExtArgs> = {}>(args?: Subset<T, AnomalyReport$institutionArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verifications<T extends AnomalyReport$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, AnomalyReport$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnomalyReport model
   */
  interface AnomalyReportFieldRefs {
    readonly id: FieldRef<"AnomalyReport", 'String'>
    readonly sourceUrl: FieldRef<"AnomalyReport", 'String'>
    readonly detectedNumber: FieldRef<"AnomalyReport", 'String'>
    readonly detectedContext: FieldRef<"AnomalyReport", 'String'>
    readonly severity: FieldRef<"AnomalyReport", 'String'>
    readonly status: FieldRef<"AnomalyReport", 'String'>
    readonly consensusCount: FieldRef<"AnomalyReport", 'Int'>
    readonly institutionId: FieldRef<"AnomalyReport", 'String'>
    readonly createdAt: FieldRef<"AnomalyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnomalyReport findUnique
   */
  export type AnomalyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport findUniqueOrThrow
   */
  export type AnomalyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport findFirst
   */
  export type AnomalyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyReports.
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyReports.
     */
    distinct?: AnomalyReportScalarFieldEnum | AnomalyReportScalarFieldEnum[]
  }

  /**
   * AnomalyReport findFirstOrThrow
   */
  export type AnomalyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyReports.
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyReports.
     */
    distinct?: AnomalyReportScalarFieldEnum | AnomalyReportScalarFieldEnum[]
  }

  /**
   * AnomalyReport findMany
   */
  export type AnomalyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyReports to fetch.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnomalyReports.
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyReports.
     */
    distinct?: AnomalyReportScalarFieldEnum | AnomalyReportScalarFieldEnum[]
  }

  /**
   * AnomalyReport create
   */
  export type AnomalyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AnomalyReport.
     */
    data: XOR<AnomalyReportCreateInput, AnomalyReportUncheckedCreateInput>
  }

  /**
   * AnomalyReport createMany
   */
  export type AnomalyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnomalyReports.
     */
    data: AnomalyReportCreateManyInput | AnomalyReportCreateManyInput[]
  }

  /**
   * AnomalyReport createManyAndReturn
   */
  export type AnomalyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * The data used to create many AnomalyReports.
     */
    data: AnomalyReportCreateManyInput | AnomalyReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnomalyReport update
   */
  export type AnomalyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AnomalyReport.
     */
    data: XOR<AnomalyReportUpdateInput, AnomalyReportUncheckedUpdateInput>
    /**
     * Choose, which AnomalyReport to update.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport updateMany
   */
  export type AnomalyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnomalyReports.
     */
    data: XOR<AnomalyReportUpdateManyMutationInput, AnomalyReportUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyReports to update
     */
    where?: AnomalyReportWhereInput
    /**
     * Limit how many AnomalyReports to update.
     */
    limit?: number
  }

  /**
   * AnomalyReport updateManyAndReturn
   */
  export type AnomalyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * The data used to update AnomalyReports.
     */
    data: XOR<AnomalyReportUpdateManyMutationInput, AnomalyReportUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyReports to update
     */
    where?: AnomalyReportWhereInput
    /**
     * Limit how many AnomalyReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnomalyReport upsert
   */
  export type AnomalyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AnomalyReport to update in case it exists.
     */
    where: AnomalyReportWhereUniqueInput
    /**
     * In case the AnomalyReport found by the `where` argument doesn't exist, create a new AnomalyReport with this data.
     */
    create: XOR<AnomalyReportCreateInput, AnomalyReportUncheckedCreateInput>
    /**
     * In case the AnomalyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnomalyReportUpdateInput, AnomalyReportUncheckedUpdateInput>
  }

  /**
   * AnomalyReport delete
   */
  export type AnomalyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
    /**
     * Filter which AnomalyReport to delete.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport deleteMany
   */
  export type AnomalyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyReports to delete
     */
    where?: AnomalyReportWhereInput
    /**
     * Limit how many AnomalyReports to delete.
     */
    limit?: number
  }

  /**
   * AnomalyReport.institution
   */
  export type AnomalyReport$institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    where?: InstitutionWhereInput
  }

  /**
   * AnomalyReport.verifications
   */
  export type AnomalyReport$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    where?: AnomalyVerificationWhereInput
    orderBy?: AnomalyVerificationOrderByWithRelationInput | AnomalyVerificationOrderByWithRelationInput[]
    cursor?: AnomalyVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnomalyVerificationScalarFieldEnum | AnomalyVerificationScalarFieldEnum[]
  }

  /**
   * AnomalyReport without action
   */
  export type AnomalyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyReportInclude<ExtArgs> | null
  }


  /**
   * Model AnomalyVerification
   */

  export type AggregateAnomalyVerification = {
    _count: AnomalyVerificationCountAggregateOutputType | null
    _avg: AnomalyVerificationAvgAggregateOutputType | null
    _sum: AnomalyVerificationSumAggregateOutputType | null
    _min: AnomalyVerificationMinAggregateOutputType | null
    _max: AnomalyVerificationMaxAggregateOutputType | null
  }

  export type AnomalyVerificationAvgAggregateOutputType = {
    stakedPoints: number | null
  }

  export type AnomalyVerificationSumAggregateOutputType = {
    stakedPoints: number | null
  }

  export type AnomalyVerificationMinAggregateOutputType = {
    id: string | null
    anomalyId: string | null
    investigatorId: string | null
    stakedPoints: number | null
    createdAt: Date | null
  }

  export type AnomalyVerificationMaxAggregateOutputType = {
    id: string | null
    anomalyId: string | null
    investigatorId: string | null
    stakedPoints: number | null
    createdAt: Date | null
  }

  export type AnomalyVerificationCountAggregateOutputType = {
    id: number
    anomalyId: number
    investigatorId: number
    stakedPoints: number
    createdAt: number
    _all: number
  }


  export type AnomalyVerificationAvgAggregateInputType = {
    stakedPoints?: true
  }

  export type AnomalyVerificationSumAggregateInputType = {
    stakedPoints?: true
  }

  export type AnomalyVerificationMinAggregateInputType = {
    id?: true
    anomalyId?: true
    investigatorId?: true
    stakedPoints?: true
    createdAt?: true
  }

  export type AnomalyVerificationMaxAggregateInputType = {
    id?: true
    anomalyId?: true
    investigatorId?: true
    stakedPoints?: true
    createdAt?: true
  }

  export type AnomalyVerificationCountAggregateInputType = {
    id?: true
    anomalyId?: true
    investigatorId?: true
    stakedPoints?: true
    createdAt?: true
    _all?: true
  }

  export type AnomalyVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyVerification to aggregate.
     */
    where?: AnomalyVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyVerifications to fetch.
     */
    orderBy?: AnomalyVerificationOrderByWithRelationInput | AnomalyVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnomalyVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnomalyVerifications
    **/
    _count?: true | AnomalyVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnomalyVerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnomalyVerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnomalyVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnomalyVerificationMaxAggregateInputType
  }

  export type GetAnomalyVerificationAggregateType<T extends AnomalyVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAnomalyVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnomalyVerification[P]>
      : GetScalarType<T[P], AggregateAnomalyVerification[P]>
  }




  export type AnomalyVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyVerificationWhereInput
    orderBy?: AnomalyVerificationOrderByWithAggregationInput | AnomalyVerificationOrderByWithAggregationInput[]
    by: AnomalyVerificationScalarFieldEnum[] | AnomalyVerificationScalarFieldEnum
    having?: AnomalyVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnomalyVerificationCountAggregateInputType | true
    _avg?: AnomalyVerificationAvgAggregateInputType
    _sum?: AnomalyVerificationSumAggregateInputType
    _min?: AnomalyVerificationMinAggregateInputType
    _max?: AnomalyVerificationMaxAggregateInputType
  }

  export type AnomalyVerificationGroupByOutputType = {
    id: string
    anomalyId: string
    investigatorId: string
    stakedPoints: number
    createdAt: Date
    _count: AnomalyVerificationCountAggregateOutputType | null
    _avg: AnomalyVerificationAvgAggregateOutputType | null
    _sum: AnomalyVerificationSumAggregateOutputType | null
    _min: AnomalyVerificationMinAggregateOutputType | null
    _max: AnomalyVerificationMaxAggregateOutputType | null
  }

  type GetAnomalyVerificationGroupByPayload<T extends AnomalyVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnomalyVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnomalyVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnomalyVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], AnomalyVerificationGroupByOutputType[P]>
        }
      >
    >


  export type AnomalyVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anomalyId?: boolean
    investigatorId?: boolean
    stakedPoints?: boolean
    createdAt?: boolean
    anomaly?: boolean | AnomalyReportDefaultArgs<ExtArgs>
    investigator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyVerification"]>

  export type AnomalyVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anomalyId?: boolean
    investigatorId?: boolean
    stakedPoints?: boolean
    createdAt?: boolean
    anomaly?: boolean | AnomalyReportDefaultArgs<ExtArgs>
    investigator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyVerification"]>

  export type AnomalyVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anomalyId?: boolean
    investigatorId?: boolean
    stakedPoints?: boolean
    createdAt?: boolean
    anomaly?: boolean | AnomalyReportDefaultArgs<ExtArgs>
    investigator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyVerification"]>

  export type AnomalyVerificationSelectScalar = {
    id?: boolean
    anomalyId?: boolean
    investigatorId?: boolean
    stakedPoints?: boolean
    createdAt?: boolean
  }

  export type AnomalyVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "anomalyId" | "investigatorId" | "stakedPoints" | "createdAt", ExtArgs["result"]["anomalyVerification"]>
  export type AnomalyVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anomaly?: boolean | AnomalyReportDefaultArgs<ExtArgs>
    investigator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnomalyVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anomaly?: boolean | AnomalyReportDefaultArgs<ExtArgs>
    investigator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnomalyVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anomaly?: boolean | AnomalyReportDefaultArgs<ExtArgs>
    investigator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnomalyVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnomalyVerification"
    objects: {
      anomaly: Prisma.$AnomalyReportPayload<ExtArgs>
      investigator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      anomalyId: string
      investigatorId: string
      stakedPoints: number
      createdAt: Date
    }, ExtArgs["result"]["anomalyVerification"]>
    composites: {}
  }

  type AnomalyVerificationGetPayload<S extends boolean | null | undefined | AnomalyVerificationDefaultArgs> = $Result.GetResult<Prisma.$AnomalyVerificationPayload, S>

  type AnomalyVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnomalyVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnomalyVerificationCountAggregateInputType | true
    }

  export interface AnomalyVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnomalyVerification'], meta: { name: 'AnomalyVerification' } }
    /**
     * Find zero or one AnomalyVerification that matches the filter.
     * @param {AnomalyVerificationFindUniqueArgs} args - Arguments to find a AnomalyVerification
     * @example
     * // Get one AnomalyVerification
     * const anomalyVerification = await prisma.anomalyVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnomalyVerificationFindUniqueArgs>(args: SelectSubset<T, AnomalyVerificationFindUniqueArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnomalyVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnomalyVerificationFindUniqueOrThrowArgs} args - Arguments to find a AnomalyVerification
     * @example
     * // Get one AnomalyVerification
     * const anomalyVerification = await prisma.anomalyVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnomalyVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AnomalyVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyVerificationFindFirstArgs} args - Arguments to find a AnomalyVerification
     * @example
     * // Get one AnomalyVerification
     * const anomalyVerification = await prisma.anomalyVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnomalyVerificationFindFirstArgs>(args?: SelectSubset<T, AnomalyVerificationFindFirstArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyVerificationFindFirstOrThrowArgs} args - Arguments to find a AnomalyVerification
     * @example
     * // Get one AnomalyVerification
     * const anomalyVerification = await prisma.anomalyVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnomalyVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AnomalyVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnomalyVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnomalyVerifications
     * const anomalyVerifications = await prisma.anomalyVerification.findMany()
     * 
     * // Get first 10 AnomalyVerifications
     * const anomalyVerifications = await prisma.anomalyVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anomalyVerificationWithIdOnly = await prisma.anomalyVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnomalyVerificationFindManyArgs>(args?: SelectSubset<T, AnomalyVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnomalyVerification.
     * @param {AnomalyVerificationCreateArgs} args - Arguments to create a AnomalyVerification.
     * @example
     * // Create one AnomalyVerification
     * const AnomalyVerification = await prisma.anomalyVerification.create({
     *   data: {
     *     // ... data to create a AnomalyVerification
     *   }
     * })
     * 
     */
    create<T extends AnomalyVerificationCreateArgs>(args: SelectSubset<T, AnomalyVerificationCreateArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnomalyVerifications.
     * @param {AnomalyVerificationCreateManyArgs} args - Arguments to create many AnomalyVerifications.
     * @example
     * // Create many AnomalyVerifications
     * const anomalyVerification = await prisma.anomalyVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnomalyVerificationCreateManyArgs>(args?: SelectSubset<T, AnomalyVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnomalyVerifications and returns the data saved in the database.
     * @param {AnomalyVerificationCreateManyAndReturnArgs} args - Arguments to create many AnomalyVerifications.
     * @example
     * // Create many AnomalyVerifications
     * const anomalyVerification = await prisma.anomalyVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnomalyVerifications and only return the `id`
     * const anomalyVerificationWithIdOnly = await prisma.anomalyVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnomalyVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, AnomalyVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnomalyVerification.
     * @param {AnomalyVerificationDeleteArgs} args - Arguments to delete one AnomalyVerification.
     * @example
     * // Delete one AnomalyVerification
     * const AnomalyVerification = await prisma.anomalyVerification.delete({
     *   where: {
     *     // ... filter to delete one AnomalyVerification
     *   }
     * })
     * 
     */
    delete<T extends AnomalyVerificationDeleteArgs>(args: SelectSubset<T, AnomalyVerificationDeleteArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnomalyVerification.
     * @param {AnomalyVerificationUpdateArgs} args - Arguments to update one AnomalyVerification.
     * @example
     * // Update one AnomalyVerification
     * const anomalyVerification = await prisma.anomalyVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnomalyVerificationUpdateArgs>(args: SelectSubset<T, AnomalyVerificationUpdateArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnomalyVerifications.
     * @param {AnomalyVerificationDeleteManyArgs} args - Arguments to filter AnomalyVerifications to delete.
     * @example
     * // Delete a few AnomalyVerifications
     * const { count } = await prisma.anomalyVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnomalyVerificationDeleteManyArgs>(args?: SelectSubset<T, AnomalyVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnomalyVerifications
     * const anomalyVerification = await prisma.anomalyVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnomalyVerificationUpdateManyArgs>(args: SelectSubset<T, AnomalyVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyVerifications and returns the data updated in the database.
     * @param {AnomalyVerificationUpdateManyAndReturnArgs} args - Arguments to update many AnomalyVerifications.
     * @example
     * // Update many AnomalyVerifications
     * const anomalyVerification = await prisma.anomalyVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnomalyVerifications and only return the `id`
     * const anomalyVerificationWithIdOnly = await prisma.anomalyVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnomalyVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, AnomalyVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnomalyVerification.
     * @param {AnomalyVerificationUpsertArgs} args - Arguments to update or create a AnomalyVerification.
     * @example
     * // Update or create a AnomalyVerification
     * const anomalyVerification = await prisma.anomalyVerification.upsert({
     *   create: {
     *     // ... data to create a AnomalyVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnomalyVerification we want to update
     *   }
     * })
     */
    upsert<T extends AnomalyVerificationUpsertArgs>(args: SelectSubset<T, AnomalyVerificationUpsertArgs<ExtArgs>>): Prisma__AnomalyVerificationClient<$Result.GetResult<Prisma.$AnomalyVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnomalyVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyVerificationCountArgs} args - Arguments to filter AnomalyVerifications to count.
     * @example
     * // Count the number of AnomalyVerifications
     * const count = await prisma.anomalyVerification.count({
     *   where: {
     *     // ... the filter for the AnomalyVerifications we want to count
     *   }
     * })
    **/
    count<T extends AnomalyVerificationCountArgs>(
      args?: Subset<T, AnomalyVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnomalyVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnomalyVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnomalyVerificationAggregateArgs>(args: Subset<T, AnomalyVerificationAggregateArgs>): Prisma.PrismaPromise<GetAnomalyVerificationAggregateType<T>>

    /**
     * Group by AnomalyVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnomalyVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnomalyVerificationGroupByArgs['orderBy'] }
        : { orderBy?: AnomalyVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnomalyVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnomalyVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnomalyVerification model
   */
  readonly fields: AnomalyVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnomalyVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnomalyVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anomaly<T extends AnomalyReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnomalyReportDefaultArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investigator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnomalyVerification model
   */
  interface AnomalyVerificationFieldRefs {
    readonly id: FieldRef<"AnomalyVerification", 'String'>
    readonly anomalyId: FieldRef<"AnomalyVerification", 'String'>
    readonly investigatorId: FieldRef<"AnomalyVerification", 'String'>
    readonly stakedPoints: FieldRef<"AnomalyVerification", 'Int'>
    readonly createdAt: FieldRef<"AnomalyVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnomalyVerification findUnique
   */
  export type AnomalyVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyVerification to fetch.
     */
    where: AnomalyVerificationWhereUniqueInput
  }

  /**
   * AnomalyVerification findUniqueOrThrow
   */
  export type AnomalyVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyVerification to fetch.
     */
    where: AnomalyVerificationWhereUniqueInput
  }

  /**
   * AnomalyVerification findFirst
   */
  export type AnomalyVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyVerification to fetch.
     */
    where?: AnomalyVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyVerifications to fetch.
     */
    orderBy?: AnomalyVerificationOrderByWithRelationInput | AnomalyVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyVerifications.
     */
    cursor?: AnomalyVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyVerifications.
     */
    distinct?: AnomalyVerificationScalarFieldEnum | AnomalyVerificationScalarFieldEnum[]
  }

  /**
   * AnomalyVerification findFirstOrThrow
   */
  export type AnomalyVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyVerification to fetch.
     */
    where?: AnomalyVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyVerifications to fetch.
     */
    orderBy?: AnomalyVerificationOrderByWithRelationInput | AnomalyVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyVerifications.
     */
    cursor?: AnomalyVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyVerifications.
     */
    distinct?: AnomalyVerificationScalarFieldEnum | AnomalyVerificationScalarFieldEnum[]
  }

  /**
   * AnomalyVerification findMany
   */
  export type AnomalyVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyVerifications to fetch.
     */
    where?: AnomalyVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyVerifications to fetch.
     */
    orderBy?: AnomalyVerificationOrderByWithRelationInput | AnomalyVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnomalyVerifications.
     */
    cursor?: AnomalyVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyVerifications.
     */
    distinct?: AnomalyVerificationScalarFieldEnum | AnomalyVerificationScalarFieldEnum[]
  }

  /**
   * AnomalyVerification create
   */
  export type AnomalyVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a AnomalyVerification.
     */
    data: XOR<AnomalyVerificationCreateInput, AnomalyVerificationUncheckedCreateInput>
  }

  /**
   * AnomalyVerification createMany
   */
  export type AnomalyVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnomalyVerifications.
     */
    data: AnomalyVerificationCreateManyInput | AnomalyVerificationCreateManyInput[]
  }

  /**
   * AnomalyVerification createManyAndReturn
   */
  export type AnomalyVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many AnomalyVerifications.
     */
    data: AnomalyVerificationCreateManyInput | AnomalyVerificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnomalyVerification update
   */
  export type AnomalyVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a AnomalyVerification.
     */
    data: XOR<AnomalyVerificationUpdateInput, AnomalyVerificationUncheckedUpdateInput>
    /**
     * Choose, which AnomalyVerification to update.
     */
    where: AnomalyVerificationWhereUniqueInput
  }

  /**
   * AnomalyVerification updateMany
   */
  export type AnomalyVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnomalyVerifications.
     */
    data: XOR<AnomalyVerificationUpdateManyMutationInput, AnomalyVerificationUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyVerifications to update
     */
    where?: AnomalyVerificationWhereInput
    /**
     * Limit how many AnomalyVerifications to update.
     */
    limit?: number
  }

  /**
   * AnomalyVerification updateManyAndReturn
   */
  export type AnomalyVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * The data used to update AnomalyVerifications.
     */
    data: XOR<AnomalyVerificationUpdateManyMutationInput, AnomalyVerificationUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyVerifications to update
     */
    where?: AnomalyVerificationWhereInput
    /**
     * Limit how many AnomalyVerifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnomalyVerification upsert
   */
  export type AnomalyVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the AnomalyVerification to update in case it exists.
     */
    where: AnomalyVerificationWhereUniqueInput
    /**
     * In case the AnomalyVerification found by the `where` argument doesn't exist, create a new AnomalyVerification with this data.
     */
    create: XOR<AnomalyVerificationCreateInput, AnomalyVerificationUncheckedCreateInput>
    /**
     * In case the AnomalyVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnomalyVerificationUpdateInput, AnomalyVerificationUncheckedUpdateInput>
  }

  /**
   * AnomalyVerification delete
   */
  export type AnomalyVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
    /**
     * Filter which AnomalyVerification to delete.
     */
    where: AnomalyVerificationWhereUniqueInput
  }

  /**
   * AnomalyVerification deleteMany
   */
  export type AnomalyVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyVerifications to delete
     */
    where?: AnomalyVerificationWhereInput
    /**
     * Limit how many AnomalyVerifications to delete.
     */
    limit?: number
  }

  /**
   * AnomalyVerification without action
   */
  export type AnomalyVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyVerification
     */
    select?: AnomalyVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyVerification
     */
    omit?: AnomalyVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyVerificationInclude<ExtArgs> | null
  }


  /**
   * Model KycRequest
   */

  export type AggregateKycRequest = {
    _count: KycRequestCountAggregateOutputType | null
    _min: KycRequestMinAggregateOutputType | null
    _max: KycRequestMaxAggregateOutputType | null
  }

  export type KycRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    encryptedNik: string | null
    selfiePath: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KycRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    encryptedNik: string | null
    selfiePath: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KycRequestCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    encryptedNik: number
    selfiePath: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KycRequestMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    encryptedNik?: true
    selfiePath?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KycRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    encryptedNik?: true
    selfiePath?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KycRequestCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    encryptedNik?: true
    selfiePath?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KycRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycRequest to aggregate.
     */
    where?: KycRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycRequests to fetch.
     */
    orderBy?: KycRequestOrderByWithRelationInput | KycRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KycRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KycRequests
    **/
    _count?: true | KycRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KycRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KycRequestMaxAggregateInputType
  }

  export type GetKycRequestAggregateType<T extends KycRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateKycRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKycRequest[P]>
      : GetScalarType<T[P], AggregateKycRequest[P]>
  }




  export type KycRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycRequestWhereInput
    orderBy?: KycRequestOrderByWithAggregationInput | KycRequestOrderByWithAggregationInput[]
    by: KycRequestScalarFieldEnum[] | KycRequestScalarFieldEnum
    having?: KycRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KycRequestCountAggregateInputType | true
    _min?: KycRequestMinAggregateInputType
    _max?: KycRequestMaxAggregateInputType
  }

  export type KycRequestGroupByOutputType = {
    id: string
    userId: string
    name: string
    encryptedNik: string
    selfiePath: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: KycRequestCountAggregateOutputType | null
    _min: KycRequestMinAggregateOutputType | null
    _max: KycRequestMaxAggregateOutputType | null
  }

  type GetKycRequestGroupByPayload<T extends KycRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KycRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KycRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KycRequestGroupByOutputType[P]>
            : GetScalarType<T[P], KycRequestGroupByOutputType[P]>
        }
      >
    >


  export type KycRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    encryptedNik?: boolean
    selfiePath?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycRequest"]>

  export type KycRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    encryptedNik?: boolean
    selfiePath?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycRequest"]>

  export type KycRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    encryptedNik?: boolean
    selfiePath?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycRequest"]>

  export type KycRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    encryptedNik?: boolean
    selfiePath?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KycRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "encryptedNik" | "selfiePath" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["kycRequest"]>
  export type KycRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KycRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KycRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      encryptedNik: string
      selfiePath: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kycRequest"]>
    composites: {}
  }

  type KycRequestGetPayload<S extends boolean | null | undefined | KycRequestDefaultArgs> = $Result.GetResult<Prisma.$KycRequestPayload, S>

  type KycRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KycRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KycRequestCountAggregateInputType | true
    }

  export interface KycRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KycRequest'], meta: { name: 'KycRequest' } }
    /**
     * Find zero or one KycRequest that matches the filter.
     * @param {KycRequestFindUniqueArgs} args - Arguments to find a KycRequest
     * @example
     * // Get one KycRequest
     * const kycRequest = await prisma.kycRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KycRequestFindUniqueArgs>(args: SelectSubset<T, KycRequestFindUniqueArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KycRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KycRequestFindUniqueOrThrowArgs} args - Arguments to find a KycRequest
     * @example
     * // Get one KycRequest
     * const kycRequest = await prisma.kycRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KycRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, KycRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycRequestFindFirstArgs} args - Arguments to find a KycRequest
     * @example
     * // Get one KycRequest
     * const kycRequest = await prisma.kycRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KycRequestFindFirstArgs>(args?: SelectSubset<T, KycRequestFindFirstArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycRequestFindFirstOrThrowArgs} args - Arguments to find a KycRequest
     * @example
     * // Get one KycRequest
     * const kycRequest = await prisma.kycRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KycRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, KycRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KycRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KycRequests
     * const kycRequests = await prisma.kycRequest.findMany()
     * 
     * // Get first 10 KycRequests
     * const kycRequests = await prisma.kycRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kycRequestWithIdOnly = await prisma.kycRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KycRequestFindManyArgs>(args?: SelectSubset<T, KycRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KycRequest.
     * @param {KycRequestCreateArgs} args - Arguments to create a KycRequest.
     * @example
     * // Create one KycRequest
     * const KycRequest = await prisma.kycRequest.create({
     *   data: {
     *     // ... data to create a KycRequest
     *   }
     * })
     * 
     */
    create<T extends KycRequestCreateArgs>(args: SelectSubset<T, KycRequestCreateArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KycRequests.
     * @param {KycRequestCreateManyArgs} args - Arguments to create many KycRequests.
     * @example
     * // Create many KycRequests
     * const kycRequest = await prisma.kycRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KycRequestCreateManyArgs>(args?: SelectSubset<T, KycRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KycRequests and returns the data saved in the database.
     * @param {KycRequestCreateManyAndReturnArgs} args - Arguments to create many KycRequests.
     * @example
     * // Create many KycRequests
     * const kycRequest = await prisma.kycRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KycRequests and only return the `id`
     * const kycRequestWithIdOnly = await prisma.kycRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KycRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, KycRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KycRequest.
     * @param {KycRequestDeleteArgs} args - Arguments to delete one KycRequest.
     * @example
     * // Delete one KycRequest
     * const KycRequest = await prisma.kycRequest.delete({
     *   where: {
     *     // ... filter to delete one KycRequest
     *   }
     * })
     * 
     */
    delete<T extends KycRequestDeleteArgs>(args: SelectSubset<T, KycRequestDeleteArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KycRequest.
     * @param {KycRequestUpdateArgs} args - Arguments to update one KycRequest.
     * @example
     * // Update one KycRequest
     * const kycRequest = await prisma.kycRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KycRequestUpdateArgs>(args: SelectSubset<T, KycRequestUpdateArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KycRequests.
     * @param {KycRequestDeleteManyArgs} args - Arguments to filter KycRequests to delete.
     * @example
     * // Delete a few KycRequests
     * const { count } = await prisma.kycRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KycRequestDeleteManyArgs>(args?: SelectSubset<T, KycRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KycRequests
     * const kycRequest = await prisma.kycRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KycRequestUpdateManyArgs>(args: SelectSubset<T, KycRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycRequests and returns the data updated in the database.
     * @param {KycRequestUpdateManyAndReturnArgs} args - Arguments to update many KycRequests.
     * @example
     * // Update many KycRequests
     * const kycRequest = await prisma.kycRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KycRequests and only return the `id`
     * const kycRequestWithIdOnly = await prisma.kycRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KycRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, KycRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KycRequest.
     * @param {KycRequestUpsertArgs} args - Arguments to update or create a KycRequest.
     * @example
     * // Update or create a KycRequest
     * const kycRequest = await prisma.kycRequest.upsert({
     *   create: {
     *     // ... data to create a KycRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KycRequest we want to update
     *   }
     * })
     */
    upsert<T extends KycRequestUpsertArgs>(args: SelectSubset<T, KycRequestUpsertArgs<ExtArgs>>): Prisma__KycRequestClient<$Result.GetResult<Prisma.$KycRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KycRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycRequestCountArgs} args - Arguments to filter KycRequests to count.
     * @example
     * // Count the number of KycRequests
     * const count = await prisma.kycRequest.count({
     *   where: {
     *     // ... the filter for the KycRequests we want to count
     *   }
     * })
    **/
    count<T extends KycRequestCountArgs>(
      args?: Subset<T, KycRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KycRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KycRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KycRequestAggregateArgs>(args: Subset<T, KycRequestAggregateArgs>): Prisma.PrismaPromise<GetKycRequestAggregateType<T>>

    /**
     * Group by KycRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KycRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KycRequestGroupByArgs['orderBy'] }
        : { orderBy?: KycRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KycRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKycRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KycRequest model
   */
  readonly fields: KycRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KycRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KycRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KycRequest model
   */
  interface KycRequestFieldRefs {
    readonly id: FieldRef<"KycRequest", 'String'>
    readonly userId: FieldRef<"KycRequest", 'String'>
    readonly name: FieldRef<"KycRequest", 'String'>
    readonly encryptedNik: FieldRef<"KycRequest", 'String'>
    readonly selfiePath: FieldRef<"KycRequest", 'String'>
    readonly status: FieldRef<"KycRequest", 'String'>
    readonly createdAt: FieldRef<"KycRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"KycRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KycRequest findUnique
   */
  export type KycRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * Filter, which KycRequest to fetch.
     */
    where: KycRequestWhereUniqueInput
  }

  /**
   * KycRequest findUniqueOrThrow
   */
  export type KycRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * Filter, which KycRequest to fetch.
     */
    where: KycRequestWhereUniqueInput
  }

  /**
   * KycRequest findFirst
   */
  export type KycRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * Filter, which KycRequest to fetch.
     */
    where?: KycRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycRequests to fetch.
     */
    orderBy?: KycRequestOrderByWithRelationInput | KycRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycRequests.
     */
    cursor?: KycRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycRequests.
     */
    distinct?: KycRequestScalarFieldEnum | KycRequestScalarFieldEnum[]
  }

  /**
   * KycRequest findFirstOrThrow
   */
  export type KycRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * Filter, which KycRequest to fetch.
     */
    where?: KycRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycRequests to fetch.
     */
    orderBy?: KycRequestOrderByWithRelationInput | KycRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycRequests.
     */
    cursor?: KycRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycRequests.
     */
    distinct?: KycRequestScalarFieldEnum | KycRequestScalarFieldEnum[]
  }

  /**
   * KycRequest findMany
   */
  export type KycRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * Filter, which KycRequests to fetch.
     */
    where?: KycRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycRequests to fetch.
     */
    orderBy?: KycRequestOrderByWithRelationInput | KycRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KycRequests.
     */
    cursor?: KycRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycRequests.
     */
    distinct?: KycRequestScalarFieldEnum | KycRequestScalarFieldEnum[]
  }

  /**
   * KycRequest create
   */
  export type KycRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a KycRequest.
     */
    data: XOR<KycRequestCreateInput, KycRequestUncheckedCreateInput>
  }

  /**
   * KycRequest createMany
   */
  export type KycRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KycRequests.
     */
    data: KycRequestCreateManyInput | KycRequestCreateManyInput[]
  }

  /**
   * KycRequest createManyAndReturn
   */
  export type KycRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * The data used to create many KycRequests.
     */
    data: KycRequestCreateManyInput | KycRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycRequest update
   */
  export type KycRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a KycRequest.
     */
    data: XOR<KycRequestUpdateInput, KycRequestUncheckedUpdateInput>
    /**
     * Choose, which KycRequest to update.
     */
    where: KycRequestWhereUniqueInput
  }

  /**
   * KycRequest updateMany
   */
  export type KycRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KycRequests.
     */
    data: XOR<KycRequestUpdateManyMutationInput, KycRequestUncheckedUpdateManyInput>
    /**
     * Filter which KycRequests to update
     */
    where?: KycRequestWhereInput
    /**
     * Limit how many KycRequests to update.
     */
    limit?: number
  }

  /**
   * KycRequest updateManyAndReturn
   */
  export type KycRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * The data used to update KycRequests.
     */
    data: XOR<KycRequestUpdateManyMutationInput, KycRequestUncheckedUpdateManyInput>
    /**
     * Filter which KycRequests to update
     */
    where?: KycRequestWhereInput
    /**
     * Limit how many KycRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycRequest upsert
   */
  export type KycRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the KycRequest to update in case it exists.
     */
    where: KycRequestWhereUniqueInput
    /**
     * In case the KycRequest found by the `where` argument doesn't exist, create a new KycRequest with this data.
     */
    create: XOR<KycRequestCreateInput, KycRequestUncheckedCreateInput>
    /**
     * In case the KycRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KycRequestUpdateInput, KycRequestUncheckedUpdateInput>
  }

  /**
   * KycRequest delete
   */
  export type KycRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
    /**
     * Filter which KycRequest to delete.
     */
    where: KycRequestWhereUniqueInput
  }

  /**
   * KycRequest deleteMany
   */
  export type KycRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycRequests to delete
     */
    where?: KycRequestWhereInput
    /**
     * Limit how many KycRequests to delete.
     */
    limit?: number
  }

  /**
   * KycRequest without action
   */
  export type KycRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycRequest
     */
    select?: KycRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycRequest
     */
    omit?: KycRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InstitutionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    publicKey: 'publicKey',
    officialWebsite: 'officialWebsite',
    officialHotline: 'officialHotline',
    recoverySteps: 'recoverySteps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    isKycVerified: 'isKycVerified',
    reputationPoints: 'reputationPoints',
    lastClaimedAt: 'lastClaimedAt',
    badges: 'badges',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    story: 'story',
    scammerNumber: 'scammerNumber',
    spoofedBank: 'spoofedBank',
    status: 'status',
    isArchived: 'isArchived',
    authorId: 'authorId',
    verifierId: 'verifierId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const IncidentEvidenceScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    sanitizedUrl: 'sanitizedUrl',
    originalEvidenceUrl: 'originalEvidenceUrl',
    createdAt: 'createdAt'
  };

  export type IncidentEvidenceScalarFieldEnum = (typeof IncidentEvidenceScalarFieldEnum)[keyof typeof IncidentEvidenceScalarFieldEnum]


  export const ArchivedIncidentScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    encryptedStory: 'encryptedStory',
    metadata: 'metadata',
    archivedAt: 'archivedAt'
  };

  export type ArchivedIncidentScalarFieldEnum = (typeof ArchivedIncidentScalarFieldEnum)[keyof typeof ArchivedIncidentScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const VerifiedContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    whatsapp: 'whatsapp',
    domain: 'domain',
    email: 'email',
    instagram: 'instagram',
    isOfficial: 'isOfficial',
    signature: 'signature',
    institutionId: 'institutionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerifiedContactScalarFieldEnum = (typeof VerifiedContactScalarFieldEnum)[keyof typeof VerifiedContactScalarFieldEnum]


  export const AnomalyReportScalarFieldEnum: {
    id: 'id',
    sourceUrl: 'sourceUrl',
    detectedNumber: 'detectedNumber',
    detectedContext: 'detectedContext',
    severity: 'severity',
    status: 'status',
    consensusCount: 'consensusCount',
    institutionId: 'institutionId',
    createdAt: 'createdAt'
  };

  export type AnomalyReportScalarFieldEnum = (typeof AnomalyReportScalarFieldEnum)[keyof typeof AnomalyReportScalarFieldEnum]


  export const AnomalyVerificationScalarFieldEnum: {
    id: 'id',
    anomalyId: 'anomalyId',
    investigatorId: 'investigatorId',
    stakedPoints: 'stakedPoints',
    createdAt: 'createdAt'
  };

  export type AnomalyVerificationScalarFieldEnum = (typeof AnomalyVerificationScalarFieldEnum)[keyof typeof AnomalyVerificationScalarFieldEnum]


  export const KycRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    encryptedNik: 'encryptedNik',
    selfiePath: 'selfiePath',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KycRequestScalarFieldEnum = (typeof KycRequestScalarFieldEnum)[keyof typeof KycRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    id?: StringFilter<"Institution"> | string
    name?: StringFilter<"Institution"> | string
    domain?: StringNullableFilter<"Institution"> | string | null
    publicKey?: StringNullableFilter<"Institution"> | string | null
    officialWebsite?: StringNullableFilter<"Institution"> | string | null
    officialHotline?: StringNullableFilter<"Institution"> | string | null
    recoverySteps?: StringNullableFilter<"Institution"> | string | null
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    contacts?: VerifiedContactListRelationFilter
    anomalies?: AnomalyReportListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    officialWebsite?: SortOrderInput | SortOrder
    officialHotline?: SortOrderInput | SortOrder
    recoverySteps?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contacts?: VerifiedContactOrderByRelationAggregateInput
    anomalies?: AnomalyReportOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    domain?: StringNullableFilter<"Institution"> | string | null
    publicKey?: StringNullableFilter<"Institution"> | string | null
    officialWebsite?: StringNullableFilter<"Institution"> | string | null
    officialHotline?: StringNullableFilter<"Institution"> | string | null
    recoverySteps?: StringNullableFilter<"Institution"> | string | null
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    contacts?: VerifiedContactListRelationFilter
    anomalies?: AnomalyReportListRelationFilter
  }, "id" | "name">

  export type InstitutionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    officialWebsite?: SortOrderInput | SortOrder
    officialHotline?: SortOrderInput | SortOrder
    recoverySteps?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Institution"> | string
    name?: StringWithAggregatesFilter<"Institution"> | string
    domain?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    publicKey?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    officialWebsite?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    officialHotline?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    recoverySteps?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isKycVerified?: BoolFilter<"User"> | boolean
    reputationPoints?: IntFilter<"User"> | number
    lastClaimedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    badges?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    incidents?: IncidentListRelationFilter
    verifications?: IncidentListRelationFilter
    anomalyVerifications?: AnomalyVerificationListRelationFilter
    kycRequest?: XOR<KycRequestNullableScalarRelationFilter, KycRequestWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    isKycVerified?: SortOrder
    reputationPoints?: SortOrder
    lastClaimedAt?: SortOrderInput | SortOrder
    badges?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    verifications?: IncidentOrderByRelationAggregateInput
    anomalyVerifications?: AnomalyVerificationOrderByRelationAggregateInput
    kycRequest?: KycRequestOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isKycVerified?: BoolFilter<"User"> | boolean
    reputationPoints?: IntFilter<"User"> | number
    lastClaimedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    badges?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    incidents?: IncidentListRelationFilter
    verifications?: IncidentListRelationFilter
    anomalyVerifications?: AnomalyVerificationListRelationFilter
    kycRequest?: XOR<KycRequestNullableScalarRelationFilter, KycRequestWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    isKycVerified?: SortOrder
    reputationPoints?: SortOrder
    lastClaimedAt?: SortOrderInput | SortOrder
    badges?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    isKycVerified?: BoolWithAggregatesFilter<"User"> | boolean
    reputationPoints?: IntWithAggregatesFilter<"User"> | number
    lastClaimedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    badges?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    story?: StringFilter<"Incident"> | string
    scammerNumber?: StringNullableFilter<"Incident"> | string | null
    spoofedBank?: StringNullableFilter<"Incident"> | string | null
    status?: StringFilter<"Incident"> | string
    isArchived?: BoolFilter<"Incident"> | boolean
    authorId?: StringFilter<"Incident"> | string
    verifierId?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    evidence?: IncidentEvidenceListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    story?: SortOrder
    scammerNumber?: SortOrderInput | SortOrder
    spoofedBank?: SortOrderInput | SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    authorId?: SortOrder
    verifierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evidence?: IncidentEvidenceOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
    verifier?: UserOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    story?: StringFilter<"Incident"> | string
    scammerNumber?: StringNullableFilter<"Incident"> | string | null
    spoofedBank?: StringNullableFilter<"Incident"> | string | null
    status?: StringFilter<"Incident"> | string
    isArchived?: BoolFilter<"Incident"> | boolean
    authorId?: StringFilter<"Incident"> | string
    verifierId?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    evidence?: IncidentEvidenceListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    story?: SortOrder
    scammerNumber?: SortOrderInput | SortOrder
    spoofedBank?: SortOrderInput | SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    authorId?: SortOrder
    verifierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    story?: StringWithAggregatesFilter<"Incident"> | string
    scammerNumber?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    spoofedBank?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    status?: StringWithAggregatesFilter<"Incident"> | string
    isArchived?: BoolWithAggregatesFilter<"Incident"> | boolean
    authorId?: StringWithAggregatesFilter<"Incident"> | string
    verifierId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type IncidentEvidenceWhereInput = {
    AND?: IncidentEvidenceWhereInput | IncidentEvidenceWhereInput[]
    OR?: IncidentEvidenceWhereInput[]
    NOT?: IncidentEvidenceWhereInput | IncidentEvidenceWhereInput[]
    id?: StringFilter<"IncidentEvidence"> | string
    incidentId?: StringFilter<"IncidentEvidence"> | string
    sanitizedUrl?: StringFilter<"IncidentEvidence"> | string
    originalEvidenceUrl?: StringFilter<"IncidentEvidence"> | string
    createdAt?: DateTimeFilter<"IncidentEvidence"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentEvidenceOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    sanitizedUrl?: SortOrder
    originalEvidenceUrl?: SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentEvidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentEvidenceWhereInput | IncidentEvidenceWhereInput[]
    OR?: IncidentEvidenceWhereInput[]
    NOT?: IncidentEvidenceWhereInput | IncidentEvidenceWhereInput[]
    incidentId?: StringFilter<"IncidentEvidence"> | string
    sanitizedUrl?: StringFilter<"IncidentEvidence"> | string
    originalEvidenceUrl?: StringFilter<"IncidentEvidence"> | string
    createdAt?: DateTimeFilter<"IncidentEvidence"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentEvidenceOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    sanitizedUrl?: SortOrder
    originalEvidenceUrl?: SortOrder
    createdAt?: SortOrder
    _count?: IncidentEvidenceCountOrderByAggregateInput
    _max?: IncidentEvidenceMaxOrderByAggregateInput
    _min?: IncidentEvidenceMinOrderByAggregateInput
  }

  export type IncidentEvidenceScalarWhereWithAggregatesInput = {
    AND?: IncidentEvidenceScalarWhereWithAggregatesInput | IncidentEvidenceScalarWhereWithAggregatesInput[]
    OR?: IncidentEvidenceScalarWhereWithAggregatesInput[]
    NOT?: IncidentEvidenceScalarWhereWithAggregatesInput | IncidentEvidenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncidentEvidence"> | string
    incidentId?: StringWithAggregatesFilter<"IncidentEvidence"> | string
    sanitizedUrl?: StringWithAggregatesFilter<"IncidentEvidence"> | string
    originalEvidenceUrl?: StringWithAggregatesFilter<"IncidentEvidence"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IncidentEvidence"> | Date | string
  }

  export type ArchivedIncidentWhereInput = {
    AND?: ArchivedIncidentWhereInput | ArchivedIncidentWhereInput[]
    OR?: ArchivedIncidentWhereInput[]
    NOT?: ArchivedIncidentWhereInput | ArchivedIncidentWhereInput[]
    id?: StringFilter<"ArchivedIncident"> | string
    incidentId?: StringFilter<"ArchivedIncident"> | string
    encryptedStory?: StringFilter<"ArchivedIncident"> | string
    metadata?: StringNullableFilter<"ArchivedIncident"> | string | null
    archivedAt?: DateTimeFilter<"ArchivedIncident"> | Date | string
  }

  export type ArchivedIncidentOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    encryptedStory?: SortOrder
    metadata?: SortOrderInput | SortOrder
    archivedAt?: SortOrder
  }

  export type ArchivedIncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    incidentId?: string
    AND?: ArchivedIncidentWhereInput | ArchivedIncidentWhereInput[]
    OR?: ArchivedIncidentWhereInput[]
    NOT?: ArchivedIncidentWhereInput | ArchivedIncidentWhereInput[]
    encryptedStory?: StringFilter<"ArchivedIncident"> | string
    metadata?: StringNullableFilter<"ArchivedIncident"> | string | null
    archivedAt?: DateTimeFilter<"ArchivedIncident"> | Date | string
  }, "id" | "incidentId">

  export type ArchivedIncidentOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    encryptedStory?: SortOrder
    metadata?: SortOrderInput | SortOrder
    archivedAt?: SortOrder
    _count?: ArchivedIncidentCountOrderByAggregateInput
    _max?: ArchivedIncidentMaxOrderByAggregateInput
    _min?: ArchivedIncidentMinOrderByAggregateInput
  }

  export type ArchivedIncidentScalarWhereWithAggregatesInput = {
    AND?: ArchivedIncidentScalarWhereWithAggregatesInput | ArchivedIncidentScalarWhereWithAggregatesInput[]
    OR?: ArchivedIncidentScalarWhereWithAggregatesInput[]
    NOT?: ArchivedIncidentScalarWhereWithAggregatesInput | ArchivedIncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArchivedIncident"> | string
    incidentId?: StringWithAggregatesFilter<"ArchivedIncident"> | string
    encryptedStory?: StringWithAggregatesFilter<"ArchivedIncident"> | string
    metadata?: StringNullableWithAggregatesFilter<"ArchivedIncident"> | string | null
    archivedAt?: DateTimeWithAggregatesFilter<"ArchivedIncident"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type VerifiedContactWhereInput = {
    AND?: VerifiedContactWhereInput | VerifiedContactWhereInput[]
    OR?: VerifiedContactWhereInput[]
    NOT?: VerifiedContactWhereInput | VerifiedContactWhereInput[]
    id?: StringFilter<"VerifiedContact"> | string
    name?: StringFilter<"VerifiedContact"> | string
    phone?: StringNullableFilter<"VerifiedContact"> | string | null
    whatsapp?: StringNullableFilter<"VerifiedContact"> | string | null
    domain?: StringNullableFilter<"VerifiedContact"> | string | null
    email?: StringNullableFilter<"VerifiedContact"> | string | null
    instagram?: StringNullableFilter<"VerifiedContact"> | string | null
    isOfficial?: BoolFilter<"VerifiedContact"> | boolean
    signature?: StringNullableFilter<"VerifiedContact"> | string | null
    institutionId?: StringNullableFilter<"VerifiedContact"> | string | null
    createdAt?: DateTimeFilter<"VerifiedContact"> | Date | string
    updatedAt?: DateTimeFilter<"VerifiedContact"> | Date | string
    institution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
  }

  export type VerifiedContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    isOfficial?: SortOrder
    signature?: SortOrderInput | SortOrder
    institutionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institution?: InstitutionOrderByWithRelationInput
  }

  export type VerifiedContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerifiedContactWhereInput | VerifiedContactWhereInput[]
    OR?: VerifiedContactWhereInput[]
    NOT?: VerifiedContactWhereInput | VerifiedContactWhereInput[]
    name?: StringFilter<"VerifiedContact"> | string
    phone?: StringNullableFilter<"VerifiedContact"> | string | null
    whatsapp?: StringNullableFilter<"VerifiedContact"> | string | null
    domain?: StringNullableFilter<"VerifiedContact"> | string | null
    email?: StringNullableFilter<"VerifiedContact"> | string | null
    instagram?: StringNullableFilter<"VerifiedContact"> | string | null
    isOfficial?: BoolFilter<"VerifiedContact"> | boolean
    signature?: StringNullableFilter<"VerifiedContact"> | string | null
    institutionId?: StringNullableFilter<"VerifiedContact"> | string | null
    createdAt?: DateTimeFilter<"VerifiedContact"> | Date | string
    updatedAt?: DateTimeFilter<"VerifiedContact"> | Date | string
    institution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
  }, "id">

  export type VerifiedContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    isOfficial?: SortOrder
    signature?: SortOrderInput | SortOrder
    institutionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerifiedContactCountOrderByAggregateInput
    _max?: VerifiedContactMaxOrderByAggregateInput
    _min?: VerifiedContactMinOrderByAggregateInput
  }

  export type VerifiedContactScalarWhereWithAggregatesInput = {
    AND?: VerifiedContactScalarWhereWithAggregatesInput | VerifiedContactScalarWhereWithAggregatesInput[]
    OR?: VerifiedContactScalarWhereWithAggregatesInput[]
    NOT?: VerifiedContactScalarWhereWithAggregatesInput | VerifiedContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerifiedContact"> | string
    name?: StringWithAggregatesFilter<"VerifiedContact"> | string
    phone?: StringNullableWithAggregatesFilter<"VerifiedContact"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"VerifiedContact"> | string | null
    domain?: StringNullableWithAggregatesFilter<"VerifiedContact"> | string | null
    email?: StringNullableWithAggregatesFilter<"VerifiedContact"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"VerifiedContact"> | string | null
    isOfficial?: BoolWithAggregatesFilter<"VerifiedContact"> | boolean
    signature?: StringNullableWithAggregatesFilter<"VerifiedContact"> | string | null
    institutionId?: StringNullableWithAggregatesFilter<"VerifiedContact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VerifiedContact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerifiedContact"> | Date | string
  }

  export type AnomalyReportWhereInput = {
    AND?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    OR?: AnomalyReportWhereInput[]
    NOT?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    id?: StringFilter<"AnomalyReport"> | string
    sourceUrl?: StringFilter<"AnomalyReport"> | string
    detectedNumber?: StringFilter<"AnomalyReport"> | string
    detectedContext?: StringNullableFilter<"AnomalyReport"> | string | null
    severity?: StringFilter<"AnomalyReport"> | string
    status?: StringFilter<"AnomalyReport"> | string
    consensusCount?: IntFilter<"AnomalyReport"> | number
    institutionId?: StringNullableFilter<"AnomalyReport"> | string | null
    createdAt?: DateTimeFilter<"AnomalyReport"> | Date | string
    institution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
    verifications?: AnomalyVerificationListRelationFilter
  }

  export type AnomalyReportOrderByWithRelationInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    detectedNumber?: SortOrder
    detectedContext?: SortOrderInput | SortOrder
    severity?: SortOrder
    status?: SortOrder
    consensusCount?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    institution?: InstitutionOrderByWithRelationInput
    verifications?: AnomalyVerificationOrderByRelationAggregateInput
  }

  export type AnomalyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    OR?: AnomalyReportWhereInput[]
    NOT?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    sourceUrl?: StringFilter<"AnomalyReport"> | string
    detectedNumber?: StringFilter<"AnomalyReport"> | string
    detectedContext?: StringNullableFilter<"AnomalyReport"> | string | null
    severity?: StringFilter<"AnomalyReport"> | string
    status?: StringFilter<"AnomalyReport"> | string
    consensusCount?: IntFilter<"AnomalyReport"> | number
    institutionId?: StringNullableFilter<"AnomalyReport"> | string | null
    createdAt?: DateTimeFilter<"AnomalyReport"> | Date | string
    institution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
    verifications?: AnomalyVerificationListRelationFilter
  }, "id">

  export type AnomalyReportOrderByWithAggregationInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    detectedNumber?: SortOrder
    detectedContext?: SortOrderInput | SortOrder
    severity?: SortOrder
    status?: SortOrder
    consensusCount?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnomalyReportCountOrderByAggregateInput
    _avg?: AnomalyReportAvgOrderByAggregateInput
    _max?: AnomalyReportMaxOrderByAggregateInput
    _min?: AnomalyReportMinOrderByAggregateInput
    _sum?: AnomalyReportSumOrderByAggregateInput
  }

  export type AnomalyReportScalarWhereWithAggregatesInput = {
    AND?: AnomalyReportScalarWhereWithAggregatesInput | AnomalyReportScalarWhereWithAggregatesInput[]
    OR?: AnomalyReportScalarWhereWithAggregatesInput[]
    NOT?: AnomalyReportScalarWhereWithAggregatesInput | AnomalyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnomalyReport"> | string
    sourceUrl?: StringWithAggregatesFilter<"AnomalyReport"> | string
    detectedNumber?: StringWithAggregatesFilter<"AnomalyReport"> | string
    detectedContext?: StringNullableWithAggregatesFilter<"AnomalyReport"> | string | null
    severity?: StringWithAggregatesFilter<"AnomalyReport"> | string
    status?: StringWithAggregatesFilter<"AnomalyReport"> | string
    consensusCount?: IntWithAggregatesFilter<"AnomalyReport"> | number
    institutionId?: StringNullableWithAggregatesFilter<"AnomalyReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnomalyReport"> | Date | string
  }

  export type AnomalyVerificationWhereInput = {
    AND?: AnomalyVerificationWhereInput | AnomalyVerificationWhereInput[]
    OR?: AnomalyVerificationWhereInput[]
    NOT?: AnomalyVerificationWhereInput | AnomalyVerificationWhereInput[]
    id?: StringFilter<"AnomalyVerification"> | string
    anomalyId?: StringFilter<"AnomalyVerification"> | string
    investigatorId?: StringFilter<"AnomalyVerification"> | string
    stakedPoints?: IntFilter<"AnomalyVerification"> | number
    createdAt?: DateTimeFilter<"AnomalyVerification"> | Date | string
    anomaly?: XOR<AnomalyReportScalarRelationFilter, AnomalyReportWhereInput>
    investigator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnomalyVerificationOrderByWithRelationInput = {
    id?: SortOrder
    anomalyId?: SortOrder
    investigatorId?: SortOrder
    stakedPoints?: SortOrder
    createdAt?: SortOrder
    anomaly?: AnomalyReportOrderByWithRelationInput
    investigator?: UserOrderByWithRelationInput
  }

  export type AnomalyVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    anomalyId_investigatorId?: AnomalyVerificationAnomalyIdInvestigatorIdCompoundUniqueInput
    AND?: AnomalyVerificationWhereInput | AnomalyVerificationWhereInput[]
    OR?: AnomalyVerificationWhereInput[]
    NOT?: AnomalyVerificationWhereInput | AnomalyVerificationWhereInput[]
    anomalyId?: StringFilter<"AnomalyVerification"> | string
    investigatorId?: StringFilter<"AnomalyVerification"> | string
    stakedPoints?: IntFilter<"AnomalyVerification"> | number
    createdAt?: DateTimeFilter<"AnomalyVerification"> | Date | string
    anomaly?: XOR<AnomalyReportScalarRelationFilter, AnomalyReportWhereInput>
    investigator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "anomalyId_investigatorId">

  export type AnomalyVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    anomalyId?: SortOrder
    investigatorId?: SortOrder
    stakedPoints?: SortOrder
    createdAt?: SortOrder
    _count?: AnomalyVerificationCountOrderByAggregateInput
    _avg?: AnomalyVerificationAvgOrderByAggregateInput
    _max?: AnomalyVerificationMaxOrderByAggregateInput
    _min?: AnomalyVerificationMinOrderByAggregateInput
    _sum?: AnomalyVerificationSumOrderByAggregateInput
  }

  export type AnomalyVerificationScalarWhereWithAggregatesInput = {
    AND?: AnomalyVerificationScalarWhereWithAggregatesInput | AnomalyVerificationScalarWhereWithAggregatesInput[]
    OR?: AnomalyVerificationScalarWhereWithAggregatesInput[]
    NOT?: AnomalyVerificationScalarWhereWithAggregatesInput | AnomalyVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnomalyVerification"> | string
    anomalyId?: StringWithAggregatesFilter<"AnomalyVerification"> | string
    investigatorId?: StringWithAggregatesFilter<"AnomalyVerification"> | string
    stakedPoints?: IntWithAggregatesFilter<"AnomalyVerification"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnomalyVerification"> | Date | string
  }

  export type KycRequestWhereInput = {
    AND?: KycRequestWhereInput | KycRequestWhereInput[]
    OR?: KycRequestWhereInput[]
    NOT?: KycRequestWhereInput | KycRequestWhereInput[]
    id?: StringFilter<"KycRequest"> | string
    userId?: StringFilter<"KycRequest"> | string
    name?: StringFilter<"KycRequest"> | string
    encryptedNik?: StringFilter<"KycRequest"> | string
    selfiePath?: StringFilter<"KycRequest"> | string
    status?: StringFilter<"KycRequest"> | string
    createdAt?: DateTimeFilter<"KycRequest"> | Date | string
    updatedAt?: DateTimeFilter<"KycRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KycRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedNik?: SortOrder
    selfiePath?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KycRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: KycRequestWhereInput | KycRequestWhereInput[]
    OR?: KycRequestWhereInput[]
    NOT?: KycRequestWhereInput | KycRequestWhereInput[]
    name?: StringFilter<"KycRequest"> | string
    encryptedNik?: StringFilter<"KycRequest"> | string
    selfiePath?: StringFilter<"KycRequest"> | string
    status?: StringFilter<"KycRequest"> | string
    createdAt?: DateTimeFilter<"KycRequest"> | Date | string
    updatedAt?: DateTimeFilter<"KycRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type KycRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedNik?: SortOrder
    selfiePath?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KycRequestCountOrderByAggregateInput
    _max?: KycRequestMaxOrderByAggregateInput
    _min?: KycRequestMinOrderByAggregateInput
  }

  export type KycRequestScalarWhereWithAggregatesInput = {
    AND?: KycRequestScalarWhereWithAggregatesInput | KycRequestScalarWhereWithAggregatesInput[]
    OR?: KycRequestScalarWhereWithAggregatesInput[]
    NOT?: KycRequestScalarWhereWithAggregatesInput | KycRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KycRequest"> | string
    userId?: StringWithAggregatesFilter<"KycRequest"> | string
    name?: StringWithAggregatesFilter<"KycRequest"> | string
    encryptedNik?: StringWithAggregatesFilter<"KycRequest"> | string
    selfiePath?: StringWithAggregatesFilter<"KycRequest"> | string
    status?: StringWithAggregatesFilter<"KycRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KycRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KycRequest"> | Date | string
  }

  export type InstitutionCreateInput = {
    id?: string
    name: string
    domain?: string | null
    publicKey?: string | null
    officialWebsite?: string | null
    officialHotline?: string | null
    recoverySteps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: VerifiedContactCreateNestedManyWithoutInstitutionInput
    anomalies?: AnomalyReportCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    id?: string
    name: string
    domain?: string | null
    publicKey?: string | null
    officialWebsite?: string | null
    officialHotline?: string | null
    recoverySteps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: VerifiedContactUncheckedCreateNestedManyWithoutInstitutionInput
    anomalies?: AnomalyReportUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: VerifiedContactUpdateManyWithoutInstitutionNestedInput
    anomalies?: AnomalyReportUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: VerifiedContactUncheckedUpdateManyWithoutInstitutionNestedInput
    anomalies?: AnomalyReportUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    id?: string
    name: string
    domain?: string | null
    publicKey?: string | null
    officialWebsite?: string | null
    officialHotline?: string | null
    recoverySteps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutAuthorInput
    verifications?: IncidentCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAuthorInput
    verifications?: IncidentUncheckedCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUncheckedUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: IncidentEvidenceCreateNestedManyWithoutIncidentInput
    author: UserCreateNestedOneWithoutIncidentsInput
    verifier?: UserCreateNestedOneWithoutVerificationsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    authorId: string
    verifierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: IncidentEvidenceUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: IncidentEvidenceUpdateManyWithoutIncidentNestedInput
    author?: UserUpdateOneRequiredWithoutIncidentsNestedInput
    verifier?: UserUpdateOneWithoutVerificationsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    verifierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: IncidentEvidenceUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateManyInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    authorId: string
    verifierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    verifierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEvidenceCreateInput = {
    id?: string
    sanitizedUrl: string
    originalEvidenceUrl: string
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutEvidenceInput
  }

  export type IncidentEvidenceUncheckedCreateInput = {
    id?: string
    incidentId: string
    sanitizedUrl: string
    originalEvidenceUrl: string
    createdAt?: Date | string
  }

  export type IncidentEvidenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanitizedUrl?: StringFieldUpdateOperationsInput | string
    originalEvidenceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutEvidenceNestedInput
  }

  export type IncidentEvidenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    sanitizedUrl?: StringFieldUpdateOperationsInput | string
    originalEvidenceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEvidenceCreateManyInput = {
    id?: string
    incidentId: string
    sanitizedUrl: string
    originalEvidenceUrl: string
    createdAt?: Date | string
  }

  export type IncidentEvidenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanitizedUrl?: StringFieldUpdateOperationsInput | string
    originalEvidenceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEvidenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    sanitizedUrl?: StringFieldUpdateOperationsInput | string
    originalEvidenceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivedIncidentCreateInput = {
    id?: string
    incidentId: string
    encryptedStory: string
    metadata?: string | null
    archivedAt?: Date | string
  }

  export type ArchivedIncidentUncheckedCreateInput = {
    id?: string
    incidentId: string
    encryptedStory: string
    metadata?: string | null
    archivedAt?: Date | string
  }

  export type ArchivedIncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    encryptedStory?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivedIncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    encryptedStory?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivedIncidentCreateManyInput = {
    id?: string
    incidentId: string
    encryptedStory: string
    metadata?: string | null
    archivedAt?: Date | string
  }

  export type ArchivedIncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    encryptedStory?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivedIncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    encryptedStory?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerifiedContactCreateInput = {
    id?: string
    name: string
    phone?: string | null
    whatsapp?: string | null
    domain?: string | null
    email?: string | null
    instagram?: string | null
    isOfficial?: boolean
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    institution?: InstitutionCreateNestedOneWithoutContactsInput
  }

  export type VerifiedContactUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    whatsapp?: string | null
    domain?: string | null
    email?: string | null
    instagram?: string | null
    isOfficial?: boolean
    signature?: string | null
    institutionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifiedContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneWithoutContactsNestedInput
  }

  export type VerifiedContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifiedContactCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    whatsapp?: string | null
    domain?: string | null
    email?: string | null
    instagram?: string | null
    isOfficial?: boolean
    signature?: string | null
    institutionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifiedContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifiedContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyReportCreateInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    createdAt?: Date | string
    institution?: InstitutionCreateNestedOneWithoutAnomaliesInput
    verifications?: AnomalyVerificationCreateNestedManyWithoutAnomalyInput
  }

  export type AnomalyReportUncheckedCreateInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    institutionId?: string | null
    createdAt?: Date | string
    verifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutAnomalyInput
  }

  export type AnomalyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneWithoutAnomaliesNestedInput
    verifications?: AnomalyVerificationUpdateManyWithoutAnomalyNestedInput
  }

  export type AnomalyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: AnomalyVerificationUncheckedUpdateManyWithoutAnomalyNestedInput
  }

  export type AnomalyReportCreateManyInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    institutionId?: string | null
    createdAt?: Date | string
  }

  export type AnomalyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyVerificationCreateInput = {
    id?: string
    stakedPoints?: number
    createdAt?: Date | string
    anomaly: AnomalyReportCreateNestedOneWithoutVerificationsInput
    investigator: UserCreateNestedOneWithoutAnomalyVerificationsInput
  }

  export type AnomalyVerificationUncheckedCreateInput = {
    id?: string
    anomalyId: string
    investigatorId: string
    stakedPoints?: number
    createdAt?: Date | string
  }

  export type AnomalyVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly?: AnomalyReportUpdateOneRequiredWithoutVerificationsNestedInput
    investigator?: UserUpdateOneRequiredWithoutAnomalyVerificationsNestedInput
  }

  export type AnomalyVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anomalyId?: StringFieldUpdateOperationsInput | string
    investigatorId?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyVerificationCreateManyInput = {
    id?: string
    anomalyId: string
    investigatorId: string
    stakedPoints?: number
    createdAt?: Date | string
  }

  export type AnomalyVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    anomalyId?: StringFieldUpdateOperationsInput | string
    investigatorId?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycRequestCreateInput = {
    id?: string
    name: string
    encryptedNik: string
    selfiePath: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutKycRequestInput
  }

  export type KycRequestUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    encryptedNik: string
    selfiePath: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedNik?: StringFieldUpdateOperationsInput | string
    selfiePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKycRequestNestedInput
  }

  export type KycRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedNik?: StringFieldUpdateOperationsInput | string
    selfiePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycRequestCreateManyInput = {
    id?: string
    userId: string
    name: string
    encryptedNik: string
    selfiePath: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedNik?: StringFieldUpdateOperationsInput | string
    selfiePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedNik?: StringFieldUpdateOperationsInput | string
    selfiePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VerifiedContactListRelationFilter = {
    every?: VerifiedContactWhereInput
    some?: VerifiedContactWhereInput
    none?: VerifiedContactWhereInput
  }

  export type AnomalyReportListRelationFilter = {
    every?: AnomalyReportWhereInput
    some?: AnomalyReportWhereInput
    none?: AnomalyReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VerifiedContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnomalyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    publicKey?: SortOrder
    officialWebsite?: SortOrder
    officialHotline?: SortOrder
    recoverySteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    publicKey?: SortOrder
    officialWebsite?: SortOrder
    officialHotline?: SortOrder
    recoverySteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    publicKey?: SortOrder
    officialWebsite?: SortOrder
    officialHotline?: SortOrder
    recoverySteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type AnomalyVerificationListRelationFilter = {
    every?: AnomalyVerificationWhereInput
    some?: AnomalyVerificationWhereInput
    none?: AnomalyVerificationWhereInput
  }

  export type KycRequestNullableScalarRelationFilter = {
    is?: KycRequestWhereInput | null
    isNot?: KycRequestWhereInput | null
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnomalyVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    isKycVerified?: SortOrder
    reputationPoints?: SortOrder
    lastClaimedAt?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    reputationPoints?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    isKycVerified?: SortOrder
    reputationPoints?: SortOrder
    lastClaimedAt?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    isKycVerified?: SortOrder
    reputationPoints?: SortOrder
    lastClaimedAt?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    reputationPoints?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IncidentEvidenceListRelationFilter = {
    every?: IncidentEvidenceWhereInput
    some?: IncidentEvidenceWhereInput
    none?: IncidentEvidenceWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IncidentEvidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    story?: SortOrder
    scammerNumber?: SortOrder
    spoofedBank?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    authorId?: SortOrder
    verifierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    story?: SortOrder
    scammerNumber?: SortOrder
    spoofedBank?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    authorId?: SortOrder
    verifierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    story?: SortOrder
    scammerNumber?: SortOrder
    spoofedBank?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    authorId?: SortOrder
    verifierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentScalarRelationFilter = {
    is?: IncidentWhereInput
    isNot?: IncidentWhereInput
  }

  export type IncidentEvidenceCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    sanitizedUrl?: SortOrder
    originalEvidenceUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentEvidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    sanitizedUrl?: SortOrder
    originalEvidenceUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentEvidenceMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    sanitizedUrl?: SortOrder
    originalEvidenceUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchivedIncidentCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    encryptedStory?: SortOrder
    metadata?: SortOrder
    archivedAt?: SortOrder
  }

  export type ArchivedIncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    encryptedStory?: SortOrder
    metadata?: SortOrder
    archivedAt?: SortOrder
  }

  export type ArchivedIncidentMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    encryptedStory?: SortOrder
    metadata?: SortOrder
    archivedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionNullableScalarRelationFilter = {
    is?: InstitutionWhereInput | null
    isNot?: InstitutionWhereInput | null
  }

  export type VerifiedContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    domain?: SortOrder
    email?: SortOrder
    instagram?: SortOrder
    isOfficial?: SortOrder
    signature?: SortOrder
    institutionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerifiedContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    domain?: SortOrder
    email?: SortOrder
    instagram?: SortOrder
    isOfficial?: SortOrder
    signature?: SortOrder
    institutionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerifiedContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    domain?: SortOrder
    email?: SortOrder
    instagram?: SortOrder
    isOfficial?: SortOrder
    signature?: SortOrder
    institutionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnomalyReportCountOrderByAggregateInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    detectedNumber?: SortOrder
    detectedContext?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    consensusCount?: SortOrder
    institutionId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyReportAvgOrderByAggregateInput = {
    consensusCount?: SortOrder
  }

  export type AnomalyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    detectedNumber?: SortOrder
    detectedContext?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    consensusCount?: SortOrder
    institutionId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyReportMinOrderByAggregateInput = {
    id?: SortOrder
    sourceUrl?: SortOrder
    detectedNumber?: SortOrder
    detectedContext?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    consensusCount?: SortOrder
    institutionId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyReportSumOrderByAggregateInput = {
    consensusCount?: SortOrder
  }

  export type AnomalyReportScalarRelationFilter = {
    is?: AnomalyReportWhereInput
    isNot?: AnomalyReportWhereInput
  }

  export type AnomalyVerificationAnomalyIdInvestigatorIdCompoundUniqueInput = {
    anomalyId: string
    investigatorId: string
  }

  export type AnomalyVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    anomalyId?: SortOrder
    investigatorId?: SortOrder
    stakedPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyVerificationAvgOrderByAggregateInput = {
    stakedPoints?: SortOrder
  }

  export type AnomalyVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    anomalyId?: SortOrder
    investigatorId?: SortOrder
    stakedPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    anomalyId?: SortOrder
    investigatorId?: SortOrder
    stakedPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyVerificationSumOrderByAggregateInput = {
    stakedPoints?: SortOrder
  }

  export type KycRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedNik?: SortOrder
    selfiePath?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KycRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedNik?: SortOrder
    selfiePath?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KycRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedNik?: SortOrder
    selfiePath?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerifiedContactCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<VerifiedContactCreateWithoutInstitutionInput, VerifiedContactUncheckedCreateWithoutInstitutionInput> | VerifiedContactCreateWithoutInstitutionInput[] | VerifiedContactUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: VerifiedContactCreateOrConnectWithoutInstitutionInput | VerifiedContactCreateOrConnectWithoutInstitutionInput[]
    createMany?: VerifiedContactCreateManyInstitutionInputEnvelope
    connect?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
  }

  export type AnomalyReportCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<AnomalyReportCreateWithoutInstitutionInput, AnomalyReportUncheckedCreateWithoutInstitutionInput> | AnomalyReportCreateWithoutInstitutionInput[] | AnomalyReportUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AnomalyReportCreateOrConnectWithoutInstitutionInput | AnomalyReportCreateOrConnectWithoutInstitutionInput[]
    createMany?: AnomalyReportCreateManyInstitutionInputEnvelope
    connect?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
  }

  export type VerifiedContactUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<VerifiedContactCreateWithoutInstitutionInput, VerifiedContactUncheckedCreateWithoutInstitutionInput> | VerifiedContactCreateWithoutInstitutionInput[] | VerifiedContactUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: VerifiedContactCreateOrConnectWithoutInstitutionInput | VerifiedContactCreateOrConnectWithoutInstitutionInput[]
    createMany?: VerifiedContactCreateManyInstitutionInputEnvelope
    connect?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
  }

  export type AnomalyReportUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<AnomalyReportCreateWithoutInstitutionInput, AnomalyReportUncheckedCreateWithoutInstitutionInput> | AnomalyReportCreateWithoutInstitutionInput[] | AnomalyReportUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AnomalyReportCreateOrConnectWithoutInstitutionInput | AnomalyReportCreateOrConnectWithoutInstitutionInput[]
    createMany?: AnomalyReportCreateManyInstitutionInputEnvelope
    connect?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VerifiedContactUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<VerifiedContactCreateWithoutInstitutionInput, VerifiedContactUncheckedCreateWithoutInstitutionInput> | VerifiedContactCreateWithoutInstitutionInput[] | VerifiedContactUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: VerifiedContactCreateOrConnectWithoutInstitutionInput | VerifiedContactCreateOrConnectWithoutInstitutionInput[]
    upsert?: VerifiedContactUpsertWithWhereUniqueWithoutInstitutionInput | VerifiedContactUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: VerifiedContactCreateManyInstitutionInputEnvelope
    set?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    disconnect?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    delete?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    connect?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    update?: VerifiedContactUpdateWithWhereUniqueWithoutInstitutionInput | VerifiedContactUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: VerifiedContactUpdateManyWithWhereWithoutInstitutionInput | VerifiedContactUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: VerifiedContactScalarWhereInput | VerifiedContactScalarWhereInput[]
  }

  export type AnomalyReportUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<AnomalyReportCreateWithoutInstitutionInput, AnomalyReportUncheckedCreateWithoutInstitutionInput> | AnomalyReportCreateWithoutInstitutionInput[] | AnomalyReportUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AnomalyReportCreateOrConnectWithoutInstitutionInput | AnomalyReportCreateOrConnectWithoutInstitutionInput[]
    upsert?: AnomalyReportUpsertWithWhereUniqueWithoutInstitutionInput | AnomalyReportUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: AnomalyReportCreateManyInstitutionInputEnvelope
    set?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    disconnect?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    delete?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    connect?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    update?: AnomalyReportUpdateWithWhereUniqueWithoutInstitutionInput | AnomalyReportUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: AnomalyReportUpdateManyWithWhereWithoutInstitutionInput | AnomalyReportUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: AnomalyReportScalarWhereInput | AnomalyReportScalarWhereInput[]
  }

  export type VerifiedContactUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<VerifiedContactCreateWithoutInstitutionInput, VerifiedContactUncheckedCreateWithoutInstitutionInput> | VerifiedContactCreateWithoutInstitutionInput[] | VerifiedContactUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: VerifiedContactCreateOrConnectWithoutInstitutionInput | VerifiedContactCreateOrConnectWithoutInstitutionInput[]
    upsert?: VerifiedContactUpsertWithWhereUniqueWithoutInstitutionInput | VerifiedContactUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: VerifiedContactCreateManyInstitutionInputEnvelope
    set?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    disconnect?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    delete?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    connect?: VerifiedContactWhereUniqueInput | VerifiedContactWhereUniqueInput[]
    update?: VerifiedContactUpdateWithWhereUniqueWithoutInstitutionInput | VerifiedContactUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: VerifiedContactUpdateManyWithWhereWithoutInstitutionInput | VerifiedContactUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: VerifiedContactScalarWhereInput | VerifiedContactScalarWhereInput[]
  }

  export type AnomalyReportUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<AnomalyReportCreateWithoutInstitutionInput, AnomalyReportUncheckedCreateWithoutInstitutionInput> | AnomalyReportCreateWithoutInstitutionInput[] | AnomalyReportUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AnomalyReportCreateOrConnectWithoutInstitutionInput | AnomalyReportCreateOrConnectWithoutInstitutionInput[]
    upsert?: AnomalyReportUpsertWithWhereUniqueWithoutInstitutionInput | AnomalyReportUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: AnomalyReportCreateManyInstitutionInputEnvelope
    set?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    disconnect?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    delete?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    connect?: AnomalyReportWhereUniqueInput | AnomalyReportWhereUniqueInput[]
    update?: AnomalyReportUpdateWithWhereUniqueWithoutInstitutionInput | AnomalyReportUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: AnomalyReportUpdateManyWithWhereWithoutInstitutionInput | AnomalyReportUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: AnomalyReportScalarWhereInput | AnomalyReportScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<IncidentCreateWithoutAuthorInput, IncidentUncheckedCreateWithoutAuthorInput> | IncidentCreateWithoutAuthorInput[] | IncidentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAuthorInput | IncidentCreateOrConnectWithoutAuthorInput[]
    createMany?: IncidentCreateManyAuthorInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutVerifierInput = {
    create?: XOR<IncidentCreateWithoutVerifierInput, IncidentUncheckedCreateWithoutVerifierInput> | IncidentCreateWithoutVerifierInput[] | IncidentUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutVerifierInput | IncidentCreateOrConnectWithoutVerifierInput[]
    createMany?: IncidentCreateManyVerifierInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type AnomalyVerificationCreateNestedManyWithoutInvestigatorInput = {
    create?: XOR<AnomalyVerificationCreateWithoutInvestigatorInput, AnomalyVerificationUncheckedCreateWithoutInvestigatorInput> | AnomalyVerificationCreateWithoutInvestigatorInput[] | AnomalyVerificationUncheckedCreateWithoutInvestigatorInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutInvestigatorInput | AnomalyVerificationCreateOrConnectWithoutInvestigatorInput[]
    createMany?: AnomalyVerificationCreateManyInvestigatorInputEnvelope
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
  }

  export type KycRequestCreateNestedOneWithoutUserInput = {
    create?: XOR<KycRequestCreateWithoutUserInput, KycRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: KycRequestCreateOrConnectWithoutUserInput
    connect?: KycRequestWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<IncidentCreateWithoutAuthorInput, IncidentUncheckedCreateWithoutAuthorInput> | IncidentCreateWithoutAuthorInput[] | IncidentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAuthorInput | IncidentCreateOrConnectWithoutAuthorInput[]
    createMany?: IncidentCreateManyAuthorInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutVerifierInput = {
    create?: XOR<IncidentCreateWithoutVerifierInput, IncidentUncheckedCreateWithoutVerifierInput> | IncidentCreateWithoutVerifierInput[] | IncidentUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutVerifierInput | IncidentCreateOrConnectWithoutVerifierInput[]
    createMany?: IncidentCreateManyVerifierInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type AnomalyVerificationUncheckedCreateNestedManyWithoutInvestigatorInput = {
    create?: XOR<AnomalyVerificationCreateWithoutInvestigatorInput, AnomalyVerificationUncheckedCreateWithoutInvestigatorInput> | AnomalyVerificationCreateWithoutInvestigatorInput[] | AnomalyVerificationUncheckedCreateWithoutInvestigatorInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutInvestigatorInput | AnomalyVerificationCreateOrConnectWithoutInvestigatorInput[]
    createMany?: AnomalyVerificationCreateManyInvestigatorInputEnvelope
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
  }

  export type KycRequestUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<KycRequestCreateWithoutUserInput, KycRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: KycRequestCreateOrConnectWithoutUserInput
    connect?: KycRequestWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<IncidentCreateWithoutAuthorInput, IncidentUncheckedCreateWithoutAuthorInput> | IncidentCreateWithoutAuthorInput[] | IncidentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAuthorInput | IncidentCreateOrConnectWithoutAuthorInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutAuthorInput | IncidentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: IncidentCreateManyAuthorInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutAuthorInput | IncidentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutAuthorInput | IncidentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<IncidentCreateWithoutVerifierInput, IncidentUncheckedCreateWithoutVerifierInput> | IncidentCreateWithoutVerifierInput[] | IncidentUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutVerifierInput | IncidentCreateOrConnectWithoutVerifierInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutVerifierInput | IncidentUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: IncidentCreateManyVerifierInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutVerifierInput | IncidentUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutVerifierInput | IncidentUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type AnomalyVerificationUpdateManyWithoutInvestigatorNestedInput = {
    create?: XOR<AnomalyVerificationCreateWithoutInvestigatorInput, AnomalyVerificationUncheckedCreateWithoutInvestigatorInput> | AnomalyVerificationCreateWithoutInvestigatorInput[] | AnomalyVerificationUncheckedCreateWithoutInvestigatorInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutInvestigatorInput | AnomalyVerificationCreateOrConnectWithoutInvestigatorInput[]
    upsert?: AnomalyVerificationUpsertWithWhereUniqueWithoutInvestigatorInput | AnomalyVerificationUpsertWithWhereUniqueWithoutInvestigatorInput[]
    createMany?: AnomalyVerificationCreateManyInvestigatorInputEnvelope
    set?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    disconnect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    delete?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    update?: AnomalyVerificationUpdateWithWhereUniqueWithoutInvestigatorInput | AnomalyVerificationUpdateWithWhereUniqueWithoutInvestigatorInput[]
    updateMany?: AnomalyVerificationUpdateManyWithWhereWithoutInvestigatorInput | AnomalyVerificationUpdateManyWithWhereWithoutInvestigatorInput[]
    deleteMany?: AnomalyVerificationScalarWhereInput | AnomalyVerificationScalarWhereInput[]
  }

  export type KycRequestUpdateOneWithoutUserNestedInput = {
    create?: XOR<KycRequestCreateWithoutUserInput, KycRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: KycRequestCreateOrConnectWithoutUserInput
    upsert?: KycRequestUpsertWithoutUserInput
    disconnect?: KycRequestWhereInput | boolean
    delete?: KycRequestWhereInput | boolean
    connect?: KycRequestWhereUniqueInput
    update?: XOR<XOR<KycRequestUpdateToOneWithWhereWithoutUserInput, KycRequestUpdateWithoutUserInput>, KycRequestUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<IncidentCreateWithoutAuthorInput, IncidentUncheckedCreateWithoutAuthorInput> | IncidentCreateWithoutAuthorInput[] | IncidentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAuthorInput | IncidentCreateOrConnectWithoutAuthorInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutAuthorInput | IncidentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: IncidentCreateManyAuthorInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutAuthorInput | IncidentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutAuthorInput | IncidentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<IncidentCreateWithoutVerifierInput, IncidentUncheckedCreateWithoutVerifierInput> | IncidentCreateWithoutVerifierInput[] | IncidentUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutVerifierInput | IncidentCreateOrConnectWithoutVerifierInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutVerifierInput | IncidentUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: IncidentCreateManyVerifierInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutVerifierInput | IncidentUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutVerifierInput | IncidentUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorNestedInput = {
    create?: XOR<AnomalyVerificationCreateWithoutInvestigatorInput, AnomalyVerificationUncheckedCreateWithoutInvestigatorInput> | AnomalyVerificationCreateWithoutInvestigatorInput[] | AnomalyVerificationUncheckedCreateWithoutInvestigatorInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutInvestigatorInput | AnomalyVerificationCreateOrConnectWithoutInvestigatorInput[]
    upsert?: AnomalyVerificationUpsertWithWhereUniqueWithoutInvestigatorInput | AnomalyVerificationUpsertWithWhereUniqueWithoutInvestigatorInput[]
    createMany?: AnomalyVerificationCreateManyInvestigatorInputEnvelope
    set?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    disconnect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    delete?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    update?: AnomalyVerificationUpdateWithWhereUniqueWithoutInvestigatorInput | AnomalyVerificationUpdateWithWhereUniqueWithoutInvestigatorInput[]
    updateMany?: AnomalyVerificationUpdateManyWithWhereWithoutInvestigatorInput | AnomalyVerificationUpdateManyWithWhereWithoutInvestigatorInput[]
    deleteMany?: AnomalyVerificationScalarWhereInput | AnomalyVerificationScalarWhereInput[]
  }

  export type KycRequestUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<KycRequestCreateWithoutUserInput, KycRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: KycRequestCreateOrConnectWithoutUserInput
    upsert?: KycRequestUpsertWithoutUserInput
    disconnect?: KycRequestWhereInput | boolean
    delete?: KycRequestWhereInput | boolean
    connect?: KycRequestWhereUniqueInput
    update?: XOR<XOR<KycRequestUpdateToOneWithWhereWithoutUserInput, KycRequestUpdateWithoutUserInput>, KycRequestUncheckedUpdateWithoutUserInput>
  }

  export type IncidentEvidenceCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentEvidenceCreateWithoutIncidentInput, IncidentEvidenceUncheckedCreateWithoutIncidentInput> | IncidentEvidenceCreateWithoutIncidentInput[] | IncidentEvidenceUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEvidenceCreateOrConnectWithoutIncidentInput | IncidentEvidenceCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentEvidenceCreateManyIncidentInputEnvelope
    connect?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type IncidentEvidenceUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentEvidenceCreateWithoutIncidentInput, IncidentEvidenceUncheckedCreateWithoutIncidentInput> | IncidentEvidenceCreateWithoutIncidentInput[] | IncidentEvidenceUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEvidenceCreateOrConnectWithoutIncidentInput | IncidentEvidenceCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentEvidenceCreateManyIncidentInputEnvelope
    connect?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
  }

  export type IncidentEvidenceUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentEvidenceCreateWithoutIncidentInput, IncidentEvidenceUncheckedCreateWithoutIncidentInput> | IncidentEvidenceCreateWithoutIncidentInput[] | IncidentEvidenceUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEvidenceCreateOrConnectWithoutIncidentInput | IncidentEvidenceCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentEvidenceUpsertWithWhereUniqueWithoutIncidentInput | IncidentEvidenceUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentEvidenceCreateManyIncidentInputEnvelope
    set?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    disconnect?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    delete?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    connect?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    update?: IncidentEvidenceUpdateWithWhereUniqueWithoutIncidentInput | IncidentEvidenceUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentEvidenceUpdateManyWithWhereWithoutIncidentInput | IncidentEvidenceUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentEvidenceScalarWhereInput | IncidentEvidenceScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    upsert?: UserUpsertWithoutIncidentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentsInput, UserUpdateWithoutIncidentsInput>, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateOneWithoutVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    upsert?: UserUpsertWithoutVerificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationsInput, UserUpdateWithoutVerificationsInput>, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type IncidentEvidenceUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentEvidenceCreateWithoutIncidentInput, IncidentEvidenceUncheckedCreateWithoutIncidentInput> | IncidentEvidenceCreateWithoutIncidentInput[] | IncidentEvidenceUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEvidenceCreateOrConnectWithoutIncidentInput | IncidentEvidenceCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentEvidenceUpsertWithWhereUniqueWithoutIncidentInput | IncidentEvidenceUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentEvidenceCreateManyIncidentInputEnvelope
    set?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    disconnect?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    delete?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    connect?: IncidentEvidenceWhereUniqueInput | IncidentEvidenceWhereUniqueInput[]
    update?: IncidentEvidenceUpdateWithWhereUniqueWithoutIncidentInput | IncidentEvidenceUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentEvidenceUpdateManyWithWhereWithoutIncidentInput | IncidentEvidenceUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentEvidenceScalarWhereInput | IncidentEvidenceScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutEvidenceInput = {
    create?: XOR<IncidentCreateWithoutEvidenceInput, IncidentUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutEvidenceInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutEvidenceNestedInput = {
    create?: XOR<IncidentCreateWithoutEvidenceInput, IncidentUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutEvidenceInput
    upsert?: IncidentUpsertWithoutEvidenceInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutEvidenceInput, IncidentUpdateWithoutEvidenceInput>, IncidentUncheckedUpdateWithoutEvidenceInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type InstitutionCreateNestedOneWithoutContactsInput = {
    create?: XOR<InstitutionCreateWithoutContactsInput, InstitutionUncheckedCreateWithoutContactsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutContactsInput
    connect?: InstitutionWhereUniqueInput
  }

  export type InstitutionUpdateOneWithoutContactsNestedInput = {
    create?: XOR<InstitutionCreateWithoutContactsInput, InstitutionUncheckedCreateWithoutContactsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutContactsInput
    upsert?: InstitutionUpsertWithoutContactsInput
    disconnect?: InstitutionWhereInput | boolean
    delete?: InstitutionWhereInput | boolean
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutContactsInput, InstitutionUpdateWithoutContactsInput>, InstitutionUncheckedUpdateWithoutContactsInput>
  }

  export type InstitutionCreateNestedOneWithoutAnomaliesInput = {
    create?: XOR<InstitutionCreateWithoutAnomaliesInput, InstitutionUncheckedCreateWithoutAnomaliesInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutAnomaliesInput
    connect?: InstitutionWhereUniqueInput
  }

  export type AnomalyVerificationCreateNestedManyWithoutAnomalyInput = {
    create?: XOR<AnomalyVerificationCreateWithoutAnomalyInput, AnomalyVerificationUncheckedCreateWithoutAnomalyInput> | AnomalyVerificationCreateWithoutAnomalyInput[] | AnomalyVerificationUncheckedCreateWithoutAnomalyInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutAnomalyInput | AnomalyVerificationCreateOrConnectWithoutAnomalyInput[]
    createMany?: AnomalyVerificationCreateManyAnomalyInputEnvelope
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
  }

  export type AnomalyVerificationUncheckedCreateNestedManyWithoutAnomalyInput = {
    create?: XOR<AnomalyVerificationCreateWithoutAnomalyInput, AnomalyVerificationUncheckedCreateWithoutAnomalyInput> | AnomalyVerificationCreateWithoutAnomalyInput[] | AnomalyVerificationUncheckedCreateWithoutAnomalyInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutAnomalyInput | AnomalyVerificationCreateOrConnectWithoutAnomalyInput[]
    createMany?: AnomalyVerificationCreateManyAnomalyInputEnvelope
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
  }

  export type InstitutionUpdateOneWithoutAnomaliesNestedInput = {
    create?: XOR<InstitutionCreateWithoutAnomaliesInput, InstitutionUncheckedCreateWithoutAnomaliesInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutAnomaliesInput
    upsert?: InstitutionUpsertWithoutAnomaliesInput
    disconnect?: InstitutionWhereInput | boolean
    delete?: InstitutionWhereInput | boolean
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutAnomaliesInput, InstitutionUpdateWithoutAnomaliesInput>, InstitutionUncheckedUpdateWithoutAnomaliesInput>
  }

  export type AnomalyVerificationUpdateManyWithoutAnomalyNestedInput = {
    create?: XOR<AnomalyVerificationCreateWithoutAnomalyInput, AnomalyVerificationUncheckedCreateWithoutAnomalyInput> | AnomalyVerificationCreateWithoutAnomalyInput[] | AnomalyVerificationUncheckedCreateWithoutAnomalyInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutAnomalyInput | AnomalyVerificationCreateOrConnectWithoutAnomalyInput[]
    upsert?: AnomalyVerificationUpsertWithWhereUniqueWithoutAnomalyInput | AnomalyVerificationUpsertWithWhereUniqueWithoutAnomalyInput[]
    createMany?: AnomalyVerificationCreateManyAnomalyInputEnvelope
    set?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    disconnect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    delete?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    update?: AnomalyVerificationUpdateWithWhereUniqueWithoutAnomalyInput | AnomalyVerificationUpdateWithWhereUniqueWithoutAnomalyInput[]
    updateMany?: AnomalyVerificationUpdateManyWithWhereWithoutAnomalyInput | AnomalyVerificationUpdateManyWithWhereWithoutAnomalyInput[]
    deleteMany?: AnomalyVerificationScalarWhereInput | AnomalyVerificationScalarWhereInput[]
  }

  export type AnomalyVerificationUncheckedUpdateManyWithoutAnomalyNestedInput = {
    create?: XOR<AnomalyVerificationCreateWithoutAnomalyInput, AnomalyVerificationUncheckedCreateWithoutAnomalyInput> | AnomalyVerificationCreateWithoutAnomalyInput[] | AnomalyVerificationUncheckedCreateWithoutAnomalyInput[]
    connectOrCreate?: AnomalyVerificationCreateOrConnectWithoutAnomalyInput | AnomalyVerificationCreateOrConnectWithoutAnomalyInput[]
    upsert?: AnomalyVerificationUpsertWithWhereUniqueWithoutAnomalyInput | AnomalyVerificationUpsertWithWhereUniqueWithoutAnomalyInput[]
    createMany?: AnomalyVerificationCreateManyAnomalyInputEnvelope
    set?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    disconnect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    delete?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    connect?: AnomalyVerificationWhereUniqueInput | AnomalyVerificationWhereUniqueInput[]
    update?: AnomalyVerificationUpdateWithWhereUniqueWithoutAnomalyInput | AnomalyVerificationUpdateWithWhereUniqueWithoutAnomalyInput[]
    updateMany?: AnomalyVerificationUpdateManyWithWhereWithoutAnomalyInput | AnomalyVerificationUpdateManyWithWhereWithoutAnomalyInput[]
    deleteMany?: AnomalyVerificationScalarWhereInput | AnomalyVerificationScalarWhereInput[]
  }

  export type AnomalyReportCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<AnomalyReportCreateWithoutVerificationsInput, AnomalyReportUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: AnomalyReportCreateOrConnectWithoutVerificationsInput
    connect?: AnomalyReportWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnomalyVerificationsInput = {
    create?: XOR<UserCreateWithoutAnomalyVerificationsInput, UserUncheckedCreateWithoutAnomalyVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnomalyVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type AnomalyReportUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<AnomalyReportCreateWithoutVerificationsInput, AnomalyReportUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: AnomalyReportCreateOrConnectWithoutVerificationsInput
    upsert?: AnomalyReportUpsertWithoutVerificationsInput
    connect?: AnomalyReportWhereUniqueInput
    update?: XOR<XOR<AnomalyReportUpdateToOneWithWhereWithoutVerificationsInput, AnomalyReportUpdateWithoutVerificationsInput>, AnomalyReportUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateOneRequiredWithoutAnomalyVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutAnomalyVerificationsInput, UserUncheckedCreateWithoutAnomalyVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnomalyVerificationsInput
    upsert?: UserUpsertWithoutAnomalyVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnomalyVerificationsInput, UserUpdateWithoutAnomalyVerificationsInput>, UserUncheckedUpdateWithoutAnomalyVerificationsInput>
  }

  export type UserCreateNestedOneWithoutKycRequestInput = {
    create?: XOR<UserCreateWithoutKycRequestInput, UserUncheckedCreateWithoutKycRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutKycRequestInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutKycRequestNestedInput = {
    create?: XOR<UserCreateWithoutKycRequestInput, UserUncheckedCreateWithoutKycRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutKycRequestInput
    upsert?: UserUpsertWithoutKycRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKycRequestInput, UserUpdateWithoutKycRequestInput>, UserUncheckedUpdateWithoutKycRequestInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerifiedContactCreateWithoutInstitutionInput = {
    id?: string
    name: string
    phone?: string | null
    whatsapp?: string | null
    domain?: string | null
    email?: string | null
    instagram?: string | null
    isOfficial?: boolean
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifiedContactUncheckedCreateWithoutInstitutionInput = {
    id?: string
    name: string
    phone?: string | null
    whatsapp?: string | null
    domain?: string | null
    email?: string | null
    instagram?: string | null
    isOfficial?: boolean
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifiedContactCreateOrConnectWithoutInstitutionInput = {
    where: VerifiedContactWhereUniqueInput
    create: XOR<VerifiedContactCreateWithoutInstitutionInput, VerifiedContactUncheckedCreateWithoutInstitutionInput>
  }

  export type VerifiedContactCreateManyInstitutionInputEnvelope = {
    data: VerifiedContactCreateManyInstitutionInput | VerifiedContactCreateManyInstitutionInput[]
  }

  export type AnomalyReportCreateWithoutInstitutionInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    createdAt?: Date | string
    verifications?: AnomalyVerificationCreateNestedManyWithoutAnomalyInput
  }

  export type AnomalyReportUncheckedCreateWithoutInstitutionInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    createdAt?: Date | string
    verifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutAnomalyInput
  }

  export type AnomalyReportCreateOrConnectWithoutInstitutionInput = {
    where: AnomalyReportWhereUniqueInput
    create: XOR<AnomalyReportCreateWithoutInstitutionInput, AnomalyReportUncheckedCreateWithoutInstitutionInput>
  }

  export type AnomalyReportCreateManyInstitutionInputEnvelope = {
    data: AnomalyReportCreateManyInstitutionInput | AnomalyReportCreateManyInstitutionInput[]
  }

  export type VerifiedContactUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: VerifiedContactWhereUniqueInput
    update: XOR<VerifiedContactUpdateWithoutInstitutionInput, VerifiedContactUncheckedUpdateWithoutInstitutionInput>
    create: XOR<VerifiedContactCreateWithoutInstitutionInput, VerifiedContactUncheckedCreateWithoutInstitutionInput>
  }

  export type VerifiedContactUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: VerifiedContactWhereUniqueInput
    data: XOR<VerifiedContactUpdateWithoutInstitutionInput, VerifiedContactUncheckedUpdateWithoutInstitutionInput>
  }

  export type VerifiedContactUpdateManyWithWhereWithoutInstitutionInput = {
    where: VerifiedContactScalarWhereInput
    data: XOR<VerifiedContactUpdateManyMutationInput, VerifiedContactUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type VerifiedContactScalarWhereInput = {
    AND?: VerifiedContactScalarWhereInput | VerifiedContactScalarWhereInput[]
    OR?: VerifiedContactScalarWhereInput[]
    NOT?: VerifiedContactScalarWhereInput | VerifiedContactScalarWhereInput[]
    id?: StringFilter<"VerifiedContact"> | string
    name?: StringFilter<"VerifiedContact"> | string
    phone?: StringNullableFilter<"VerifiedContact"> | string | null
    whatsapp?: StringNullableFilter<"VerifiedContact"> | string | null
    domain?: StringNullableFilter<"VerifiedContact"> | string | null
    email?: StringNullableFilter<"VerifiedContact"> | string | null
    instagram?: StringNullableFilter<"VerifiedContact"> | string | null
    isOfficial?: BoolFilter<"VerifiedContact"> | boolean
    signature?: StringNullableFilter<"VerifiedContact"> | string | null
    institutionId?: StringNullableFilter<"VerifiedContact"> | string | null
    createdAt?: DateTimeFilter<"VerifiedContact"> | Date | string
    updatedAt?: DateTimeFilter<"VerifiedContact"> | Date | string
  }

  export type AnomalyReportUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: AnomalyReportWhereUniqueInput
    update: XOR<AnomalyReportUpdateWithoutInstitutionInput, AnomalyReportUncheckedUpdateWithoutInstitutionInput>
    create: XOR<AnomalyReportCreateWithoutInstitutionInput, AnomalyReportUncheckedCreateWithoutInstitutionInput>
  }

  export type AnomalyReportUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: AnomalyReportWhereUniqueInput
    data: XOR<AnomalyReportUpdateWithoutInstitutionInput, AnomalyReportUncheckedUpdateWithoutInstitutionInput>
  }

  export type AnomalyReportUpdateManyWithWhereWithoutInstitutionInput = {
    where: AnomalyReportScalarWhereInput
    data: XOR<AnomalyReportUpdateManyMutationInput, AnomalyReportUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type AnomalyReportScalarWhereInput = {
    AND?: AnomalyReportScalarWhereInput | AnomalyReportScalarWhereInput[]
    OR?: AnomalyReportScalarWhereInput[]
    NOT?: AnomalyReportScalarWhereInput | AnomalyReportScalarWhereInput[]
    id?: StringFilter<"AnomalyReport"> | string
    sourceUrl?: StringFilter<"AnomalyReport"> | string
    detectedNumber?: StringFilter<"AnomalyReport"> | string
    detectedContext?: StringNullableFilter<"AnomalyReport"> | string | null
    severity?: StringFilter<"AnomalyReport"> | string
    status?: StringFilter<"AnomalyReport"> | string
    consensusCount?: IntFilter<"AnomalyReport"> | number
    institutionId?: StringNullableFilter<"AnomalyReport"> | string | null
    createdAt?: DateTimeFilter<"AnomalyReport"> | Date | string
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type IncidentCreateWithoutAuthorInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: IncidentEvidenceCreateNestedManyWithoutIncidentInput
    verifier?: UserCreateNestedOneWithoutVerificationsInput
  }

  export type IncidentUncheckedCreateWithoutAuthorInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    verifierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: IncidentEvidenceUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutAuthorInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutAuthorInput, IncidentUncheckedCreateWithoutAuthorInput>
  }

  export type IncidentCreateManyAuthorInputEnvelope = {
    data: IncidentCreateManyAuthorInput | IncidentCreateManyAuthorInput[]
  }

  export type IncidentCreateWithoutVerifierInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: IncidentEvidenceCreateNestedManyWithoutIncidentInput
    author: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutVerifierInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: IncidentEvidenceUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutVerifierInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutVerifierInput, IncidentUncheckedCreateWithoutVerifierInput>
  }

  export type IncidentCreateManyVerifierInputEnvelope = {
    data: IncidentCreateManyVerifierInput | IncidentCreateManyVerifierInput[]
  }

  export type AnomalyVerificationCreateWithoutInvestigatorInput = {
    id?: string
    stakedPoints?: number
    createdAt?: Date | string
    anomaly: AnomalyReportCreateNestedOneWithoutVerificationsInput
  }

  export type AnomalyVerificationUncheckedCreateWithoutInvestigatorInput = {
    id?: string
    anomalyId: string
    stakedPoints?: number
    createdAt?: Date | string
  }

  export type AnomalyVerificationCreateOrConnectWithoutInvestigatorInput = {
    where: AnomalyVerificationWhereUniqueInput
    create: XOR<AnomalyVerificationCreateWithoutInvestigatorInput, AnomalyVerificationUncheckedCreateWithoutInvestigatorInput>
  }

  export type AnomalyVerificationCreateManyInvestigatorInputEnvelope = {
    data: AnomalyVerificationCreateManyInvestigatorInput | AnomalyVerificationCreateManyInvestigatorInput[]
  }

  export type KycRequestCreateWithoutUserInput = {
    id?: string
    name: string
    encryptedNik: string
    selfiePath: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycRequestUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    encryptedNik: string
    selfiePath: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycRequestCreateOrConnectWithoutUserInput = {
    where: KycRequestWhereUniqueInput
    create: XOR<KycRequestCreateWithoutUserInput, KycRequestUncheckedCreateWithoutUserInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutAuthorInput, IncidentUncheckedUpdateWithoutAuthorInput>
    create: XOR<IncidentCreateWithoutAuthorInput, IncidentUncheckedCreateWithoutAuthorInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutAuthorInput, IncidentUncheckedUpdateWithoutAuthorInput>
  }

  export type IncidentUpdateManyWithWhereWithoutAuthorInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    story?: StringFilter<"Incident"> | string
    scammerNumber?: StringNullableFilter<"Incident"> | string | null
    spoofedBank?: StringNullableFilter<"Incident"> | string | null
    status?: StringFilter<"Incident"> | string
    isArchived?: BoolFilter<"Incident"> | boolean
    authorId?: StringFilter<"Incident"> | string
    verifierId?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutVerifierInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutVerifierInput, IncidentUncheckedUpdateWithoutVerifierInput>
    create: XOR<IncidentCreateWithoutVerifierInput, IncidentUncheckedCreateWithoutVerifierInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutVerifierInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutVerifierInput, IncidentUncheckedUpdateWithoutVerifierInput>
  }

  export type IncidentUpdateManyWithWhereWithoutVerifierInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutVerifierInput>
  }

  export type AnomalyVerificationUpsertWithWhereUniqueWithoutInvestigatorInput = {
    where: AnomalyVerificationWhereUniqueInput
    update: XOR<AnomalyVerificationUpdateWithoutInvestigatorInput, AnomalyVerificationUncheckedUpdateWithoutInvestigatorInput>
    create: XOR<AnomalyVerificationCreateWithoutInvestigatorInput, AnomalyVerificationUncheckedCreateWithoutInvestigatorInput>
  }

  export type AnomalyVerificationUpdateWithWhereUniqueWithoutInvestigatorInput = {
    where: AnomalyVerificationWhereUniqueInput
    data: XOR<AnomalyVerificationUpdateWithoutInvestigatorInput, AnomalyVerificationUncheckedUpdateWithoutInvestigatorInput>
  }

  export type AnomalyVerificationUpdateManyWithWhereWithoutInvestigatorInput = {
    where: AnomalyVerificationScalarWhereInput
    data: XOR<AnomalyVerificationUpdateManyMutationInput, AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorInput>
  }

  export type AnomalyVerificationScalarWhereInput = {
    AND?: AnomalyVerificationScalarWhereInput | AnomalyVerificationScalarWhereInput[]
    OR?: AnomalyVerificationScalarWhereInput[]
    NOT?: AnomalyVerificationScalarWhereInput | AnomalyVerificationScalarWhereInput[]
    id?: StringFilter<"AnomalyVerification"> | string
    anomalyId?: StringFilter<"AnomalyVerification"> | string
    investigatorId?: StringFilter<"AnomalyVerification"> | string
    stakedPoints?: IntFilter<"AnomalyVerification"> | number
    createdAt?: DateTimeFilter<"AnomalyVerification"> | Date | string
  }

  export type KycRequestUpsertWithoutUserInput = {
    update: XOR<KycRequestUpdateWithoutUserInput, KycRequestUncheckedUpdateWithoutUserInput>
    create: XOR<KycRequestCreateWithoutUserInput, KycRequestUncheckedCreateWithoutUserInput>
    where?: KycRequestWhereInput
  }

  export type KycRequestUpdateToOneWithWhereWithoutUserInput = {
    where?: KycRequestWhereInput
    data: XOR<KycRequestUpdateWithoutUserInput, KycRequestUncheckedUpdateWithoutUserInput>
  }

  export type KycRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedNik?: StringFieldUpdateOperationsInput | string
    selfiePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedNik?: StringFieldUpdateOperationsInput | string
    selfiePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEvidenceCreateWithoutIncidentInput = {
    id?: string
    sanitizedUrl: string
    originalEvidenceUrl: string
    createdAt?: Date | string
  }

  export type IncidentEvidenceUncheckedCreateWithoutIncidentInput = {
    id?: string
    sanitizedUrl: string
    originalEvidenceUrl: string
    createdAt?: Date | string
  }

  export type IncidentEvidenceCreateOrConnectWithoutIncidentInput = {
    where: IncidentEvidenceWhereUniqueInput
    create: XOR<IncidentEvidenceCreateWithoutIncidentInput, IncidentEvidenceUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentEvidenceCreateManyIncidentInputEnvelope = {
    data: IncidentEvidenceCreateManyIncidentInput | IncidentEvidenceCreateManyIncidentInput[]
  }

  export type UserCreateWithoutIncidentsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    verifications?: IncidentCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    verifications?: IncidentUncheckedCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncidentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
  }

  export type UserCreateWithoutVerificationsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutAuthorInput
    anomalyVerifications?: AnomalyVerificationCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAuthorInput
    anomalyVerifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
  }

  export type IncidentEvidenceUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentEvidenceWhereUniqueInput
    update: XOR<IncidentEvidenceUpdateWithoutIncidentInput, IncidentEvidenceUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentEvidenceCreateWithoutIncidentInput, IncidentEvidenceUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentEvidenceUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentEvidenceWhereUniqueInput
    data: XOR<IncidentEvidenceUpdateWithoutIncidentInput, IncidentEvidenceUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentEvidenceUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentEvidenceScalarWhereInput
    data: XOR<IncidentEvidenceUpdateManyMutationInput, IncidentEvidenceUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentEvidenceScalarWhereInput = {
    AND?: IncidentEvidenceScalarWhereInput | IncidentEvidenceScalarWhereInput[]
    OR?: IncidentEvidenceScalarWhereInput[]
    NOT?: IncidentEvidenceScalarWhereInput | IncidentEvidenceScalarWhereInput[]
    id?: StringFilter<"IncidentEvidence"> | string
    incidentId?: StringFilter<"IncidentEvidence"> | string
    sanitizedUrl?: StringFilter<"IncidentEvidence"> | string
    originalEvidenceUrl?: StringFilter<"IncidentEvidence"> | string
    createdAt?: DateTimeFilter<"IncidentEvidence"> | Date | string
  }

  export type UserUpsertWithoutIncidentsInput = {
    update: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    verifications?: IncidentUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    verifications?: IncidentUncheckedUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutVerificationsInput = {
    update: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutAuthorNestedInput
    anomalyVerifications?: AnomalyVerificationUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAuthorNestedInput
    anomalyVerifications?: AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type IncidentCreateWithoutEvidenceInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutIncidentsInput
    verifier?: UserCreateNestedOneWithoutVerificationsInput
  }

  export type IncidentUncheckedCreateWithoutEvidenceInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    authorId: string
    verifierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutEvidenceInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutEvidenceInput, IncidentUncheckedCreateWithoutEvidenceInput>
  }

  export type IncidentUpsertWithoutEvidenceInput = {
    update: XOR<IncidentUpdateWithoutEvidenceInput, IncidentUncheckedUpdateWithoutEvidenceInput>
    create: XOR<IncidentCreateWithoutEvidenceInput, IncidentUncheckedCreateWithoutEvidenceInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutEvidenceInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutEvidenceInput, IncidentUncheckedUpdateWithoutEvidenceInput>
  }

  export type IncidentUpdateWithoutEvidenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutIncidentsNestedInput
    verifier?: UserUpdateOneWithoutVerificationsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutEvidenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    verifierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutAuthorInput
    verifications?: IncidentCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAuthorInput
    verifications?: IncidentUncheckedCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUncheckedUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutAuthorInput
    verifications?: IncidentCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAuthorInput
    verifications?: IncidentUncheckedCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutInvestigatorInput
    kycRequest?: KycRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUncheckedUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorNestedInput
    kycRequest?: KycRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InstitutionCreateWithoutContactsInput = {
    id?: string
    name: string
    domain?: string | null
    publicKey?: string | null
    officialWebsite?: string | null
    officialHotline?: string | null
    recoverySteps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anomalies?: AnomalyReportCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    domain?: string | null
    publicKey?: string | null
    officialWebsite?: string | null
    officialHotline?: string | null
    recoverySteps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anomalies?: AnomalyReportUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutContactsInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutContactsInput, InstitutionUncheckedCreateWithoutContactsInput>
  }

  export type InstitutionUpsertWithoutContactsInput = {
    update: XOR<InstitutionUpdateWithoutContactsInput, InstitutionUncheckedUpdateWithoutContactsInput>
    create: XOR<InstitutionCreateWithoutContactsInput, InstitutionUncheckedCreateWithoutContactsInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutContactsInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutContactsInput, InstitutionUncheckedUpdateWithoutContactsInput>
  }

  export type InstitutionUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anomalies?: AnomalyReportUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anomalies?: AnomalyReportUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateWithoutAnomaliesInput = {
    id?: string
    name: string
    domain?: string | null
    publicKey?: string | null
    officialWebsite?: string | null
    officialHotline?: string | null
    recoverySteps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: VerifiedContactCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutAnomaliesInput = {
    id?: string
    name: string
    domain?: string | null
    publicKey?: string | null
    officialWebsite?: string | null
    officialHotline?: string | null
    recoverySteps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: VerifiedContactUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutAnomaliesInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutAnomaliesInput, InstitutionUncheckedCreateWithoutAnomaliesInput>
  }

  export type AnomalyVerificationCreateWithoutAnomalyInput = {
    id?: string
    stakedPoints?: number
    createdAt?: Date | string
    investigator: UserCreateNestedOneWithoutAnomalyVerificationsInput
  }

  export type AnomalyVerificationUncheckedCreateWithoutAnomalyInput = {
    id?: string
    investigatorId: string
    stakedPoints?: number
    createdAt?: Date | string
  }

  export type AnomalyVerificationCreateOrConnectWithoutAnomalyInput = {
    where: AnomalyVerificationWhereUniqueInput
    create: XOR<AnomalyVerificationCreateWithoutAnomalyInput, AnomalyVerificationUncheckedCreateWithoutAnomalyInput>
  }

  export type AnomalyVerificationCreateManyAnomalyInputEnvelope = {
    data: AnomalyVerificationCreateManyAnomalyInput | AnomalyVerificationCreateManyAnomalyInput[]
  }

  export type InstitutionUpsertWithoutAnomaliesInput = {
    update: XOR<InstitutionUpdateWithoutAnomaliesInput, InstitutionUncheckedUpdateWithoutAnomaliesInput>
    create: XOR<InstitutionCreateWithoutAnomaliesInput, InstitutionUncheckedCreateWithoutAnomaliesInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutAnomaliesInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutAnomaliesInput, InstitutionUncheckedUpdateWithoutAnomaliesInput>
  }

  export type InstitutionUpdateWithoutAnomaliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: VerifiedContactUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutAnomaliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    officialWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    officialHotline?: NullableStringFieldUpdateOperationsInput | string | null
    recoverySteps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: VerifiedContactUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type AnomalyVerificationUpsertWithWhereUniqueWithoutAnomalyInput = {
    where: AnomalyVerificationWhereUniqueInput
    update: XOR<AnomalyVerificationUpdateWithoutAnomalyInput, AnomalyVerificationUncheckedUpdateWithoutAnomalyInput>
    create: XOR<AnomalyVerificationCreateWithoutAnomalyInput, AnomalyVerificationUncheckedCreateWithoutAnomalyInput>
  }

  export type AnomalyVerificationUpdateWithWhereUniqueWithoutAnomalyInput = {
    where: AnomalyVerificationWhereUniqueInput
    data: XOR<AnomalyVerificationUpdateWithoutAnomalyInput, AnomalyVerificationUncheckedUpdateWithoutAnomalyInput>
  }

  export type AnomalyVerificationUpdateManyWithWhereWithoutAnomalyInput = {
    where: AnomalyVerificationScalarWhereInput
    data: XOR<AnomalyVerificationUpdateManyMutationInput, AnomalyVerificationUncheckedUpdateManyWithoutAnomalyInput>
  }

  export type AnomalyReportCreateWithoutVerificationsInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    createdAt?: Date | string
    institution?: InstitutionCreateNestedOneWithoutAnomaliesInput
  }

  export type AnomalyReportUncheckedCreateWithoutVerificationsInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    institutionId?: string | null
    createdAt?: Date | string
  }

  export type AnomalyReportCreateOrConnectWithoutVerificationsInput = {
    where: AnomalyReportWhereUniqueInput
    create: XOR<AnomalyReportCreateWithoutVerificationsInput, AnomalyReportUncheckedCreateWithoutVerificationsInput>
  }

  export type UserCreateWithoutAnomalyVerificationsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutAuthorInput
    verifications?: IncidentCreateNestedManyWithoutVerifierInput
    kycRequest?: KycRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnomalyVerificationsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAuthorInput
    verifications?: IncidentUncheckedCreateNestedManyWithoutVerifierInput
    kycRequest?: KycRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnomalyVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnomalyVerificationsInput, UserUncheckedCreateWithoutAnomalyVerificationsInput>
  }

  export type AnomalyReportUpsertWithoutVerificationsInput = {
    update: XOR<AnomalyReportUpdateWithoutVerificationsInput, AnomalyReportUncheckedUpdateWithoutVerificationsInput>
    create: XOR<AnomalyReportCreateWithoutVerificationsInput, AnomalyReportUncheckedCreateWithoutVerificationsInput>
    where?: AnomalyReportWhereInput
  }

  export type AnomalyReportUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: AnomalyReportWhereInput
    data: XOR<AnomalyReportUpdateWithoutVerificationsInput, AnomalyReportUncheckedUpdateWithoutVerificationsInput>
  }

  export type AnomalyReportUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneWithoutAnomaliesNestedInput
  }

  export type AnomalyReportUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    institutionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAnomalyVerificationsInput = {
    update: XOR<UserUpdateWithoutAnomalyVerificationsInput, UserUncheckedUpdateWithoutAnomalyVerificationsInput>
    create: XOR<UserCreateWithoutAnomalyVerificationsInput, UserUncheckedCreateWithoutAnomalyVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnomalyVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnomalyVerificationsInput, UserUncheckedUpdateWithoutAnomalyVerificationsInput>
  }

  export type UserUpdateWithoutAnomalyVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUpdateManyWithoutVerifierNestedInput
    kycRequest?: KycRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnomalyVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUncheckedUpdateManyWithoutVerifierNestedInput
    kycRequest?: KycRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutKycRequestInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutAuthorInput
    verifications?: IncidentCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationCreateNestedManyWithoutInvestigatorInput
  }

  export type UserUncheckedCreateWithoutKycRequestInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    isKycVerified?: boolean
    reputationPoints?: number
    lastClaimedAt?: Date | string | null
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAuthorInput
    verifications?: IncidentUncheckedCreateNestedManyWithoutVerifierInput
    anomalyVerifications?: AnomalyVerificationUncheckedCreateNestedManyWithoutInvestigatorInput
  }

  export type UserCreateOrConnectWithoutKycRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKycRequestInput, UserUncheckedCreateWithoutKycRequestInput>
  }

  export type UserUpsertWithoutKycRequestInput = {
    update: XOR<UserUpdateWithoutKycRequestInput, UserUncheckedUpdateWithoutKycRequestInput>
    create: XOR<UserCreateWithoutKycRequestInput, UserUncheckedCreateWithoutKycRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKycRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKycRequestInput, UserUncheckedUpdateWithoutKycRequestInput>
  }

  export type UserUpdateWithoutKycRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUpdateManyWithoutInvestigatorNestedInput
  }

  export type UserUncheckedUpdateWithoutKycRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isKycVerified?: BoolFieldUpdateOperationsInput | boolean
    reputationPoints?: IntFieldUpdateOperationsInput | number
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAuthorNestedInput
    verifications?: IncidentUncheckedUpdateManyWithoutVerifierNestedInput
    anomalyVerifications?: AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorNestedInput
  }

  export type VerifiedContactCreateManyInstitutionInput = {
    id?: string
    name: string
    phone?: string | null
    whatsapp?: string | null
    domain?: string | null
    email?: string | null
    instagram?: string | null
    isOfficial?: boolean
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnomalyReportCreateManyInstitutionInput = {
    id?: string
    sourceUrl: string
    detectedNumber: string
    detectedContext?: string | null
    severity?: string
    status?: string
    consensusCount?: number
    createdAt?: Date | string
  }

  export type VerifiedContactUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifiedContactUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifiedContactUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyReportUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: AnomalyVerificationUpdateManyWithoutAnomalyNestedInput
  }

  export type AnomalyReportUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: AnomalyVerificationUncheckedUpdateManyWithoutAnomalyNestedInput
  }

  export type AnomalyReportUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    detectedNumber?: StringFieldUpdateOperationsInput | string
    detectedContext?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    consensusCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type IncidentCreateManyAuthorInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    verifierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateManyVerifierInput = {
    id?: string
    story: string
    scammerNumber?: string | null
    spoofedBank?: string | null
    status?: string
    isArchived?: boolean
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnomalyVerificationCreateManyInvestigatorInput = {
    id?: string
    anomalyId: string
    stakedPoints?: number
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: IncidentEvidenceUpdateManyWithoutIncidentNestedInput
    verifier?: UserUpdateOneWithoutVerificationsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    verifierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: IncidentEvidenceUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    verifierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutVerifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: IncidentEvidenceUpdateManyWithoutIncidentNestedInput
    author?: UserUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutVerifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: IncidentEvidenceUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutVerifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    scammerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    spoofedBank?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyVerificationUpdateWithoutInvestigatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anomaly?: AnomalyReportUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type AnomalyVerificationUncheckedUpdateWithoutInvestigatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    anomalyId?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyVerificationUncheckedUpdateManyWithoutInvestigatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    anomalyId?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEvidenceCreateManyIncidentInput = {
    id?: string
    sanitizedUrl: string
    originalEvidenceUrl: string
    createdAt?: Date | string
  }

  export type IncidentEvidenceUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanitizedUrl?: StringFieldUpdateOperationsInput | string
    originalEvidenceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEvidenceUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanitizedUrl?: StringFieldUpdateOperationsInput | string
    originalEvidenceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEvidenceUncheckedUpdateManyWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanitizedUrl?: StringFieldUpdateOperationsInput | string
    originalEvidenceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyVerificationCreateManyAnomalyInput = {
    id?: string
    investigatorId: string
    stakedPoints?: number
    createdAt?: Date | string
  }

  export type AnomalyVerificationUpdateWithoutAnomalyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investigator?: UserUpdateOneRequiredWithoutAnomalyVerificationsNestedInput
  }

  export type AnomalyVerificationUncheckedUpdateWithoutAnomalyInput = {
    id?: StringFieldUpdateOperationsInput | string
    investigatorId?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyVerificationUncheckedUpdateManyWithoutAnomalyInput = {
    id?: StringFieldUpdateOperationsInput | string
    investigatorId?: StringFieldUpdateOperationsInput | string
    stakedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}