import Contact from "@/components/contact";

export default function FlightResults() {
  return (
    <>
      <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
        <h1 className="h1 font-extrabold text-white lg:text-4xl pb-6">
          Deem Flight Results Prototype
        </h1>
        <p className="text-white lg:text-lg pb-6">
          <span className="font-bold">Challenge</span>: Provide an experience
          that surfaces pertinent information in a simplistic, cohesive manner
          which minimizes any potential confusion and the intent of the
          information to direct the user to make the appropriate choices based
          on corporate and personal needs.
        </p>
        <p className="text-white lg:text-lg pb-6">
          <span className="font-bold">Other challenges</span>: Complex flight(s)
          where more than one connection, multiple carriers, or, flight tiers
          could be displayed within a single flight object.
        </p>
        <p className="text-white lg:text-lg pb-6">
          <span className="font-bold">Requirements</span>: Encompassing all
          existing features of the flight application, specifically surrounding
          fare tiers, policy, dynamic filtering, fare comparison.
        </p>
        <p className="text-white lg:text-lg pb-6">
          <span className="font-bold">Research</span>
          Reviewed Google Flights, American, Alaska, Southwest, Delta, and
          United airlines customer-facing websites. Additionally reviewed
          third-party consumer sites such as Expedia, Kayak, Kiwi and others to
          gain further insight into the user experience.
        </p>
        <h2 className="h2 font-extrabold text-white lg:text-2xl pb-6">
          Wireframes
        </h2>
        <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            height: "80vh",
          }}
          title="Figma Prototype for Deem Flight Results"
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FpI3hmMyRy36GTRTHXu9g9P%2FFlight-Redesign%3Fnode-id%3D0-1%26t%3DAqQ8WyFhGlA4Ae4g-1"
          allowFullScreen
        ></iframe>
        <h2 className="h2 font-extrabold text-white lg:text-2xl py-6">
          Component
        </h2>
        <p className="text-white lg:text-lg pb-6">
          Research cues are from Google, Delta and Alaska that inspired the
          final design.
        </p>
        <div className="flex column gap-20">
          <div className="flex flex-wrap content-start basis-1/3">
            <span className="font-bold italic">Filters UX</span> Add option for
            displaying fare tier, stops, flight times, and, other filter options
            that could be configured to be displayed above the flight objects.
            The chevron icons ({`< / >`}) are used for stepping of predefined
            values. The user also has the option to select the filter when
            hovering the filter title to expand the available options.
          </div>
          <div className="flex flex-wrap content-start basis-1/3">
            <span className="font-bold italic">Use Case</span> When a user has
            selected a stepping, all the flight objects would update to display
            the appropriate options. Let’s say the user has used Flight Times
            which is stepped (up or down), the flight objects that match that
            stepping would be displayed and others not matching would be hidden
            from view.
          </div>
          <div className="flex flex-wrap content-start basis-1/3">
            <span className="font-bold italic">Flight Object UX</span> In this
            view you see informational icons, textual color treatments such as a
            different arrival airport (orange) than originally searched for, out
            of policy (red ban icon), extended layover (warning icon) and
            related details would be indicated below.
          </div>
        </div>
        <div className="flex flex-wrap content-start py-6">
          <p className="text-white lg:text-lg pb-6">
            <span className="font-bold italic">Enhancements</span>
            <br />
            Add option for displaying fare tier “tab” upfront. Two styles were
            developed based on input from stakeholders:
          </p>
          <ol className="list-decimal pl-8">
            <li>
              To display the pertinent flight object info, and then displaying
              available flight tiers below
            </li>
            <li>
              Display flight tiers at the top by maintaining the existing
              experience
            </li>
            <li>
              Increase separation of the flight objects, while maintaining the
              ability to show more options to the user to reduce scrolling
              through multiple pages of results
            </li>
          </ol>
        </div>
      </div>
      <Contact />
    </>
  );
}
