import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../events'

/**
 * Конфигурация Auth Service как микросервиса (для приема событий)
 *
 * Fanout Exchange рассылает ВСЕ события ВО ВСЕ привязанные очереди
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
			exchangeType: EXCHANGE_TYPE,
			noAck: false,
		},
	}
}

/**
 * Конфигурация Auth Service как клиента (для отправки событий)
 *
 * ВАЖНО: Для публикации событий НЕ указываем queue!
 * События отправляются в exchange, который сам роутит их по очередям
 */
export function getAuthServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.AUTH_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			// НЕ указываем queue для клиента-публикатора
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			persistent: true,
		},
	}
}
