import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import Modal from "./Modal";
import Plus from "../assets/plus.png";
import defaultProfile from "../assets/default_profile.jpg";
import { IMG_URL, SERVER_URL } from "../utils/const";
import { useSnackbar } from "react-simple-snackbar";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Root = styled.div`
  height: 118px;
  border: 1px solid rgba(219, 219, 219);
  border-radius: 3px;
  background: #ffffff;
  display: flex;
  align-items: center;
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
`;

const ProfileImage = styled.img`
  cursor: pointer;
  width: 66px;
  height: 66px;
  border-radius: 66px;
`;

const ProfileNickname = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgb(38, 38, 38);
  padding-top: 5px;
  width: 80px;
  ${FlexCenter}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ImageBorder = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background: linear-gradient(to right, red, purple);
  ${FlexCenter}
`;

const AddDiv = styled.div`
  margin-bottom: 15px;
  width: 66px;
  height: 66px;
  border-radius: 70px;
  background: #fafafa;
  ${FlexCenter}
  border: 1px solid rgba(219, 219, 219);
`;

const AddImage = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 66px;
`;

const InputHidden = styled.input`
  display: none;
`;

async function saveStory(image, token, openSnackbar, setReload) {
  try {
    let response = await fetch(`${SERVER_URL}/story`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        image: image,
      }),
    });
    if (response.status === 200) {
      openSnackbar("Stories successful saved");
      return true;
    }
  } catch (err) {
    return false;
  }
}

export default function Stories(props) {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [openSnackbar] = useSnackbar();
  const [userStories, setUserStories] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${SERVER_URL}/story`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.user.token}`,
        },
      });

      const responseObject = await response.json();
      if (response.status === 200) {
        setUsers(responseObject);
        setLoading(false);
      }
    })();
  }, [reload]);

  return loading ? (
    <Root></Root>
  ) : (
    <Root>
      <CarouselProvider
        style={{
          width: "100%",
          height: "118px",
          marginTop: "30px",
        }}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={users.length + 1}
        visibleSlides={5}
      >
        {/* <ButtonBack style={{ width: "20px", position: "absolute", zIndex: 9 }}>
          Back
        </ButtonBack> */}
        <Slider style={{ outline: "none" }}>
          <Slide style={{marginTop: "5px"}}>
            <Story>
              <AddDiv
                onClick={() => document.getElementById("gallery")?.click()}
              >
                <AddImage draggable="false" src={Plus} />
                <InputHidden
                  id={"gallery"}
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(evt) => {
                    if (evt.target.files) {
                      let file = evt.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload = async () => {
                        if (
                          await saveStory(
                            reader.result,
                            props.user.token,
                            openSnackbar
                          )
                        )
                          setReload(!reload);
                      };
                    }
                  }}
                />
              </AddDiv>
            </Story>
          </Slide>

          {users &&
            users.map((user) => {
              return user.Stories.length > 0 ? (
                <Slide>
                  <Story>
                    <ImageBorder
                      onClick={() => {
                        setUserStories(user);
                        setShowModal(true);
                      }}
                    >
                      <Image style={{width:"66px",height:"66px", borderRadius:"66px"}}
                        draggable="false"
                        src={
                          user.img_profile
                            ? `${IMG_URL}/${user.img_profile}.jpg`
                            : defaultProfile
                        }
                      />
                    </ImageBorder>

                    <ProfileNickname>{user.name}</ProfileNickname>
                  </Story>
                </Slide>
              ) : (
                <></>
              );
            })}
          {/* <ButtonNext
            style={{ left:100, width: "20px", position: "absolute", zIndex: 10 }}
          >
            Next
          </ButtonNext> */}
        </Slider>
      </CarouselProvider>
      {userStories != null && (
        <Modal
          user={userStories}
          closeModal={() => {
            setShowModal(false);
            setUserStories(null);
          }}
          showModal={showModal}
        />
      )}
    </Root>
  );
}
