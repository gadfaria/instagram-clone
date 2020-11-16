import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import { Close, LeftArrow, RightArrow } from "../utils/icons";
import defaultProfile from "../assets/default_profile.jpg";
import { IMG_URL } from "../utils/const";

const BackdropDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #262626;
  z-index: 1;
  ${FlexCenter}
`;

const ModalDiv = styled(motion.div)`
  height: 100vh;
  width: 500px;
  background: #262626;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 5px 10px 10px;
`;

const Profile = styled.div`
  ${FlexCenter}
`;

const ProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border: 1px solid #bebebe;
  border-radius: 32px;
`;

const ProfileNickname = styled.span`
  margin-left: 14px;
  font-weight: 500;
  font-size: 14px;
  color: #fdfdfd;
`;

const Image = styled.img`
  width: 500px;
`;

const Button = styled(motion.div)`
  cursor: pointer;
  margin: 0px 10px;
`;

const Bar = styled(motion.div)`
  background-color: #868686;
  height: 5px;
  margin: 10px 0px;
  z-index: 9;
`;

const ProgressBar = styled(motion.div)`
  background-color: #fafafa;
  height: 5px;
  margin: 10px 0px;
  z-index: 10;
`;

const BackdropAnimation = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const ModalAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

// const image = [
//   {
//     url:
//       "https://instagram.fppy5-1.fna.fbcdn.net/v/t51.2885-15/e35/120861467_127251072171742_751241220667977987_n.jpg?_nc_ht=instagram.fppy5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=NmKB1v4zUbsAX_Oz4Sb&tp=18&oh=0f600a74a2026e04ed16d154b0682627&oe=5FAF4826",
//   },
//   {
//     url:
//       "https://instagram.fppy5-1.fna.fbcdn.net/v/t51.2885-15/e35/121092662_847710366011951_5322055496833457004_n.jpg?_nc_ht=instagram.fppy5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=mxqCUs-7x-8AX8PfnYw&tp=18&oh=94b225f1f63ea8f19aa435653d16f6ea&oe=5FAF78E6",
//   },
//   {
//     url:
//       "https://instagram.fppy5-1.fna.fbcdn.net/v/t51.2885-15/e35/120861467_127251072171742_751241220667977987_n.jpg?_nc_ht=instagram.fppy5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=NmKB1v4zUbsAX_Oz4Sb&tp=18&oh=0f600a74a2026e04ed16d154b0682627&oe=5FAF4826",
//   },
//   {
//     url:
//       "https://instagram.fppy5-1.fna.fbcdn.net/v/t51.2885-15/e35/121092662_847710366011951_5322055496833457004_n.jpg?_nc_ht=instagram.fppy5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=mxqCUs-7x-8AX8PfnYw&tp=18&oh=94b225f1f63ea8f19aa435653d16f6ea&oe=5FAF78E6",
//   },
// ];

export default function Modal(props) {
  const { user } = props;
  const [position, setPosition] = useState(0);
  const [images, setImage] = useState(user.Stories);

  return (
    <AnimatePresence>
      {props.showModal && (
        <BackdropDiv
          onClick={() => {
            console.log("aa");
          }}
          variants={BackdropAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {position > 0 ? (
            <Button
              variants={ModalAnimation}
              onClick={() => {
                setPosition(position - 1);
              }}
            >
              <LeftArrow />
            </Button>
          ) : (
            <Button>
              <div style={{ width: "24px", height: "24px" }} />
            </Button>
          )}
          <ModalDiv variants={ModalAnimation}>
            <Header>
              <Profile>
                <ProfilePicture
                  draggable="false"
                  src={
                    user.img_profile
                      ? `${IMG_URL}/${user.img_profile}.jpg`
                      : defaultProfile
                  }
                />
                <ProfileNickname>{user.name}</ProfileNickname>
              </Profile>
              <Button
                onClick={() => {
                  props.closeModal();
                }}
              >
                <Close />
              </Button>
            </Header>

            <Bar>
              <ProgressBar
                animate={{ width: ((position + 1) / images.length) * 100 + "%" }}
                transition={{ duration: 0.2 }}
              ></ProgressBar>
            </Bar>

            <Image src={`${IMG_URL}/${images[position].uuid}.jpg`} />
          </ModalDiv>
          {position < images.length - 1 ? (
            <Button
              variants={ModalAnimation}
              onClick={() => {
                setPosition(position + 1);
              }}
            >
              <RightArrow />
            </Button>
          ) : (
            <Button>
              <div style={{ width: "24px", height: "24px" }} />
            </Button>
          )}
        </BackdropDiv>
      )}
    </AnimatePresence>
  );
}
