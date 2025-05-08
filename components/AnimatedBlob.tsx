'use client';

import dynamic from 'next/dynamic';
import * as animationData from '@/assets/animation/blob-1.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimatedBlobProps extends React.HTMLProps<HTMLDivElement> {
  scale?: React.ComponentProps<'div'>['className'];
}

export default function AnimatedBlob({ className, scale, ...props }: AnimatedBlobProps) {

  return (
    <div className={`${className} overflow-hidden`} {...props}>
      <div className={`w-full h-full ${scale}`}>
        <Lottie className='w-full h-full' loop autoplay animationData={animationData} />
      </div>
    </div>
  );
}