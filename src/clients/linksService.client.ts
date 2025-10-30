import {
	ClientProviderOptions,
	MicroserviceOptions,
	RmqOptions,
	Transport,
} from '@nestjs/microservices'
import { EventQueue, EventService, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../events'

export function getLinkMicroserviceConfig(rabbitmqUrl: string): RmqOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.LINK_SERVICE,
			queueOptions: { durable: true },
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			wildcards: true,
			noAck: false,
		},
	}
}

export function getLinkServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.LINK_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			wildcards: true,
			persistent: true,
		},
	}
}
