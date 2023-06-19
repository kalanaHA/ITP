import React, { useState } from "react"
import axios from "axios";

export default function REinsert() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [con_no, setCon_no] = useState("");
  const [cusid, setCusid] = useState("");
  const [payid, setPayid] = useState("");
  const [quntity, setQuntity] = useState("");
  const [reason, setReason] = useState("");

     
  function sendData(e) {
    e.preventDefault();

    const newCosmetic = {

      date,
      time,
      con_no,
      cusid,
      payid,
      quntity,
      reason

    }

    axios.post("http://localhost:8070/Cosmetic/add", newCosmetic).then(() => {
      alert("Details Added")
    }).catch((err) => {
      alert(err)
    })

  }

  return (

    <div className="container">
      <span class="border border-primary"></span>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <form onSubmit={sendData} >

        <div className="col-md-3">
          <label for="redate" className="form-label">Return Date</label>
          <input type="text" className="form-control" id="redate" required
            onChange={(e) => {

              setDate(e.target.value);

            }} />
        </div>

        <div className="col-md-3" >
          <label for="retime" className="form-label">Return Time</label>
          <input type="text" className="form-control" id="retime" required
            onChange={(e) => {

              setTime(e.target.value);

            }} />
        </div>

        <div className="col-md-3">
          <label for="con" className="form-label">Contact number</label>
          <input type="text" className="form-control" id="con" required
            onChange={(e) => {

              setCon_no(e.target.value);

            }} />
        </div>

        <div className="col-md-3">
          <label for="cusid" className="form-label">Customer ID</label>
          <input type="text" className="form-control" id="cusid" required
            onChange={(e) => {

              setCusid(e.target.value);

            }} />
        </div>

        <div className="col-md-3">
          <label for="payid" className="form-label">Payment ID</label>
          <input type="text" className="form-control" id="payid" required
            onChange={(e) => {

              setPayid(e.target.value);

            }} />
        </div>

        <div className="col-md-2">
          <label for="requn" className="form-label">Return Quntity</label>
          <input type="text" className="form-control" id="requn" required
            onChange={(e) => {

              setQuntity(e.target.value);

            }} />
        </div>

        <div className="col-md-5">
          <label for="rea" className="form-label">Reason</label>
          <input type="textarea" className="form-control" id="rea" required
            onChange={(e) => {

              setReason(e.target.value);

            }} />
        </div>

        <div className="col-13">
          <br /><button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>

  )

}
