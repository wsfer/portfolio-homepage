import socialMediaLinks from './socialMediaLinks';
import mainImage from '../assets/images/placeholder-1.jpg';

const aboutTemplate = `
  <section class="about" id="about">
    <div class="about__inner">
      <picture class="about__picture picture">
        <img class="picture__image" src=${mainImage} alt="Lorem ipsum" />
        <figcaption class="picture__caption">Lorem ipsum dolor sit</figcaption>
      </picture>
      <div class="about__content">
        <h2 class="about__title">About me</h2>
        <p class="about__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id atque dolore iure hic voluptas adipisci itaque. Laborum, tempore sit totam ab ducimus aperiam illo! Magni numquam sint eaque accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id atque dolore iure hic voluptas adipisci itaque. Laborum, tempore sit totam ab ducimus aperiam illo! Magni numquam sint eaque accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id atque dolore iure hic voluptas adipisci itaque. Laborum, tempore sit totam ab ducimus aperiam illo! Magni numquam sint eaque accusantium.
        </p>
        ${socialMediaLinks('about')}
      </div>
    </div>
  </section>
`;

const about = new Range().createContextualFragment(aboutTemplate);

export default about;
