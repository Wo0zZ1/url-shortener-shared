import { type UserType } from '../types'

export interface UserDataFromAccessTokenPayload {
	sub: number
	type: UserType
	uuid?: string
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
