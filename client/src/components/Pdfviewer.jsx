import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { postPDF } from '../api/api'; // Importa la función postPDF desde tu archivo api

export const Pdfviewer = () => {
    const [url, setUrl] = useState('');
    const [pdfFile, setPdfFile] = useState({
        file: "",
    });

    const handleImageChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const uploadPdf = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", pdfFile.file);
        console.log(formData);
        postPDF(formData);
    }
    
    

    return (
        <div>
            <div style={{ height: '750px', width: '30vw' }}>
                {url ? (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            <Viewer fileUrl={url} />
                        </div>
                    </Worker>
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
                        <form onSubmit={uploadPdf} encType="multipart/form-data">
                            <input name='file' type="file" accept=".pdf"onChange={handleImageChange} />
                            <button type='submit'>Upload</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

