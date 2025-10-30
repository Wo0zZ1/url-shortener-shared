import {
	ClientProviderOptions,
	MicroserviceOptions,
	Transport,
} from '@nestjs/microservices'
import { EventQueue, EventService, EVENTS_EXCHANGE, EXCHANGE_TYPE } from '../events'

/**
 * Конфигурация Link Service как микросервиса (для приема событий)
 *
 * Fanout Exchange рассылает ВСЕ события ВО ВСЕ привязанные очереди
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
			exchangeType: EXCHANGE_TYPE,
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
			// НЕ указываем queue для клиента-публикатора
			exchange: EVENTS_EXCHANGE,
			exchangeType: EXCHANGE_TYPE,
			persistent: true,
		},
	}
}
