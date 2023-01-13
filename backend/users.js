const { User, Session } = require("./schemas");
const mongoose = require("mongoose");

const options = { upsert: true, new: true };

const getUser = async (userEmail) => {
    console.log(`users - getUser ${userEmail}`);
    try {
        foo =  await User.findOne({
            email: userEmail,
        });
        console.log(foo);
        return foo;
    } catch (e) {
        logError(e);
    }
};

const createUser = async ({ name, sessionId }) => {
  try {
    console.log("name", name);
    const user = await User.create({
      name,
      geoJson: {},
      preferences: {
        carType: "",
        carpool: false,
        maxWalkDistance: 0,
        maxCarDistance: 0,
        maxBicycleDistance: 0,
      },
    });
    console.log("user", user);
    await Session.findOneAndUpdate(
      { id: sessionId },
      { $push: { users: user._id } },
      options
    );
  } catch (e) {
    logError(e);
  }
};

const updateUser = async (user) => {
  try {
    return await User.findOneAndUpdate({ _id: user._id }, user, options);
  } catch (e) {
    logError(e);
  }
};

const deleteUser = async (userId) => {
  console.log("userId", userId);
  try {
    const sessionPromise = Session.findOneAndUpdate(
      {
        users: userId,
      },
      {
        $pull: {
          users: userId,
        },
      }
    );

    const userPromise = User.findByIdAndDelete(userId);

    await Promise.all([sessionPromise, userPromise]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
};