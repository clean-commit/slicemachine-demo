import React from 'react';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import Container from '../../components/UI/Container';
import Title from '../../components/UI/Title';
import Text from '../../components/UI/Text';

/**
 * @typedef {import("@prismicio/client").Content.PerksSlice} PerksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PerksSlice>} PerksProps
 * @param { PerksProps }
 */
const Perks = ({ slice }) => (
  <section className='py-16 lg:py-32'>
    <Container>
      {slice.primary?.title && (
        <Title Tag='h2' variant='lg' className={`mx-auto mb-4 lg:mb-14`}>
          <PrismicText field={slice.primary?.title} />
        </Title>
      )}
      {slice.primary?.content && (
        <Text className={`mx-auto mt-8 max-w-3xl text-center lg:text-lg`}>
          <>
            <PrismicRichText field={slice.primary.content} />
          </>
        </Text>
      )}
      <div
        className={`mx-auto grid grid-cols-2 gap-x-4 gap-y-6 md:gap-16 lg:grid-cols-3 `}>
        {slice.items.length > 0 &&
          slice.items.map((col, i) => (
            <div className='flex' key={i}>
              <div
                className={`mx-auto w-72 text-left lg:w-[400px]  ${
                  i % 3 === 0
                    ? 'lg:ml-0 lg:mr-auto'
                    : i % 3 === 2
                    ? 'lg:mr-0 lg:ml-auto'
                    : 'lg:mx-auto'
                } ${i % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                {col.title && (
                  <Title Tag='h3' variant='sm' className='mt-2'>
                    {col.title}
                  </Title>
                )}
                {col.content && (
                  <Text className={`mt-2 max-w-2xl text-lg`}>
                    <PrismicRichText field={col.content} />
                  </Text>
                )}
              </div>
            </div>
          ))}
      </div>
    </Container>
  </section>
);

export default Perks;
