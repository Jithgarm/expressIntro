const express = require("express")

const router = express.Router()

router.get("/test",()=>{
    console.log("estamos en la ruta test")
})
router.get("/diana",()=>{
    console.log("Hola Diana")
})
router.get("/eduardo",()=>{
    console.log("Hola Eduardo")
})

module.exports = router