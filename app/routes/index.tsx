const menu = [
  {
    id: 1,
    link: 'http://www.linkedin.com/in/rennanprysthon',
    label: 'Linkedin'
  },
  {
    id: 2,
    link: 'http://www.github.com/rennanprysthon',
    label: 'Github'
  },
  {
    id: 3,
    link: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
    label: 'Twitter'
  },
  {
    id: 4,
    link: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
    label: 'Facebok'
  },
  {
    id: 5,
    link: 'http://www.instagram.com/rennanprysthon',
    label: 'Instagram'
  },
  {
    id: 6,
    link: 'https://rennan-portfolio.netlify.app/',
    label: 'Site pessoal <br />(Não finalizado, provavalmente abandonado)'
  },
]

export default function Index() {
  return (
    <main>
      <div className="container">
        <header className="header">
          <h1>
            Rennan Prysthon Links
          </h1>
          <a target="_blank" rel="noreferrer" href="http://www.github.com/rennanprysthon" >
            <img src="http://www.github.com/rennanprysthon.png" alt="Myself"/>
          </a>
        </header>

        <ul className="links-container">
          {menu.map(link => (
            <li className="link-item" key={link.id}>
              <a target="_blank" rel="noreferrer" href={link.link}>
                <span dangerouslySetInnerHTML={{
                  __html: link.label
                }}></span>
              </a>
            </li>
          ))}
        </ul>

        <footer>
          Eu mesmo que fiz, é nois        
        </footer>
      </div>
    </main>
  );

}
