import { Select } from '../../../app/ui/Select/Select.jsx';

const options = [
  { label: 'Python', value: 'python' },
  { label: 'Golang', value: 'golang' }
];

export const SelectLanguage = ({ onSelect }) => {
  return (
    <>
      <Select options={options} onChange={(val) => onSelect(val.value)} placeholder={'Выберите язык'} />
    </>
  );
};
