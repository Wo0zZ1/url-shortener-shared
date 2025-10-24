import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
	RmqOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export function getUserMicroserviceConfig(rabbitmqUrl: string): MicroserviceOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.USER_SERVICE,
			queueOptions: {
				durable: true,
			},
			noAck: false,
			wildcards: true,
		},
	}
}

export function getUserServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	const microserviceConfig = getUserMicroserviceConfig(rabbitmqUrl) as RmqOptions

	return {
		name: EventService.USER_SERVICE,
		...microserviceConfig,
		options: {
			...microserviceConfig.options,
			noAck: true,
		},
	}
}
