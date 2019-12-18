(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-login></app-login> -->\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n    \r\n        \r\n    \r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar\" role=\"banner\">\n    <img\n      width=\"40\"\n      alt=\"LandCom Logo\"\n      src=\"https://images.bayut.com/thumbnails/27681668-240x180.webp\"\n    /> \n   <h3> <a routerLink='' style=\"color: red; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\" >LANDCOM</a></h3>\n      <div class=\"spacer\"></div>\n      <div><button class=\"btn btn-success\" (click)='login()'>{{button}}</button></div>&nbsp;\n      <div><button class=\"btn btn-danger\" (click)='newAd()'>Place an ad</button></div>&nbsp;\n      \n    <a aria-label=\"LandCom on facebook\" target=\"_blank\" rel=\"noopener\" href=\"https://www.facebook.com/landcomdxb\" title=\"Facebook\">\n        <button class=\"btn btn-primary\">facebook</button>  \n    </a>\n  </div>\n\n  <link rel=\"image_src\" href=\"https://dbzstatic-a.akamaihd.net/.dist_141d951c4bfa96733b3256c431ed7165d672c1a1/images/elements/dubizzle-screenshot.png\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ad-details/ad-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/ad-details/ad-details.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"content\" role=\"main\">\n     <div class=\" highlight-card \" style=\"height: 50px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  >\n      <h1 style=\"margin-left:0%;\" >Ad Details</h1>\n    </div>\n    <div *ngIf = \"product\">\n      <div class=\"card-container\" > \n      </div>\n    </div>\n     <div class=\"container\">\n      <!-- <div *ngIf = \"product\">\n      <img src=\"{{product.image}}\" alt=\"Image\" style=\"width: 300px; height: 300px;\">\n      <h3>{{product.title}}</h3>\n      <h5>Posted by:&nbsp; {{product.email}}</h5>\n      <h5>Price: &nbsp; {{product.price | currency:\"INR\"}}</h5>\n      <h5>Phone:&nbsp; {{product.phone}}</h5>\n      <h5>Usage: &nbsp; {{product.usage}}</h5>\n      <h5>Condition: &nbsp;{{product.condition}}</h5>\n      <h5>Location:&nbsp;{{product.location}}</h5>\n      <a routerLink=\"\">Back</a>\n    </div> -->\n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/add/add.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/add/add.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" role=\"main\">\n     <div class=\" highlight-card \" style=\"height: 70px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  > \n      <h1 style=\"margin-left:0%;\" >Please enter the details here</h1>\n    </div> \n</div>\n\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                  <form method=\"POST\" name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && AddProduct(productItem)\" novalidate >\n                        <div class=\"form-group\">\n                                <label>Choose a category for your product</label>\n                                <div class=\"spacer\"></div>\n                                <select class=\"browser-default custom-select\"  (change)=\"selectChangeHandlerItem($event)\" name=\"category\" [(ngModel)]=\"productItem.category\" #category=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && category.invalid}\"  required>\n                                    <option *ngFor=\"let i of items\" value=\"{{i}}\" >{{i}}</option>\n                                </select>\n                                <div *ngIf = \"f.submitted && category.invalid\" class=\"invalid-feedback\">\n                                    <!-- <div *ngIf = \"fname.errors.required\">this field is Required</div> -->\n                                    \n                                  </div>\n                            </div>\n                    <div class=\"form-group\">\n                        <label>Title</label>\n                        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"productItem.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid}\"  required required minlength = \"7\">\n                        <div *ngIf = \"f.submitted && title.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"title.errors.required\">Title is Required</div>\n                            <div *ngIf = \"title.errors.minlength\">Please Enter Atleast 7 Characters</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Phone number</label>\n                        <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"productItem.phone\" placeholder=\"Enter Phone Number\" #phone=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid}\"  required pattern = \"[0-9]{10}\">\n                        <div *ngIf = \"f.submitted && phone.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"phone.errors.required\">Phone number is Required</div>\n                            <div *ngIf = \"phone.errors.pattern\">Please Enter a valid phone number</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Price</label>\n                        <input type=\"text\" class=\"form-control\" name=\"price\"  [(ngModel)]=\"productItem.price\" #price=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && price.invalid}\"  required  >\n                        <div *ngIf = \"f.submitted && price.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"price.errors.required\">Price is Required</div>\n                           \n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Describe your appliances</label>\n                        <input type=\"text-area\" class=\"form-control\" name=\"description\" [(ngModel)]=\"productItem.description\" #description=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && description.invalid}\"  required  minlength = \"10\">\n                        <div *ngIf = \"f.submitted && description.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"description.errors.required\">Description is Required</div>\n                            <div *ngIf = \"description.errors.minlength\">Please Enter Atleast 10 Characters</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Age</label>\n                        <div class=\"spacer\"></div>\n                        <select class=\"browser-default custom-select\"  (change)=\"selectChangeHandlerAge($event)\" name=\"age\" [(ngModel)]=\"productItem.age\" #age=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && age.invalid}\"  required>\n                            <option *ngFor=\"let i of ageOptions\" value=\"{{i}}\" >{{i}}</option>\n                        </select>\n                        <div *ngIf = \"f.submitted && age.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"age.errors.required\">This field is Required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Usage</label>\n                        <div class=\"spacer\"></div>\n                        <select class=\"browser-default custom-select\" (change)=\"selectChangeHandlerUsage($event)\" name=\"usage\" [(ngModel)]=\"productItem.usage\" #usage=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && usage.invalid}\"  required>\n                            <option *ngFor=\"let i of usageOptions\" value=\"{{i}}\" >{{i}}</option>\n                        </select>\n                        <div *ngIf = \"f.submitted && usage.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"usage.errors.required\">This field is Required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Condition</label>\n                        <div class=\"spacer\"></div>\n                        <select class=\"browser-default custom-select\" (change)=\"selectChangeHandlerCondition($event)\" name=\"condition\" [(ngModel)]=\"productItem.condition\" #condition=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && condition.invalid}\"  required>\n                            <option *ngFor=\"let i of conditionOptions\" value=\"{{i}}\"  >{{i}}</option>\n                        </select>\n                        <div *ngIf = \"f.submitted && condition.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"condition.errors.required\">This field is Required</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Image Url</label>\n                        <div class=\"spacer\"></div>\n                        <input type=\"text\" class=\"form-control\" name=\"image\" [(ngModel)]=\"productItem.image\" #image=\"ngModel\"  >\n                           \n                    </div>\n                    <div class=\"form-group\">\n                        <label>Location</label>\n                        <div class=\"spacer\"></div>\n                        <select class=\"browser-default custom-select\" (change)=\"selectChangeHandlerLocation($event)\" name=\"location\" [(ngModel)]=\"productItem.location\" #location=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && location.invalid}\"  required>\n                            <option  *ngFor=\"let i of locationOptions\" value=\"{{i}}\" >{{i}}</option>\n                        </select>\n                        <div *ngIf = \"f.submitted && location.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"location.errors.required\">This field is Required</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Please enter your username to confirm ad</label>\n                        <input type=\"email\" class=\"form-control\" name=\"email\"  [(ngModel)]=\"productItem.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid}\"  required pattern = \"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n                        <div *ngIf = \"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf = \"email.errors.required\">Email Required</div>\n                            <div *ngIf = \"email.errors.pattern\">Please Enter a Valid Email</div>\n                          </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-success\" value=\"Done\" name=\"addProduct\">\n                    </div>\n                    <a href=\"ads\"><button class=\"btn btn-danger\">Cancel</button></a>\n                </form>  -->\n            </div>\n        </div>\n    </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/all-ads/all-ads.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/all-ads/all-ads.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" role=\"main\" *ngIf=\"admin\">\n    <div class=\" highlight-card \" style=\"height: 100px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  >\n     <h1 style=\"margin-left:0%;\" >Admin page:LandCom Real Estates</h1>\n   </div>\n     <h2>Manage Ads</h2>\n         <div class=\"card-container\" >  \n        <div class=\"container\">\n         <div class=\"row\">\n            <div >\n                <label>Categorywise Ads </label>\n                 <div class=\"spacer\"></div>\n                    <select class=\"browser-default custom-select\" (change)=\"[selectChangeHandlerItem($event),products(category)]\" name=\"category\" [(ngModel)]=\"model.category\">\n                     <option *ngFor=\"let i of items\" value=\"{{i}}\" >{{i}}</option>\n                    </select>\n                 </div>\n            </div>\n        </div>\n     </div>\n </div>\n<div class=\"container\">\n\n    <div *ngIf = \"product && product.length\">\n      <div class=\"row\">\n        <div *ngFor = \"let i of product\">\n          <div class=\"col\"> \n            <a  (click)='productDetail(i._id)'><img src=\"{{i.image}}\" alt=\"\" style=\"width: 300px; height: 300px;\"></a>\n            <h3>{{i.title}}</h3>\n            <span>Price:{{i.price | currency:\"INR\"}}</span>\n            <!-- <button (click)='productDetail(i._id)' class=\"btn btn-primary\">Details</button> -->\n            <div *ngIf='admin'><button class=\"btn btn-danger\" (click)='delete(i._id)'>Delete</button></div>\n         </div>\n        </div>\n      </div>\n    </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='!admin'>\n  <div  class=\"content\" role=\"main\">\n    \n      <div class=\" highlight-card \" style=\"height: 100px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  >\n        <h1 style=\"margin-left:0%;\" >Welcome to LandCom Real Estate</h1>\n      </div>\n        <h2>What are you looking for!</h2>\n            <div class=\"card-container\" >  \n           <div class=\"container\">\n            <div class=\"row\">\n               <div >\n                   <label>Choose a category </label>\n                    <div class=\"spacer\"></div>\n                       <select class=\"browser-default custom-select\" (change)=\"[selectChangeHandlerItem($event),products(category)]\" name=\"category\" [(ngModel)]=\"model.category\">\n                        <option *ngFor=\"let i of items\" value=\"{{i}}\" >{{i}}</option>\n                       </select>\n                    </div>\n               </div>\n               <br>\n               <h3 style=\"color: red;\">Top Picks For You</h3>\n           </div>\n        </div>\n    </div>\n      <div class=\"container\">\n  \n    <div *ngIf = \"product && product.length\">\n      <div class=\"row\">\n        <div *ngFor = \"let i of product\">\n           <div class=\"\"> \n             <a (click)='productDetail(i._id)'><img src=\"{{i.image}}\" alt=\"\" style=\"width: 300px; height: 300px;\"></a>\n            <h3>{{i.title}}</h3>\n            <span>Price:{{i.price | currency:\"INR\"}}</span>\n         </div>\n        </div>\n      </div>\n    </div>\n      </div>\n    </div>\n    \n    \n\n    <div  class=\"content\" role=\"main\">\n    <div *ngIf='admin'>\n      <div class=\" highlight-card \" style=\"height: 100px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  >\n        <h1 style=\"margin-left:0%;\" >Admin page:LandCom Real Estates</h1>\n      </div>\n      <a href=\"users\"><h2>Manage Users</h2></a>\n       <a href=\"allads\"> <h2 >Manage Ads</h2></a>\n    </div>\n    </div>\n  \n  <router-outlet></router-outlet>\n\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  \n  \n  <div class=\"content\" role=\"main\">\n  \n    \n     <div class=\"card highlight-card card-small\" >\n      <span style=\"margin-left:0%;\">Login</span>\n    </div>\n  \n    <form >\n      <div>\n        <div class=\"container-fluid\">\n          <form name=\"form\" (ngSubmit)=\"login()\">\n            <div class=\"form-group  \">\n              <label>Enter UserName</label>\n              <input type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group \">\n              <label>Enter Password</label>\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\">\n            </div>\n            <div class=\"form-group  \">\n              <input type=\"submit\" name=\"submit\" value=\"Login\" class=\"btn btn-success \">\n            </div>\n              \n          </form>\n          <p>New User?<a href=\"#\"> SignUp</a></p>\n        </div>\n  \n      </div>\n    </form>\n  \n  \n  \n  \n  \n  </div> -->\n\n\n\n  <div class=\"jumbotron\">\n      <div class=\"container\">\n      <h1 class=\"col-md-6 offset-md-3\">Login</h1>\n      <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n          <form method=\"POST\" name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\" novalidate>\n            <div class=\"form-group\">\n              <label>Email</label>\n              <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Enter Email\" [ngClass]=\"{'is-invalid':f.submitted && email.invalid }\" required pattern = \"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" >\n              <div *ngIf = \"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                <div *ngIf = \"email.errors.required\">Email Required</div>\n                <div *ngIf = \"email.errors.pattern\">Please Enter a Valid Email</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Enter Password\"  [(ngModel)]=\"model.password\"  required>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" name=\"Login\">&nbsp;\n              <span>New User?</span><a href=\"/signup\"> SignUp</a>\n            </div>\n          </form>\n        </div>\n      </div>\n      </div>\n      </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" role=\"main\" *ngFor='let i of user'>\n  \n        <!-- Highlight Card -->\n         <div class=\" highlight-card \" style=\"height: 100px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  >\n          <h1 style=\"margin-left:0%;\" >Welcome {{i.fname}}!</h1>\n        </div>    \n\n</div>\n        <div class=\"jumbotron\" > \n                <div *ngFor='let i of user' style=\"margin-left: 40%;\">\n                        <!-- <img src=\"{{i.dp}}\" alt=\"dp\"> -->\n                        <div><img src=\"{{dp}}\" alt=\"Profile picture\"> </div>\n                        <h3>First Name:   {{i.fname}}</h3>\n                        <h3>Last Name: {{i.lname}}</h3>\n                        <h2>Email:&nbsp;{{i.email}}</h2>\n                        <h2>Phone:&nbsp;{{i.phone}}</h2>\n                        \n                        <!-- <h3>Phone:{{i.phone}}</h3> -->\n                <br>\n                <br>\n                <br>\n                <!-- <button class=\"btn btn-primary\" (click)='update()'>Edit Profile</button>&nbsp; -->\n                <button class=\"btn btn-primary\" (click)='viewAds()'>My Ads</button>&nbsp;\n                <button class=\"btn btn-danger\" (click)='logout()'>SignOut</button>\n            </div>\n        </div> \n            \n       \n\n   \n   \n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <div class=\"jumbotron\">\n    <div class=\"container\">\n    <h1 class=\"col-md-6 offset-md-3\">SignUp</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n         <form method=\"POST\" name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\" novalidate>\n          <div class=\"form-group\">\n            <label>First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"fname\" #fname=\"ngModel\" [(ngModel)]=\"model.fname\" placeholder=\"Enter First Name\" [ngClass]=\"{ 'is-invalid': f.submitted && fname.invalid }\" required minlength = \"4\">\n            <div *ngIf = \"f.submitted && fname.invalid\" class=\"invalid-feedback\">\n              <div *ngIf = \"fname.errors.required\">First Name is Required</div>\n              <div *ngIf = \"fname.errors.minlength\">Please Enter Atleast 4 Characters</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lname\" #lname=\"ngModel\" [(ngModel)]=\"model.lname\" placeholder=\"Enter Last Name\" [ngClass]=\"{'is-invalid':f.submitted && lname.invalid }\" required>\n            <div *ngIf = \"f.submitted && lname.invalid\" class=\"invalid-feedback\">\n                <div *ngIf = \"lname.errors.required\">Last name Required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Phone number</label>\n            <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"model.phone\" placeholder=\"Enter Phone Number\" #phone=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid}\"  required pattern = \"[0-9]{10}\">\n            <div *ngIf = \"f.submitted && phone.invalid\" class=\"invalid-feedback\">\n                <div *ngIf = \"phone.errors.required\">Phone number is Required</div>\n                <div *ngIf = \"phone.errors.pattern\">Please Enter a valid phone number</div>\n              </div>\n        </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Enter Email\" [ngClass]=\"{'is-invalid':f.submitted && email.invalid }\" required pattern = \"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" >\n            <div *ngIf = \"f.submitted && email.invalid\" class=\"invalid-feedback\">\n              <div *ngIf = \"email.errors.required\">Email Required</div>\n              <div *ngIf = \"email.errors.pattern\">Please Enter a Valid Email</div>\n            </div>\n          </div>\n          <!-- <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Enter Password\" [ngClass]=\"{'is-invalid':f.submitted && password.invalid }\" required minlength=\"8\">\n          </div>\n          <div *ngIf = \"f.submitted && password.invalid\" class=\"invalid-feedback\">\n            <div *ngIf = \"password.errors.required\">This field is Required</div>\n            <div *ngIf = \"password.errors.minlength\">Password must be of atleast 8 Characters</div>\n        </div>\n          <div class=\"form-group\">\n            <label>Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" #confirmPassword=\"ngModel\" [(ngModel)]=\"model.confirmPassword\" placeholder=\"Enter Password\" [ngClass]=\"{'is-invalid':f.submitted && password.invalid }\" required >\n          </div> \n          \n          <div *ngIf = \"f.submitted && confirmPassword.invalid\" class=\"invalid-feedback\">\n            <div *ngIf = \"confirmPassword.errors.required\">This field is Required</div>\n        </div> -->\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-success\" value=\"SignUp\" name=\"SignUp\">\n          </div>\n         </form>  \n      </div>\n    </div>\n    </div>\n    </div>\n    \n\n\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/users/users.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/users/users.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" role=\"main\" *ngIf=\"admin\">\n    <div class=\" highlight-card \" style=\"height: 100px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  >\n     <h1 style=\"margin-left:0%;\" >Admin page:LandCom Real Estates</h1>\n   </div>\n     <h2>Manage Users</h2>\n         <!-- <div class=\"card-container\" >  \n        <div class=\"container\">\n         <div class=\"row\">\n            <div >\n                <label>Categorywise Ads </label>\n                 <div class=\"spacer\"></div>\n                    <select class=\"browser-default custom-select\" (change)=\"[selectChangeHandlerItem($event),products(category)]\" name=\"category\" [(ngModel)]=\"model.category\">\n                     <option *ngFor=\"let i of items\" value=\"{{i}}\" >{{i}}</option>\n                    </select>\n                 </div>\n            </div>\n        </div>\n     </div> -->\n </div>\n<div class=\"container\">\n\n    <div *ngIf = \"user && user.length\">\n      <div class=\"row\">\n        <div *ngFor = \"let i of user\">\n          <div class=\"col\"> \n            <img src=\"{{i.image}}\" alt=\"\" style=\"width: 100px; height: 100px;\">\n            <h3>First Name: &nbsp;{{i.fname}}</h3>\n            <h3>Last Name:&nbsp;{{i.lname}}</h3>\n            <h2>Email:&nbsp;{{i.email}}</h2>\n            <h2>Phone:&nbsp;{{i.phone}}</h2>\n            <!-- <a (click)='userDetails(i.email)'><button  class=\"btn btn-primary\">Details</button></a> -->\n            <div *ngIf='admin'><button class=\"btn btn-danger\" (click)='delete(i.email)'>Delete</button></div>\n         </div>\n        </div>\n      </div>\n    </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/view-ads/view-ads.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/view-ads/view-ads.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"highlite-card\">\n  <div class=\"jumbotron\">\n  <div class=\"container\"> -->\n    <div class=\"content\" role=\"main\">\n      <div class=\" highlight-card \" style=\"height: 100px; color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"  >\n       <h1 style=\"margin-left:0%;\" >Ads posted by you</h1>\n     </div>\n      <div *ngIf = \"product && product.length\"> <!-- <img [src] = \"i.imageUrl\"-->\n        <div class=\"row\" >\n        <div *ngFor = \"let i of product\">\n          <div class=\" col\">\n            <img src=\"{{i.image}}\" alt=\"image\">\n            <h3>{{i.title}}</h3>\n            <span>Category:&nbsp;{{i.category}}</span>\n            <br>\n            <span>Phone:&nbsp;{{i.phone}}</span>\n            <br>\n            <span>Price:&nbsp;{{i.price | currency:\"INR\"}}</span>\n            <br>\n            <span>Description:&nbsp;{{i.description}}</span>    \n            <br>\n            <span>Age:&nbsp;{{i.age}}</span>\n            <br>\n            <span>Usage:&nbsp;{{i.usage}}</span>  \n            <br>\n            <span>Condition:&nbsp;{{i.condition}}</span>\n            <br>\n            <!-- <span>Image Url:&nbsp;{{i.image}}</span>\n            <br> -->\n            <span>Location:&nbsp;{{i.location}}</span>\n            <br>\n            <span>Posted by:&nbsp;{{i.email}}</span>\n            <br>\n            <br>\n            <button class=\"btn btn-primary\" (click)='edit(i)'>Edit</button>&nbsp;\n            <button (click)='delete(i._id)'class=\"btn btn-primary\">Delete</button>&nbsp;\n          </div>\n        </div>\n    </div>\n    </div>\n   \n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _home_add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/add/add.component */ "./src/app/home/add/add.component.ts");
/* harmony import */ var _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/profile/profile.component */ "./src/app/home/profile/profile.component.ts");
/* harmony import */ var _home_view_ads_view_ads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/view-ads/view-ads.component */ "./src/app/home/view-ads/view-ads.component.ts");
/* harmony import */ var _home_ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/ad-details/ad-details.component */ "./src/app/home/ad-details/ad-details.component.ts");
/* harmony import */ var _home_all_ads_all_ads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/all-ads/all-ads.component */ "./src/app/home/all-ads/all-ads.component.ts");
/* harmony import */ var _home_users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/users/users.component */ "./src/app/home/users/users.component.ts");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], children: [] },
    { path: 'login', component: _home_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'add', component: _home_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"] },
    { path: 'profile', component: _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'ads', component: _home_view_ads_view_ads_component__WEBPACK_IMPORTED_MODULE_8__["ViewAdsComponent"] },
    { path: 'addetails', component: _home_ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_9__["AdDetailsComponent"] },
    { path: 'allads', component: _home_all_ads_all_ads_component__WEBPACK_IMPORTED_MODULE_10__["AllAdsComponent"] },
    { path: 'users', component: _home_users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'projectApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _home_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/add/add.component */ "./src/app/home/add/add.component.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/profile/profile.component */ "./src/app/home/profile/profile.component.ts");
/* harmony import */ var _home_view_ads_view_ads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/view-ads/view-ads.component */ "./src/app/home/view-ads/view-ads.component.ts");
/* harmony import */ var _home_ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/ad-details/ad-details.component */ "./src/app/home/ad-details/ad-details.component.ts");
/* harmony import */ var _home_all_ads_all_ads_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/all-ads/all-ads.component */ "./src/app/home/all-ads/all-ads.component.ts");
/* harmony import */ var _home_users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/users/users.component */ "./src/app/home/users/users.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            _home_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _home_add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
            _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
            _home_view_ads_view_ads_component__WEBPACK_IMPORTED_MODULE_14__["ViewAdsComponent"],
            _home_ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_15__["AdDetailsComponent"],
            _home_all_ads_all_ads_component__WEBPACK_IMPORTED_MODULE_16__["AllAdsComponent"],
            _home_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_12__["StorageServiceModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");




