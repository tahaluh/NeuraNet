import React from "react";

interface FormattedParagraphsProps {
  texts: string[];
}

const FormattedParagraphs: React.FC<FormattedParagraphsProps> = ({ texts }) => {
  const formatText = (text: string) => {
    const parts = text.split(/(&blue\(.*?\)&|&red\(.*?\)&)/);
    return parts.map((part, index) => {
      if (part.startsWith("&blue")) {
        return (
          <span key={index} className="NeuraBlue">
            {parts[index].match(/&\w+\((.*?)\)&/)![1]}
          </span>
        );
      } else if (part.startsWith("&red")) {
        return (
          <span key={index} className="NeuraRed">
            {parts[index].match(/&\w+\((.*?)\)&/)![1]}
          </span>
        );
      } else {
        return part;
      }
    });
  };

  return (
    <div>
      {texts.map((text, index) => (
        <p key={index} className="text-lg RobotoMono mb-4 ml-2">
          {formatText(text)}
        </p>
      ))}
    </div>
  );
};

export default FormattedParagraphs;
