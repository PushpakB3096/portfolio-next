import { notFound } from 'next/navigation'; // Import notFound for handling missing projects
import { projects, getProjectById } from '@/lib/projects';
import Link from 'next/link';

const ProjectDetail = ({ params }) => {
  const { id } = params; // Get the project ID from params

  const project = getProjectById(id);

  if (!project) {
    return notFound(); // Return a 404 page if the project is not found
  }

  return (
    <main className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-4">
          <Link href="/#projects" className="text-blue-600 hover:underline">
            <i className="fas fa-arrow-left"></i> Back to Projects
          </Link>
        </header>
        <div className="project-hero">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
          <div className="project-hero-content">
            <h1 className="text-4xl font-bold text-gray-900 mt-4">{project.title}</h1>
            <div className="project-meta">
              <span className="project-category text-gray-600">{project.category}</span>
              <span className="project-date text-gray-600">{project.date}</span>
            </div>
          </div>
        </div>
        <div className="project-content mt-8">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p>{project.overview}</p>
          
          <div className="project-tech mt-4">
            <h3 className="text-xl font-semibold">Technologies Used</h3>
            <ul className="tech-stack list-disc pl-5">
              {project.technologies.map((tech) => (
                <li key={tech} className="tech-item">{tech}</li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-4">Key Features</h3>
          <ul className="list-disc pl-5">
            {project.features.map((feature) => (
              <li key={feature.title}>
                <strong>{feature.title}:</strong> {feature.description}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-4">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((img, index) => (
              <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="w-full h-48 object-cover" />
            ))}
          </div>

          <div className="project-links mt-4">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-4">Source Code</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;