import React from "react";
import styled from "styled-components";
import Post from "./Post";
import Stories from "./Stories";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";

const Root = styled.div`
  width: 612px;
  background: #fafafa;
  margin: 28px 13px;
`;

const Posts = styled.div`
  background: #fafafa;
  margin-top: 25px;
`;

const postExample = [
  {
    image: post1,
    user: {
      img_profile: "https://media-exp1.licdn.com/dms/image/C4D03AQFblf6K1pXZQA/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=uiGcq7e_ZMghKECulE7hA2IN7jBUpNdOVAqD74IOYlA",
      name: "Gabriel Faria",
    },
    description: "Informações",
    comments: [
      {
        name: "Rafael",
        comment: "Muito legal",
      },
    ],
  },
  {
    image: post2,
    user: {
      img_profile: "https://media-exp1.licdn.com/dms/image/C4D03AQFblf6K1pXZQA/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=uiGcq7e_ZMghKECulE7hA2IN7jBUpNdOVAqD74IOYlA",
      name: "Gabriel Faria",
    },
    description: "Contato",
    comments: [
      {
        name: "Joao",
        comment: "Uauuu",
      },
      {
        name: "Larissa",
        comment: "Entrarei em contato",
      },
    ],
  },
];

export default function Content(props) {
  return (
    <Root>
      <Stories user={props.user} />
      <Posts>
        {postExample.map((post) => {
          return <Post post={post}></Post>;
        })}
      </Posts>
    </Root>
  );
}
