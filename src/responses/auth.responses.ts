import type { UserEntity } from '../entities'
import type {
	RefreshTokenPayload,
	Tokens,
	UserDataFromAccessTokenPayload,
} from '../interfaces'
import type { MessageResponse } from './base.responses'

/**
 * Response for POST /auth/register-guest
 */
export interface RegisterGuestResponse {
	uuid: string
	createdUser: UserEntity
}

/**
 * Response for POST /auth/register-user
 */
export interface RegisterUserResponse {
	createdUser: UserEntity
}

/**
 * Response for POST /auth/login
 */
export interface LoginResponse {
	user: UserDataFromAccessTokenPayload
	tokens: Tokens
}

/**
 * Response for POST /auth/refresh
 */
export type RefreshTokenResponse = Tokens

/**
 * Response for POST /auth/logout
 */
export type LogoutResponse = MessageResponse

/**
 * Response for POST /auth/logout-all
 */
export type LogoutAllResponse = MessageResponse

/**
 * Response for GET /auth/me
 */
export type GetCurrentUserResponse = UserDataFromAccessTokenPayload

/**
 * Response for GET /auth/user/:userId/sessions
 */
export type GetActiveSessionsResponse = RefreshTokenPayload[]

/**
 * Response for DELETE /auth/user/:userId/sessions/:jti
 */
export type RevokeSessionResponse = MessageResponse
