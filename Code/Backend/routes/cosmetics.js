const router = require ("express").Router();
let Cosmetic = require("../models/cosmetic");

http://localhost:8070/Cosmetic/add

router.route("/add").post((req,res)=>{

    const date = req.body.date;
    const time = req.body.time; 
    const con_no = Number(req.body.con_no);
    const cusid = Number(req.body.cusid);
    const payid = Number(req.body.payid);
    const quntity = Number(req.body.quntity);
    const reason = req.body.reason;

    const newCosmetic = new Cosmetic({

        date,
        time,
        con_no,
        cusid,
        payid,
        quntity,
        reason

    })

    newCosmetic.save().then(()=>{
          res.json("Success!")
     }).catch(()=>{
         console.log(err);
     })

})



http://localhost:8070/Cosmetic

router.route("/").get((req,res)=>{

    Cosmetic.find().then((Cosmetics)=>{
        res.json(Cosmetics)
    }).catch(()=>{
        console.log(err);
    })
})



http://localhost:8070/Cosmetic/update/

router.route("/update/:id").put(async(req,res)=>{
let userId = req.params.id;
const {date,time,con_no,cusid,payid,quntity,reason} = req.body;

const updateCosmetic = {
    date,
    time,
    con_no,
    cusid,
    payid,
    quntity,
    reason
}

const update = await Cosmetic.findByIdAndUpdate(userId,updateCosmetic).then(()=>{
    res.status(200).send({status:"Details Updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",error: err.message});
  })
})



http://localhost:8070/Cosmetic/delete/

router.route("/delete/:id").delete(async (req,res) => {
   let userId = req.params.id;

   await Cosmetic.findByIdAndDelete(userId)
   .then(()=>{
    res.status(200).send({status:"Delete Details"});
   }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with delete data",error: err.message});

   })
})



router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;

    const user = await Cosmetic.findById(userId)
    .then((cosmetic)=>{
        res.status(200).send({status:"User fetched", cosmetic});
    }).catch(()=>{
        console.log(err.message);
    res.status(500).send({status:"Error with get data", error: err.message});

    })
})

module.exports = router;

