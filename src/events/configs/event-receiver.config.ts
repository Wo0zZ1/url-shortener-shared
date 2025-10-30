import { RmqOptions, Transport } from '@nestjs/microservices'
import { EventQueue, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../user.events'

export function getMicroserviceConfig(
	rabbitmqUrl: string,
	queue: EventQueue,
): RmqOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: queue,
			queueOptions: { durable: true },
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			wildcards: true,
			noAck: false,
		},
	}
}
