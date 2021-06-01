const express = require("express");
const router =express.Router();

const {getUserById, getUser,getAllusers,updateuser,userPurchaseList} = require("../controllers/user");
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");



router.param("userId", getUserById);

router.get("/user/:userId",isSignedIn, isAuthenticated, getUser);

router.get("orders/user/:userId",isSignedIn,isAuthenticated,updateuser,userPurchaseList);





module.exports = router;
