import React from "react";

const Prism = require('react-syntax-highlighter')
// import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'


const Foo = React.memo(({node, inline, className, children, ...props}: any) => {
    const match = /language-(\w+)/.exec(className || '')

    if (inline || !match) {
        // 如果是内敛，或者没有指明是哪种语言，返回默认的code
        return <code className={className} {...props}>
            {children}
        </code>
    } else {
        return <Prism
            children={String(children)}
            language={match[1]}
            {...props}/>;
        // 如果是mermaid，则用mermaid.js渲染，其余语言的代码高亮
        // const languageType = match[1]
        // switch (languageType) {
        //     case "mermaid":
        //         return <MermaidBlock code={String(children)}/>
        //     default:
        //         return <SyntaxHighlighter
        //             children={String(children)}
        //             language={match[1]}
        //             {...props}/>;
        // }
    }
})

export default Foo;
