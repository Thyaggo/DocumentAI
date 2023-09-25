import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { postPDF } from '../api/api'; // Importa la función postPDF desde tu archivo api

export const Pdfviewer = () => {
    const [url, setUrl] = useState('');
    const [pdfFile, setPdfFile] = useState(null);

    const onChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPdfFile(file);
            setUrl(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        const uploadPdf = () => {
                const formData = new FormData();
                formData.append('pdf', pdfFile);
        
                try {
                    const response = postPDF(formData);
                    console.log('PDF enviado exitosamente', response);
                    // Lógica adicional después de enviar el PDF, si es necesario
                } catch (error) {
                    console.error('Error al enviar el PDF', error);
                }
            }
        uploadPdf();
    }, [pdfFile]);
    

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
                        <input type="file" accept=".pdf" onChange={onChange} />
                    </div>
                )}
            </div>
        </div>
    );
};
