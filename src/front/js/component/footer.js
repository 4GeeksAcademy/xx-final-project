import React, {
  useState,
} from 'react';
import "../../styles/footer.css"
import { ContactUsForm } from './ContactUsForm';

export const Footer = ({onSubmit}) => {
  const handleFormSubit = (formData) => {
    console.log(formData)
  }

  return (
    <div className=' navbar-light bg-light'>
      <ContactUsForm onSubmit={handleFormSubit} />
    </div>
  );
};
