import React from 'react';
import { useTranslation } from 'react-i18next';


export const Manufacturing_intro = () => {
    const {t, i18n} = useTranslation();

  return (
    <div>
        <h2>OFF-SITE MANUFACTURING</h2>
        {t('Manufacturing.intro.offsite')}
        <h2>ON-SITE CONSTRUCTION</h2>
        {t('Manufacturing.intro.onsite')}
    </div>
  )
}
