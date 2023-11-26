import { useState } from 'react'
import {marked} from 'marked'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.scss'


function App() {
  const initialText = `# Welcome to my React Markdown Previewer!
---
## This is a sub-heading...
---
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
There's also [links](https://www.freecodecamp.com), and
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

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![Vite Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png)
`;
  const [text, setText] = useState(initialText)
  const [copy, setCopy] = useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleCopy = () => {
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 1000);
  }

  return (
    <>
      <div className="header">
      <div className="logo">
      <img src="markdown.svg" alt="markdown" />
      </div>
      <div id='title'>Markdwon previewer</div>
      </div>
      <div id='description'>A simple markdown previewer</div>
      <div className="wrapper">
      <div id='editor-container'><h2>Editor</h2>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        {copy ? <div id='copy-success'><img src="check.svg" alt="markdown" /> <span>Copied</span></div> :
      <div id='copy'><img src="copy.svg" alt="markdown" /> <span>Copy</span></div>
      }
      </CopyToClipboard>
        <textarea name="editor" id="editor" value={text} onChange={handleChange}></textarea>
      </div>
      <div id='preview-container'><h2>Preview</h2>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(text, {sanitize: true})}}></div>
      </div>
      </div>
      <div className="links">
        Created by: <a href="https://twitter.com/yasin_elhadi"> <img src="square-x-twitter.svg" alt="square-x-twitter" /> Yasin Alhadi</a> | Source Code: <a href="https://github.com/YasinAlhadi/markdown-previewer"> <img src="github.svg" alt="github" /> Github</a>
      </div>
    </>
  )
}

export default App
