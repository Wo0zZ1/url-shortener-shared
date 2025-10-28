import { ILink, ILinkStats } from '../entities'

// Response для получения списка ссылок пользователя с пагинацией
export interface PaginatedLinksResponse {
	links: ILink[]
	total: number
	page: number
	limit: number
}

// Response для получения статистики всех ссылок пользователя
export interface UserLinksStatsResponse {
	totalLinks: number
	totalClicks: number
	uniqueClicks: number
}

// Response для создания ссылки
export type CreateLinkResponse = ILink

// Response для получения информации о ссылке
export type GetLinkResponse = ILink

// Response для удаления ссылки
export type DeleteLinkResponse = ILink

// Response для получения статистики конкретной ссылки
export type GetLinkStatsResponse = ILinkStats

// Response для редиректа (внутренний, используется Link Service)
export interface RedirectResponse {
	url: string
}

// Алиасы для обратной совместимости
export type PaginatedLinks = PaginatedLinksResponse
export type UserLinksStats = UserLinksStatsResponse
