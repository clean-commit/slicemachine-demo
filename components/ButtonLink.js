import { PrismicLink } from '@prismicio/react';

export const ButtonLink = ({ type = 'filled', ...props }) => {
  let buttonStyle =
    'group inline-block font-bold text-dark-500 dark:text-white py-4 px-7';
  switch (type) {
    case 'arrow':
      decoration = 'arrow';
      buttonStyle = `${buttonStyle} `;
      break;
    case 'filled':
      buttonStyle = `${buttonStyle} bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors`;
      break;
    case 'outlined':
      buttonStyle = `${buttonStyle} border-blue-800 border text-center hover:bg-blue-800 hover:text-white  transition-colors`;
      break;
    case 'dot':
      decoration = 'dot';
      buttonStyle = `${buttonStyle} `;
      break;
    default:
      buttonStyle = `${buttonStyle} link dark:link-dark`;
  }
  return <PrismicLink className={buttonStyle} {...props} />;
};
