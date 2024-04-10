const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
  } = require("../../controller/thoughtController");  

router.route("/")
  .get(getAllUsers)
  .post(createUser);

router.route("/:userId")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:userId/friends")
  .post(addFriend);

router.route("/:userId/friends/:friendId")
  .delete(removeFriend);

module.exports = router;