let HeaderComponent = class HeaderComponent {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
        this.button = 'Profile';
    }
    ngOnInit() {
        console.log(this.storage.get('uname'));
    }
    newAd() {
        this.router.navigate(['add']);
    }
    login() {
        if (this.storage.get('uname') == null)
            this.button = "Login";
        else if (this.storage.get('uname') == "admin@gmail.com")
            this.button = "admin";
        else
            this.button = "Profile";
        this.router.navigate(['login']);
    }
    ngOnDestroy() {
        this.storage.remove('uname');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"],] }] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]))
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/ad-details/ad-details.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/ad-details/ad-details.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWQtZGV0YWlscy9hZC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/home/ad-details/ad-details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/ad-details/ad-details.component.ts ***!
  \*********************************************************/
/*! exports provided: AdDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDetailsComponent", function() { return AdDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdDetailsComponent = class AdDetailsComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.items = ['Home Appliances', 'Electronics', 'Furnitures', 'Free Stuff', 'Two wheeler for rent', 'Two wheeler for sale', 'Four wheeler for rent', 'Four wheeler for sale',
            'Residential unit for rent', 'Residential units for sale', 'Commercial units for rent', 'Commercial units for sale'];
    }
    ngOnInit() {
        this.id = this.productService.getId();
        console.log(this.id);
        this.productService.product(this.id)
            .subscribe((data) => {
            this.product = JSON.parse(JSON.stringify(data)).product;
            console.log(this.product);
        });
    }
};
AdDetailsComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AdDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ad-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ad-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ad-details/ad-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ad-details.component.css */ "./src/app/home/ad-details/ad-details.component.css")).default]
    })
], AdDetailsComponent);



