import gsap from "gsap";

export default function ZoomBox({ text }) {
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { color: "#de7c6b", textShadow: "1px 1px 3px #000", scale: 1.2 });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { color: "#000", textShadow: "none", scale: 1});
    };

    return (
        <div className="app">
            <div className="hoverBox text-9xl" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {text}
            </div>
        </div>
    );
}