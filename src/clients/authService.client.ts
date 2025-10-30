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
 * Конфигурация Auth Service как микросервиса (для приема событий)
 *
 * Очередь получает ВСЕ события (routing key: '#')
 * Фильтрация происходит внутри сервиса через @EventPattern()
 *
 * Пример обработчиков в AUTH_SERVICE:
 * @EventPattern('user.created')  - обработает
 * @EventPattern('user.deleted')  - обработает
 * link.created - придет в очередь, но будет проигнорирован (нет обработчика)
 */
export function getAuthMicroserviceConfig(rabbitmqUrl: string): MicroserviceOptions {
	return {
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.AUTH_SERVICE,
			queueOptions: {
				durable: true,
				arguments: {
					'x-message-ttl': 10000,
					'x-dead-letter-exchange': '',
					'x-dead-letter-routing-key': EventQueue.AUTH_SERVICE,
				},
			},
			exchange: EVENTS_EXCHANGE,
			exchangeOptions: {
				type: 'topic',
				durable: true,
			},
			// Получаем ВСЕ события, фильтруем через @EventPattern
			routingKey: ALL_EVENTS_ROUTING_KEY, // '#'
			noAck: false,
		},
	}
}

/**
 * Конфигурация Auth Service как клиента (для отправки событий)
 */
export function getAuthServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.AUTH_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			queue: EventQueue.AUTH_SERVICE,
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
					'x-dead-letter-routing-key': EventQueue.AUTH_SERVICE,
				},
			},
			persistent: true,
		},
	}
}
