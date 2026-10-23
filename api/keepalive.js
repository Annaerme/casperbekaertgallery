// Houdt het Supabase-project wakker.
// Een gratis Supabase-project gaat in slaap na een week zonder verkeer.
// Deze functie doet één onschuldige leesvraag en wordt wekelijks
// aangeroepen door de cron van Vercel (zie vercel.json).

const SUPABASE_URL = 'https://wojavtiwvveynjbkwotd.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvamF2dGl3dnZleW5qYmt3b3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5Mjk1NjksImV4cCI6MjA5NTUwNTU2OX0.9LsqSstJPEvwn3BHR6drEaf3PP_ZR3v5jMvdSkc8jO8';

export default async function handler(req, res) {
  // Vercel stuurt bij een cron-oproep een geheim mee, als dat is ingesteld.
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }

  const started = Date.now();
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?select=id&limit=1`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    // Alles onder 500 betekent dat Supabase antwoordde en dus wakker is.
    const awake = r.status < 500;
    return res.status(awake ? 200 : 503).json({
      ok: awake,
      supabaseStatus: r.status,
      ms: Date.now() - started,
      checkedAt: new Date().toISOString(),
    });
  } catch (err) {
    return res.status(503).json({
      ok: false,
      error: String(err).slice(0, 200),
      checkedAt: new Date().toISOString(),
    });
  }
}
