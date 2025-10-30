import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import {
	EventQueue,
	EventService,
	EVENTS_EXCHANGE,
	ALL_EVENTS_ROUTING_KEY,
} from '../events'

/**
 * Конфигурация User Service как микросервиса (для приема событий)
 *
 * Очередь получает ВСЕ события (routing key: '#')
 * Фильтрация происходит внутри сервиса через @EventPattern()
 *
 * Пример обработчиков в USER_SERVICE:
 * @EventPattern('link.created')  - обработает (обновление статистики)
 * @EventPattern('link.deleted')  - обработает
 * @EventPattern('link.redirect') - обработает (подсчет кликов)
 * user.deleted - придет в очередь, но будет проигнорирован
 */
export function getUserMicroserviceConfig(rabbitmqUrl: string): MicroserviceOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.USER_SERVICE,
			queueOptions: {
				durable: true,
				arguments: {
					'x-message-ttl': 10000,
					'x-dead-letter-exchange': '',
					'x-dead-letter-routing-key': EventQueue.USER_SERVICE,
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
 * Конфигурация User Service как клиента (для отправки событий)
 */
export function getUserServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.USER_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.USER_SERVICE,
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
					'x-dead-letter-routing-key': EventQueue.USER_SERVICE,
				},
			},
			persistent: true,
		},
	}
}
