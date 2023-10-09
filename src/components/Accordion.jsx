import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  max-width: 400px;
  background-color: #fa6060;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  padding: 10px;
  color: white;
  cursor: pointer;
  user-select: none;
`;

const AccordionIcon = styled.div`
  transition: transform 0.3s ease;
`;

const AccordionContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 10px;
  color: white;
  
  ${({ isOpen }) =>
    isOpen &&
    `
    max-height: 500px;
  `}
`;

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={toggleAccordion}>
        <h3>{title}</h3>
        <AccordionIcon>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ color: 'white' }} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} style={{ color: 'white' }} />
          )}
        </AccordionIcon>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        {content}
      </AccordionContent>
    </AccordionWrapper>
  );
}

export default Accordion;
