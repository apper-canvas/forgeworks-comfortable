const Heading = ({ as = 'h2', children, className = '', ...props }) => {
  const Tag = as;
  return (
    <Tag className={`font-heading ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;