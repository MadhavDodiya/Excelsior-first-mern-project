  document.addEventListener('DOMContentLoaded', function () {
            const carousel = new bootstrap.Carousel(document.getElementById('cardCarousel'), {
                interval: 3000,
                ride: 'carousel'
            });
        });

document.querySelectorAll('.circle').forEach(circle => {
      const percent = circle.getAttribute('data-percent');
      const radius = 45;
      const circumference = 2 * Math.PI * radius;
      const progress = circle.querySelector('.progress');

      progress.style.strokeDasharray = circumference;
      progress.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    });