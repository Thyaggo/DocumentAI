import React, { useState, useEffect } from 'react';
import { Worker, Viewer, SpecialZoomLevel  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { postPDF } from '../api/api'; // Importa la función postPDF desde tu archivo api

export const Pdfviewer = () => {
    const [url, setUrl] = useState('');

    const onChange = async (e) => {
        e.preventDefault();
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
        <section className='w-4/12 box-border'>
            {url ? (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <main>
                        <Viewer fileUrl={url} defaultScale={SpecialZoomLevel.PageFit} theme={{theme:'dark'}}/>
                    </main>
                </Worker>
            ) : (
                <main className='h-screen flex items-center border-dashed border-2 border-x-neutral-500'> 
                    <input type="file" accept=".pdf" onChange={onChange} />
                </main>
            )}
        </section>
    );
};
