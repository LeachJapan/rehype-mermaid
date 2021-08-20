import {visit} from "unist-util-visit";
import {hasProperty} from 'hast-util-has-property'
import MermaidBlock from "../MermaidBlock";

export default function rehypeMermaid(options: any) {
    return (tree: any) => {
        visit(tree, "element", (node: any, index: any, parent: any) => {
            if (hasProperty(node, "className")) {
                // console.log("node", node)
                // console.log("index", index)
                // console.log("parent", parent)
                //
                // console.log("className", node.properties.className)
                if (node.properties.className.indexOf("language-mermaid") != -1) {
                    const text = node.children[0].value
                    // console.log(text)
                    parent.children[index] = {
                        "type": "element",
                        "tagName": "div",
                        "properties": {
                            "children": <MermaidBlock code={text}/>
                        },
                        "children": []
                    }
                }
            }
        })
    }
}
