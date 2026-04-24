import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string | string[];
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.isArray(props.image) ? props.image : [props.image];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
        style={{ position: "relative", display: "inline-block", width: "100%", height: "100%" }}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={props.alt}
            style={{
              position: index === 0 ? "relative" : "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
          />
        ))}

        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
