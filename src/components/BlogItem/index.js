import './index.css'

const BlogItem = props => {
  const {List} = props
  const {title, description, publishedDate} = List
  return (
    <li className="list-item-container">
      <div className="heading-date-container">
        <h1 className="list-item-heading">{title}</h1>
        <p className="list-item-date">{publishedDate}</p>
      </div>
      <p className="list-description">{description}</p>
    </li>
  )
}

export default BlogItem
