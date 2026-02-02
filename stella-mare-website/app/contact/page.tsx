"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Turnstile = dynamic(() => import('react-turnstile'), { ssr: false });

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [token, setToken] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) return;
    
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append('cf-turnstile-response', token);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xaqjzwna', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setToken(null); // Reset token after success
      } else {
        const data = await response.json();
        console.error('Formspree error:', data);
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        {/* Contact Info Section */}
        <div className="mb-20 border-b border-gray-200 pb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">{t.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-600 text-sm leading-relaxed space-y-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">{t.companyName}</p>
                {t.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">CATHY PAN</p>
                <p>MOB: 0086-18248538625</p>
                <p>TEL: 0086-579-85189878</p>
                <p>EMAIL: stellamareglobal@gmail.com</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-1/2 flex flex-col items-center">
                <span className="font-medium text-gray-900 mb-3">WeChat</span>
                <div className="w-full aspect-square relative rounded-lg border border-gray-100 overflow-hidden">
                  <Image 
                    src="/images/wechat.jpg" 
                    alt="WeChat QR Code" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="w-1/2 flex flex-col items-center">
                <span className="font-medium text-gray-900 mb-3">WhatsApp</span>
                <div className="w-full aspect-square relative rounded-lg border border-gray-100 overflow-hidden">
                  <Image 
                    src="/images/whatsapp.jpg" 
                    alt="WhatsApp QR Code" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-12">{t.writeToUs}</h1>
        
        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-medium mb-2">{t.successTitle}</h3>
            <p>{t.successText}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm underline hover:text-green-900"
            >
              {t.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">{t.name}</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder={t.name}
                className="block w-full border-0 border-b border-gray-300 bg-transparent py-3 px-0 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm sm:leading-6 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">{t.email}</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder={t.email}
                className="block w-full border-0 border-b border-gray-300 bg-transparent py-3 px-0 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm sm:leading-6 transition-colors"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="sr-only">{t.subject}</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                placeholder={t.subject}
                className="block w-full border-0 border-b border-gray-300 bg-transparent py-3 px-0 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm sm:leading-6 transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="sr-only">{t.message}</label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                placeholder={t.message}
                className="block w-full border-0 border-b border-gray-300 bg-transparent py-3 px-0 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm sm:leading-6 transition-colors resize-none"
              />
            </div>

            {/* Checkboxes & Turnstile */}
            <div className="space-y-4 pt-4">
               {/* Cloudflare Turnstile */}
               <div className="mb-6">
                 <Turnstile
                   sitekey="0x4AAAAAACWA7mHxtsiTcasP"
                   onVerify={(token) => setToken(token)}
                 />
               </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={status === 'submitting' || !token}
                className="bg-gray-900 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? t.sending : t.send}
              </button>
            </div>
            
            {status === 'error' && (
               <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again later.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
