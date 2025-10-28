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
