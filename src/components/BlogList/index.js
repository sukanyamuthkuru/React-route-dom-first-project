// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(each => (
        <BlogItem key={each.id} List={each} />
      ))}
    </ul>
  )
}

export default BlogList
