import { type UserType } from '../types'

export interface ICurrentUser {
	id: number
	uuid?: string
	type: UserType
}
