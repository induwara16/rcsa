'use client';

import dynamic from 'next/dynamic';
import type { ImageProps } from 'next/image';
import Image from 'next/image';

import * as animationData from '@/assets/animation/blob-1.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimatedBlobProps extends React.HTMLProps<HTMLDivElement> {
  scale?: React.ComponentProps<'div'>['className'];
  img: ImageProps
}

export default function AnimatedBlob({ className, scale, img, ...props }: AnimatedBlobProps) {

  return (
    <div className={`${className} overflow-hidden`} {...props}>
      <div className={`w-full h-full ${scale}`}>
        <Lottie className='w-full h-full' loop autoplay animationData={animationData} />
        {/* eslint-disable-next-line jsx-a11y/alt-text*/}
        <Image {...img} />
      </div>
    </div>
  );
}