import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export const LinkMicroservice = {
	transport: Transport.RMQ,
	options: {
		urls: [process.env.RABBITMQ_URL as string],
		queue: EventQueue.LINK_SERVICE,
		queueOptions: {
			durable: true,
		},
		noAck: false,
		wildcards: true,
	},
} as MicroserviceOptions

export type LinkMicroserviceType = typeof LinkMicroservice

export const LinkServiceClient = {
	name: EventService.LINK_SERVICE,
	...LinkMicroservice,
} as ClientProviderOptions

export type LinkServiceClientType = typeof LinkServiceClient
