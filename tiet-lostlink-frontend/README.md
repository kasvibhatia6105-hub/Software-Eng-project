# TIET LostLink — Frontend (Week 1 scope)

React + Vite frontend covering the proposal's first-iteration deliverables:
login, lost/found report forms with photo upload, the report feed with
search & filters, and an item detail view with weighted match suggestions.
Data is mocked in `src/data/mockItems.js` — swap it for real Supabase calls
when the backend is ready.

## Run it

```bash
npm install
npm run dev
```

Open the printed localhost URL. Log in with any `@thapar.edu` email (no
real auth yet — this just gates the route).

## Structure

- `src/pages/` — Login, Feed, ReportForm (shared by lost/found), ItemDetail
- `src/components/` — Nav, TagCard, StampBadge
- `src/data/mockItems.js` — mock reports + a client-side stand-in for the
  weighted match algorithm from section 5.1 of the proposal (category 30 /
  brand 15 / colour 15 / location 15 / date 15 / description 10)
- `src/index.css` — design tokens and all styling (no CSS framework)

## Design system

Reports are styled as physical claim tags — punch-hole corner, status
rendered as a rotated rubber-stamp badge (Lost / Found / Claimed /
Returned) — since that's closer to the real-world object (a lost item tag)
than a generic dashboard look. Zilla Slab for headers/stamps, Inter for
body and form UI.

## Not yet built (next iterations, per the proposal)

- Supabase auth, Postgres, storage wiring
- Claim submission + finder approval flow
- One-time handover code screen
- Admin moderation dashboard
- Notifications
