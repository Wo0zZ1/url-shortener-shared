import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
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
			// wildcards: true,
		},
	}
}

export function getUserServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.USER_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.USER_SERVICE,
			queueOptions: {
				durable: true,
			},
			persistent: true,
		},
	}
}
