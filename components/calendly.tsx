export default function Calendly() {
  return (
    <section className="relative lg:mb-0 text-left lg:text-left lg:w-no-max">
      {/* <!-- Calendly inline widget begin --> */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/keithnickas/introductions?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: 700 }}
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
