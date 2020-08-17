webpackJsonp([1,4],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
    }
    // Function to make get requests to our backend API
    ClientService.prototype.getClients = function () {
        return this.http.get('http://localhost:3000/api/clients')
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.saveClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); //  HTTP module to do a post request
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/clients', client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.updateClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/clients/' + client._id, client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete('http://localhost:3000/api/clients/' + id)
            .map(function (res) { return res.json(); });
    };
    ClientService = __decorate([
        // Reactive extensions map so that we can map our request back as an observable which is like a stream of data.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ClientService);
    return ClientService;
    var _a;
}());
//# sourceMappingURL=D:/ECM/video_courses_and_books/videos/ejs_projects/07_Client_Keeper_MEAN_From_Scratch/ck-frontend/src/client.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 350;


/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(459);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/ECM/video_courses_and_books/videos/ejs_projects/07_Client_Keeper_MEAN_From_Scratch/ck-frontend/src/main.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(619),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/ECM/video_courses_and_books/videos/ejs_projects/07_Client_Keeper_MEAN_From_Scratch/ck-frontend/src/app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_clients_clients_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_client_service__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_clients_clients_component__["a" /* ClientsComponent */], __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_client_service__["a" /* ClientService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/ECM/video_courses_and_books/videos/ejs_projects/07_Client_Keeper_MEAN_From_Scratch/ck-frontend/src/app.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) {
            _this.clients = clients;
        });
        this.isEdit = false;
    };
    ClientsComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var newClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            company: this.company
        };
        this.clientService.saveClient(newClient).subscribe(function (client) {
            _this.clients.push(client);
            _this.first_name = '';
            _this.last_name = '';
            _this.email = '';
            _this.phone = '';
            _this.company = '';
        });
    };
    ClientsComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var updClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            _id: this._id,
            company: this.company
        };
        this.clientService.updateClient(updClient).subscribe(function (client) {
            for (var i = 0; i < _this.clients.length; i++) {
                if (client._id == _this.clients[i]._id) {
                    _this.clients.splice(i, 1);
                }
            }
            _this.clients.push(client);
            _this.first_name = '';
            _this.last_name = '';
            _this.email = '';
            _this.phone = '';
            _this.company = '';
        });
    };
    ClientsComponent.prototype.onEditClick = function (client) {
        this.isEdit = true;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
        this.email = client.email;
        this.phone = client.phone;
        this.company = client.company;
        this._id = client._id;
    };
    ClientsComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.clientService.deleteClient(id).subscribe(function (client) {
            for (var i = 0; i < _this.clients.length; i++) {
                if (id == _this.clients[i]._id) {
                    _this.clients.splice(i, 1);
                }
            }
        });
    };
    ClientsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'clients',
            template: __webpack_require__(620)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === 'function' && _a) || Object])
    ], ClientsComponent);
    return ClientsComponent;
    var _a;
}());
//# sourceMappingURL=D:/ECM/video_courses_and_books/videos/ejs_projects/07_Client_Keeper_MEAN_From_Scratch/ck-frontend/src/clients.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            // Decorator
            selector: "navbar",
            template: __webpack_require__(621),
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=D:/ECM/video_courses_and_books/videos/ejs_projects/07_Client_Keeper_MEAN_From_Scratch/ck-frontend/src/navbar.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/ECM/video_courses_and_books/videos/ejs_projects/07_Client_Keeper_MEAN_From_Scratch/ck-frontend/src/environment.js.map

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<div class=\"container\">\n  <clients></clients>\n</div>\n"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<div class=\"client-form\">\r\n    <div *ngIf=\"isEdit\">\r\n        <form (submit)=\"onEditSubmit()\" class=\"well\">\r\n            <h3>Edit Client</h3>\r\n            <div class=\"form-group\">\r\n                <label>First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Phone Number</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone Number\">\r\n            </div>\r\n          <div class=\"form-group\">\r\n            <label>Company</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company\" name=\"company\" placeholder=\"Company\">\r\n          </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isEdit\">\r\n        <form (submit)=\"onAddSubmit()\" class=\"well\">\r\n            <h3>Add Client</h3>\r\n            <div class=\"form-group\">\r\n                <label>First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Phone Number</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone Number\">\r\n            </div>\r\n          <div class=\"form-group\">\r\n            <label>Company</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company\" name=\"company\" placeholder=\"Phone Number\">\r\n          </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"client-list\">\r\n    <table class=\"table table-striped\">\r\n        <tr>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th>Company</th>\r\n            <th></th>\r\n        </tr>\r\n        <tr *ngFor=\"let client of clients\">\r\n            <td>{{client.first_name}}</td>\r\n            <td>{{client.last_name}}</td>\r\n            <td>{{client.email}}</td>\r\n            <td>{{client.phone}}</td>\r\n          <td>{{client.company}}</td>\r\n            <td><a (click)=\"onEditClick(client)\" href=\"#\" class=\"btn btn-default\">Edit</a>\r\n              <a (click)=\"onDeleteClick(client._id)\" href=\"#\" class=\"btn btn-danger\">Delete</a></td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"/\">ClientKeeper</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ })

},[639]);
//# sourceMappingURL=main.bundle.map