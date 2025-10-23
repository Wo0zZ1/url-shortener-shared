import { type UserRole } from '../types'

export interface ICurrentUser {
	id: number
	uuid?: string
	role: UserRole
	email?: string
}
