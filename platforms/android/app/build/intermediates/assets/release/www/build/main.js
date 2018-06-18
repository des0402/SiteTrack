webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            .test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		198
	],
	"../pages/jobdetail/jobdetail.module": [
		240
	],
	"../pages/login/login.module": [
		242
	],
	"../pages/profilepage/profilepage.module": [
		247
	],
	"../pages/resetpassword/resetpassword.module": [
		248
	],
	"../pages/signup/signup.module": [
		249
	],
	"../pages/sitecreate/sitecreate.module": [
		250
	],
	"../pages/sitedetail/sitedetail.module": [
		251
	],
	"../pages/sitelist/sitelist.module": [
		252
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_site_site__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, siteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.siteProvider = siteProvider;
        this.currentSite = {};
        this.currentJob = {};
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        // this.siteProvider.getSiteDetail(this.navParams.get("siteId"))
        // .on("value", siteSnapshot =>{
        //   this.currentSite = siteSnapshot.val();
        //   this.currentSite.id = siteSnapshot.key;
        // });
        var _this = this;
        this.siteProvider.getSiteList().on("value", function (siteListSnapshot) {
            _this.siteList = [];
            siteListSnapshot.forEach(function (snap) {
                _this.siteList.push({
                    id: snap.key,
                    name: snap.val().name,
                    address: snap.val().address,
                    createdBy: snap.val().createdBy,
                    jobList: snap.val()
                });
                //this.siteId = snap.key; 
                //this.jobArr = [];
                //this.jobArr.push(snap.val().jobList);
                return false;
            });
        });
    };
    DashboardPage.prototype.goToSiteDetail = function (siteId) {
        var _this = this;
        //this.navCtrl.push(SitedetailPage, {siteId:siteId})
        this.siteProvider.getSiteDetail(siteId)
            .on("value", function (siteSnapshot) {
            _this.currentSite = siteSnapshot.val();
            _this.currentSite.id = siteSnapshot.key;
        });
        this.siteId = this.currentSite.id;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.jobListRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                    .database()
                    .ref("/siteList/" + _this.currentSite.id + "/jobList");
                _this.jobListRef.on("value", function (jobListSnapshot) {
                    _this.jobLists = [];
                    jobListSnapshot.forEach(function (snap) {
                        _this.jobLists.push({
                            id: snap.key,
                            job: snap.val().job,
                        });
                        //this.goToJobDetail(this.currentSite.id, snap.key); 
                        //this.goToJobDetail(snap.key);
                        return false;
                    });
                });
            }
        });
    };
    DashboardPage.prototype.goToJobDetail = function (j) {
        var _this = this;
        console.log("Job List");
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.jobDetailRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                    .database()
                    .ref("/siteList/" + _this.siteId + "/jobList/");
                _this.jobDetailRef.child(j).on("value", function (jobSnapshot) {
                    _this.currentJob = jobSnapshot.val();
                    _this.currentJob.id = jobSnapshot.key;
                });
            }
            _this.staffListRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                .database()
                .ref("/siteList/" + _this.siteId + "/jobList/" + _this.currentJob.id + "/staffMember");
            _this.staffListRef.on("value", function (staffListSnapshot) {
                _this.staffList = [];
                staffListSnapshot.forEach(function (snap) {
                    _this.staffList.push({
                        id: snap.key,
                        staff: snap.val().staff
                    });
                    return false;
                });
            });
        });
        console.log(this.staffList);
    };
    DashboardPage.prototype.listJob = function () {
        console.log(this.jobArr);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card *ngIf="currentSite.name !== NaN">\n        <ion-card-header>\n        <strong>{{currentSite?.name}}</strong><strong style="margin-left:5%;">{{currentSite?.address}}</strong>\n        </ion-card-header>\n        <!-- <ion-card-content>\n        <p>Address: </p>\n        <p>Created By: </p>\n        </ion-card-content> -->\n        <ion-card-content>\n            <h2>Job Lists</h2>\n          <ion-list *ngFor="let j of jobLists"  >\n            <div style="flex-direction:column; background-color:beige; margin:5%;">\n                <p>{{j.job}}</p>\n            </div>\n            <div style="margin:5%; " >\n              <a (click)="goToJobDetail(j.id)">show staff members</a>\n              <ion-list *ngFor="let s of staffList">\n                  <p *ngIf="j.id === currentJob.id">{{s?.staff}}</p>\n              </ion-list>\n            </div>\n          \n          </ion-list>\n  \n            <!-- <h2>Staffs</h2>\n            <ion-list *ngFor="let s of staffList">\n              <p>{{s?.staff}}</p>\n            </ion-list> -->\n        </ion-card-content>\n      </ion-card>\n \n    <table border="1" >\n      <tr style="padding:5px;">\n        <th>Site</th>\n        <th>Address</th>\n        <th>Created By</th>\n      </tr>\n      <tr *ngFor="let site of siteList" >\n        <th (click)="goToSiteDetail(site.id)">\n          {{site?.name}}\n        </th>\n        <th>\n          {{site?.address}}\n        </th>\n        <td>\n         <!-- <p *ngFor="let j of jobLists">{{j?.job}}</p> -->\n\n        <p>{{site?.createdBy}}</p>\n       \n        </td>\n      </tr>\n    </table>\n\n   \n\n    <!-- <button ion-button (click)="listJob()">List job on console</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_site_site__["a" /* SiteProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdetailPageModule", function() { return JobdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobdetail__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobdetailPageModule = (function () {
    function JobdetailPageModule() {
    }
    JobdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobdetail__["a" /* JobdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobdetail__["a" /* JobdetailPage */]),
            ],
        })
    ], JobdetailPageModule);
    return JobdetailPageModule;
}());

