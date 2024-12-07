import { useState } from 'react';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import TableModal from './components/TableModal';
import { topicsData, TopicData, SchoolPopulationData } from './data/topicsData';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (topic: string) => {
    setSelectedTopic(topicsData[topic]);
    setIsModalOpen(true);
  };

  return (
    <div className="h-screen bg-landingpage bg-no-repeat bg-cover bg-center opacity-100 z-10">
      <div className="fixed inset-0 z-10 bg-cover bg-center bg-no-repeat bg-landing-page opacity-100" />

      <Navbar onButtonClick={handleButtonClick} />

      <main className="pt-20 px-4 max-w-7xl mx-auto z-40">
        <div className="text-center py-20 border-[1px] mt-28 border-slate-200 rounded-md shadow-lg shadow-slate-600 bg-white opacity-90">
          <h1 className="text-7xl font-bold text-blue-600 mb-6">
            Gender Disparities in Education
          </h1>
          <p className="text-2xl text-black max-w-2xl mx-auto">
            Explore the various aspects of gender disparities in education,
            including school population trends, dropout rates, teacher interactions,
            awareness campaigns, and the impact of child labour on education.
          </p>
        </div>
      </main>

      {selectedTopic && 'tableData' in selectedTopic ? (
        <TableModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedTopic as SchoolPopulationData}
        />
      ) : (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedTopic}
        />
      )}
    </div>
  );
}

export default App;
