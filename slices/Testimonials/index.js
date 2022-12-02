import React from 'react';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import Container from '../../components/UI/Container';
import Title from '../../components/UI/Title';
import Text from '../../components/UI/Text';

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param { TestimonialsProps }
 */
const Testimonials = ({ slice }) => {
  return (
    <section className='bg-black py-16 text-white lg:py-32'>
      <Container>
        <Title tag='h2' variant='lg' className={`mx-auto mb-4 lg:mb-14`}>
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : (
            ''
          )}
        </Title>
        {slice.primary.description ? (
          <Text>
            <PrismicRichText field={slice.primary.description} />
          </Text>
        ) : (
          ''
        )}
        {slice.items.length > 0 && (
          <div className='mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            {slice.items.map((item, i) => (
              <article
                key={i}
                className='mb-10 inline-flex flex-col gap-4 rounded-md bg-zinc-900 bg-opacity-50 p-6 leading-none '>
                <div className='flex  items-center gap-4'>
                  <div className='h-12 w-12 rounded-full bg-slate-400'></div>
                  <div>
                    <div className='text-lg font-bold leading-tight'>
                      <Title Tag='h3' variant='sm' className='mt-2'>
                        <PrismicText field={item.name} />
                        {/* {item.name} */}
                      </Title>
                    </div>
                  </div>
                </div>
                {item.content ? (
                  <Text className={`mt-2 max-w-2xl text-lg`}>
                    <PrismicRichText field={item.content} />
                  </Text>
                ) : (
                  ''
                )}
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Testimonials;
