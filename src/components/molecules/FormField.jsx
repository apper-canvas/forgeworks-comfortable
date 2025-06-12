import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';

const FormField = ({ label, id, name, type, value, onChange, placeholder, error, options, rows, className = '', ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        rows={rows}
        error={error}
        {...rest}
      />
      {error && (
        <Text as="p" className="mt-1 text-sm text-error">{error}</Text>
      )}
    </div>
  );
};

export default FormField;