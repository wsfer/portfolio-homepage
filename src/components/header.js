const headerTemplate = `
  <header class="header">
    <nav class="header__nav">
      <ul class="header__links">
        <li class="header__list-item"><a class="header__link" href="#about">About</a></li>
        <li class="header__list-item"><a class="header__link" href="#projects">Projects</a></li>
        <li class="header__list-item"><a class="header__link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

const header = new Range().createContextualFragment(headerTemplate);

export default header;
