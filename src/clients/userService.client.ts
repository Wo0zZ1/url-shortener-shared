import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../events'

export function getUserMicroserviceConfig(rabbitmqUrl: string): MicroserviceOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.USER_SERVICE,
			queueOptions: { durable: true },
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			noAck: false,
		},
	}
}

export function getUserServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.USER_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			persistent: true,
		},
	}
}
