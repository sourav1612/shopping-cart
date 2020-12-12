import React from "react";

const TourRow = (props) => {
  const { item } = props;

  console.log(item);

  return (
    <div class="tour-row">
      <span class="tour-item tour-date">{item.date}</span>
      <span class="tour-item tour-city">{item.city}</span>
      <span class="tour-item tour-arena">{item.arena}</span>
      <button type="button" class="tour-item tour-btn btn btn-primary">
        BUY TICKETS
      </button>
    </div>
  );
};

export default TourRow;
