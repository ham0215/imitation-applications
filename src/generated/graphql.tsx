import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** ツイート一覧を取得する */
  tweets: TweetConnection;
};

export type QueryTweetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Tweet = {
  __typename?: 'Tweet';
  avatarAlt: Scalars['String'];
  avatarImg: Scalars['String'];
  img: Scalars['String'];
  imgAlt: Scalars['String'];
  name: Scalars['String'];
  text: Scalars['String'];
  tweetId: Scalars['ID'];
  tweetTime: Scalars['String'];
  userId: Scalars['String'];
};

/** The connection type for Tweet. */
export type TweetConnection = {
  __typename?: 'TweetConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TweetEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Tweet>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TweetEdge = {
  __typename?: 'TweetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Tweet>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  tweets: { __typename?: 'TweetConnection' } & {
    nodes?: Maybe<
      Array<
        Maybe<
          { __typename?: 'Tweet' } & Pick<
            Tweet,
            'tweetId' | 'text' | 'img' | 'imgAlt' | 'avatarAlt' | 'avatarImg' | 'tweetTime'
          >
        >
      >
    >;
  };
};
