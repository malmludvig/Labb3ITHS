import React from 'react';
import { createTemplatePets } from './CreateTemplatePets';

const TemplateLink = () => {
  const handleClick = () => {
    createTemplatePets();
    window.location.reload();
    alert("Template dogs created");
    
  };

  return (
    <div>
      <a href="#" onClick={handleClick}>
        Create Template Pets
      </a>
    </div>
  );
};

export default TemplateLink;