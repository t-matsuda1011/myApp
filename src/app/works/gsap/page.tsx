"use client";

import PageMessage from "@/components/page-message";
import MoveBox from "@/components/move-box";
import ZoomBox from "@/components/zoom-box";

export default function Page() {
    
    return (
        <div className='mt-10'>
            <PageMessage text="GSAP" />
            <div className="flex mx-auto mt-20 justify-center">
                <ZoomBox text="G" />
                <ZoomBox text="S" />
                <ZoomBox text="A" />
                <ZoomBox text="P" />
            </div>
            <MoveBox text="I am spinning!"/>
        </div>
    );
}