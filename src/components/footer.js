import socialMediaLinks from './socialMediaLinks';
import footerImage from '../assets/images/placeholder-2.jpg';

const footerTemplate = `
  <footer class="footer">
    <div class="footer__content">
      <h2 class="footer__title">Contact me</h2>
      <p class="footer__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nesciunt, eaque officiis quae laborum quasi laudantium possimus obcaecati beatae quisquam deleniti quam! Beatae quod esse voluptatibus neque ipsa rerum nulla!</p>
      <p class="footer__email">not.an.email@never.not</p>
      ${socialMediaLinks('footer')}
    </div>
    <img class="footer__image" src=${footerImage} alt="Placeholder" />
  </footer>`;

const footer = new Range().createContextualFragment(footerTemplate);

export default footer;
