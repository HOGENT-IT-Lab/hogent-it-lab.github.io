import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function certificates() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Naam:', name);
    console.log('Functie:', role);
    console.log('Jaar:', year);
    setName('');
    setRole('');
    setYear('');
  };

  return (
    <div className="mx-5 flex flex-col gap-8 rounded bg-lab-blue p-8 pt-6 md:w-[60%]">
      <div className="mx-auto text-center">
        <h4>IT-Lab {t('certificate')}</h4>
        <form onSubmit={handleSubmit}>
        <div className='my-1'>
          <label htmlFor="name">{t('name')}: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='bg-dark border'
          />
        </div>
        <div className='my-1'>
          <label htmlFor="role">{t('role')}: </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className='bg-dark border'
          />
        </div>
        <div className='my-1'>
          <label htmlFor="year">{t('year')}: </label>
          <input
            type="year"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className='bg-dark border'
          />
        </div>
        <button className='mt-2' type="submit">{t('generateCertificate')}</button>
      </form>
      </div>  
    </div>
  )
}