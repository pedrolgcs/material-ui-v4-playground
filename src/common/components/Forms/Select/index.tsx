import ReactSelect, { Props } from 'react-select';

type Option = {
  label: string;
  value: string;
};

type SelectProps = Props & {
  name: string;
  options: Option[];
};

function Select({ name, options, ...rest }: SelectProps) {
  return <ReactSelect instanceId={name} options={options} {...rest} />;
}

export { Select };
