import type { APIRoute } from "astro";
import projects from "../data/projects.json";

export const GET: APIRoute = ({ site }) => {
	const origin = (site ?? new URL("https://angojay.com")).origin;

	const caseStudyUrls = projects
		.filter((project) => project.caseStudy?.slug)
		.map((project) => `${origin}/case-study/${project.caseStudy.slug}`);

	const urls = [`${origin}/`, ...caseStudyUrls];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${origin}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(loc) => `  <url>
    <loc>${loc}</loc>
  </url>`
	)
	.join("\n")}
</urlset>
`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
