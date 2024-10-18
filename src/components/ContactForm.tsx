'use client'; // if you are using Next.js

import React, { useState } from 'react';
import client from '../../utils/sanity';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error message on input change
  };

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const isValidPhone = (phone: string) => {
    const strippedPhone = phone.replace('+251', '').trim(); // Remove country code if present
    return (
      (strippedPhone.startsWith('9') || strippedPhone.startsWith('7')) && 
      strippedPhone.length === 9
    );
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!isValidEmail(formData.email)) newErrors.email = 'Email is invalid';
    if (!isValidPhone(formData.phone)) newErrors.phone = 'Phone number is invalid';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      setIsSubmitting(true); // Show the "submitting" status
      const { name, email, phone, message } = formData; // Extract form data

      const newContact = {
        _type: 'contact',
        name: name,
        email: email,
        phone: phone,
        message: message
      };

      try {
        // Submit data to Sanity Studio
        const result = await client.create(newContact);
        console.log('Contact created:', result);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error('Error submitting data:', error);
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Get in Touch</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded p-3 mb-4 transition-all duration-300 ease-in-out focus:ring focus:ring-primary focus:border-transparent`}
        />
        {errors.name && <span className="text-red-500 text-sm mb-2">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-3 mb-4 transition-all duration-300 ease-in-out focus:ring focus:ring-primary focus:border-transparent`}
        />
        {errors.email && <span className="text-red-500 text-sm mb-2">{errors.email}</span>}

        <div className="flex mb-4">
          <span className="flex items-center border rounded-l p-3 bg-gray-200 text-gray-600">+251</span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-r p-3 flex-1 transition-all duration-300 ease-in-out focus:ring focus:ring-primary focus:border-transparent`}
          />
        </div>
        {errors.phone && <span className="text-red-500 text-sm mb-2">{errors.phone}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={`border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded p-3 mb-4 transition-all duration-300 ease-in-out focus:ring focus:ring-primary focus:border-transparent`}
          rows={4}
        />
        {errors.message && <span className="text-red-500 text-sm mb-2">{errors.message}</span>}

        <button
          type="submit"
          className={`py-2 rounded transition-colors duration-300 bg-primary text-white hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
