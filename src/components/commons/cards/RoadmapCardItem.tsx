type RoadmapCardItemProps = {
  votes: number;
  title: string;
  hashtags: string[];
};

const RoadmapCardItem = ({ votes, title, hashtags }: RoadmapCardItemProps) => {
  return (
    <div className="border p-3 mt-5 rounded space-y-3 cursor-pointer hover:bg-gray-50">
      <div className="flex items-center space-x-4">
        <div className="border p-3 rounded">{votes}</div>
        <div className="font-medium text-sm">{title}</div>
      </div>
      <p className="text-sm text-gray-400 space-x-2">
        {hashtags.map((hashtag) => (
          <a key={'#' + hashtag} href={`/hashtags/${hashtag}`}>
            #{hashtag}
          </a>
        ))}
      </p>
    </div>
  );
};

export default RoadmapCardItem;
