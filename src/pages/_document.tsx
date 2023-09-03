import { Main } from 'next/document'
import React from 'react'
import NavMenu from '../app/components/NavMenu'

export default function _document() {
    return (
        <html lang="en">
            <head></head>
            <body>
                <NavMenu></NavMenu>
                <Main></Main>
            </body>
        </html>
    )
}
