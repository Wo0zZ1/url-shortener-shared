export const EVENTS_EXCHANGE = 'events_exchange'
export const EXCHANGE_TYPE = 'topic'
export const EVENT_EMITTER_NAME = 'EVENT_EMITTER'

export enum EEventPattern {
	// USER domain events
	USER_CREATED = 'user.created',
	USER_UPDATED = 'user.updated',
	USER_DELETED = 'user.deleted',
	USER_MIGRATED_FROM_GUEST = 'user.migrated.from.guest',
	USER_ACCOUNTS_MERGED = 'user.accounts.merged',

	// LINK domain events
	LINK_CREATED = 'link.created',
	LINK_DELETED = 'link.deleted',
	LINK_MIGRATED = 'link.migrated',
	LINK_REDIRECT = 'link.redirect',

	// AUTH domain events
	AUTH_LOGIN = 'auth.login',
	AUTH_LOGOUT = 'auth.logout',
	AUTH_TOKEN_REFRESHED = 'auth.token.refreshed',
}

// Queues
export enum EventQueue {
	USER_SERVICE = 'user_service_queue',
	LINK_SERVICE = 'link_service_queue',
	AUTH_SERVICE = 'auth_service_queue',
}

// User Events
export interface UserCreatedEvent {
	userId: number
	uuid?: string
	timestamp: Date
}

export interface UserDeletedEvent {
	userId: number
	timestamp: Date
}

export interface UserMigratedFromGuestEvent {
	guestUserId: number
	guestUuid: string
	targetUserId: number
	timestamp: Date
}

export interface UserAccountsMergedEvent {
	sourceUserId: number
	targetUserId: number
	timestamp: Date
}

// Link Events
export interface LinkCreatedEvent {
	linkId: number
	userId: number
	baseLink: string
	shortLink: string
	timestamp: Date
}

export interface LinkDeletedEvent {
	linkId: number
	userId: number
	timestamp: Date
}

export interface LinkMigratedEvent {
	sourceUserId: number
	targetUserId: number
	timestamp: Date
}

export interface LinkRedirectEvent {
	linkId: number
	userAgent?: string
	ip?: string
	timestamp: Date
}

// Auth Events
// export interface AuthLoginEvent {
// 	userId: number
// 	ip?: string
// 	userAgent?: string
// 	timestamp: Date
// }

// export interface AuthLogoutEvent {
// 	userId: number
// 	timestamp: Date
// }

// export interface AuthTokenRefreshedEvent {
// 	userId: number
// 	timestamp: Date
// }
