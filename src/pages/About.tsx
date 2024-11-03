import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';

export function About() {
  const team = [
    {
      name: 'Emma Thompson',
      role: 'Chief Architect',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=687',
    },
    {
      name: 'Michael Chen',
      role: 'Production Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=687',
    },
    {
      name: 'James Anderson',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=687',
    },
    {
      name: 'David Wilson',
      role: 'Engineering Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=687',
    },
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'Every decision we make considers its environmental impact, from material selection to production processes.',
    },
    {
      title: 'Innovation',
      description: 'We continuously push boundaries in prefabricated housing, incorporating the latest technologies and methods.',
    },
    {
      title: 'Quality',
      description: 'Uncompromising attention to detail and premium materials ensure lasting value in every home we build.',
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and maintaining clear processes throughout your journey with us.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mt-8 mx-8 rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2187"
          alt="ZENHUS Factory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                Redefining Modern Living
              </h1>
              <p className="text-xl text-white/90">
                We're on a mission to revolutionize housing through sustainable, 
                innovative prefabricated homes that combine quality craftsmanship 
                with modern design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-medium mb-16">Our Values</h2>
          <div className="grid grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl space-y-4">
                <h3 className="text-xl font-medium">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-medium mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2020, ZENHUS emerged from a vision to transform the housing 
                  industry through sustainable prefabrication. We saw an opportunity to 
                  combine cutting-edge technology with traditional craftsmanship to create 
                  homes that are both beautiful and environmentally responsible.
                </p>
                <p>
                  Today, we're proud to lead the industry in sustainable housing solutions, 
                  with a growing portfolio of successful projects across Europe. Our commitment 
                  to innovation and quality continues to drive us forward as we expand our 
                  reach and impact.
                </p>
              </div>
              <div className="mt-12">
                <a href="#" className="inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors group">
                  Read more about our journey
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2187"
                alt="Our Story"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-medium mb-16">Our Team</h2>
          <div className="grid grid-cols-4 gap-12">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}