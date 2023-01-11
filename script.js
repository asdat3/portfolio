function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/

    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/

    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/

    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "KONTAKT"))), /*#__PURE__*/

    React.createElement(SocialLinks, null))));
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Denny Quentin ", /*#__PURE__*/

    React.createElement("strong", null, "Schilling")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Websites"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Automatisierung"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " code.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "kontakt")))));
};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Wer bin ich?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Software Entwickler, IT-Engineer,..."), /*#__PURE__*/
    React.createElement("p", null, "Ich bin ein erfahrener Software-Entwickler aus Rostock. Ich habe an vielen Projekten gearbeitet und habe ein breites Spektrum an Kenntnissen in meinem Fachgebiet. Ich habe mich auf die Entwicklung von Anwendungen spezialisiert und habe Erfahrung in verschiedenen Programmiersprachen und Entwicklungsmethoden. Ich bin stets bestrebt, mein Wissen und meine Fähigkeiten zu verbessern und auf dem neuesten Stand zu bleiben und mag es große Herrausforderungen anzugehen."), /*#__PURE__*/
    React.createElement("p", null, "")), /*#__PURE__*/

    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Was mach ich so?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Hobby"), /*#__PURE__*/
    React.createElement("p", null, "Ich habe schon sehr früh angefangen zu programmieren, eigentlich weil ich viel zu gerne Computer spiele gespielt habe aber inzwischen immer mehr um mir ein bisschen was dazu zu verdienen."), /*#__PURE__*/
    React.createElement("p", null, "Erfahrung: Websites (auch mit großem Backend), Automatisierung (graphical), Webscraping, Datenbanken, Design,...")), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Arbeit"), /*#__PURE__*/
    React.createElement("p", null, "Durch frühe einblicke in IT-Engineering durch einen Teilzeitjob, hatte ich sehr viel Kontakt mit professionellen Informatikern und somit gute Erfahrung gesammelt"), /*#__PURE__*/

    React.createElement("p", null, "Mein Job zur Zeit ist es Konfigurierungen von Netzwerkgeräten (Cisco Router, Switche, CMTS,...) zu automatisieren und Netzwerkpläne automatisiert zu analysieren, doch ich habe schon in viele Abteile reingeschaut und überall sehr viel mitgenommen an Erfahrung."))))));
};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Verkauft ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Live Link ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Meine Arbeit"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Eine kleine Liste meiner Projekte welche ich in den letzten Jahren als ", /*#__PURE__*/
    React.createElement("u", null, "nennenswürdig"), " beschreiben könnte. Fast alle dieser sind auf Auftrag entstanden.","")), /*#__PURE__*/

    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/



    React.createElement(Project, {
      title: "Langeweile",
      img: 'https://cdn.discordapp.com/attachments/968238197773570088/1062641122884718642/copplanet_demo.png',
      tech: "js css",
      link: "https://copplanet.xyz/",
      repo: "#" }, /*#__PURE__*/
    React.createElement("small", null, "JS, Python3 Flask, MySQL, CSS"), /*#__PURE__*/
    React.createElement("p", null, "full-stack website welche ich erstellte um sie genau hier als Beispiel zu nennen.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Website + Dashboard Proxies",
      img: 'https://cdn.discordapp.com/attachments/968238197773570088/1062650116651094026/cheapproxies_screen.png',
      tech: "js node css",
      link: "https://proxies.asdatindustries.com/",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, "JS, Python3 Flask, MySQL, CSS"), /*#__PURE__*/
    React.createElement("p", null, "Auf Auftrag: Proxy verkauf mit Bezahlsystem, Login system (Google, Discord Oauth)...")), /*#__PURE__*/

    React.createElement(Project, {
      title: "CipherBots (whole Software)",
      img: 'https://cdn.discordapp.com/attachments/968238197773570088/1062650116315553792/cipher_screen.png',
      tech: "",
      link: "https://cipher-bots.com/",
      repo: "#" }, /*#__PURE__*/
    React.createElement("small", null, "python3 Webscraping Bot"), /*#__PURE__*/
    React.createElement("p", null, "Ein Bot welcher automatisch Twitter Accounts erstellt und nutzt")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Philwooddesign",
      img: 'https://cdn.discordapp.com/attachments/968238197773570088/1062650792072445952/philwood_screen.png',
      tech: "js node css",
      link: "https://philwooddesign.de/",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, "JS, Python3 Flask, JSON, CSS"), /*#__PURE__*/
    React.createElement("p", null, "Auf Auftrag: Homepage zum verkauf von Epozidharztischen und weiterem")), /*#__PURE__*/

    React.createElement(Project, {
      title: "KyuMonitors",
      img: 'https://cdn.discordapp.com/attachments/968238197773570088/1062652292391776316/kyumon_screen.png',
      tech: "js react css",
      link: "https://kyumonitors.de/",
      repo: "#" },

    React.createElement("small", null, "JS, Python3 Flask, JSON, CSS"), /*#__PURE__*/
    React.createElement("p", null, "Automatisierte Abfrage zur verfügbarkeit von seltenen Schuhen"))))));
};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Kontakt ", /*#__PURE__*/
    React.createElement("br", null), ""), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Email: quentin.schilling@gmx.de", React.createElement("br", null), "Discord: kyudev#7217", React.createElement("br", null), "Tel: 017670421388")),


    React.createElement(SocialLinks, null)), /*#__PURE__*/

    // React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    // React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    // React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    // React.createElement("textarea", { placeholder: "Nachricht", type: "text", name: "message" }), /*#__PURE__*/
    // React.createElement("input", { className: "button", id: "submit", value: "Senden", type: "submit" })))));
    )));
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Quentin Schilling."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));
};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/CipherBots",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/asdat3",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/qschilling2",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's IG Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-instagram" }))));
};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
}}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));