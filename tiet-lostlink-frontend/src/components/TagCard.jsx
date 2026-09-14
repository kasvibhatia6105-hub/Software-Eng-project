import { Link } from 'react-router-dom'
import StampBadge from './StampBadge.jsx'

export default function TagCard({ item }) {
  const statusKind = item.status === 'active' ? item.type : item.status
  return (
    <Link to={`/item/${item.id}`} className="tag-card">
      <div className="tag-card__top">
        <StampBadge kind={statusKind} />
        <span className="tag-card__id">{item.id}</span>
      </div>
      <div className="tag-card__thumb">Photo not uploaded</div>
      <h3 className="tag-card__title">{item.title}</h3>
      <div className="tag-card__meta">
        <span className="tag-card__meta-item">{item.category}</span>
        <span className="tag-card__meta-item">{item.location}</span>
        <span className="tag-card__meta-item tag-card__meta-item--date">
          {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
        </span>
      </div>
    </Link>
  )
}
