export const weatherIcon = (weather: string) => {
  switch (weather) {
    case 'Wind':
      return (
        <svg
          className="w-16 h-16 fillStroke  hover:animate-pulse"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
      );
    case 'Pressure':
      return (
        <svg
          className="w-16 h-16 fillStroke  hover:animate-bounce"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
          <circle cx="12" cy="12" r="9" /> <circle cx="12" cy="12" r="1" />{' '}
          <line x1="13.41" y1="10.59" x2="16" y2="8" />{' '}
          <path d="M7 12a5 5 0 0 1 5 -5" />
        </svg>
      );
    case 'Temperature':
      return (
        <svg
          className="w-16 h-16 fillStroke  hover:animate-spin"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <circle cx="12" cy="12" r="5" />{' '}
          <line x1="12" y1="1" x2="12" y2="3" />{' '}
          <line x1="12" y1="21" x2="12" y2="23" />{' '}
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{' '}
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{' '}
          <line x1="1" y1="12" x2="3" y2="12" />{' '}
          <line x1="21" y1="12" x2="23" y2="12" />{' '}
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{' '}
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    case 'Humidity':
      return (
        <svg
          className="w-16 h-16 fillStroke  hover:animate-bounce"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case 'PM10' || 'PM2.5':
      return (
        <svg
          className="w-16 h-16 fillStroke  hover:animate-pulse"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
          <circle cx="12" cy="12" r="1" /> <circle cx="12" cy="12" r="5" />{' '}
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    default:
      return (
        <svg
          className="h-16 w-16 hover:animate-pulse"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};
