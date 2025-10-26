// src/components/Marketing/HowItWorksSection.jsx
import React from 'react';
import { DollarSignIcon, BookIcon, TrendingUpIcon } from '../../icons/icons';

const HowItWorksSection = () => {
    const steps = [
      { icon: DollarSignIcon, title: "The Monday Pledge", description: "Make a youth-focused donation (any amount) exclusively on a Monday." },
      { icon: BookIcon, title: "Choose Your Knowledge", description: "Select one of the five available premium book summaries as your personalized reward." },
      { icon: TrendingUpIcon, title: "Fuel Your Week", description: "Read the key insights, apply the knowledge, and drive real-world impact with your contribution." },
    ];
  
    return (
      <section id="how-it-works" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
          <p className="text-base sm:text-xl text-gray-600 mb-10 sm:mb-12">A simple, impactful cycle of giving and gaining.</p>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {steps.map((step, index) => (
              <div key={index} className="p-6 rounded-xl shadow-lg border-t-4 border-blue-500 bg-white transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-full inline-block">
                    <step.icon className="w-6 h-6"/>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default HowItWorksSection;