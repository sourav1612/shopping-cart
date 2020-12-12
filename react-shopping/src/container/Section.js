import React from "react";
import TourRow from "./TourRow";
const Section = () => {
  const data = [
    {
      date: "JUL 16",
      city: "Detroit,MI",
      arena: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      city: "Toronto, ON",
      arena: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      city: "Bristow, VA",
      arena: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      city: "PHOENIX, AZ",
      arena: "AK-CHIN PAVILION",
    },
    {
      date: "Aug 2",
      city: "Las Vegas",
      arena: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "Concord, CA",
      arena: "CONCORD PAVILION",
    },
  ];

  return (
    <section class="content-section container">
      <h2 class="section-header">TOURS</h2>
      <div>
        {data.map((item) => {
          return <TourRow item={item} />;
        })}
      </div>
    </section>
  );
};

export default Section;
 