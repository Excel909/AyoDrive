const movement = document.querySelector('.movement');
    const prevLeft = document.getElementById('prev-left');
    const prevRight = document.getElementById('prev-right');
    let startX;
    let scrollLeft;
    let isDown = false;

    // Scroll left
    prevLeft.addEventListener('click', function() {
      movement.scrollBy({
        left: -200, // Adjust scroll distance as needed
        behavior: 'smooth'
      });
    });

    // Scroll right
    prevRight.addEventListener('click', function() {
      movement.scrollBy({
        left: 200, // Adjust scroll distance as needed
        behavior: 'smooth'
      });
    });

    // Touch events
    movement.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - movement.offsetLeft;
      scrollLeft = movement.scrollLeft;
    });

    movement.addEventListener('touchend', () => {
      isDown = false;
    });

    movement.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - movement.offsetLeft;
      const walk = (x - startX) * 3; // Scroll sensitivity
      movement.scrollLeft = scrollLeft - walk;
    });