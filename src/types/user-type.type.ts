export const UserType = {
	Admin: 'Admin',
	User: 'User',
	Guest: 'Guest',
} as const

export type UserType = (typeof UserType)[keyof typeof UserType]
