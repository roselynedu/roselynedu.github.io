const galleryWraps = document.querySelectorAll('.gallery_wrap');

galleryWraps.forEach((wrap) => {
  const scroll_container = wrap.querySelector('.gallery');
  const back_button = wrap.querySelector('.back_button');
  const next_button = wrap.querySelector('.next_button');
  const fullpage = wrap.querySelector('.fullpage');

  if (!scroll_container || !back_button || !next_button || !fullpage) {
    return;
  }

  const gallery_positionInfo = scroll_container.getBoundingClientRect();

  if (screen.width > 900) {
    scroll_container.addEventListener('wheel', (event) => {
      // event.preventDefault();
      // scroll_container.scrollLeft += event.deltaY;
    });

    next_button.addEventListener('click', () => {
      scroll_container.style.scrollBehavior = 'smooth';
      scroll_container.scrollLeft += gallery_positionInfo.width || scroll_container.clientWidth;
    });

    back_button.addEventListener('click', () => {
      scroll_container.style.scrollBehavior = 'smooth';
      scroll_container.scrollLeft -= gallery_positionInfo.width || scroll_container.clientWidth;
    });
  }

  wrap.querySelectorAll('.gallery_active img').forEach((image) => {
    image.addEventListener('click', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      fullpage.style.backgroundImage = `url(${image.src})`;
      fullpage.style.top = `${scrollY}px`;
      fullpage.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  fullpage.addEventListener('click', () => {
    fullpage.style.display = 'none';
    document.body.style.overflow = '';
  });
});
