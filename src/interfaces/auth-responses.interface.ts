export interface Tokens {
	accessToken: string
	refreshToken: string
}

export interface UserDataFromAccessTokenPayload {
	sub: number
	type: 'Admin' | 'User' | 'Guest'
	uuid?: string
}

export interface AccessTokenPayload extends UserDataFromAccessTokenPayload {
	iat: number
	exp: number
}

export interface LoginResponse {
	user: UserDataFromAccessTokenPayload
	tokens: Tokens
}

export interface RegisterResponse {
	createdUser: {
		id: number
		uuid?: string
		email?: string
		username?: string
		type: string
	}
}

export interface RegisterGuestResponse {
	createdUser: {
		id: number
		uuid: string
		type: string
	}
	uuid: string
}

export interface SessionInfo {
	jti: number
	sub: number
	iat: Date
	exp: Date
	revoked: boolean
	device?: string
	ip?: string
}
