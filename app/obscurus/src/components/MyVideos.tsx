import VideoPlayer from "../app/submit/video-player";



interface MyVideosProps {
  videoUrl: string | null;
}

const MyVideos: React.FC<MyVideosProps> = ({ videoUrl }) => {
  return (
    <div className="p-10">
      <h1 className="text-lg font-semibold ">Spanish Lesson</h1>
      <div className="text-md text-blue-400">January 30, 2024</div>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default MyVideos;
