import projectCard from './projectCard';
import placeholderImg from '../assets/images/placeholder-1.jpg';

const temporaryProduct = {
  name: 'Lorem ipsum',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum quis, magni libero, doloribus cupiditate, amet rem quos earum modi natus ut? Voluptate eos fugiat provident praesentium eius delectus saepe.',
  image: placeholderImg,
  source: '#',
  live: '#',
};

const projectsTemplate = `
    <section class="projects" id="projects">
      <div class="projects__inner">
        <h2 class="projects__title">My work</h2>
        <ul class="projects__list">
          <li class="projects__item">${projectCard(temporaryProduct)}</li>
          <li class="projects__item">${projectCard(temporaryProduct)}</li>
          <li class="projects__item">${projectCard(temporaryProduct)}</li>
          <li class="projects__item">${projectCard(temporaryProduct)}</li>
          <li class="projects__item">${projectCard(temporaryProduct)}</li>
        </ul>
      </div>
    </section>
`;

const projects = new Range().createContextualFragment(projectsTemplate);

export default projects;
