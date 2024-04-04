import React from 'react';
import useFetch from '../../hooks/useFetch';
import './catalog.css';
import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const {t, i18n} = useTranslation();

  const fetchUrl = 'http://localhost:1337/api/user-guides?populate=*';
  const {data, loading, error} = useFetch(fetchUrl);

  const pdfFiles = data?.data;


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading PDF files: {error.message}</p>;
  return (
    <div className='catalog-page'>
        <h2 className='catalog-title'>USER GUIDE</h2>
        <div className='pdf-list'>
          {pdfFiles?.map((pdf, index) => {
            const pdfUrl = pdf.attributes.guidebook?.data?.attributes?.url;
            console.log(pdfFiles);
            return (
              <div key={index} className='pdf-item'>
                <p className='book-title'>{pdf.attributes.title}</p>
                {pdfUrl && (
                  <a href={`http://localhost:1337${pdfUrl}`} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                )}
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Catalog