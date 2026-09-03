export const DEVTO_USERNAME =
	import.meta.env.PUBLIC_DEVTO_USERNAME ?? "angojay";

export const DEVTO_PROFILE_URL = `https://dev.to/${DEVTO_USERNAME}`;

type DevToArticle = {
	title: string;
	url: string;
	cover_image: string | null;
	social_image: string;
};

export type PortfolioArticle = {
	title: string;
	imageSrc: string;
	platform: string;
	link: string;
};

const PAGE_SIZE = 100;

function mapArticle(article: DevToArticle): PortfolioArticle {
	return {
		title: article.title,
		imageSrc: article.cover_image ?? article.social_image ?? "/dev_to_logo.png",
		platform: "Dev.to",
		link: article.url,
	};
}

/**
 * Fetches published Dev.to articles for DEVTO_USERNAME.
 * Paginates until a short/empty page. Pass `limit` to stop early (e.g. home preview).
 * Returns [] if the API is unreachable or errors.
 */
export async function fetchDevToArticles(options?: {
	limit?: number;
}): Promise<PortfolioArticle[]> {
	const limit = options?.limit;
	const articles: PortfolioArticle[] = [];

	try {
		let page = 1;

		while (true) {
			const res = await fetch(
				`https://dev.to/api/articles?username=${encodeURIComponent(DEVTO_USERNAME)}&per_page=${PAGE_SIZE}&page=${page}`
			);

			if (!res.ok) {
				break;
			}

			const data: DevToArticle[] = await res.json();
			if (data.length === 0) {
				break;
			}

			for (const item of data) {
				articles.push(mapArticle(item));
				if (limit !== undefined && articles.length >= limit) {
					return articles;
				}
			}

			if (data.length < PAGE_SIZE) {
				break;
			}

			page += 1;
		}
	} catch {
		return [];
	}

	return articles;
}
