// Variable to store the timeout for detecting scroll stop
let scrollTimeout;

// Function to handle scroll events
function handleScroll() {
    // Clear the previous timeout
    clearTimeout(scrollTimeout);

    // Set a timeout to detect scroll stop
    scrollTimeout = setTimeout(function () {
        // Get all elements with the class "scroll-anchor"
        const scrollAnchors = document.querySelectorAll('.scroll-anchor');

        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Variable to store the closest element
        let closestElement = null;
        let closestDistance = Infinity;

        // Loop through each .scroll-anchor element
        scrollAnchors.forEach(function (element) {
        // Calculate the distance between the element's top and the viewport top
            const distance = Math.abs(element.getBoundingClientRect().top);

            // Update the closest element if the current element is closer
            if (distance < closestDistance) {
                closestDistance = distance;
                closestElement = element;
            }
        });

        // Scroll to the closest element if one is found
        //if (closestElement && closestDistance < 50) {
         //   const yOffset = -50; 
        //    const y = closestElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
         //   window.scrollTo({top: y, behavior: 'smooth'});
        //}
        
    }, 50); // Adjust the timeout duration as needed
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);