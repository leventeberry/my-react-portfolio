export default function Project() {
    const projects = [
        {
          id: 1,
          title: "Cryptoverse Blog",
          imgSrc: "/cryptoverse.png",
          deployedLink: "https://cryptoverse-blog-5710e4b7a1ef.herokuapp.com/home",
          githubLink: "https://github.com/hokage-216/cryptoverse-blog?tab=readme-ov-file"
        },
        {
          id: 2,
          title: "Urban Bassoon",
          imgSrc: "/jate.png",
          deployedLink: "https://github.com/hokage-216/urban-bassoon",
          githubLink: "https://github.com/hokage-216/urban-bassoon"
        },
        {
          id: 3,
          title: "U-To-Do",
          imgSrc: "/utodo.png",
          deployedLink: "https://u-to-do.onrender.com",
          githubLink: "https://github.com/hokage-216/U-To-Do"
        },
        {
          id: 4,
          title: "CryptoMania",
          imgSrc: "/cryptomania.png",
          deployedLink: "https://cryptomania-ateam.netlify.app/",
          githubLink: "https://github.com/hokage-216/the-A-team"
        },
        {
          id: 5,
          title: "Social-Lite",
          imgSrc: "https://img.youtube.com/vi/SILDTKqweOE/0.jpg",
          deployedLink: "https://github.com/hokage-216/social-lite",
          githubLink: "https://github.com/hokage-216/social-lite"
        }
      ];

    return (
      <div className="">
      <h3 className="">Projects</h3>
      <div className=''>
        <div className=''>
          {projects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="">
              <img src={project.imgSrc} alt={project.title} className="" />
              <div className="">
                <h5>{project.title}</h5>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  Deployed Application
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}