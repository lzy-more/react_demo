import React from 'react'
import Basic from './componnets/editor/basic/basic.tsx'
import Images from './componnets/editor/images'
import Formatting from './componnets/editor/formatting'
import Minimal from './componnets/editor/Minimal'
import Floating from './componnets/editor/floating'
import NodeView from './componnets/editor/NodeView'
export default function App() {
  return (
    <div>
基本功能
<Basic></Basic>
<br></br>
图片
<Images></Images>
<br />
格式化
<Formatting></Formatting>
<br />
最小化工具
<Minimal></Minimal>

<br />
浮动工具
<Floating></Floating>
<br />
节点视图
<NodeView></NodeView>
    </div>
  )
}
