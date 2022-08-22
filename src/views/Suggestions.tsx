import Button from '@components/commons/buttons/Button';
import Card from '@components/commons/cards/Card';
import { ButtonSizes } from 'types/Global';
import SuggestionCard from '@components/commons/cards/SuggestionCard';
import api from '../api';
import { Suggestions } from 'types/Global';
import { useState } from 'react';
import IcRoundPlus from '@components/icons/IcRoundPlus';

function SuggestionPage() {
  const [suggestions] = useState<Suggestions[]>(api);

  const getSuggestions = () => {
    return suggestions.map(
      ({ id, votes, title, description, hashtags, stage, user, createdAt }) => (
        <SuggestionCard
          key={id}
          id={id}
          votes={votes}
          title={title}
          description={description}
          hashtags={hashtags}
          stage={stage}
          user={user}
          createdAt={createdAt}
        />
      )
    );
  };

  return (
    <div className="p-5 flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
      <div className="w-72">
        <Card
          title={'Statuses'}
          className="sm:p-8"
          children={
            <ul className="pt-3">
              <li className="flex items-center space-x-2 hover:bg-gray-50 cursor-pointer p-3">
                <div className="w-2 h-2 bg-primary rounded "></div>
                <span>Under Consideration</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-50 cursor-pointer p-3">
                <div className="w-2 h-2 bg-blue-500 rounded"></div>
                <span>Planned</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-50 cursor-pointer p-3">
                <div className="w-2 h-2 bg-indigo-500 rounded"></div>
                <span>In Development</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-50 cursor-pointer p-3">
                <div className="w-2 h-2 bg-green-500 rounded"></div>
                <span>Ready To Watch</span>
              </li>
            </ul>
          }
        />
      </div>
      <div className="flex-1 max-w-4xl md:p-5">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold">Suggestions</h4>
          <Button icon={<IcRoundPlus />} label={'Submit Idea'} />
        </div>
        <div>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            You can submit your suggestion here, and upvote/downvote on Ideas
            submitted by the community.
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <Button size={ButtonSizes.sm} variant="secondary" label="Trending" />
          <Button size={ButtonSizes.sm} variant="secondary" label="Category" />
        </div>
        {getSuggestions()}
      </div>
    </div>
  );
}

export default SuggestionPage;
