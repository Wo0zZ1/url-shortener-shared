import { type UserType } from '../types'

// Access Token

export interface UserDataFromAccessTokenPayload {
	sub: number
	type: UserType
}

export interface AccessTokenPayloadWithoutUserData {
	exp: Date
	iat: Date
}

export interface CreateAccessTokenPayload
	extends UserDataFromAccessTokenPayload,
		Partial<AccessTokenPayloadWithoutUserData> {}

export interface AccessTokenPayload
	extends UserDataFromAccessTokenPayload,
		AccessTokenPayloadWithoutUserData {}

// Refresh Token

export interface JwtDataFromAccessTokenPayload {
	sub: number
	jti: number
	revoked: boolean
}

export interface RefreshTokenPayloadWithoutJwtData {
	exp: Date
	iat: Date
}

export interface CreateRefreshTokenPayload
	extends JwtDataFromAccessTokenPayload,
		Partial<RefreshTokenPayloadWithoutJwtData> {}

export interface RefreshTokenPayload
	extends JwtDataFromAccessTokenPayload,
		RefreshTokenPayloadWithoutJwtData {}

// Tokens

export interface Tokens {
	accessToken: string
	refreshToken: string
}
