import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";


const Root = styled(motion.div)`
  width: 454px;
  height: 618px;
  background-image: url("https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png");
`;

const Image = styled(motion.img)`
  margin: 100px 0px 0px 150px;
`;

const images = [
  "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
];

export default function ImagesLogin() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count === 5) count = 0;
      setImage(count);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
        <Root>
          {image === 1 && (
            <Image
              src={images[image]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
          {image === 2 && (
            <Image
              src={images[image]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
          {image === 3 && (
            <Image
              src={images[image]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
          {image === 4 && (
            <Image
              src={images[image]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
          {image === 0 && (
            <Image
              src={images[image]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
        </Root>
    </AnimatePresence>
  );
}