/***/ }),

/***/ "./src/app/home/add/add.component.css":
/*!********************************************!*\
  !*** ./src/app/home/add/add.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkL2FkZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/add/add.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/add/add.component.ts ***!
  \*******************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.model */ "./src/app/home/product.model.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");






let AddComponent = class AddComponent {
    constructor(productService, storage, router, route) {
        this.productService = productService;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.items = ['Home Appliances', 'Electronics', 'Furnitures', 'Free Stuff', 'Two wheeler for rent', 'Two wheeler for sale', 'Four wheeler for rent', 'Four wheeler for sale',
            'Residential unit for rent', 'Residential units for sale', 'Commercial units for rent', 'Commercial units for sale'];
        this.category = '';
        this.age = '';
        this.usage = '';
        this.condition = '';
        this.email = '';
        this.admin = false;
        this.productItem = new _product_model__WEBPACK_IMPORTED_MODULE_4__["IProduct"](null, null, null, null, null, null, null, null, null, null, null);
        this.ageOptions = ['Brand new', '0-1 Month', '1-6 Months', '6-12 Months', '1-2 Years', '2-5 Years'];
        this.usageOptions = ['In its original packing', 'Only used once', 'Used a few times', 'Heavy usage'];
        this.conditionOptions = ['Perfect inside out', 'Excellent', 'Average'];
        this.locationOptions = ['Kannur', 'Calicut', 'Kochi', 'Thiruvananthapuram'];
        this.update = false;
    }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return true;
        }
        return false;
    }
    ngOnInit() {
        if (this.storage.get('uname') == null) {
            this.router.navigate(['login']);
        }
        else if (this.storage.get('uname') == "admin@gmail.com") {
            this.admin = true;
            //   this.router.navigate(['admin-add'])
        }
        if (this.isEmpty(this.route.snapshot.params)) {
            this.productItem = JSON.parse(JSON.stringify(this.route.snapshot.params));
            console.log(this.productItem);
            this.update = true;
            this.updateId = this.route.snapshot.params._id;
        }
        console.log(this.route.snapshot.params);
        this.email = this.storage.get('uname');
    }
    AddProduct(product) {
        if (product.email == this.storage.get('uname')) {
            if (this.update == false) {
                this.productService.newProduct(product)
                    .subscribe((result) => {
                    if (JSON.parse(JSON.stringify(result)).Status == "Success") {
                        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
                            this.router.navigate(['ads']);
                        });
                    }
                    else {
                        alert("Error");
                    }
                });
            }
            else {
                this.productService.updateProduct(product)
                    .subscribe((result) => {
                    if (JSON.parse(JSON.stringify(result)).Status == "Success") {
                        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
                            this.router.navigate(['ads']);
                        });
                    }
                    else {
                        alert("Failed");
                    }
                });
                this.update = false;
            }
        }
        else
            alert("Please enter correct user id");
    }
    selectChangeHandlerItem(event) {
        this.category = event.target.value;
    }
    selectChangeHandlerAge(event) {
        this.age = event.target.value;
    }
    selectChangeHandlerUsage(event) {
        this.usage = event.target.value;
    }
    selectChangeHandlerCondition(event) {
        this.condition = event.target.value;
    }
    selectChangeHandlerLocation(event) {
        this.location = event.target.value;
    }
    back() {
        this.router.navigate(['']);
    }
};
AddComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/home/add/add.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"]))
], AddComponent);



