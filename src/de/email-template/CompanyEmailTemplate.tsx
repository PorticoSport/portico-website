import HeaderEmailTemplate from './HeaderEmailTemplate';
import FooterEmailTemplate from './FooterEmailTemplate';

interface CompanyEmailTemplateProps {
  page: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  language: string;
}

export default function CompanyEmailTemplate({ page, name, subject, email, phone, country, message, language }: CompanyEmailTemplateProps) {
  return (
    <div style={{
      color: 'white',
      backgroundColor: '#151a36',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <HeaderEmailTemplate />
        <h1>{subject}</h1>
        <p>Wir haben eine neue E-Mail von der Seite <a href={`https://www.porticosport.com/${page}`}>{page}</a></p>
        <p>Dies ist die E-Mail</p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem 0',
          borderBottom: '1px solid white'
        }}>
          <strong>Name:</strong> <span>{name}</span>
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem 0',
          borderBottom: '1px solid white'
        }}>
          <strong>Email:</strong> <span>{email}</span>
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem 0',
          borderBottom: '1px solid white'
        }}>
          <strong>Telefon:</strong> <span>{phone}</span>
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem 0',
          borderBottom: '1px solid white'
        }}>
          <strong>Land:</strong> <span>{country}</span>
        </div>
        <div style={{
          padding: '1rem 0',
        }}>
          <strong>Nachricht:</strong> <p style={{paddingTop: '1rem'}}>{message}</p>
        </div>
        <FooterEmailTemplate language={language} />
      </div>
    </div>
  );
}
