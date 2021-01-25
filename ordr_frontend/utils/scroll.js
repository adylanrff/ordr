export function scrollToTargetAdjusted(elementRef){
    var yOffset = -60;
    const y = elementRef.getBoundingClientRect().top + window.pageYOffset + yOffset;    
    
    window.scrollTo({
         top: y,
         behavior: "smooth"
    });
}
