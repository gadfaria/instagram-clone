import * as Yup from "yup";
import User from "../models/User";
import { Errors } from "../utils/errors";
import uuid from "uuid";
import awsService from "../services/aws.service";
import Story from "../models/Story";

let storyController = {
  add: async (req, res) => {
    try {
      const { body, userId } = req;

      const user = await User.findByPk(userId);

      if (body.image) {
        const imageUuid = uuid.v4();
        await awsService.uploadFileAsBase64(
          body.image,
          "jpg",
          "image/jpeg",
          imageUuid
        );
        body.uuid = imageUuid;
      }
      body.userId = userId;

      const story = await Story.create(body);

      return res.status(200).json(story);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      //   const stories = await Story.findAll();
      const users = await User.findAll({ include: [{ model: Story }] });

      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const story = await Story.findByPk(id);
      if (!story)
        return res.status(400).send({ error: Errors.NONEXISTENT_USER });

      story.destroy();

      return res.status(200).json({ msg: "Deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default storyController;
