import React from 'react';
import ExploreSuggestions from '../components/explore/ExploreSuggestions';
import ExploreGrid from '../components/explore/ExploreGrid';
import Layout from '../components/shared/Layout';

function ExplorePage() {
  return (
    <Layout>
      <ExploreSuggestions />
      <ExploreGrid />
    </Layout>
  );
}

export default ExplorePage;
