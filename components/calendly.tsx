import Script from 'next/script';

interface CalendlyProps {
  eventName: string;
}

export default function Calendly({ eventName }: CalendlyProps) {
  const url = `https://calendly.com/gursh-dev/${eventName}`;

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </>
  );
}