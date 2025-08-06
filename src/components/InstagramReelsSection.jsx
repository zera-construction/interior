import InstagramEmbed from "./InstagramEmbed.jsx";

const InstagramReelsSection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <InstagramEmbed url="https://www.instagram.com/reel/DGni0lpMY_j/" />
        <InstagramEmbed url="https://www.instagram.com/reel/DL_5wmwzfuE/" />
        <InstagramEmbed url="https://www.instagram.com/reel/CvkD1hIp4bE/" />
      </div>
    </section>
  );
};

export default InstagramReelsSection;
