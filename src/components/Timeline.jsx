import React from 'react';

const TimelineItem = ({ year, title, subtitle, description, isLeft }) => (
  <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full items-center justify-center gap-4`}>
    <div className={`w-[45%] ${isLeft ? 'text-right' : 'text-left'}`}>
      <div className="relative bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <span className={`absolute top-6 text-xl text-purple-500 -z-10 ${
          isLeft ? '-right-14 translate-x-full' : '-left-14 -translate-x-full'
        }`}>
          {year}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-purple-400 font-medium mb-2">{subtitle}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>

    <div className="relative w-[30px] h-[30px] flex items-center justify-center">
      <div className="w-5 h-5 rounded-full border-4 border-white shadow-md bg-gradient-to-r from-purple-500 to-blue-500 z-10"></div>
    </div>

    <div className="w-[45%]"></div>
  </div>
);

const Timeline = () => {
  const timelineData = [
    {
      year: 'September 2023 - May 2025',
      title: 'Master of Science in Computer Science',
      subtitle: 'Courant Institute of Mathematical Sciences, New York University',
      description: 'GPA: 3.76/4.0',
    },
    {
      year: 'August 2022 – August 2023',
      title: 'Software Development Engineer',
      subtitle: 'AeroLeads',
      description: 'Developed an email verification service and campaign system handling 10,000+ emails daily with 49% accuracy. Revamped the front-end and payment systems, leading to 12% increase in user retention and 27% increase in subscriptions.',
    },
    {
      year: 'April 2022 – August 2022',
      title: 'Research Assistant',
      subtitle: 'Jawaharlal Nehru University, New Delhi',
      description: 'Designed and implemented a novel deep learning technique using PyTorch for enhanced object detection from text and image inputs. Achieved 1.2% accuracy improvement on unseen objects, setting a new benchmark in the field.',
    },
    {
      year: 'August 2021 – March 2022',
      title: 'Research Assistant',
      subtitle: 'International Institute of Information Technology, Hyderabad',
      description: 'Implemented advanced masking techniques on the NTU-60 dataset to enable cross-dataset action recognition. Successfully achieved unified model performance with only 0.2% performance impact across different skeleton structures.',
    },
    {
      year: 'August 2017 - June 2021',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      subtitle: 'Guru Gobind Singh Indraprastha University, New Delhi',
      description: 'GPA: 9.05/10',
    },
    {
      year: 'April 2020 – July 2021',
      title: 'Research Intern',
      subtitle: 'IIIT Hyderabad',
      description: 'Led research in Zero-Shot Learning (ZSL) and Generalized Zero Shot Learning (GZSL) for skeleton action recognition. Set new benchmarks with 4.34% increase in ZSL accuracy and 2.93% improvement in GZSL accuracy.',
    },
    {
      year: 'May 2019 - October 2019',
      title: 'Celestini Project Intern',
      subtitle: 'The Marconi Society',
      description: 'Developed an Android application for air quality estimation using computer vision and ML with 87.2% accuracy. Implemented cloud infrastructure using Firebase and Django, while integrating Federated Learning for privacy-preserving machine learning.',
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Experience & Education
          </span>
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-[1px] w-0.5 h-full">
            <div className="h-full bg-gradient-to-b from-purple-200 via-purple-400 to-blue-400"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