//# sourceMappingURL=jobdetail.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_site_site__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the JobdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobdetailPage = (function () {
    function JobdetailPage(navCtrl, navParams, siteProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.siteProvider = siteProvider;
        this.alertCtrl = alertCtrl;
        this.currentJob = {};
        this.jId = this.navParams.get("jId");
        this.siteId = this.navParams.get("siteId");
    }
    JobdetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.jobDetailRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                    .database()
                    .ref("/siteList/" + _this.siteId + "/jobList/");
                _this.jobDetailRef.child(_this.jId).on("value", function (jobSnapshot) {
                    _this.currentJob = jobSnapshot.val();
                    _this.currentJob.id = jobSnapshot.key;
                });
                _this.staffListRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                    .database()
                    .ref("/siteList/" + _this.siteId + "/jobList/" + _this.jId + "/staffMember");
                _this.staffListRef.on("value", function (staffListSnapshot) {
                    _this.staffList = [];
                    staffListSnapshot.forEach(function (snap) {
                        _this.staffList.push({
                            id: snap.key,
                            staff: snap.val().staff
                        });
                        return false;
                    });
                });
            }
        });
    };
    JobdetailPage.prototype.addNewMember = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Add New Member",
            inputs: [
                {
                    name: "staffName",
                    placeholder: "Enter Member Name"
                },
            ],
            buttons: [
                { text: 'cancel' },
                {
                    text: 'save',
                    handler: function (data) {
                        _this.siteProvider.addStaffMember(data.staffName, _this.siteId, _this.jId);
                        _this.alertCtrl.create({
                            message: "Member Added Successfully",
                            buttons: ['ok']
                        }).present();
                    }
                }
            ]
        });
        alert.present();
    };
    JobdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobdetail',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/jobdetail/jobdetail.html"*/'<!--\n  Generated template for the JobdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Job Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <h2 class="jobHeader">\n        {{currentJob?.job}}\n    </h2>\n    <ion-item class="staffList">\n    <ion-list >\n     <ion-header style="margin-left:10%;">Staff Members</ion-header>\n      <div style="display:flex; align-items:center; justify-content:center">\n      <button ion-button class="addMember" (click)="addNewMember()" > Add Member</button>\n     </div>\n     \n        <ion-item class="memberList" *ngFor="let s of staffList">\n          <h2>{{s?.staff}}</h2>\n        </ion-item>\n\n    </ion-list>\n  </ion-item>    \n\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/jobdetail/jobdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_site_site__["a" /* SiteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], JobdetailPage);
    return JobdetailPage;
}());

//# sourceMappingURL=jobdetail.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resetpassword_resetpassword__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sitelist_sitelist__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../home/home';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, alertCtrl, authProvider, menu, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.menu = menu;
        this.loginForm = formBuilder.group({
            email: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])
            ],
            password: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])
            ]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log("Form is not valid yet, current value: " + this.loginForm.value);
        }
        else {
            var email = this.loginForm.value.email;
            var password = this.loginForm.value.password;
            this.authProvider.loginUser(email, password).then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__sitelist_sitelist__["a" /* SitelistPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: 'Ok', role: 'cancel' }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" \n      placeholder="Your email address" \n      [class.invalid]="!loginForm.controls.email.valid && blur" >\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid &&\n      loginForm.controls.email.touched">\n      <p>Please enter a valid email address.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your Password"\n      [class.invalid]="!loginForm.controls.password.valid && blur"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid &&\n    loginForm.controls.password.touched" >\n      <p>Your password needs more than 6 characters</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n      Log In\n    </button>\n  </form>\n\n    <button ion-button block clear (click)="goToSignup()">\n      Create a new account\n    </button>\n    <button ion-button block clear (click)="goToResetPassword()">\n      I forgot my password :(\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sitelist_sitelist__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, alertCtrl, loadingCtrl, authProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.signupForm = formBuilder.group({
            email: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])
            ],
            password: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            firstName: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            lastName: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log("Need to complete the form, current value: " + this.signupForm.value);
        }
        else {
            var email = this.signupForm.value.email;
            var password = this.signupForm.value.password;
            var firstName = this.signupForm.value.firstName;
            var lastName = this.signupForm.value.lastName;
            this.authProvider.signupUser(email, password, firstName, lastName).then(function (user) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__sitelist_sitelist__["a" /* SitelistPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: 'Ok', role: 'cancel' }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>First Name</ion-label>\n      <ion-input formControlName="firstName" type="text" placeholder="Your First Name" \n      [class.invalid]="!signupForm.controls.firstName.valid && blur">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.firstName.valid && signupForm.controls.firstName.touched">\n      <p>Please enter your first name</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input formControlName="lastName" type="text" placeholder="Your Last Name"\n      [class.invalid]="!signupForm.controls.lastName.valid && blur"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.lastName.valid && signupForm.controls.lastName.touched" >\n      <p>Please enter your last name</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked >Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n        [class.invalid]="!signupForm.controls.email.valid && blur">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid && signupForm.controls.email.touched">\n      <p>Please enter a valid email</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your password"\n      [class.invalid]="!signupForm.controls.password.valid && blur"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n      *ngIf="!signupForm.controls.password.valid && signupForm.controls.password.touched">\n      <p>Your password needs more than 6 characters</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!signupForm.valid">\n      Create an account\n    </button>\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_site_site__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobdetail_jobdetail__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SitedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SitedetailPage = (function () {
    function SitedetailPage(navCtrl, navParams, siteProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.siteProvider = siteProvider;
        this.alertCtrl = alertCtrl;
        this.currentSite = {};
    }
    SitedetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.siteProvider.getSiteDetail(this.navParams.get("siteId"))
            .on("value", function (siteSnapshot) {
            _this.currentSite = siteSnapshot.val();
            _this.currentSite.id = siteSnapshot.key;
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.jobListRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                    .database()
                    .ref("/siteList/" + _this.currentSite.id + "/jobList");
                _this.jobListRef.on("value", function (jobListSnapshot) {
                    _this.jobList = [];
                    jobListSnapshot.forEach(function (snap) {
                        _this.jobList.push({
                            id: snap.key,
                            job: snap.val().job
                        });
                        // this.staffListRef = firebase
                        // .database()
                        // .ref(`/userProfile/${user.uid}/siteList/${this.currentSite.id}/jobList/${this.jobId}/staffMember`)
                        return false;
                    });
                });
                // this.staffListRef.on("value", staffListSnapshot => {
                //   this.staffList = [];
                //   staffListSnapshot.forEach(snap => {
                //     this.staffList.push({
                //       id:snap.key,
                //       staff:snap.val().staff
                //     });
                //  return false;
                //   });
                //  });
            }
        });
        // this.siteProvider.getJobList().on("value", jobListSnapshot => {
        //   this.jobList = [];
        //   jobListSnapshot.forEach(snap => {
        //     this.jobList.push({
        //       id:snap.key,
        //       job:snap.val().job
        //     });
        //     return false;
        //   });
        // });
    };
    SitedetailPage.prototype.goToJobDetail = function (jId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jobdetail_jobdetail__["a" /* JobdetailPage */], { jId: jId, siteId: this.currentSite.id });
        console.log(this.staffListRef);
    };
    SitedetailPage.prototype.addNewJob = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Add New Job",
            inputs: [
                {
                    name: "jobName",
                    placeholder: "Enter Job Name"
                },
            ],
            buttons: [
                { text: 'cancel' },
                {
                    text: 'save',
                    handler: function (data) {
                        _this.siteProvider.addJob(data.jobName, _this.currentSite.id);
                        _this.alertCtrl.create({
                            message: "Job Saved Successfully",
                            buttons: ['ok']
                        }).present();
                    }
                }
            ]
        });
        alert.present();
    };
    SitedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sitedetail',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/sitedetail/sitedetail.html"*/'<!--\n  Generated template for the SitedetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sitedetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n      <ion-card-header>\n      {{currentSite?.name}}\n      </ion-card-header>\n      <ion-card-content>\n      <p>Address: <strong>{{currentSite?.address}}</strong></p>\n      <p>Created By: <strong>{{currentSite?.createdBy}}</strong></p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n      <button ion-button block (click)="addNewJob()">Add Job</button>\n    </ion-list>\n    <ion-list>\n        <ion-item *ngFor="let j of jobList" (click)="goToJobDetail(j.id)">\n          <h2>{{j?.job}}</h2>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/sitedetail/sitedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_site_site__["a" /* SiteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SitedetailPage);
    return SitedetailPage;
}());

//# sourceMappingURL=sitedetail.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpasswordPage = (function () {
    function ResetpasswordPage(navCtrl, navParams, authProvider, alertCtrl, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])]
        });
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpasswordPage');
    };
    ResetpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log("Form is not valid yet, current value: " + this.resetPasswordForm.value);
        }
        else {
            var email = this.resetPasswordForm.value.email;
            this.authProvider.resetPassword(email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: 'Check your email for a password reset link',
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'cancel',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorAlert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: 'Ok', role: 'cancel' }]
                });
                errorAlert.present();
            });
        }
        // this.loading = this.loadingCtrl.create();
        // this.loading.present();
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/resetpassword/resetpassword.html"*/'<!--\n  Generated template for the ResetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>resetpassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n      [class.invalid]="!resetPasswordForm.controls.email.valid && blur" ></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n    *ngIf="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.touched">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!resetPasswordForm.valid">\n      Reset your password\n    </button>\n    \n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/resetpassword/resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepagePageModule", function() { return ProfilepagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilepage__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilepagePageModule = (function () {
    function ProfilepagePageModule() {
    }
    ProfilepagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profilepage__["a" /* ProfilepagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilepage__["a" /* ProfilepagePage */]),
            ],
        })
    ], ProfilepagePageModule);
    return ProfilepagePageModule;
}());

