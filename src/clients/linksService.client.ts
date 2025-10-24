import {
	ClientProviderOptions,
	MicroserviceOptions,
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
				arguments: {
					'x-message-ttl': 10000,
					'x-dead-letter-exchange': '',
					'x-dead-letter-routing-key': EventQueue.LINK_SERVICE,
				},
			},
			noAck: false,
			// wildcards: true,
		},
	}
}

export function getLinkServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.LINK_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.LINK_SERVICE,
			queueOptions: {
				durable: true,
				arguments: {
					'x-message-ttl': 10000,
					'x-dead-letter-exchange': '',
					'x-dead-letter-routing-key': EventQueue.LINK_SERVICE,
				},
			},
			persistent: true,
		},
	}
}
