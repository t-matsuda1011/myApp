import gsap from 'gsap';
import { useEffect } from "react";

export default function MoveBox({ text }) {
    useEffect(() => {
        const firstPosition = {
            x: 0,
            y: 0,
        };

        gsap.set('.box', {
            x: firstPosition.x,
            y: firstPosition.y,
        });

        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
        })
        tl.to('.box', {
            duration: 1.5,
            x: 150,
            rotation: 360
        })
            .to('.box', {
                duration: 1.5,
                y: 150,
                rotation: 90
            })
            .to('.box', {
                duration: 1.5,
                x: -150,
                rotation: 360
            })
            .to('.box', {
                duration: 1.5,
                y: 0,
                rotation: 90
            })
            .to('.box', {
                duration: 1.5,
                x: 0,
                rotation: 360
            })
    }, []);

    return (
        <div className='box mx-auto mt-10 w-20 h-20'>
            <div className="flex items-center justify-center ease-in-out bg-green-900 text-white">{text}</div>
        </div>
    )
}