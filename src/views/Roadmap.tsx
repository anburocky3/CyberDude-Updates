import RoadmapCard from '@components/commons/cards/RoadmapCard';
import RoadmapCardItem from '@components/commons/cards/RoadmapCardItem';
import { useEffect, useState } from 'react';
import api from '../api';
import { Suggestions } from 'types/Global';

function RoadmapPage() {
  const [suggestions] = useState<Suggestions[]>(api);

  const filterItems = (type: string) => {
    return suggestions
      .filter((suggestion) => suggestion.stage === type)
      .map(({ id, votes, title, hashtags, stage, createdAt }) => (
        <RoadmapCardItem
          key={id}
          votes={votes}
          title={title}
          hashtags={hashtags}
        />
      ));
  };
  return (
    <div className="p-3 sm:p-0">
      <div className="text-xl font-bold">Roadmap</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  mt-5">
        <RoadmapCard
          badgeColor="bg-primary"
          title="Suggestions"
          total={filterItems('suggestions').length}
        >
          {filterItems('suggestions')}
        </RoadmapCard>
        <RoadmapCard
          badgeColor="bg-blue-600"
          title="Planned"
          total={filterItems('planned').length}
        >
          {filterItems('planned')}
        </RoadmapCard>
        <RoadmapCard
          badgeColor="bg-indigo-600"
          title="In Development"
          total={filterItems('in-development').length}
        >
          {filterItems('in-development')}
        </RoadmapCard>
        <RoadmapCard
          badgeColor="bg-green-600"
          title="Ready to Watch"
          total={filterItems('ready-to-watch').length}
        >
          {filterItems('ready-to-watch')}
        </RoadmapCard>
      </div>
    </div>
  );
}

export default RoadmapPage;
