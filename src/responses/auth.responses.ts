import { UserEntity } from '../entities'
import { RefreshTokenPayload, UserDataFromAccessTokenPayload } from '../interfaces'
import { MessageResponse } from './base.responses'

export interface Tokens {
	accessToken: string
	refreshToken: string
}

export interface LoginResponse {
	user: UserDataFromAccessTokenPayload
	tokens: Tokens
}

export interface RegisterGuestResponse {
	uuid: string
	createdUser: UserEntity
}

export interface RegisterUserResponse {
	createdUser: {
		id: number
		uuid?: string
		email?: string
		username?: string
		type: string
	}
}

export type UserSessionsResponse = RefreshTokenPayload[]

export type RefreshTokensResponse = Tokens

export type LogoutResponse = MessageResponse

export type logoutAllResponse = MessageResponse

export type GetCurrentUserResponse = UserDataFromAccessTokenPayload
