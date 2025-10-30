import {
	ClientProviderOptions,
	MicroserviceOptions,
	Transport,
} from '@nestjs/microservices'
import { EventQueue, EventService, EVENTS_EXCHANGE, ALL_EVENTS_ROUTING_KEY } from '../events'

/**
 * Конфигурация Link Service как микросервиса (для приема событий)
 * 
 * Очередь получает ВСЕ события (routing key: '#')
 * Фильтрация происходит внутри сервиса через @EventPattern()
 * 
 * Пример обработчиков в LINK_SERVICE:
 * @EventPattern('user.deleted')             - обработает (каскадное удаление ссылок)
 * @EventPattern('user.migrated.from.guest') - обработает (перенос ссылок)
 * user.created - придет в очередь, но будет проигнорирован
 */
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
			exchange: EVENTS_EXCHANGE,
			exchangeOptions: {
				type: 'topic',
				durable: true,
			},
			routingKey: ALL_EVENTS_ROUTING_KEY, // '#'
			noAck: false,
		},
	}
}

/**
 * Конфигурация Link Service как клиента (для отправки событий)
 */
export function getLinkServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.LINK_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.LINK_SERVICE,
			exchange: EVENTS_EXCHANGE,
			exchangeOptions: {
				type: 'topic',
				durable: true,
			},
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