/***/ }),

/***/ "./src/app/home/all-ads/all-ads.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/all-ads/all-ads.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWxsLWFkcy9hbGwtYWRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/home/all-ads/all-ads.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/all-ads/all-ads.component.ts ***!
  \***************************************************/
/*! exports provided: AllAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAdsComponent", function() { return AllAdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AllAdsComponent = class AllAdsComponent {
    constructor(productService, router, storage) {
        this.productService = productService;
        this.router = router;
        this.storage = storage;
        this.admin = false;
        this.model = {};
        this.category = "";
        this.items = ['Home Appliances', 'Electronics', 'Furnitures', 'Free Stuff', 'Two wheeler for rent', 'Two wheeler for sale', 'Four wheeler for rent', 'Four wheeler for sale',
            'Residential unit for rent', 'Residential units for sale', 'Commercial units for rent', 'Commercial units for sale'];
    }
    ngOnInit() {
        if (this.storage.get('uname') == null) {
            this.router.navigate(['login']);
        }
        else if (this.storage.get('uname') == "admin@gmail.com")
            this.admin = true;
        this.products(this.category);
    }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return true;
        }
        return false;
    }
    products(category) {
        if (!this.isEmpty(category)) {
            this.productService.random()
                .subscribe((data) => {
                this.product = JSON.parse(JSON.stringify(data)).product;
                // console.log( this.product);
            });
        }
        else {
            console.log(this.category);
            this.productService.products(this.category)
                .subscribe((data) => {
                this.product = JSON.parse(JSON.stringify(data)).product;
                // console.log( this.product);
            });
        }
    }
    selectChangeHandlerItem(event) {
        this.category = event.target.value;
        console.log(this.category);
    }
    delete(id) {
        // alert("delete!")
        this.productService.delete(id)
            .subscribe((result) => {
            if (JSON.parse(JSON.stringify(result)).Status == "Success") {
                this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['allads']);
                });
            }
            else {
                alert("Error");
            }
        });
    }
    productDetail(id) {
        if (this.storage.get('uname') == null)
            this.router.navigate(['login']);
        else {
            this.id = this.productService.setId(id);
            this.router.navigate(['addetails']);
        }
    }
};
AllAdsComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] }
];
AllAdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-ads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-ads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/all-ads/all-ads.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-ads.component.css */ "./src/app/home/all-ads/all-ads.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"]))
], AllAdsComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");





