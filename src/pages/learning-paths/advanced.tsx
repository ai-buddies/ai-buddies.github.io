import React from "react";
import Layout from "@theme/Layout";
import Mermaid from "@theme/Mermaid";
import Header from "../../ui/Header";

const AdvancedLearningPath: React.FC = () => {
  return (
    <Layout
      title="Advanced Learning Path"
      description="Master AI with our advanced learning path covering cutting-edge topics."
    >
      <div className="container p-6 dark:bg-gray-900 min-h-screen">
        <Header title="Advanced Learning Path" />
        <p className="mx-auto text-base sm:text-xl leading-relaxed animate-fade-in delay-150 my-4 text-center">
          Ready to master advanced AI concepts and technologies? This learning
          path covers topics like deep learning, reinforcement learning, and
          generative AI to help you become an AI expert.
        </p>

        <div className="flex justify-center my-6 animate-fade-in delay-300">
          <Mermaid
            value={`
            %% Advanced Learning Path Graph
            graph TD;
            style A stroke:#333,stroke-width:2px;
            style B stroke:#333,stroke-width:2px;
            style C stroke:#333,stroke-width:2px;
            style D stroke:#333,stroke-width:2px;
            style E stroke:#333,stroke-width:2px;
            style F stroke:#333,stroke-width:2px;
            style G stroke:#333,stroke-width:2px;

            A[📘 Review of Intermediate Concepts] --> B[🧠 Advanced Neural Networks & Deep Learning];
            B --> C[🔍 Reinforcement Learning];
            C --> D[🔗 Generative Adversarial Networks];
            D --> E[💬 Advanced Natural Language Processing];
            E --> F[🎥 Computer Vision with Deep Learning];
            F --> G[🚀 AI Research & Real-World Applications];

            %% Additional styling for better readability
            classDef default stroke:#000,stroke-width:1px;
            linkStyle default stroke:#007acc,stroke-width:2px,fill:none;
            `}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 1: Review of Intermediate Concepts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Review the basic AI concepts you learned in the beginner path to
              prepare for more advanced topics in this learning path.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 2: Advanced Neural Networks & Deep Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Dive deeper into neural networks and deep learning to understand
              how to build and train complex models for AI applications.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 3: Reinforcement Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn about reinforcement learning techniques to train agents that
              can make decisions and take actions in dynamic environments.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 4: Generative Adversarial Networks (GANs)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore GANs, a type of generative model that can create new data
              samples by learning from existing data distributions.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 5: Advanced Natural Language Processing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Dive deeper into natural language processing techniques like
              transformers and BERT to understand and generate human language.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 6: Computer Vision with Deep Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn how to build computer vision models using deep learning
              techniques like CNNs to analyze and understand visual data.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 7: AI Research & Real-World Applications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore cutting-edge AI research topics and real-world
              applications to understand the latest trends and developments in
              the field.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdvancedLearningPath;