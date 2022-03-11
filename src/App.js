import { useState } from 'react';
import React from 'react';
import { marked } from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

const App = ()=> {
  const [editorText, setEditorText] = useState("");

  return (
    <div className="App">
      <div className="text-center px-4">

        <div className="topHeading">
          <h1>Mark Down Viewer</h1>
        </div>

        <div className="section">
          <h2 className="heading">Editor</h2>
          <textarea 
            id="editor" 
            value={editorText} 
            onChange={(e) => setEditorText(e.target.value)} />
        </div>

        <div className="section">
          <h2 className="heading">Preview</h2>
          <Preview markdown={editorText} />
        </div>

      </div>
      

    </div>
  );
}

const Preview = ({markdown}) => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: marked(markdown, {renderer: renderer}),
    }}
    id="preview">

    </div>
  )
}
export default App;