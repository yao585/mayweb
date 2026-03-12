(function() {
  // 移动端导航切换
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.top-sideber');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // 平滑滚动
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      window.location.hash = id;
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
      }
    }
  });
})();

// 下载按钮处理
(function() {
  function handleDownloadClick(e) {
    const card = e.currentTarget.closest('.download-card');
    if (!card) return;
    const titleEl = card.querySelector('h3.platform-name');
    const platform = (titleEl?.textContent || '').trim().toLowerCase();
    if (platform.includes('ios')) {
      // 简单的iOS提示
      alert('iOS 版本即将上线，敬请期待！');
      e.preventDefault();
    }
  }
  
  // 使用事件委托减少事件监听器数量
  document.addEventListener('click', (e) => {
    if (e.target.closest('.download-btn')) {
      handleDownloadClick(e);
    }
  });
})();

// 滚动显示动画优化
(function() {
  // 减少观察者数量，使用更高效的配置
  const io = new IntersectionObserver((entries) => {
    requestAnimationFrame(() => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          ent.target.classList.add('visible');
          io.unobserve(ent.target);
        }
      });
    });
  }, { 
    threshold: 0.1, 
    rootMargin: '0px 0px -100px 0px',
    passive: true
  });

  document.addEventListener('DOMContentLoaded', () => {
    const observerElements = document.querySelectorAll('.gameplay-card, .download-card, .timeline-item, .guide-card');
    observerElements.forEach(el => {
      el.classList.add('reveal-element');
      io.observe(el);
    });
  });
})();