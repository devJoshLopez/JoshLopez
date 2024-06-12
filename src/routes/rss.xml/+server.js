export const prerender = true;

export async function GET({ fetch }) {
  const response = await fetch("api/posts");
  const posts = await response.json();

  const headers = { "Content-Type": "application/xml" };

  const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>Josh Lopez</title>
				<description>Hello World</description>
				<link>joshlopez.me</link>
				<atom:link href="joshlopez.me/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
          .map(
            (
              /** @type {{ title: any; description: any; slug: any; date: string | number | Date; }} */ post
            ) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>joshlopez.me/${post.slug}</link>
							<guid isPermaLink="true">joshlopez.me/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
          )
          .join("")}
			</channel>
		</rss>
	`.trim();

  return new Response(xml, { headers });
}