//# sourceMappingURL=profilepage.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpassword__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetpasswordPageModule = (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */]),
            ],
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());

//# sourceMappingURL=resetpassword.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitecreatePageModule", function() { return SitecreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sitecreate__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SitecreatePageModule = (function () {
    function SitecreatePageModule() {
    }
    SitecreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sitecreate__["a" /* SitecreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sitecreate__["a" /* SitecreatePage */]),
            ],
        })
    ], SitecreatePageModule);
    return SitecreatePageModule;
}());

//# sourceMappingURL=sitecreate.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitedetailPageModule", function() { return SitedetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sitedetail__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SitedetailPageModule = (function () {
    function SitedetailPageModule() {
    }
    SitedetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sitedetail__["a" /* SitedetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sitedetail__["a" /* SitedetailPage */]),
            ],
        })
    ], SitedetailPageModule);
    return SitedetailPageModule;
}());

//# sourceMappingURL=sitedetail.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitelistPageModule", function() { return SitelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sitelist__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SitelistPageModule = (function () {
    function SitelistPageModule() {
    }
    SitelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sitelist__["a" /* SitelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sitelist__["a" /* SitelistPage */]),
            ],
        })
    ], SitelistPageModule);
    return SitelistPageModule;
}());

//# sourceMappingURL=sitelist.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(319);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_site_site__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sitelist_sitelist_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sitecreate_sitecreate_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sitedetail_sitedetail_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_resetpassword_resetpassword_module__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profilepage_profilepage_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_profile_profile__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jobdetail_jobdetail_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_staff_staff__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_dashboard_dashboard_module__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobdetail/jobdetail.module#JobdetailPageModule', name: 'JobdetailPage', segment: 'jobdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilepage/profilepage.module#ProfilepagePageModule', name: 'ProfilepagePage', segment: 'profilepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sitecreate/sitecreate.module#SitecreatePageModule', name: 'SitecreatePage', segment: 'sitecreate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sitedetail/sitedetail.module#SitedetailPageModule', name: 'SitedetailPage', segment: 'sitedetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sitelist/sitelist.module#SitelistPageModule', name: 'SitelistPage', segment: 'sitelist', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__pages_sitelist_sitelist_module__["SitelistPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_sitecreate_sitecreate_module__["SitecreatePageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_sitedetail_sitedetail_module__["SitedetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_resetpassword_resetpassword_module__["ResetpasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_profilepage_profilepage_module__["ProfilepagePageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_jobdetail_jobdetail_module__["JobdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_dashboard_dashboard_module__["DashboardPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_site_site__["a" /* SiteProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_staff_staff__["a" /* StaffProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilepagePage = (function () {
    function ProfilepagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilepagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilepagePage');
    };
    ProfilepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilepage',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/profilepage/profilepage.html"*/'<!--\n  Generated template for the ProfilepagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/profilepage/profilepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilepagePage);
    return ProfilepagePage;
}());

