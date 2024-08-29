import './index.css'
import {
    BubbleMenu,
    EditorContent,
    FloatingMenu,
    useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
export default () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Text,
            Document,
            Paragraph,
            Dropcursor.configure({
                width: 3,
                color: "green",
                
            }),
        ],
        content: `
      <p>
        11111
      </p>
      <p>
       3333
      </p>
      <img src="https://placehold.co/800x400" />
    `,
    onUpdate({ editor }) {
        const json = editor.getJSON()
        const html = editor.getHTML()
        console.log(json)
        console.log(html)
      },
    })

    return (
        <>
            <button onClick={() => {
                console.log(editor?.getHTML(), '-=========');

            }}>1111111111获取编辑的内容</button>
            {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </button>
            </BubbleMenu>}

            {editor && <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    Bullet list
                </button>
            </FloatingMenu>}

            <EditorContent editor={editor} />
        </>
    )
}