let HomeComponent = class HomeComponent {
    constructor(productService, router, storage) {
        this.productService = productService;
        this.router = router;
        this.storage = storage;
        this.category = '';
        this.model = {};
        this.admin = false;
        this.items = ['Home Appliances', 'Electronics', 'Furnitures', 'Free Stuff', 'Two wheeler for rent', 'Two wheeler for sale', 'Four wheeler for rent', 'Four wheeler for sale',
            'Residential unit for rent', 'Residential units for sale', 'Commercial units for rent', 'Commercial units for sale'];
    }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return true;
        }
        return false;
    }
    ngOnInit() {
        if (this.storage.get('uname') == "admin@gmail.com")
            this.admin = true;
        this.products(this.category);
    }
    products(category) {
        if (!this.isEmpty(category)) {
            this.productService.random()
                .subscribe((data) => {
                this.product = JSON.parse(JSON.stringify(data)).product;
                // console.log( this.product);
            });
        }
        else {
            console.log(this.category);
            this.productService.products(this.category)
                .subscribe((data) => {
                this.product = JSON.parse(JSON.stringify(data)).product;
                // console.log( this.product);
            });
        }
    }
    productDetail(id) {
        if (this.storage.get('uname') == null)
            this.router.navigate(['login']);
        else {
            this.id = this.productService.setId(id);
            this.router.navigate(['addetails']);
        }
    }
    selectChangeHandlerItem(event) {
        this.category = event.target.value;
        console.log(this.category);
    }
    delete(id) {
        // alert("delete!")
        this.productService.delete(id)
            .subscribe((result) => {
            if (JSON.parse(JSON.stringify(result)).Status == "Success") {
                this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['allads']);
                });
            }
            else {
                alert("Error");
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"],] }] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]))
], HomeComponent);



