import emailjs from '@emailjs/browser';

export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    'service_n4a2pln',
    'template_xra6wfb',
    formRef,
    { publicKey: 'cV9Gum6f7sNuw_XRW' }
  );
};
