import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const UserMicroservice = {
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.USER_SERVICE,
		queueOptions: {
			durable: true,
		},
		noAck: false,
		wildcards: true,
	},
} as MicroserviceOptions

export type UserMicroserviceType = typeof UserMicroservice

export const UserServiceClient = {
	name: EventService.USER_SERVICE,
	...UserMicroservice,
} as ClientProviderOptions

export type UserServiceClientType = typeof UserServiceClient
