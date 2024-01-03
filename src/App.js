import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import home from "./home";
import feedbackPDF from "./components/feedbackPDF";
import paymentPDF from "./components/paymentPDF";
import returnPDF from "./components/returnPDF";
import CreateFeedback from "./components/create-feedback.component";
import FeedbackList from "./components/feedback-list.component";
import EditFeedback from "./components/edit-feedback.component";
import CreatePayment from "./components/create-payment.component";
import EditPayment from "./components/edit-payment.component";
import PaymentList from "./components/payment-list.component";
import CreateReturn from "./components/create-return.component";
import EditReturn from "./components/edit-return.component";
import ReturnList from "./components/return-list.component";
import CreateDelivery from "./components/create-delivery.component";
import EditDelivery from "./components/edit-delivery.component";
import DeliveryList from "./components/delivery-list.component";
import CreateEmployee from "./components/create-employee.component";
import EditEmployee from "./components/edit-employee.component";
import EmployeeList from "./components/employee-list.component";
import CreateCustomer from "./components/create-customer.component";
import EditCustomer from "./components/edit-customer.component";
import CustomerList from "./components/customer-list.component";
import CreateStock from "./components/create-stock.component";
import EditStock from "./components/edit-stock.component";
import StockList from "./components/stock-list.component";
import CreateSupply from "./components/create-supply";
import EditSupply from "./components/edit-supply";
import SupplyList from "./components/supply-list";
import aboutus from "./aboutus";

function App() {
  return (<Router>

    <nav className="navbar navbar-dark bg-dark fixed-top" style={{backgroundColor:'#ADD8E6'}}>  
  <div className="container-fluid">
    <a className="navbar-brand" href="/home" style={{color:"#FFFFFF"}}><h3>STUDENT MANAGEMENT SYSTEM</h3></a>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-auto mb-lg-0">
     
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home"  >
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;</a>
        </li>
        </ul>


    </div>
    </nav>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-auto mb-lg-0">
     
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"  ></a>
        </li>
        </ul>


    </div>
    </nav>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-auto mb-lg-0">
     
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/aboutus"  ></a>
        </li>
        </ul>


    </div>
    </nav>



   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        </ul>
        

    </div>
    </nav>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{color:"  #0000FF"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="offcanvasNavbarLabel" style={{color:"#FF10F0"}}>Online Cosmetic Shop</h4>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      
      <div className="offcanvas-body">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
        <br>
        </br>
        <div className="container-fluid">
           <div className="navbar-nav">
             <a className="nav-link active" href="/customer-list" style={{color:"#000000"}}><h5>Customer</h5></a><br/>
             <a className="nav-link active" href="/payment-list" style={{color:"#000000"}}><h5>Payment</h5></a><br/>
             <a className="nav-link active" href="/employee-list" style={{color:"#000000"}}><h5>Employee</h5></a><br/>
              <a className="nav-link active" href="/delivery-list" style={{color:"#000000"}}><h5>Delivery</h5></a><br/>
              <a className="nav-link active" href="/feedback-list" style={{color:"#000000"}}><h5>Feedback</h5></a><br/>
              <a className="nav-link active" href="/stock-list" style={{color:"#000000"}}><h5>Stock</h5></a><br/>
              <a className="nav-link active" href="/return-list" style={{color:"#000000"}}><h5>Return</h5></a><br/>
              <a className="nav-link active" href="/supply-list" style={{color:"#000000"}}><h5>Supplier</h5></a><br/>
           </div>
        </div>
      </div>
    </div>
  </div>
</nav>]

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
              <Route exact path='/' component={home} />
              <Route path='/home' component={home} />
              <Route exact path='/' component={aboutus} />
              <Route path='/aboutus' component={aboutus} />
              <Route exact path='/' component={CreateEmployee} />
                <Route path="/create-employee" component={CreateEmployee} />
                <Route path="/edit-employee/:id" component={EditEmployee} />
                <Route path="/employee-list" component={EmployeeList} />
              <Route exact path='/' component={CreateDelivery} />
                <Route path="/create-delivery" component={CreateDelivery} />
                <Route path="/edit-delivery/:id" component={EditDelivery} />
                <Route path="/delivery-list" component={DeliveryList} />
              <Route exact path='/' component={CreateReturn} />
                <Route path="/create-return" component={CreateReturn} />
                <Route path="/edit-return/:id" component={EditReturn} />
                <Route path="/return-list" component={ReturnList} />
               <Route exact path='/' component={CreatePayment} />
                <Route path="/create-payment" component={CreatePayment} />
                <Route path="/edit-payment/:id" component={EditPayment} />
                <Route path="/payment-list" component={PaymentList} />
                <Route exact path='/' component={CreateFeedback} />
                <Route path="/create-feedback" component={CreateFeedback} />
                <Route path="/edit-feedback/:id" component={EditFeedback} />
                <Route path="/feedback-list" component={FeedbackList} />
                <Route exact path='/' component={CreateCustomer} />
                <Route path="/create-customer" component={CreateCustomer} />
                <Route path="/edit-customer/:id" component={EditCustomer} />
                <Route path="/Customer-list" component={CustomerList} />
                <Route exact path='/' component={CreateStock} />
                <Route path="/create-stock" component={CreateStock} />
                <Route path="/edit-stock/:id" component={EditStock} />
                <Route path="/stock-list" component={StockList} />  
                <Route path="/feedbackPDF" component={feedbackPDF} />
                <Route path="/returnPDF" component={returnPDF} />
                <Route path="/paymentPDF" component={paymentPDF} />
                <Route exact path='/' component={CreateSupply} />
                <Route path="/create-supply" component={CreateSupply} />
                <Route path="/edit-supply/:id" component={EditSupply} />
                <Route path="/supply-list" component={SupplyList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
  </Router>);
}

export default App;
