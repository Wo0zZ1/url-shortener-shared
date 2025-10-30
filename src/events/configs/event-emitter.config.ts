import { ClientProviderOptions, Transport } from '@nestjs/microservices'
import { EVENT_EMITTER_NAME, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../user.events'

export function getEventEmitterConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EVENT_EMITTER_NAME,
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
