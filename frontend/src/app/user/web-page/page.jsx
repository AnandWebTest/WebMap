'use client';
import React from 'react'
import { CopyBlock,dracula } from 'react-code-blocks';

const WebPage = (props) => {
    return (
        <div>
            <div className="max-w space-y-3 mt-5 mx-5">
                <input
                    type="text"
                    className=" outline outline-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="This is placeholder"
                />
            </div>
            <CopyBlock
                text={props.code}
                language={props.language}
                showLineNumbers={props.showLineNumbers}
                theme={dracula}
                wrapLines
            />
        </div>
    )
}

export default WebPage
