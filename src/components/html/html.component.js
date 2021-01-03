/**
 * html.component
 */
const Html = ({
  className = '',
  content = '',
}) => (
  <div
    className={`html ${className}`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default Html
