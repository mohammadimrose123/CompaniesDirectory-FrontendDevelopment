function IndustryGraphic({ industry }) {
  const commonClasses = 'h-56 w-full';

  switch (industry) {
    case 'Software':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#sw1)" />
          <rect x="120" y="120" width="960" height="320" rx="24" fill="#ffffff" opacity="0.18" />
          <path d="M220 180H980" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
          <path d="M220 240H780" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
          <path d="M220 320H930" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
          <circle cx="330" cy="165" r="14" fill="#ffffff" />
          <circle cx="374" cy="165" r="14" fill="#ffffff" />
          <circle cx="418" cy="165" r="14" fill="#ffffff" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Software Studio</text>
        </svg>
      );

    case 'Fintech':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fn1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#fn1)" />
          <rect x="240" y="140" width="720" height="280" rx="32" fill="#ffffff" opacity="0.16" />
          <path d="M300 220H620" stroke="#ffffff" strokeWidth="22" strokeLinecap="round" />
          <path d="M300 300H760" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
          <path d="M300 380H860" stroke="#ffffff" strokeWidth="20" strokeLinecap="round" />
          <path d="M770 240H830C868.091 240 900 271.909 900 310V362C900 400.091 868.091 432 830 432H770" stroke="#ffffff" strokeWidth="20" fill="#ffffff" fillOpacity="0.12" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Fintech</text>
        </svg>
      );

    case 'Healthcare':
    case 'HealthTech':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hc1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#hc1)" />
          <circle cx="340" cy="260" r="108" fill="#ffffff" fillOpacity="0.18" />
          <rect x="510" y="180" width="220" height="200" rx="28" fill="#ffffff" fillOpacity="0.18" />
          <path d="M362 210H418V266H474V322H418V378H362V322H306V266H362V210Z" fill="#ffffff" />
          <path d="M540 240H660" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
          <path d="M600 200V280" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Health Care</text>
        </svg>
      );

    case 'eCommerce':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ec1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#ec1)" />
          <rect x="200" y="170" width="320" height="240" rx="28" fill="#ffffff" fillOpacity="0.22" />
          <rect x="520" y="210" width="220" height="170" rx="24" fill="#ffffff" fillOpacity="0.16" />
          <path d="M750 180H930C954.807 180 974 199.193 974 224V366C974 390.807 954.807 410 930 410H750C725.193 410 706 390.807 706 366V224C706 199.193 725.193 180 750 180Z" fill="#ffffff" fillOpacity="0.18" />
          <circle cx="315" cy="260" r="40" fill="#ffffff" />
          <path d="M262 330H368" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">eCommerce</text>
        </svg>
      );

    case 'Creative':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cr1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#cr1)" />
          <circle cx="320" cy="220" r="80" fill="#ffffff" fillOpacity="0.16" />
          <path d="M930 216C930 184.548 905.452 160 874 160H830C798.548 160 774 184.548 774 216V320C774 351.452 798.548 376 830 376H874C905.452 376 930 351.452 930 320V216Z" fill="#ffffff" fillOpacity="0.22" />
          <path d="M360 420C360 368 406 324 458 324C510 324 556 368 556 420C556 472 510 516 458 516C406 516 360 472 360 420Z" fill="#ffffff" fillOpacity="0.18" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Creative</text>
        </svg>
      );

    case 'Food & Beverage':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fb1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#65a30d" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#fb1)" />
          <circle cx="280" cy="260" r="100" fill="#ffffff" fillOpacity="0.14" />
          <path d="M260 220H300V340H260V220Z" fill="#ffffff" />
          <path d="M340 220H380V340H340V220Z" fill="#ffffff" />
          <path d="M320 220V180C320 170.058 329.058 161 339 161H341C350.942 161 360 170.058 360 180V220H320Z" fill="#ffffff" />
          <path d="M600 240H820C839.673 240 856 256.327 856 276V372C856 391.673 839.673 408 820 408H600C580.327 408 564 391.673 564 372V276C564 256.327 580.327 240 600 240Z" fill="#ffffff" fillOpacity="0.18" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Food & Beverage</text>
        </svg>
      );

    case 'Agritech':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ag1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4d7c0f" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#ag1)" />
          <rect x="220" y="240" width="760" height="200" rx="40" fill="#ffffff" fillOpacity="0.16" />
          <path d="M320 380C320 345.117 347.117 318 382 318H418C452.883 318 480 345.117 480 380V406H320V380Z" fill="#ffffff" />
          <path d="M720 260C720 225.117 747.117 198 782 198H818C852.883 198 880 225.117 880 260V286H720V260Z" fill="#ffffff" />
          <path d="M340 220C340 186.386 368.386 158 402 158H418C451.614 158 480 186.386 480 220V236H340V220Z" fill="#ffffff" fillOpacity="0.18" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Agritech</text>
        </svg>
      );

    case 'Energy':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="en1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#en1)" />
          <path d="M420 220C420 192.431 443.431 169 471 169H529C556.569 169 580 192.431 580 220V321C580 349.569 556.569 373 529 373H471C443.431 373 420 349.569 420 321V220Z" fill="#ffffff" fillOpacity="0.2" />
          <path d="M520 220L470 300H540L490 380" stroke="#ffffff" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M760 180H900C923.091 180 942 198.909 942 222V338C942 361.091 923.091 380 900 380H760C736.909 380 718 361.091 718 338V222C718 198.909 736.909 180 760 180Z" fill="#ffffff" fillOpacity="0.18" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Energy</text>
        </svg>
      );

    case 'Transportation':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tr1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#tr1)" />
          <path d="M260 260H940" stroke="#ffffff" strokeWidth="26" strokeLinecap="round" />
          <path d="M320 220L360 260L320 300" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M880 220L840 260L880 300" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M240 260C240 232.431 263.431 209 291 209H909C936.569 209 960 232.431 960 260V300H240V260Z" fill="#ffffff" fillOpacity="0.18" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Transportation</text>
        </svg>
      );

    case 'Hospitality':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hp1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#hp1)" />
          <rect x="260" y="220" width="240" height="200" rx="28" fill="#ffffff" fillOpacity="0.22" />
          <rect x="680" y="220" width="240" height="200" rx="28" fill="#ffffff" fillOpacity="0.22" />
          <path d="M320 260H460" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
          <path d="M320 320H460" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
          <path d="M740 260H860" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
          <path d="M740 320H860" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Hospitality</text>
        </svg>
      );

    case 'Construction':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="co1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#co1)" />
          <rect x="240" y="240" width="220" height="220" rx="28" fill="#ffffff" fillOpacity="0.18" />
          <rect x="520" y="180" width="240" height="280" rx="28" fill="#ffffff" fillOpacity="0.18" />
          <rect x="800" y="300" width="220" height="160" rx="28" fill="#ffffff" fillOpacity="0.18" />
          <path d="M400 260V340" stroke="#ffffff" strokeWidth="20" />
          <path d="M380 300H420" stroke="#ffffff" strokeWidth="20" />
          <path d="M580 220V360" stroke="#ffffff" strokeWidth="20" />
          <path d="M560 300H620" stroke="#ffffff" strokeWidth="20" />
          <path d="M880 340V400" stroke="#ffffff" strokeWidth="20" />
          <path d="M860 370H900" stroke="#ffffff" strokeWidth="20" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Construction</text>
        </svg>
      );

    case 'Retail':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rt1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#rt1)" />
          <rect x="260" y="220" width="680" height="220" rx="32" fill="#ffffff" fillOpacity="0.16" />
          <path d="M320 240H880" stroke="#ffffff" strokeWidth="18" />
          <path d="M320 320H880" stroke="#ffffff" strokeWidth="18" />
          <path d="M340 420H420" stroke="#ffffff" strokeWidth="16" />
          <path d="M480 420H560" stroke="#ffffff" strokeWidth="16" />
          <path d="M620 420H700" stroke="#ffffff" strokeWidth="16" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Retail</text>
        </svg>
      );

    case 'EdTech':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ed1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#ed1)" />
          <rect x="280" y="220" width="220" height="220" rx="28" fill="#ffffff" fillOpacity="0.18" />
          <path d="M540 260L660 220V340L540 300V260Z" fill="#ffffff" fillOpacity="0.22" />
          <path d="M760 260H900" stroke="#ffffff" strokeWidth="22" strokeLinecap="round" />
          <path d="M760 320H900" stroke="#ffffff" strokeWidth="22" strokeLinecap="round" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">EdTech</text>
        </svg>
      );

    case 'Media':
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="md1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <rect width="1200" height="560" rx="36" fill="url(#md1)" />
          <rect x="260" y="220" width="320" height="200" rx="32" fill="#ffffff" fillOpacity="0.18" />
          <path d="M620 260L760 310L620 360V260Z" fill="#ffffff" fillOpacity="0.8" />
          <path d="M820 220H920C946.421 220 968 241.579 968 268V292C968 318.421 946.421 340 920 340H820" fill="#ffffff" fillOpacity="0.16" />
          <text x="50%" y="470" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700">Media</text>
        </svg>
      );

    default:
      return (
        <svg className={commonClasses} viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1200" height="560" rx="36" fill="#0f172a" />
          <rect x="280" y="200" width="640" height="240" rx="32" fill="#ffffff" fillOpacity="0.08" />
          <text x="50%" y="320" textAnchor="middle" fill="#cbd5e1" fontFamily="Inter, sans-serif" fontSize="42" fontWeight="700">Company</text>
        </svg>
      );
  }
}

export default IndustryGraphic;
