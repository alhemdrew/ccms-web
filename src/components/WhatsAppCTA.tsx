import contactConfig from '../config/contact';

export function WhatsAppCTA({className}:{className?:string}){
  const number = contactConfig.whatsappNumber;
  const message = encodeURIComponent(contactConfig.whatsappMessage || 'Hello');

  if(!number) return null;

  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a className={className || 'whatsapp-cta'} href={href} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
      Chat on WhatsApp
    </a>
  );
}

export default WhatsAppCTA;
