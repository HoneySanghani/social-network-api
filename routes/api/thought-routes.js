const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thougths-controller");

router.route("/").get(getAllThoughts);
router.route("/:thoughtId").get(getThoughtById).put(updateThought);

router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;