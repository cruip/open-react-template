export default function Calendly() {
  return (
    <section className="lg:mb-0 text-center lg:text-left lg:w-no-max">
      {/* <!-- Calendly inline widget begin --> */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/keithnickas/introductions?hide_gdpr_banner=1"
        style={{ minWidth: "320px", width: "76.45vw",  maxWidth: "90vw", height: 700 }}
      ></div>
      {/* <!-- Calendly inline widget end --> */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </section>
  );
}
