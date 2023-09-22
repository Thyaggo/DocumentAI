import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export const Pdfviewer = () => {
    const [url, setUrl] = React.useState('');

    // Handle the `onChange` event of the `file` input
    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div>
            <input type="file" accept=".pdf" onChange={onChange} />
    
            <div style={{ height: '750px', width:'30vw' }}>
                {url ? (
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <Viewer fileUrl={url} />
                    </div>
                ) : (
                    <div
                        style={{
                            alignItems: 'center',
                            border: '2px dashed rgba(0, 0, 0, .3)',
                            display: 'flex',
                            fontSize: '2rem',
                            height: '100%',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        Preview area
                    </div>
                )}
            </div>
        </div>
        </Worker>
    );
}
