// backend/http-functions.js
// Read-only JSON feed of the published communities, used by the list-page embed.
import { ok, serverError } from 'wix-http-functions';
import wixData from 'wix-data';

function imgId(src) {
  // wix:image://v1/<id>/<name>#... -> <id>
  if (!src || typeof src !== 'string') return '';
  const m = src.match(/^wix:image:\/\/v1\/([^/]+)\//);
  return m ? m[1] : '';
}

// shortWriteup is rich text (HTML); strip tags for the card summary.
const clean = (t) => String(t || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/\s+/g, ' ').trim();

export async function get_communities() {
  try {
    const res = await wixData.query('Import1').limit(100).ascending('communityName').find({ suppressAuth: true });
    const items = res.items
      .filter((i) => i.slug && i.communityName)
      .map((i) => ({
        slug: i.slug,
        name: i.communityName || i.title || '',
        state: i.state || '',
        region: i.region || '',
        classification: i.classification || '',
        summary: String(i.shortWriteup || i.shortTextmaincommunitiespage || '').slice(0, 400),
        imageId: imgId(i.communitiesImage) || imgId(i.heroSectionImage),
      }));
    return ok({
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=120',
      },
      body: JSON.stringify(items),
    });
  } catch (e) {
    return serverError({ body: JSON.stringify({ error: 'failed' }) });
  }
}
