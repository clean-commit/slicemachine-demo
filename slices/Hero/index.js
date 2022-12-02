import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import clsx from 'clsx';

import { Bounded } from '../../components/Bounded';
import { ButtonLink } from '../../components/ButtonLink';
import Container from '../../components/UI/Container';
import Text from '../../components/UI/Text';
import Title from '../../components/UI/Title';

/**
 * @typedef {import('../../types.generated').HeroSlice} HeroSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 */

/**
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  const isCentered = slice.primary.variant === 'centered';
  return (
    <Bounded
      as='section'
      className={clsx(
        'relative  py-12 pt-28 dark:bg-black dark:text-white lg:py-24 ',
        {
          'lg:pt-28': slice.primary?.headline,
        },
        {
          'lg:pt-44': !slice.primary?.headline,
        },
        {
          'flex justify-center py-20 text-center': isCentered,
        },
      )}>
      <PrismicNextImage
        field={slice.primary.backgroundImage}
        layout='fill'
        className='pointer-events-none select-none object-cover'
      />
      <Container className={'relative'}>
        {prismicH.isFilled.richText(slice.primary.headline) && (
          <div className='mb-6 inline-block rounded-full bg-gray-200 px-5 py-3 text-sm font-semibold'>
            <PrismicText field={slice.primary.headline} />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.title) && (
          <Title
            tag='h1'
            variant='xl'
            className={clsx('mb-4 max-w-6xl', {
              'mx-auto': isCentered,
            })}>
            <PrismicText field={slice.primary.title} />
          </Title>
        )}

        <Text
          className={clsx('mt-6 max-w-4xl text-2xl leading-normal', {
            'mx-auto': isCentered,
          })}>
          <PrismicRichText field={slice.primary.text} />
        </Text>

        {slice.items.length > 0 && (
          <div
            className={clsx('mt-10 flex flex-wrap items-center gap-2', {
              'justify-center': isCentered,
            })}>
            {slice.items.map(
              (item) =>
                prismicH.isFilled.link(item.buttonLink) && (
                  <ButtonLink
                    key={item.buttonText}
                    field={item.buttonLink}
                    type={
                      item.buttonStyle === 'Filled' ? 'filled' : 'outlined'
                    }>
                    {item.buttonText}
                  </ButtonLink>
                ),
            )}
          </div>
        )}
      </Container>
    </Bounded>
  );
};

export default Hero;
