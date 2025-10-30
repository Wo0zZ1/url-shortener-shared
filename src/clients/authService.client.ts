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
			queueOptions: { durable: true },
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
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
			// queue: EventQueue.AUTH_SERVICE,
			// queueOptions: { durable: true },
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			persistent: true,
		},
	}
}