//# sourceMappingURL=profilepage.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitecreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_site_site__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SitecreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SitecreatePage = (function () {
    function SitecreatePage(navCtrl, navParams, loadingCtrl, alertCtrl, siteProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.siteProvider = siteProvider;
        this.siteForm = formBuilder.group({
            siteName: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            siteAddress: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ]
        });
    }
    SitecreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SitecreatePage');
    };
    SitecreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sitecreate',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/sitecreate/sitecreate.html"*/'<!--\n  Generated template for the SitecreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add new site</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="siteForm" (submit)="addNewSite()" novalidate>\n    <ion-item>\n      <ion-label stacked>Site Name</ion-label>\n      <ion-input formControlName="siteName" type="text"\n      placeholder="Enter site name" \n      [class.invalid]="!siteForm.controls.siteName.valid && blur" ></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!siteForm.controls.siteName.valid && siteForm.controls.siteName.touched">\n      <p>Please enter site name</p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label stacked>Address</ion-label>\n      <ion-input formControlName="siteAddress" type="text" placeholder="Enter site address"\n      [class.invalid]="!siteForm.controls.siteName.valid && blur"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!siteForm.controls.siteAddress.valid && siteForm.controls.siteAddress.touched">\n      <p>Please enter site address</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!siteForm.valid">\n      Add Site\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/sitecreate/sitecreate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_site_site__["a" /* SiteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SitecreatePage);
    return SitecreatePage;
}());

