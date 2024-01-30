import VideoPlayer from "../components/VideoPlayer";

const MyVideos = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Spanish Lesson</h1>
      <VideoPlayer videoUrl={"test3.mp4"} />
    </div>
  );
};

export default MyVideos;
