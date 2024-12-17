import ReactCodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { go } from '@codemirror/lang-go';

export const Editor = ({ language, value, onChange }) => {

  const getExtensions = () => {
    switch (language) {
      case 'python':
        return [python()];
      case 'golang':
        return [go()];
      default:
        return [];
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
      <ReactCodeMirror value={value} height="500px" theme="dark" extensions={getExtensions()} onChange={onChange} />
    </div>
  );
};
