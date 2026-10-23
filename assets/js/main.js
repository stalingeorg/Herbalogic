/**
 * Herbalogic Ashvana Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-navigation');

  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', function () {
      const isExpanded = primaryNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.hl-faq-question');
  faqQuestions.forEach(function (button) {
    button.addEventListener('click', function () {
      const faqItem = button.closest('.hl-faq-item');
      if (!faqItem) return;

      const isActive = faqItem.classList.contains('active');

      // Close other accordion items
      document.querySelectorAll('.hl-faq-item').forEach(function (item) {
        item.classList.remove('active');
        const ans = item.querySelector('.hl-faq-answer');
        if (ans) ans.style.display = 'none';
      });

      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.hl-faq-answer');
        if (answer) answer.style.display = 'block';
      }
    });
  });

  // Sticky Header Elevation on Scroll
  const header = document.querySelector('.hl-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 30) {
        header.style.boxShadow = '0 4px 20px rgba(74, 17, 36, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
