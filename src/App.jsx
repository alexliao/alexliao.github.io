import { Artwork, Orbit } from './Artwork.jsx'
import projects from './projects.json'

const avatar = '/avatar.webp'

const number = (index) => String(index + 1).padStart(2, '0')

function Arrow({ direction = 'up-right' }) {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {direction === 'up' ? <path d="M12 20V5m-6 6 6-6 6 6" /> : <path d="M6 18 18 6M7 6h11v11" />}
    </svg>
  )
}

function Project({ project, index }) {
  return (
    <li className="min-w-0">
      <article>
        <details className="project" id={project.id}>
          <summary>
            <div className="project-listing">
              <span className="project-icon" aria-hidden="true">
                {project.logo
                  ? <img src={project.logo} width="40" height="40" alt="" loading="lazy" />
                  : project.title.slice(0, 1)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="label project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
              </div>
              <span className="expand" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M4 10h12" /><path className="plus-stem" d="M10 4v12" />
                </svg>
              </span>
            </div>
            <div className={`cover cover--${project.id}`} aria-hidden="true">
              <span className="cover-index">FIG. {number(index)}</span>
              <Artwork id={project.id} />
            </div>
          </summary>
          <div className="project-detail">
            {project.screenshots.length > 0 && (
              <div className="mb-5">
                <p className="label detail-label">Screenshots</p>
                <ul className="screenshots" role="list">
                  {project.screenshots.map(({ src, alt, caption }) => (
                    <li key={src}>
                      <figure>
                        <a href={src} target="_blank" rel="noopener" aria-label={`Open ${caption} screenshot in a new tab`}>
                          <img src={src} alt={alt} loading="lazy" />
                        </a>
                        <figcaption>{caption}</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="label detail-label">Highlights</p>
            <ul className="list-disc space-y-1 pl-4">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <p className="label detail-label mt-4">Techniques</p>
            <ul className="flex flex-wrap gap-1.5" role="list">
              {project.techniques.map((technique) => <li className="technique" key={technique}>{technique}</li>)}
            </ul>
            {project.link && <a className="text-link" href={project.link.url}>{project.link.label} <Arrow /></a>}
          </div>
        </details>
      </article>
    </li>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to projects</a>
      <header className="shell header" id="top">
        <a className="identity" href="#top">
          <img className="avatar" src={avatar} width="30" height="30" alt="" />
          Alex Liao
        </a>
        <nav className="flex items-center gap-5 sm:gap-8" aria-label="Main navigation">
          <a className="nav-current" href="#work">Browse</a>
          <a className="text-link" href="https://github.com/alexliao">GitHub <Arrow /></a>
        </nav>
      </header>

      <main className="shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="label hero-label"><span /> Independent developer</p>
            <h1 id="hero-title">I’m Alex Liao. Explore my projects, from trading tools and mining infrastructure to apps for everyday life.</h1>
          </div>
          <Orbit avatar={avatar} projects={projects} />
        </section>

        <section id="work" aria-labelledby="work-title" tabIndex={-1}>
          <div className="work-heading">
            <h2 id="work-title">Selected work</h2>
            <span className="label work-count">{number(projects.length - 1)} <span>/</span> PROJECTS</span>
          </div>
          <ol className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:gap-y-12" role="list">
            {projects.map((project, index) => <Project key={project.id} project={project} index={index} />)}
          </ol>
        </section>
      </main>

      <footer className="shell footer flex-wrap gap-y-2 py-4">
        <span className="identity"><img className="avatar" src={avatar} width="25" height="25" alt="" /> Alex Liao</span>
        <a href="mailto:alexliaoyq@gmail.com">alexliaoyq@gmail.com</a>
        <a className="grid size-8 place-items-center" href="#top" aria-label="Back to top"><Arrow direction="up" /></a>
      </footer>
    </>
  )
}
