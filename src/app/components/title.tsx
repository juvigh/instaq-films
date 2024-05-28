'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SliptType from 'split-type';
import * as React from 'react';
import { EasePack } from 'gsap/all';

export const Title = () => {
const containerRef = React.useRef<HTMLDivElement>(null);
    gsap.registerPlugin(useGSAP);
	useGSAP(() => {
        let splitText = SliptType.create('h1', { types: 'chars' });
		gsap.to(splitText.chars, {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            ease: EasePack.SlowMo,
            opacity: .9,
            duration: 1,
        });

	}, { scope: containerRef });

	return (
        <div ref={containerRef}>
		<h1 className='text-[112px] mt-16' id='title'>
			Instaq Films
		</h1>
        </div>
	);
};
