import RoadmapCard from '@components/commons/cards/RoadmapCard';
import RoadmapCardItem from '@components/commons/cards/RoadmapCardItem';
import { useEffect, useState } from 'react';
import api from '../api';

enum Stages {
  suggestions = 'suggestions',
  planned = 'planned',
  inDevelopment = 'in-development',
  readyToWatch = 'ready-to-watch',
}

type SuggestionType = {
  id: number;
  votes: number;
  title: string;
  hashtags: string[];
  stage: string;
};

function RoadmapPage() {
  const [suggestions] = useState<SuggestionType[]>(api);

  const filterItems = (type: string) => {
    return suggestions
      .filter((suggestion) => suggestion.stage === type)
      .map(({ id, votes, title, hashtags, stage }) => (
        <RoadmapCardItem
          key={id}
          votes={votes}
          title={title}
          hashtags={hashtags}
        />
      ));
  };
  return (
    <div>
      <div className="text-xl font-bold">Roadmap</div>
      <div className="grid grid-cols-4 gap-5  mt-5">
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