/***/ }),

/***/ "./src/app/home/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/home/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");





let LoginComponent = class LoginComponent {
    constructor(storage, productService, router) {
        this.storage = storage;
        this.productService = productService;
        this.router = router;
        this.model = {};
        this.admin = false;
    }
    ngOnInit() {
        if (this.storage.get('uname') == "admin@gmail.com") {
            this.admin = true;
            this.router.navigate(['profile']);
        }
        else if (this.storage.get('uname'))
            this.router.navigate(['profile']);
    }
    onSubmit() {
        this.productService.login(this.model)
            .subscribe((result) => {
            this.Status = JSON.parse(JSON.stringify(result)).Status;
            if (this.Status == "Success") {
                this.storage.set('uname', this.model.email);
                this.router.navigate(['']);
            }
            else {
                alert(this.Status);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"],] }] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/home/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/home/product.model.ts":
/*!***************************************!*\
  !*** ./src/app/home/product.model.ts ***!
  \***************************************/
/*! exports provided: IProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IProduct", function() { return IProduct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class IProduct {
    constructor(category, title, phone, price, description, age, usage, condition, location, email, image) {
        this.category = category;
        this.title = title;
        this.phone = phone;
        this.price = price;
        this.description = description;
        this.age = age;
        this.usage = usage;
        this.condition = condition;
        this.location = location;
        this.email = email;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/home/product.service.ts":
/*!*****************************************!*\
  !*** ./src/app/home/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");




const __dirname = "C:\Users\WORK\Desktop\ProjectFinal\projectApp";
let ProductService = class ProductService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    setId(id) {
        this.storage.set('id', id);
    }
    getId() {
        return this.storage.get('id');
    }
    login(user) {
        return this.http.post("http://localhost:8080/login", user);
    }
    signup(user) {
        return this.http.post("http://localhost:8080/signup", user);
    }
    users() {
        return this.http.get("http://localhost:8080/signup/users");
    }
    deleteUser(email) {
        return this.http.post("http://localhost:8080/signup/delete", { email: email });
    }
    products(category) {
        return this.http.post("http://localhost:8080/products", { category: category });
    }
    newProduct(product) {
        return this.http.post("http://localhost:8080/products/insert", product);
    }
    updateProduct(product) {
        return this.http.post("http://localhost:8080/products/update", product);
    }
    delete(id) {
        return this.http.post("http://localhost:8080/products/delete", { id: id });
    }
    setUser(email) {
        this.storage.set('email', email);
    }
    getUser(user) {
        return this.http.post("http://localhost:8080/signup/profile", { email: user });
    }
    getAds(user) {
        return this.http.post("http://localhost:8080/products/ads", { email: user });
    }
    product(id) {
        return this.http.post("http://localhost:8080/products/product", { id: id });
    }
    random() {
        return this.http.get("http://localhost:8080/products/random");
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"],] }] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]))
], ProductService);



/***/ }),

/***/ "./src/app/home/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/profile/profile.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/home/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProfileComponent = class ProfileComponent {
    constructor(storage, route, productService, router) {
        this.storage = storage;
        this.route = route;
        this.productService = productService;
        this.router = router;
        this.uname = '';
        this.admin = false;
        this.dp = "assets/img/user.jpg";
    }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return true;
        }
        return false;
    }
    ngOnInit() {
        // this.storage.remove('uname')  
        if (this.storage.get('uname') == null) {
            this.router.navigate(['login']);
        }
        else if (this.storage.get('uname') == "admin@gmail.com")
            this.admin = true;
        this.uname = this.storage.get('uname');
        console.log(this.uname);
        this.productService.getUser(this.uname)
            .subscribe((data) => {
            this.user = JSON.parse(JSON.stringify(data)).user;
            console.log(JSON.parse(JSON.stringify(data)).user);
            console.log(this.user);
        });
    }
    logout() {
        this.storage.remove('uname');
        // console.log(this.storage.get('uname'))
        this.router.navigate(['']);
    }
    viewAds() {
        this.router.navigate(['ads']);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/home/profile/profile.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]))
], ProfileComponent);



