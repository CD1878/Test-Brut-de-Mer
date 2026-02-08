import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Events: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://formsubmit.co/ajax/info@chefdigital.nl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: 'Test AG',
                    _captcha: 'false', // Disable captcha to prevent issues
                    _template: 'table', // Nice table format
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    guests: formData.guests,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', guests: '', message: '' });
            } else {
                console.error('Form submission failed:', result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-cream animate-fade-in">
            {/* Hero */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="https://brutdemer.nl/wp-content/uploads/2022/03/verplicht-2.jpg"
                    alt="Events"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-7xl text-white font-serif tracking-[0.2em] uppercase drop-shadow-2xl">{t.events.heroTitle}</h1>
                        <p className="text-white/90 text-sm md:text-base mt-4 font-serif italic">{t.events.heroSubtitle}</p>
                        <div className="w-16 h-px bg-white mx-auto mt-6 opacity-60"></div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <div className="py-24 text-center max-w-3xl mx-auto px-6">
                <p className="font-serif text-2xl md:text-4xl text-marine-blue italic leading-snug">
                    {t.events.introText}
                </p>
            </div>

            {/* Mother's Day Event with Form */}
            <section className="bg-soft-gray py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-xs uppercase tracking-[0.6em] text-marine-blue/60 mb-4 font-sans font-bold">{t.events.mothersDay.subtitle}</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-marine-blue mb-8">{t.events.mothersDay.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Event Description */}
                        <div className="space-y-6">
                            <img
                                src="https://brutdemer.nl/wp-content/uploads/2022/03/carusel-10.jpg"
                                alt="Mother's Day"
                                className="w-full h-[400px] object-cover shadow-2xl"
                            />
                            <p className="font-serif text-gray-700 leading-relaxed text-lg">
                                {t.events.mothersDay.text}
                            </p>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-serif text-marine-blue mb-6 text-center">{t.events.mothersDay.cta}</h3>

                            {submitStatus === 'success' ? (
                                <div className="py-12 text-center space-y-6">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-serif text-marine-blue">{t.form.success}</h4>
                                        <p className="text-sm text-gray-600">{t.form.successSubtext}</p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitStatus('idle')}
                                        className="text-sm text-marine-blue hover:underline mt-4"
                                    >
                                        {t.form.newRequest}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    {submitStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded">
                                            {t.form.error}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-sans text-gray-700 mb-2">{t.form.name} *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-marine-blue focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-sans text-gray-700 mb-2">{t.form.email} *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-marine-blue focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-sans text-gray-700 mb-2">{t.form.phone} *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-marine-blue focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-sans text-gray-700 mb-2">{t.form.guests} *</label>
                                            <input
                                                type="number"
                                                name="guests"
                                                value={formData.guests}
                                                onChange={handleChange}
                                                required
                                                min="1"
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-marine-blue focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-sans text-gray-700 mb-2">{t.form.message}</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-marine-blue focus:outline-none transition-colors resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-marine-blue text-white py-4 px-6 text-sm uppercase tracking-widest hover:bg-white hover:text-marine-blue border border-marine-blue transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? t.form.sending : t.form.submit}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Private Events Section */}
            <section className="py-24 bg-cream">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="w-full md:w-1/2 shadow-2xl overflow-hidden group">
                            <img
                                src="https://brutdemer.nl/wp-content/uploads/2022/03/carusel-15.jpg"
                                alt="Private Events"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <p className="text-xs uppercase tracking-[0.6em] text-marine-blue/60 font-sans font-bold">{t.events.private.subtitle}</p>
                            <h2 className="text-4xl md:text-5xl font-serif text-marine-blue">{t.events.private.title}</h2>
                            <p className="font-serif text-gray-700 leading-relaxed text-lg">
                                {t.events.private.text}
                            </p>
                            <div className="pt-4">
                                <a
                                    href="mailto:info@brutdemer.nl"
                                    className="inline-block bg-marine-blue text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-marine-blue border border-marine-blue transition-colors duration-300"
                                >
                                    {t.events.private.cta}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Visual */}
            <section className="h-[60vh] relative overflow-hidden">
                <img
                    src="https://brutdemer.nl/wp-content/uploads/2022/03/verplicht-1.jpg"
                    className="w-full h-full object-cover"
                    alt="Celebrate"
                />
                <div className="absolute inset-0 bg-marine-blue/30 flex items-center justify-center">
                    <h2 className="text-6xl md:text-7xl font-serif text-white italic drop-shadow-2xl">{t.events.finalVisual.title}</h2>
                </div>
            </section>
        </div>
    );
};
