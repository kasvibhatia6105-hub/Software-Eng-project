const LABELS = {
  lost: 'Lost',
  found: 'Found',
  claimed: 'Claimed',
  returned: 'Returned',
}

export default function StampBadge({ kind }) {
  return <span className={`stamp stamp--${kind}`}>{LABELS[kind]}</span>
}
