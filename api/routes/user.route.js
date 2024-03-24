import express from "express";

const router= express.Router();

router.get('/test',(req,res)=>{
        res.send("hello");
})

export default router;