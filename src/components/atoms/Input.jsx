const Input = ({ 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  className = '', 
  options, // for select type
  rows, // for textarea type
  error,
  ...restProps 
}) => {
  const baseClasses = 'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors';
  const errorClasses = error ? 'border-error' : 'border-gray-300';
  const finalClassName = `${baseClasses} ${errorClasses} ${className}`;

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`${finalClassName} resize-none`}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }

  if (type === 'select' && options) {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={finalClassName}
        {...restProps}
      >
{placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={finalClassName}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default Input;