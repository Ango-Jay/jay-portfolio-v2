<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
	exclude-result-prefixes="s">

	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />

	<xsl:template match="/">
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Sitemap · Ango Jeffrey</title>
				<style>
					:root {
						color-scheme: light dark;
						--ink: #090040;
						--muted: #6b7280;
						--surface: #ffffff;
						--border: rgba(9, 0, 64, 0.15);
						--accent: #b030b0;
						--row: #fafafa;
					}

					@media (prefers-color-scheme: dark) {
						:root {
							--ink: #f4f4f5;
							--muted: #a1a1aa;
							--surface: #0c0630;
							--border: #2a2160;
							--row: #160d45;
						}
					}

					* { box-sizing: border-box; }

					body {
						margin: 0;
						min-height: 100vh;
						font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
						background: var(--surface);
						color: var(--ink);
						line-height: 1.5;
					}

					main {
						max-width: 42rem;
						margin: 0 auto;
						padding: 2.5rem 1.25rem 3rem;
					}

					h1 {
						margin: 0 0 0.35rem;
						font-size: 1.5rem;
						font-weight: 700;
					}

					.sub {
						margin: 0 0 1.75rem;
						color: var(--muted);
						font-size: 0.95rem;
					}

					.sub a {
						color: var(--accent);
						text-decoration: none;
					}

					.sub a:hover {
						text-decoration: underline;
					}

					table {
						width: 100%;
						border-collapse: collapse;
						border: 1px solid var(--border);
						border-radius: 0.5rem;
						overflow: hidden;
					}

					th,
					td {
						padding: 0.75rem 1rem;
						text-align: left;
						vertical-align: top;
					}

					th {
						font-size: 0.75rem;
						font-weight: 600;
						letter-spacing: 0.04em;
						text-transform: uppercase;
						color: var(--muted);
						border-bottom: 1px solid var(--border);
						background: var(--row);
					}

					tr + tr td {
						border-top: 1px solid var(--border);
					}

					tbody tr:nth-child(even) {
						background: var(--row);
					}

					td a {
						color: var(--accent);
						text-decoration: none;
						word-break: break-all;
					}

					td a:hover {
						text-decoration: underline;
					}

					.index {
						width: 2.5rem;
						color: var(--muted);
						font-variant-numeric: tabular-nums;
					}
				</style>
			</head>
			<body>
				<main>
					<h1>Sitemap</h1>
					<p class="sub">
						XML sitemap for
						<a href="https://angojay.com">angojay.com</a>
						· <xsl:value-of select="count(s:urlset/s:url)" /> URLs
					</p>
					<table>
						<thead>
							<tr>
								<th class="index">#</th>
								<th>URL</th>
							</tr>
						</thead>
						<tbody>
							<xsl:for-each select="s:urlset/s:url">
								<tr>
									<td class="index">
										<xsl:value-of select="position()" />
									</td>
									<td>
										<a href="{s:loc}">
											<xsl:value-of select="s:loc" />
										</a>
									</td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
				</main>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
