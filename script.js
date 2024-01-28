const productImages = document.querySelectorAll('.product-image');

productImages.forEach(image => {
    image.addEventListener('mousemove', e => {
        const { offsetX: x, offsetY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = image;
        const walk = 20; // Adjust the sensitivity
        
        const xWalk = (x / width) * (walk * 2) - walk;
        const yWalk = (y / height) * (walk * 2) - walk;

        image.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'translate(0, 0)';
    });
});
