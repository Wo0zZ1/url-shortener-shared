// Exchange для событий (общий для всех сервисов)
export const EVENTS_EXCHANGE = 'events_exchange'

// Routing key для получения ВСЕХ событий
// Каждый сервис подписывается на '#' и фильтрует события через @EventPattern()
export const ALL_EVENTS_ROUTING_KEY = '#'

// Event Patterns (используются в emit() и @EventPattern())
export enum EEventPattern {
	// USER domain events
	USER_CREATED = 'user.created',
	USER_UPDATED = 'user.updated',
	USER_DELETED = 'user.deleted',
	USER_MIGRATED_FROM_GUEST = 'user.migrated.from.guest',
	USER_ACCOUNTS_MERGED = 'user.accounts.merged',

	// LINK domain events
	LINK_CREATED = 'link.created',
	LINK_UPDATED = 'link.updated',
	LINK_DELETED = 'link.deleted',
	LINK_MIGRATED = 'link.migrated',
	LINK_REDIRECT = 'link.redirect',

	// AUTH domain events
	AUTH_LOGIN = 'auth.login',
	AUTH_LOGOUT = 'auth.logout',
	AUTH_TOKEN_REFRESHED = 'auth.token.refreshed',
}

// Service Clients
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

// EventsDto (интерфейсы payload для событий)

// User Events
export interface UserCreatedEvent {
	userId: number
	email?: string
	uuid?: string
	timestamp: Date
}

export interface UserUpdatedEvent {
	userId: number
	changes?: Record<string, any>
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
	shortUrl: string
	originalUrl: string
	timestamp: Date
}

export interface LinkUpdatedEvent {
	linkId: number
	userId: number
	changes?: Record<string, any>
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
	linkStatsId: number
	linkId: number
	userId?: number
	userAgent?: string
	ip?: string
	timestamp: Date
}

// Auth Events
export interface AuthLoginEvent {
	userId: number
	ip?: string
	userAgent?: string
	timestamp: Date
}

export interface AuthLogoutEvent {
	userId: number
	timestamp: Date
}

export interface AuthTokenRefreshedEvent {
	userId: number
	timestamp: Date
}
