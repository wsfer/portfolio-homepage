import socialMediaLinks from './socialMediaLinks';
import footerImage from '../assets/images/placeholder-2.jpg';

const footerTemplate = `
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__content">
        <h2 class="footer__title">Contact me</h2>
        <p class="footer__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nesciunt, eaque officiis quae laborum quasi laudantium possimus obcaecati beatae quisquam deleniti quam! Beatae quod esse voluptatibus neque ipsa rerum nulla!</p>
        <p class="footer__email">
          <svg class="footer__icon" viewBox="0 0 24 24"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
          not.an.email@never.not
        </p>
        ${socialMediaLinks('footer')}
      </div>
      <img class="footer__image" src=${footerImage} alt="Placeholder" />
    </div>
  </footer>`;

const footer = new Range().createContextualFragment(footerTemplate);

export default footer;
