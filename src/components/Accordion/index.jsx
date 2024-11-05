"use client";

import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold m-2">Accordion</h2>
      <AccordionItem title="Accordion 1" content="Accordion 1 content" />
      <AccordionItem title="Accordion 2" content="Accordion 2 content" />
      <AccordionItem title="Accordion 3" content="Accordion 3 content" />
      <div className="flex flex-col">
        {/* Add more AccordionItem components as needed */}
      </div>
    </div>
  );
};

export default Accordion;