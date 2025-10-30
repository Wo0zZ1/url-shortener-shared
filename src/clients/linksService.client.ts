import {
	ClientProviderOptions,
	MicroserviceOptions,
	Transport,
} from '@nestjs/microservices'
import { EventQueue, EventService, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../events'

export function getLinkMicroserviceConfig(rabbitmqUrl: string): MicroserviceOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.LINK_SERVICE,
			queueOptions: { durable: true },
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
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
			persistent: true,
		},
	}
}
