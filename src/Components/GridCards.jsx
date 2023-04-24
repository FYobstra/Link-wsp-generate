import React from "react";
import Card from "./Card";

export default function GridCards({ dataCard }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {dataCard.map((data, index) => (
        <Card
          key={index}
          title={data.title} 
          subtitle={data.subtitle}
          img={data.icon}
        />
      ))}
    </div>
  );
}
