import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from '../components/Homepage';

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to AIBuddies, your go-to resource for AI projects and learning paths.">
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
