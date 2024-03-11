import VideoPlayer from "../video-player";

const VideoDisplay = ({videoUrl} : {videoUrl: string}) => {
  return (
    <div className="flex flex-col w-fit h-full">
      <div className="flex p-3 flex-col">
        <div className="flex flex-col w-full h-full">
          <div className="">
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay
