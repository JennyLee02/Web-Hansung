import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import './catalog.css';
import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const {t, i18n} = useTranslation();

  const fetchUrl = 'http://localhost:1337/api/user-guides?populate=*';
  const {data, loading, error} = useFetch(fetchUrl);

  const pdfFiles = data?.data;

  const CategoryKeys = {
    Temperature: 'Temperature',
    Boiler: 'Boiler',
    WaterHeater: 'Water Heater',
    Etc: 'Etc',
  };

  const CategoryDisplayNames = {
    Temperature: '개별온도제어시스템',
    Boiler: '보일러',
    WaterHeater: '온수기',
    Etc: '기타',
  };

  // State for category selection: set "Temperature" as default
  const [selectedCategory, setSelectedCategory] = useState(CategoryKeys.Temperature);

  const filteredPdfFiles = pdfFiles?.filter(
    (pdf) => pdf.attributes.Type === selectedCategory
  );


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading PDF files: {error.message}</p>;

  return (
    <div className='catalog-page'>
        <h2 className='catalog-title'>PRODUCT MANUAL</h2>

        {/* Category buttons */}
        <div className='category-buttons'>
          {Object.entries(CategoryKeys).map(([key, value]) => (
            <button
              key={key}
              className={`category-button ${selectedCategory === value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(value)}
            >
              {CategoryDisplayNames[key]}
            </button>
          ))}
        </div>

        <div className='pdf-list'>
          {filteredPdfFiles?.map((pdf, index) => {
            const pdfUrl = pdf.attributes.guidebook?.data?.attributes?.url;
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