//# sourceMappingURL=sitecreate.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sitelist_sitelist__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__credentials__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider, menu) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.menu = menu;
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_7__credentials__["a" /* firebaseConfig */]);
        // used for an example of ngFor and navigation
        // if(this.rootPage = LoginPage){
        //   this.pages = [
        //     { title: 'Login', component: LoginPage },
        //     //{ title: 'Sites', component: SitelistPage }
        //   ];
        // }else{
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'Sites', component: SitelistPage },
        //   //{ title: 'Logout', }
        // ];
        // }
        this.pages = [
            //{ title: 'Home', component: HomePage },
            { title: 'My Dashboard', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Sites', component: __WEBPACK_IMPORTED_MODULE_4__pages_sitelist_sitelist__["a" /* SitelistPage */] }
            //{ title: 'My Account', component: ProfilepagePage}
            //{ title: 'Logout', }
        ];
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */];
                unsubscribe();
            }
        });
    }
    MyApp.prototype.logoutClicked = function () {
        this.authProvider.logoutUser();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        this.menu.close();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <ion-item><button style="height:40px;" ion-button block (click)="logoutClicked()">LOG OUT</button></ion-item>\n    </ion-list>    \n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> '/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyCdPDVXY2hIKMa5j0JL-UHKtm6ExyJzeBM",
    authDomain: "protrack-590f1.firebaseapp.com",
    databaseURL: "https://protrack-590f1.firebaseio.com",
    projectId: "protrack-590f1",
    storageBucket: "protrack-590f1.appspot.com",
    messagingSenderId: "818209010620",
};
//# sourceMappingURL=credentials.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("/userProfile/" + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the StaffProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StaffProvider = (function () {
    function StaffProvider() {
    }
    StaffProvider.prototype.getStaffMembers = function () {
    };
    StaffProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StaffProvider);
    return StaffProvider;
}());

