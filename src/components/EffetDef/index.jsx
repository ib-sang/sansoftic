import React from "react";
import { useEffect } from "react";

const EffetDef = () => {

    const ratio = .1

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                console.log('visible')
                entry.target.classList.remove('reveal')
                // entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    useEffect(() =>{
        const targets = document.querySelectorAll('.reveal')
        targets.forEach(r =>{
            observer.observe(r)
        })
        
    }, [])

    return (
        <>
            
        </>
    )
}

export default EffetDef