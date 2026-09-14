export const CATEGORIES = [
  'Backpacks & bags',
  'Water bottles & tumblers',
  'Wallets & purses',
  'Earbuds & headphone cases',
  'Keys & keychains',
  'Books & notebooks',
]

export const LOCATIONS = [
  'LT Complex',
  'Central Library',
  'Hostel J',
  'Hostel A',
  'Sports Complex',
  'Cafeteria',
  'Academic Block 2',
]

export const items = [
  {
    id: 'FL-0231',
    type: 'lost',
    status: 'active',
    category: 'Earbuds & headphone cases',
    title: 'Black Sony earbuds, scratched case',
    description: 'Black Sony WF earbuds with a scratched charging case, lost near the LT complex after 2nd hour lecture.',
    brand: 'Sony',
    colour: 'Black',
    location: 'LT Complex',
    date: '2026-09-08',
    reporter: 'Ananya R.',
  },
  {
    id: 'FL-0232',
    type: 'found',
    status: 'active',
    category: 'Earbuds & headphone cases',
    title: 'Sony wireless earbuds, black case',
    description: 'Found Sony wireless earbuds in a black charging case near the LT complex steps.',
    brand: 'Sony',
    colour: 'Black',
    location: 'LT Complex',
    date: '2026-09-08',
    reporter: 'Karan V.',
  },
  {
    id: 'FL-0219',
    type: 'lost',
    status: 'active',
    category: 'Water bottles & tumblers',
    title: 'Steel blue Milton bottle',
    description: 'Steel blue 1L Milton bottle with a dented cap, left in the library reading room.',
    brand: 'Milton',
    colour: 'Blue',
    location: 'Central Library',
    date: '2026-09-05',
    reporter: 'Devansh P.',
  },
  {
    id: 'FL-0220',
    type: 'found',
    status: 'active',
    category: 'Water bottles & tumblers',
    title: 'Blue steel bottle, dented cap',
    description: 'Blue steel bottle with a dented cap found on the library 2nd floor table.',
    brand: 'Milton',
    colour: 'Blue',
    location: 'Central Library',
    date: '2026-09-06',
    reporter: 'Priya S.',
  },
  {
    id: 'FL-0208',
    type: 'lost',
    status: 'claimed',
    category: 'Wallets & purses',
    title: 'Brown leather wallet',
    description: 'Brown leather wallet with a college ID card sleeve, lost near the cafeteria.',
    brand: '—',
    colour: 'Brown',
    location: 'Cafeteria',
    date: '2026-09-01',
    reporter: 'Ritika M.',
  },
  {
    id: 'FL-0199',
    type: 'found',
    status: 'returned',
    category: 'Keys & keychains',
    title: 'Hostel keys with red keychain',
    description: 'Set of hostel keys on a red rubber keychain, found near Hostel A entrance.',
    brand: '—',
    colour: 'Red',
    location: 'Hostel A',
    date: '2026-08-29',
    reporter: 'Harsh T.',
  },
  {
    id: 'FL-0240',
    type: 'lost',
    status: 'active',
    category: 'Backpacks & bags',
    title: 'Grey Wildcraft backpack',
    description: 'Grey Wildcraft backpack with a broken front zip, left at the sports complex.',
    brand: 'Wildcraft',
    colour: 'Grey',
    location: 'Sports Complex',
    date: '2026-09-09',
    reporter: 'Simran K.',
  },
  {
    id: 'FL-0241',
    type: 'found',
    status: 'active',
    category: 'Books & notebooks',
    title: 'DSA notebook, spiral bound',
    description: 'Spiral-bound notebook labelled "DSA" found in Academic Block 2, room 204.',
    brand: '—',
    colour: 'Green',
    location: 'Academic Block 2',
    date: '2026-09-10',
    reporter: 'Aman J.',
  },
]

// Rough client-side stand-in for the weighted match algorithm in the
// proposal (category 30 / brand 15 / colour 15 / location 15 / date 15 / description 10)
export function scoreMatch(a, b) {
  let score = 0
  if (a.category === b.category) score += 30
  if (a.brand !== '—' && a.brand === b.brand) score += 15
  if (a.colour === b.colour) score += 15
  if (a.location === b.location) score += 15
  const days = Math.abs(new Date(a.date) - new Date(b.date)) / 86400000
  if (days <= 3) score += 15
  const wordsA = new Set(a.description.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/))
  const wordsB = new Set(b.description.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/))
  const shared = [...wordsA].filter((w) => wordsB.has(w) && w.length > 3)
  score += Math.min(10, shared.length * 3)
  return score
}

export function findMatches(item) {
  const oppositeType = item.type === 'lost' ? 'found' : 'lost'
  return items
    .filter((i) => i.type === oppositeType && i.category === item.category && i.id !== item.id)
    .map((i) => ({ item: i, score: scoreMatch(item, i) }))
    .sort((a, b) => b.score - a.score)
}
