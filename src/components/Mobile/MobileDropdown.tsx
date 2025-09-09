import React, { useState } from "react";
import { useIntl } from "react-intl";
import MobileNavDropdown from "./MobileNavDropdown";

// inline triangle icon (avoids react-icons type issues)
const TriangleDown = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width={16}
    height={16}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

const MobileDropdown: React.FC = () => {
  const intl = useIntl();

  const [showAbout, setShowAbout] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const handleAboutSelect = () => {
    setShowAbout((prev) => !prev);
    setShowResources(false);
    setShowActivities(false);
  };

  const handleResourcesSelect = () => {
    setShowResources((prev) => !prev);
    setShowAbout(false);
    setShowActivities(false);
  };

  const handleVolunteerSelect = () => {
    setShowActivities((prev) => !prev);
    setShowAbout(false);
    setShowResources(false);
  };

  return (
    <div className="mobileDropdown">
      <div className="mobileNavLink" onClick={handleAboutSelect}>
        {intl.formatMessage({ id: "about" })}
        <TriangleDown style={{ marginLeft: 6 }} />
      </div>
      {showAbout && (
       <MobileNavDropdown
          section="about" // unique identifier for the dropdown
          onSelect={(i) => console.log("about selected", i)}
          options={[
          intl.formatMessage({ id: "ourStory" }),
          intl.formatMessage({ id: "ourTeam" }),
  ]}
        links={["/about-us/our-story", "/about-us/our-team"]}
/>

      )}

      <div className="mobileNavLink" onClick={handleResourcesSelect}>
        {intl.formatMessage({ id: "resources" })}
        <TriangleDown style={{ marginLeft: 6 }} />
      </div>
      {showResources && (
       <MobileNavDropdown
          section="about" // unique identifier for the dropdown
          onSelect={(i) => console.log("about selected", i)}
          options={[
           intl.formatMessage({ id: "ourStory" }),
           intl.formatMessage({ id: "ourTeam" }),
  ]}
            links={["/about-us/our-story", "/about-us/our-team"]}
/>

      )}

      <div className="mobileNavLink" onClick={handleVolunteerSelect}>
        {intl.formatMessage({ id: "getInvolved" })}
        <TriangleDown style={{ marginLeft: 6 }} />
      </div>
      {showActivities && (
       <MobileNavDropdown
          section="about" // unique identifier for the dropdown
          onSelect={(i) => console.log("about selected", i)}
          options={[
          intl.formatMessage({ id: "ourStory" }),
        intl.formatMessage({ id: "ourTeam" }),
        ]}
          links={["/about-us/our-story", "/about-us/our-team"]}
/>

      )}
    </div>
  );
};

export default MobileDropdown;

