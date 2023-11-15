import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css'
import { send } from 'emailjs-com'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    let timeoutId: number | null = null; // Keep track of the timeout ID

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const isMessageValid = () => {
        return formData.message.trim().length >= 10;
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isMessageValid()) {
            setErrorMessage('Invalid message. Please enter a message with at least 10 characters.');

            // Clear the previous timeout before setting a new one
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // Clear the error message after 5 seconds (5000 milliseconds)
            timeoutId = setTimeout(() => {
                setErrorMessage(null);
            }, 5000);

            return;
        }

        const formDataWithSenderEmail = {
            ...formData,
            message: `Sender's Email: ${formData.email}\n\n${formData.message}`,
        };

        send(
            'service_hdoiswd',
            'template_ec95l3c',
            formDataWithSenderEmail,
            'KDrRUBRML8K8Xaa6y'
        )
            .then((response) => {
                console.log('SUCCESS', response.status, response.text);
                navigate('/thank-you');
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
    };

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className='flex flex-row'>
            {errorMessage && (
                <div className="absolute m-20 px-3 py-2 rounded-lg bg-sky-300 w-100% text-red-500 font-medium fade-out">{errorMessage}</div>
            )}
            <button onClick={handleGoBack} type="button" className="z-20 back-button absolute m-3 mt-3 flex items-center justify-center bg-transparent bg-opacity-40 w-[60px] px-5 py-2 text-sm text-white transition-colors duration-200  shadow-2xl hover:bg-slate-300 hover:bg-opacity-10 rounded-lg gap-x-2 sm:w-auto">
                <svg className="w-8 h-8 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span className="hidden p-0"></span>
            </button>
            <section className="flex justify-center items-center min-h-screen w-screen bg-section">
                <div className="">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Ta Kontakt</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Om du vil vite mer, eller bare ta en prat, send en mail</p>
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Din email</label>
                            <input
                                type="email"
                                id="email"
                                className="placeholder:text-white shadow-2xl bg-transparent text-purple-200 text-sm rounded-lg block w-full p-2.5 "
                                placeholder="navn@email.com"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Emne</label>
                            <input
                                type="text"
                                id="subject"
                                className="placeholder:text-white block p-3 bg-transparent w-full text-sm text-purple-200 shadow-2xl rounded-lg"
                                placeholder="Hva vil du snakke om?..."
                                required
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Din kommentar</label>
                            <textarea
                                id="message"
                                rows={6}
                                className="placeholder:text-white block shadow-2xl bg-transparent p-2.5 w-full text-sm text-purple-200 rounded-lg"
                                placeholder="Bare å skrive..."
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="shadow-xl py-1 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactPage