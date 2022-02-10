import React from "react";

export const CustomCursor = () => {
    const cursorRef = React.useRef(null);

    React.useEffect(()=>{
        document.addEventListener('mousemove', (event)=>{
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientWidth / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        })
    }, [])
    return <div className="translate3d(0, 0, 0) app-cursor h-8 w-8 fixed border-white border   z-1000 rounded-full active:scale-50 hover:scale-75" ref={cursorRef}/>;
}; 