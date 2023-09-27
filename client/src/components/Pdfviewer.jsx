import React, { useState, useEffect } from 'react';
import './Pdfviewer.css';
import { Worker, Viewer, SpecialZoomLevel  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { postPDF } from '../api/api'; // Importa la función postPDF desde tu archivo api

export const Pdfviewer = () => {
    const [url, setUrl] = useState('');

    const onChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            setUrl(URL.createObjectURL(file));
            let formData = new FormData();
            formData.append('file', file);

            try {
                const response = await postPDF(formData);
                console.log('PDF enviado exitosamente', response);
                // Lógica adicional después de enviar el PDF, si es necesario
            } catch (error) {
                console.error('Error al enviar el PDF', error);
            }
        }
    };

    return (
        <div className='PdfContainer'>
            <section>
                {url ? (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <main
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '100%',
                            }}
                        >
                            <Viewer fileUrl={url} defaultScale={SpecialZoomLevel.PageFit} theme={{theme:'dark'}}/>
                        </main>
                    </Worker>
                ) : (
                    <main
                        style={{
                            boxSizing: 'border-box', /* Incluye márgenes y bordes en el tamaño total */
                            alignItems: 'center',
                            border: '2px dashed rgba(0, 0, 0, .3)',
                            display: 'flex',
                            fontSize: '2rem',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <input type="file" accept=".pdf" onChange={onChange} />
                    </main>
                )}
            </section>
        </div>
    );
};
