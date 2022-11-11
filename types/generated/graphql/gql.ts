/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetUsers {\n    users(order_by: { created_at: desc }) {\n      id\n      name\n      created_at\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetUserIds {\n    users(order_by: { created_at: desc }) {\n      id\n    }\n  }\n": types.GetUserIdsDocument,
    "\n  query GetUseById($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n": types.GetUseByIdDocument,
    "\n  mutation CreateUser($name: String!) {\n    insert_users_one(object: { name: $name }) {\n      created_at\n      id\n      name\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation Delete_User($id: uuid!) {\n    delete_users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n": types.Delete_UserDocument,
    "\n  mutation Update_User($id: uuid!, $name: String!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {\n      created_at\n      id\n      name\n    }\n  }\n": types.Update_UserDocument,
};

export function graphql(source: "\n  query GetUsers {\n    users(order_by: { created_at: desc }) {\n      id\n      name\n      created_at\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users(order_by: { created_at: desc }) {\n      id\n      name\n      created_at\n    }\n  }\n"];
export function graphql(source: "\n  query GetUserIds {\n    users(order_by: { created_at: desc }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetUserIds {\n    users(order_by: { created_at: desc }) {\n      id\n    }\n  }\n"];
export function graphql(source: "\n  query GetUseById($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n"): (typeof documents)["\n  query GetUseById($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateUser($name: String!) {\n    insert_users_one(object: { name: $name }) {\n      created_at\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($name: String!) {\n    insert_users_one(object: { name: $name }) {\n      created_at\n      id\n      name\n    }\n  }\n"];
export function graphql(source: "\n  mutation Delete_User($id: uuid!) {\n    delete_users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n"): (typeof documents)["\n  mutation Delete_User($id: uuid!) {\n    delete_users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n"];
export function graphql(source: "\n  mutation Update_User($id: uuid!, $name: String!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {\n      created_at\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation Update_User($id: uuid!, $name: String!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {\n      created_at\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;