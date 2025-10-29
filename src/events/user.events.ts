export enum EEventPattern {
	// user.# - USER_SERVICE
	USER_MIGRATED_FROM_GUEST = 'user.migrated.from.guest',
	USER_ACCOUNTS_MERGED = 'user.accounts.merged',

	// link.# - LINK_SERVICE
	LINK_MIGRATED = 'link.migrated',
	LINK_REDIRECT = 'link.redirect',

	// auth.# - AUTH_SERVICE
}

// Services

export enum EventService {
	USER_SERVICE = 'USER_SERVICE_CLIENT',
	LINK_SERVICE = 'LINK_SERVICE_CLIENT',
	AUTH_SERVICE = 'AUTH_SERVICE_CLIENT',
}

// Queues

export enum EventQueue {
	USER_SERVICE = 'user_service_queue',
	LINK_SERVICE = 'link_service_queue',
	AUTH_SERVICE = 'auth_service_queue',
}

// EventsDto

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

export interface LinkMigratedEvent {
	sourceUserId: number
	targetUserId: number
	timestamp: Date
}

export interface LinkRedirectEvent {
	linkStatsId: number
	userAgent?: string
	ip?: string
}
