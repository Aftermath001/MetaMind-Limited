import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Project One", imageUrl: "/path/to/image1.jpg" },
    { id: 2, title: "Project Two", imageUrl: "/path/to/image2.jpg" },
    { id: 3, title: "Project Three", imageUrl: "/path/to/image3.jpg" },
    { id: 4, title: "Project Four", imageUrl: "/path/to/image4.jpg" },
    { id: 5, title: "Project Five", imageUrl: "/path/to/image4.jpg" },
    { id: 6, title: "Project Six", imageUrl: "/path/to/image4.jpg" },
    
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Recent Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id }
              className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
