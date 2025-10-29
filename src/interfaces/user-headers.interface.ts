export interface UserHeaders {
	'x-user-id': string
	'x-user-uuid'?: string
	'x-user-type': string
	[key: string]: string | undefined
}
