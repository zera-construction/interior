import { useEffect, useRef } from "react";

const InstagramEmbed = ({ url }) => {
    const embedRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="rounded-3xl overflow-hidden shadow-lg bg-gray-900 border-2 
      hover:scale-105 transition duration-500 relative flex justify-center items-center h-[450px]"
            ref={embedRef}
        >
            {/* <div className="h-[100%] w-[100%] absolute"></div> */}
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: "#ffffff",
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    padding: 0,
                }}
            />
        </div>
    );
};

export default InstagramEmbed;
