import { type UserRole } from '../types'

export interface ICurrentUser {
	id: number
	role: UserRole
	email?: string
}
