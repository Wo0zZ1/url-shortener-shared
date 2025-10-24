import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
	RmqOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export function getAuthMicroserviceConfig(rabbitmqUrl: string): MicroserviceOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.AUTH_SERVICE,
			queueOptions: {
				durable: true,
			},
			noAck: false,
			wildcards: true,
		},
	}
}

export function getAuthServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	const microserviceConfig = getAuthMicroserviceConfig(rabbitmqUrl) as RmqOptions

	return {
		name: EventService.AUTH_SERVICE,
		...microserviceConfig,
	}
}
