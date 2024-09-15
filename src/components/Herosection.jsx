import avatar1 from '../assets/images/avatar/avatar (1).png';
import avatar2 from '../assets/images/avatar/avatar (2).png';
import avatar3 from '../assets/images/avatar/avatar (3).png';

const Herosection = () => {
    return (
        <div className='flex flex-col md:flex-row mt-32 justify-between'>
            <div className="space-y-8">
                <h1 className="text-5xl font-bold">Discover the Perfect Credit Card for You</h1>
                <p className="text-secondary">Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.</p>
                <button className="flex items-center gap-4 bg-primary-green px-8 py-4 rounded-full font-medium">
                    Get Started
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9.75H23.5M23.5 9.75L16.5 18.25M23.5 9.75L16.5 1.75" stroke="#EFF8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className='flex flex-col md:flex-row text-center md:text-left gap-4'>
                    <div className='flex justify-center md:justify-start'>
                        <img src={avatar1} alt="" className='border-2 rounded-full' />
                        <img src={avatar2} alt="" className='border-2 rounded-full' />
                        <img src={avatar3} alt="" className='border-2 rounded-full' />
                    </div>
                    <div>
                        <h3 className='font-bold'>10.2k+</h3>
                        <p className='text-secondary'>Active users around the worlds</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='absolute top-64 right-0'>
                    <svg width="219" height="292" viewBox="0 0 419 492" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="246" cy="246" r="246" fill="#2BB32A" />
                    </svg>
                    <div className='absolute -top-10 right-32'>
                        <svg width="330" height="280" viewBox="0 0 611 467" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_1_65)">
                                <rect x="84.1182" y="-6" width="551.298" height="348.188" rx="32" transform="rotate(15 84.1182 -6)" fill="url(#paint0_linear_1_65)" fillOpacity="0.37" />
                                <rect x="84.1182" y="-6" width="551.298" height="348.188" rx="32" transform="rotate(15 84.1182 -6)" stroke="url(#paint1_linear_1_65)" strokeOpacity="0.5" strokeWidth="2" />
                            </g>
                            <defs>
                                <filter id="filter0_b_1_65" x="-74.8159" y="-74.8164" width="760.263" height="616.643" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="37.5" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_65" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_65" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_1_65" x1="148.095" y1="18.7861" x2="638.781" y2="341.276" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_65" x1="124.74" y1="9.95861" x2="419.249" y2="342.188" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0.55" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Herosection;