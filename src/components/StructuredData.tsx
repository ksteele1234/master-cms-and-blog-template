import React from 'react';

interface StructuredDataProps {
  schema: object;
  id?: string;
}

/**
 * Reusable component for injecting structured data
 */
const StructuredData: React.FC<StructuredDataProps> = ({ schema, id }) => {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};

export default StructuredData;