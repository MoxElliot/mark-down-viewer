import { useState } from 'react';
import React from 'react';
import { marked } from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

const App = ()=> {
  const [editorText, setEditorText] = useState(placeholder);

  return (
    <div className="App container">
      <h1 className="text-center mt-4">Mark Down Viewer</h1>
     
        <div className="row">
        <div className="col-6" id="editorSection">
          <h4 className="text-center">Editor</h4>
          <textarea 
            id="editor"
            className="form-control p-2"
            defaultValue= {placeholder}
            onChange={(e) => setEditorText(e.target.value)} />
        </div>

        <div className="col-6">
          <h4 className='text-center'>Preview</h4>
          
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
    id="preview"
    className="col-6 previewSection">

    </div>
  )
}
export default App;

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Samurai](https://api.audiotool.com/track/fqcpp7rz/cover/512.jpg)
`;