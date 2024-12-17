import { useState } from 'react';
import './App.css';
import { Editor } from './features/Editor/index.js';
import { SelectLanguage } from './features/SelectLanguage/index.js';
import { Result } from './entities/Result/index.js';
import { EditorPanel } from './widjets/EditorPanel/index.js';
import axios from 'axios';
import { axiosInstance } from './app/mocks/axiosInstance.js';

function App() {
  const [resultData, setResultData] = useState(null);

  const handleSubmit = (value) => {
    axiosInstance.post('/api/checking', value).then((res) => {
      setResultData(res.data);
    });
  };

  return (
    <>
      <EditorPanel onSubmit={handleSubmit} />
      {resultData && <Result data={resultData} />}
    </>
  );
}

export default App;
