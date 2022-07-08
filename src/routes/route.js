const express = require('express')
const router = express.Router()
const bookController = require("../controller/bookController")
const userController = require("../controller/userController")
// const reviewController = require("../controller/reviewController")
const middleware = require("../middleware/auth")




//--------------------------user Api----------------------------------
router.post("/register", userController.registerUser)
router.post("/login", userController.login)

//--------------------------Book Api----------------------------------
router.post("/books", middleware.authentication, bookController.createBook)
<<<<<<< HEAD
router.get("/books/:bookId",  bookController.getbookId)



=======
router.get("/books", middleware.authentication, bookController.getBooks)
router.get("/books/:bookId", middleware.authentication, bookController.getbookId)
router.put("/books/:bookId", middleware.authentication, bookController.updateBooks)
router.delete("/books/:bookId", middleware.authentication, bookController.deleteBook)


>>>>>>> b0e002ac58e354a87efaf7887968f64cc2dceadf
//--------------------------Review Api----------------------------------


module.exports = router