/***/ }),

/***/ "./src/app/home/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _signup_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.model */ "./src/app/home/signup/signup.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");







let SignupComponent = class SignupComponent {
    constructor(router, storage, productService, http) {
        this.router = router;
        this.storage = storage;
        this.productService = productService;
        this.http = http;
        this.admin = false;
        this.model = new _signup_model__WEBPACK_IMPORTED_MODULE_2__["Signup"](null, null, null, null, null, null, null);
    }
    ngOnInit() {
    }
    onSubmit() {
        // console.log(this.model)
        this.productService.signup(this.model)
            .subscribe((result) => {
            this.Status = JSON.parse(JSON.stringify(result)).Status;
            if (this.Status == "Success") {
                alert("success");
                this.router.navigate(['']);
            }
            else {
                alert(this.Status);
            }
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"],] }] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-template-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/home/signup/signup.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"]))
], SignupComponent);



/***/ }),

/***/ "./src/app/home/signup/signup.model.ts":
/*!*********************************************!*\
  !*** ./src/app/home/signup/signup.model.ts ***!
  \*********************************************/
/*! exports provided: Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Signup {
    constructor(fname, lname, email, passwsord, confirmPassword, dp, phone) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.passwsord = passwsord;
        this.confirmPassword = confirmPassword;
        this.dp = dp;
        this.phone = phone;
    }
}


/***/ }),

