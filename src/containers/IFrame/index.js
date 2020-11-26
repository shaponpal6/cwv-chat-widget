import React, { useState } from 'react'
import { createPortal } from 'react-dom'
// import { StyleSheetManager } from 'styled-components'

import { CacheProvider, jsx, css } from '@emotion/core'
import createCache from '@emotion/cache'
import weakMemoize from '@emotion/weak-memoize'

const memoizedCreateCacheWithContainer = weakMemoize(
    (container) => {
        let newCache = createCache({ container })
        return newCache
    }
)

export const WithEmotion = ({
    children,
    styleSelector,
    title,
    ...props
}) => {
    const [contentRef, setContentRef] = useState(null)
    const doc = contentRef?.contentWindow?.document
    const mountNode = doc?.body
    const insertionTarget = doc?.head

    return (
        <iframe title={title} {...props} ref={setContentRef}>
            {mountNode &&
                insertionTarget &&
                createPortal(
                    <CacheProvider
                        value={memoizedCreateCacheWithContainer(
                            insertionTarget
                        )}
                    >
                        {children}
                    </CacheProvider>,
                    mountNode
                )}
        </iframe>
    )
}


// export const IFrame = ({
//     children,
//     styleSelector,
//     title,
//     ...props
// }) => {
//     const [contentRef, setContentRef] = useState(null)
//     const doc = contentRef?.contentWindow?.document
//     const mountNode = doc?.body
//     const insertionTarget = doc?.createElement('link')
//     if (insertionTarget) {
//         doc.head.append(insertionTarget)
//     }

//     return (
//         <iframe title={title} {...props} ref={setContentRef}>
//             {mountNode &&
//                 createPortal(
//                     <StyleSheetManager target={insertionTarget}>
//                         {children}
//                     </StyleSheetManager>,
//                     mountNode
//                 )}
//         </iframe>
//     )
// }


// export class Frame extends React.Component {
//     componentDidMount() {
//         this.iframeHead = this.node.contentDocument.head
//         this.iframeRoot = this.node.contentDocument.body
//         this.forceUpdate()
//     }

//     render() {
//         const { children, head, ...rest } = this.props
//         return (
//             <iframe {...rest} ref={node => (this.node = node)}>
//                 {this.iframeHead && createPortal(head, this.iframeHead)}
//                 {this.iframeRoot && createPortal(children, this.iframeRoot)}
//             </iframe>
//         )
//     }
// }