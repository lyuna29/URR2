import React from 'react';
import Banner from './Banner';
import BestProductsList from './BestProductsList';
import SubInfluencer from './SubInfluencer';
import BestInfluencerList from './BestInfluencerList';
import ReviewList from './ReviewList';

function Main() {
  return (
    <div className="p-5 max-w-[1200px] mx-auto flex flex-col gap-y-5">
      <Banner />
      <SubInfluencer/>
      <hr />
      <BestProductsList/>
      <hr />
      <BestInfluencerList/>
      <hr />
      <ReviewList/>
    </div>
  );
}

export default Main;