/***/ "./src/app/home/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/home/users/users.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");





let UsersComponent = class UsersComponent {
    constructor(productService, router, storage) {
        this.productService = productService;
        this.router = router;
        this.storage = storage;
        this.admin = false;
        this.email = "";
    }
    ngOnInit() {
        if (this.storage.get('uname') == null) {
            this.router.navigate(['login']);
        }
        else if (this.storage.get('uname') == "admin@gmail.com")
            this.admin = true;
        this.users();
    }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return true;
        }
        return false;
    }
    users() {
        this.productService.users()
            .subscribe((data) => {
            this.user = JSON.parse(JSON.stringify(data)).user;
            // console.log( this.product);
        });
    }
    userDetails(email) {
        this.productService.setUser(email);
        this.router.navigate(['profile']);
    }
    // if(!this.isEmpty(id)){
    //     this.productService.users()
    //     .subscribe((data) => {
    //      this.user = JSON.parse(JSON.stringify(data)).user ;
    //     // console.log( this.product);
    //   })  
    //   }
    //   else{
    //     console.log(this.id);
    //   this.productService.user(this.id)
    //   .subscribe((data) => {
    //      this.user = JSON.parse(JSON.stringify(data)).user ;
    //     // console.log( this.product);
    //   })
    //   } 
    // } 
    delete(user) {
        // alert("delete!")
        this.productService.deleteUser(user)
            .subscribe((result) => {
            if (JSON.parse(JSON.stringify(result)).Status == "Success") {
                this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['users']);
                });
            }
            else {
                alert("Error");
            }
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"],] }] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/home/users/users.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]))
], UsersComponent);



/***/ }),

/***/ "./src/app/home/view-ads/view-ads.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/view-ads/view-ads.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmlldy1hZHMvdmlldy1hZHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home/view-ads/view-ads.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/view-ads/view-ads.component.ts ***!
  \*****************************************************/
/*! exports provided: ViewAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAdsComponent", function() { return ViewAdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "./src/app/home/product.service.ts");





let ViewAdsComponent = class ViewAdsComponent {
    constructor(storage, router, productService) {
        this.storage = storage;
        this.router = router;
        this.productService = productService;
        this.admin = false;
    }
    ngOnInit() {
        if (this.storage.get('uname') == null) {
            this.router.navigate(['login']);
        }
        else if (this.storage.get('uname') == "admin@gmail.com")
            this.admin = true;
        this.user = this.storage.get('uname');
        // console.log(this.user)
        this.productService.getAds(this.user)
            .subscribe((data) => {
            this.product = JSON.parse(JSON.stringify(data)).product;
            console.log(JSON.parse(JSON.stringify(data)).product);
            // console.log( this.product);
        });
    }
    edit(product) {
        this.router.navigate(['add', product]);
    }
    delete(id) {
        this.productService.delete(id)
            .subscribe((result) => {
            if (JSON.parse(JSON.stringify(result)).Status == "Success") {
                this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['ads']);
                });
            }
            else {
                alert("Error");
            }
        });
    }
};
ViewAdsComponent.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ViewAdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-ads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-ads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/view-ads/view-ads.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-ads.component.css */ "./src/app/home/view-ads/view-ads.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"]))
], ViewAdsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\WORK\Desktop\ProjectFinal\projectApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map