//# sourceMappingURL=staff.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the SiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SiteProvider = (function () {
    function SiteProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.siteListRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                    .database()
                    .ref("/siteList");
            }
        });
    }
    SiteProvider.prototype.createSite = function (siteName, siteAddress, siteCreatedBy) {
        return this.siteListRef.push({
            name: siteName,
            address: siteAddress,
            createdBy: siteCreatedBy
        });
    };
    SiteProvider.prototype.addStaffMember = function (staffName, siteId, jobId) {
        return this.siteListRef.child(siteId + "/jobList/" + jobId + "/staffMember").push({
            staff: staffName
        });
    };
    SiteProvider.prototype.addJob = function (jobName, siteId) {
        return this.siteListRef.child(siteId + "/jobList").push({
            job: jobName
        });
    };
    SiteProvider.prototype.getJobList = function () {
        return this.jobListRef;
    };
    SiteProvider.prototype.getJobDetail = function (jobId) {
        return this.jobListRef.child(jobId);
    };
    SiteProvider.prototype.getSiteList = function () {
        return this.siteListRef;
    };
    SiteProvider.prototype.getSiteDetail = function (siteId) {
        return this.siteListRef.child(siteId);
    };
    SiteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SiteProvider);
    return SiteProvider;
}());

//# sourceMappingURL=site.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider() {
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password, firstName, lastName) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/userProfile/" + newUser.uid + "/")
                .set({ email: email, firstName: firstName, lastName: lastName });
        })
            .catch(function (error) {
            console.error(error);
            throw new Error(error);
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    // logoutUser(): Promise<void>{
    //   return firebase.auth().signOut();
    // }
    AuthProvider.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/userProfile/" + userId)
            .off();
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitelistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_site_site__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sitedetail_sitedetail__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SitelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SitelistPage = (function () {
    function SitelistPage(navCtrl, navParams, alertCtrl, siteProvider, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.siteProvider = siteProvider;
        this.authProvider = authProvider;
    }
    SitelistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.siteProvider.getSiteList().on("value", function (siteListSnapshot) {
            _this.siteList = [];
            siteListSnapshot.forEach(function (snap) {
                _this.siteList.push({
                    id: snap.key,
                    name: snap.val().name,
                    address: snap.val().address,
                    createdBy: snap.val().createdBy
                });
                return false;
            });
        });
    };
    SitelistPage.prototype.goToSiteDetail = function (siteId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sitedetail_sitedetail__["a" /* SitedetailPage */], { siteId: siteId });
    };
    SitelistPage.prototype.addNewSite = function () {
        var _this = this;
        //this.navCtrl.push(SitecreatePage);
        var alert = this.alertCtrl.create({
            message: "Add New Site",
            inputs: [
                {
                    name: "siteName",
                    placeholder: "Enter site Name"
                },
                {
                    name: "siteAddress",
                    placeholder: "Enter site address"
                },
                {
                    name: "createdBy",
                    placeholder: "Your name"
                }
            ],
            buttons: [
                { text: 'cancel' },
                {
                    text: 'save',
                    handler: function (data) {
                        _this.siteProvider.createSite(data.siteName, data.siteAddress, data.createdBy);
                        _this.alertCtrl.create({
                            message: "Site Saved Successfully",
                            buttons: ['ok']
                        }).present();
                    }
                }
            ]
        });
        alert.present();
    };
    SitelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sitelist',template:/*ion-inline-start:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/sitelist/sitelist.html"*/'<!--\n  Generated template for the SitelistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Site List</ion-title>\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <div style="display:flex; align-items:center; justify-content:center">\n    <button ion-button (click)="addNewSite()">\n         Add New Site\n    </button>\n    </div>\n  </ion-list>\n  <ion-list>\n    <ion-item *ngFor="let site of siteList" (click)="goToSiteDetail(site.id)">\n      <h2>{{site?.name}}</h2>\n      <h3>{{site?.address}}</h3>\n      <h3>Created By: {{site?.createdBy}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Deepak-iTrak/Desktop/CodingArea/ionic/protrack/src/pages/sitelist/sitelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_site_site__["a" /* SiteProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], SitelistPage);
    return SitelistPage;
}());

//# sourceMappingURL=sitelist.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map