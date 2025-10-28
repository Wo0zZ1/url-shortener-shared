import { RefreshTokenPayload, UserDataFromAccessTokenPayload } from '../interfaces'

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
	createdUser: {
		id: number
		uuid: string
		type: string
	}
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

export type RefreshTokenResponse = Tokens

export type GetCurrentUserResponse = UserDataFromAccessTokenPayload
