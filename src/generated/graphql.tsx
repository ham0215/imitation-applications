import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
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

export type TweetsQueryVariables = Exact<{ [key: string]: never }>;

export type TweetsQuery = { __typename?: 'Query' } & {
  tweets: { __typename?: 'TweetConnection' } & {
    nodes?: Maybe<
      Array<
        Maybe<
          { __typename?: 'Tweet' } & Pick<
            Tweet,
            'tweetId' | 'text' | 'img' | 'imgAlt' | 'userId' | 'name' | 'avatarAlt' | 'avatarImg' | 'tweetTime'
          >
        >
      >
    >;
  };
};

export const TweetsDocument = gql`
  query Tweets {
    tweets {
      nodes {
        tweetId
        text
        img
        imgAlt
        userId
        name
        avatarAlt
        avatarImg
        tweetTime
      }
    }
  }
`;

/**
 * __useTweetsQuery__
 *
 * To run a query within a React component, call `useTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTweetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TweetsQuery, TweetsQueryVariables>) {
  return ApolloReactHooks.useQuery<TweetsQuery, TweetsQueryVariables>(TweetsDocument, baseOptions);
}
export function useTweetsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TweetsQuery, TweetsQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<TweetsQuery, TweetsQueryVariables>(TweetsDocument, baseOptions);
}
export type TweetsQueryHookResult = ReturnType<typeof useTweetsQuery>;
export type TweetsLazyQueryHookResult = ReturnType<typeof useTweetsLazyQuery>;
export type TweetsQueryResult = ApolloReactCommon.QueryResult<TweetsQuery, TweetsQueryVariables>;
