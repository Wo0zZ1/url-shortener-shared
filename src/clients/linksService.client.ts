import {
	ClientProviderOptions,
	MicroserviceOptions,
	RmqOptions,
	Transport,
} from '@nestjs/microservices'
import { EventQueue, EventService } from '../events'

export function getLinkMicroserviceConfig(rabbitmqUrl: string): MicroserviceOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.LINK_SERVICE,
			queueOptions: {
				durable: true,
			},
			noAck: false,
			wildcards: true,
		},
	}
}

export function getLinkServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	const microserviceConfig = getLinkMicroserviceConfig(rabbitmqUrl) as RmqOptions

	return {
		name: EventService.LINK_SERVICE,
		...microserviceConfig,
	}
}
