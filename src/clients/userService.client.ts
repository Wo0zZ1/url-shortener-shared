import {
	MicroserviceOptions,
	Transport,
	ClientProviderOptions,
} from '@nestjs/microservices'
import { EventQueue, EventService, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../events'

/**
 * Конфигурация User Service как микросервиса (для приема событий)
 *
 * Fanout Exchange рассылает ВСЕ события ВО ВСЕ привязанные очереди
 * Фильтрация происходит внутри сервиса через @EventPattern()
 *
 * Пример обработчиков в USER_SERVICE:
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
			queueOptions: { durable: true },
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			noAck: false,
		},
	}
}

/**
 * Конфигурация User Service как клиента (для отправки событий)
 *
 * ВАЖНО: Для публикации событий НЕ указываем queue!
 * События отправляются в exchange, который сам роутит их по очередям
 */
export function getUserServiceConfig(rabbitmqUrl: string): ClientProviderOptions {
	return {
		name: EventService.USER_SERVICE,
		transport: Transport.RMQ,
		options: {
			urls: [rabbitmqUrl],
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			queue: EventQueue.USER_SERVICE,
			queueOptions: { durable: true },
			persistent: true,
		},
	}
}
