import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const AuthMicroservice = {
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.AUTH_SERVICE,
		queueOptions: {
			durable: true,
		},
		noAck: false,
		wildcards: true,
	},
} as MicroserviceOptions

export type AuthMicroserviceType = typeof AuthMicroservice

export const AuthServiceClient = {
	name: EventService.AUTH_SERVICE,
	...AuthMicroservice,
} as ClientProviderOptions

export type AuthServiceClientType = typeof AuthServiceClient
