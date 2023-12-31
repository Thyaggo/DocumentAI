import React, { useState, useEffect } from 'react';
import { Worker, Viewer, SpecialZoomLevel  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useDropzone } from 'react-dropzone';
import { MyContext } from '../Context';
import useAxios from '../api/useAxios';

export const Pdfviewer = () => {
    const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
        accept: '.pdf',
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            console.log(acceptedFiles[0]);
            if (acceptedFiles) {
                setUrl(URL.createObjectURL(acceptedFiles[0]));
                // let formData = new FormData();
                // formData.append('file', acceptedFiles[0]);

                // try {
                //     const response = await postPDF(formData);
                //     console.log('PDF enviado exitosamente', response);
                //     // Lógica adicional después de enviar el PDF, si es necesario
                // } catch (error) {
                //     console.error('Error al enviar el PDF', error);
                // }
            }
        },
    });
    const [url, setUrl] = useState('');
    const {chatid} = React.useContext(MyContext);
    const api = useAxios();

    useEffect(() => {
        // Aquí dentro, realizas la solicitud HTTP utilizando Axios o cualquier otra biblioteca que prefieras
        api.get(import.meta.env.VITE_ROUTE_FILE+'?chatroom='+chatid)
          .then(response => {
            // Cuando la promesa se resuelve con éxito, actualizas el estado con los datos
            if (response.data !== undefined && response.data.length !== 0){setUrl(response.data[0])};
          })
          .catch(error => {
            // Manejas errores si la promesa se rechaza
            console.error(error);
          });
      }
    , [chatid]);

    return (
        <section className='w-full max-w-[45%] box-border'>
            {url ? (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <main className='h-screen'>
                        <Viewer fileUrl={url} defaultScale={SpecialZoomLevel.PageWidth} theme={{theme:'dark'}} />
                    </main>
                </Worker>
            ) : (
                <main {...getRootProps({className:'h-screen bg-[#303030] flex flex-col items-center justify-center border-dashed border-2 border-x-neutral-500'})}> 
                    <input {...getInputProps()} />
                    <p className='mx-auto my-1 text-center text-x-neutral-500'>
                        Arrastra y suelta un archivo PDF aquí
                    </p>
                    <p>o</p>
                    <button type="button" onClick={open} className='transition ease-in-out delay-50 hover:shadow-lg hover:shadow-stone-500/75 mx-auto my-2 px-5 py-1 rounded-2xl bg-stone-600'> Selecciona PDF </button>
                </main>
            )}
        </section>
    );
};
