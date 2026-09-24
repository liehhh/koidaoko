/** Italic text link with a hairline arrow that stretches on hover. */
export default function ArrowLink({ as: Tag = 'button', children, className = '', ...rest }) {
  return (
    <Tag className={`arrow-link ${className}`} {...(Tag === 'button' ? { type: 'button' } : {})} {...rest}>
      <span>{children}</span>
      <span className="arrow-link__line"><span className="arrow-link__head" /></span>
    </Tag>
  );
}
