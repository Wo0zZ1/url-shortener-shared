import { UserEntity } from '../entities'

/**
 * Response for POST /users
 */
export type CreateUserResponse = UserEntity

/**
 * Response for GET /users
 */
export type GetAllUsersResponse = UserEntity[]

/**
 * Response for GET /users/id/:id
 */
export type GetUserByIdResponse = UserEntity

/**
 * Response for GET /users/uuid/:uuid
 */
export type GetUserByUuidResponse = UserEntity

/**
 * Response for PATCH /users/id/:id
 */
export type UpdateUserByIdResponse = UserEntity

/**
 * Response for PATCH /users/uuid/:uuid
 */
export type UpdateUserByUuidResponse = UserEntity
