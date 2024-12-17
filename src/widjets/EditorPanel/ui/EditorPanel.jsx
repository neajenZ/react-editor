import { useState } from 'react';
import { Editor } from '../../../features/Editor';
import { RunCode } from '../../../features/RunCode';
import { SelectLanguage } from '../../../features/SelectLanguage';
import styles from './EditorPanel.module.css';

export const EditorPanel = ({ onSubmit }) => {
  const [code, setCode] = useState('// Начни писать свой код здесь');
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const handleSubmit = () => {
    onSubmit({ language: selectedLanguage, code });
  };

  return (
    <div>
      <div className={styles.header}>
        <SelectLanguage value={selectedLanguage} onSelect={setSelectedLanguage} />
        <RunCode onClick={handleSubmit} />
      </div>

      <Editor value={code} onChange={setCode} language={selectedLanguage} />
    </div>
  );
};
