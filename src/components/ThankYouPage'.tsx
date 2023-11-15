import { useNavigate } from 'react-router-dom';

function ThankYou() {
    const navigate = useNavigate();
    console.log('Contact component rendered');
    const handleGoBack = () => {
        navigate('/');
    };
    return (
        <div className="bg-section text-white font-bold w-screen h-screen m-auto flex flex-col justify-center items-center">
            <div className='text-center px-4 py-2 shadow-xl m-1 animate-text'>
                <h1 className="text-2xl m-2">Takk for Email'en</h1>
                <p>Tar kontakt så snart som mulig 😊</p>
            </div>
            <button onClick={handleGoBack} type="button" className="mt-7 shadow-xl px-4">
                <svg className="w-8 h-8 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span className="hidden p-0"></span>
            </button>
        </div>
    )
}

export default ThankYou