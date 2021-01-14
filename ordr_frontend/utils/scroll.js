export function scrollToTargetAdjusted(elementRef){
    var yOffset = -80;
    const y = elementRef.getBoundingClientRect().top + window.pageYOffset + yOffset;    
    
    window.scrollTo({
         top: y,
         behavior: "smooth"
    });
}
