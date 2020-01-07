function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header\">\n  <div class=\"header-wrap\">\n    <div class=\"header__logo\" routerLink=\"\">\n      <img [src]=\"logo\" alt=\" Logo\" class=\"header__logo-img\">\n    </div>\n    <h1 class=\"header__title\" routerLink=\"\">{{title}}</h1>\n    <nav class=\"header__nav\">\n      <div class=\"nav__message\"><i class='far fa-comment'></i></div>\n      <div class=\"nav__login\"><i class=\"far fa-user\"></i></div>\n    </nav>\n  </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"unit\">\n  <button (click)=\"goBack()\" class=\"unit__back-button\">Back</button>\n  <div>\n    <h2 class=\"unit__title\">{{link.name}}</h2>\n    <div class=\"unit__subhead\">\n      <h3 class=\"unit__subtitle\">Active patients</h3>\n      <input type=\"text\" placeholder=\"Search for patients..\" class=\"unit__search\" id=\"listInput\" (keyup)=\"onSearch()\">\n    </div>\n    <table class=\"unit-list\" id=\"list\">\n      <tr>\n        <th class=\"unit-list__title\" (click)=\"sortName()\">Patient name <i class=\"fas fa-sort\"></i>\n        </th>\n        <th class=\"unit-list__title\" (click)=\"sortDx()\">Diagnosis <i class=\"fas fa-sort\"></i>\n        </th>\n        <th class=\"unit-list__title\" (click)=\"sortVisit()\">Last visit <i class=\"fas fa-sort\"></i>\n        </th>\n        <th class=\"unit-list__title\" (click)=\"sortStaff()\">Staff <i class=\"fas fa-sort\"></i>\n        </th>\n      </tr>\n      <tr *ngFor=\"let patients of link.patient\">\n        <td class=\"unit-list__name\" routerLink=\"/{{link.link}}/{{patients.linkName}}\">{{patients.name}}</td>\n        <td class=\"unit-list__dx\">{{patients.dx}}</td>\n        <td class=\"unit-list__date\">{{patients.date | date:'medium'}}</td>\n        <td class=\"unit-list__personal\">{{patients.staff}}, <span class=\"unit-list__position\">{{patients.position}}</span>\n        </td>\n      </tr>\n    </table>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientPatientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"patient\">\n  <button (click)=\"goBack()\" class=\"patient__back-button\">Back</button>\n  <section *ngIf=\"patient\">\n    <div class=\"patient__data\">\n      <div class=\"patient__blockleft\">\n        <img src=\"{{dataPatient.foto}}\" alt=\"Photo of the patient\" class=\"patient__foto\">\n        <div>\n          <h2 class=\"patient__name\">{{dataPatient.name}}</h2>\n          <p class=\"patient__adress\">{{dataPatient.adress}}</p>\n        </div>\n      </div>\n      <div class=\"patient__blockright\">\n        <div class=\"patient__blockleft-age\">\n          <h2 class=\"patient__age-text\">Age</h2>\n          <p class=\"patient__age\">{{dataPatient.age}}</p>\n        </div>\n        <div class=\"patient__blockleft-sex\">\n          <h2 class=\"patient__sex-text\">Sex</h2>\n          <p class=\"patient__sex\">{{dataPatient.sex}}</p>\n        </div>\n        <div>\n          <h2 class=\"patient__date-text\">Last visit</h2>\n          <p class=\"patient__date\">{{dataPatient.date | date:'M/d/yy'}}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"task\">\n    <div>\n      <div class=\"task__titles-wrap\">\n        <h2 class=\"task__title active\" id=\"patient-info\" (click)=\"getPatientInfo()\">Current info</h2>\n        <h2 class=\"task__title\" id=\"patient-history\" (click)=\"getPatientHistory()\">History</h2>\n        <h2 class=\"task__title\" id=\"patient-labs\" (click)=\"getPatientLab()\">Labs/Pictures/Tests</h2>\n      </div>\n      <div class=\"task__description tabcontent\" id=\"info\" *ngIf=\"patient_info\">\n        <div class=\"task__info-wrap\">\n          <h2 class=\"task__number\">№ <span id=\"task_number\">{{dataPatient.task_number}}</span></h2>\n          <div class=\"task__edit\" (click)=\"editTextarea()\"><i class=\"fas fa-edit\"></i></div>\n          <textarea placeholder=\"Description of the disease\" class=\"task__sickDescription\" [(ngModel)]=\"dataPatient.task__description\" [disabled]=\"isDisabled\" id=\"task__sickDescription\"></textarea>\n          <div class=\"task__description-bottom\">\n            <div>\n              <h3 class=\"task__status-title\">Status task</h3>\n              <select class=\"task__status\" id=\"statusTask\" (change)=\"statusTask($event.target.value)\">\n                <option class=\"task__status-item\" value=\"execution\">Execution</option>\n                <option class=\"task__status-item\" value=\"done\">Done</option>\n              </select>\n            </div>\n            <div>\n              <h3 class=\"task__diagnos-title\">Diagnosis</h3>\n              <input type=\"text\" placeholder=\"Diagnosis..\" class=\"task__diagnos\" [(ngModel)]=\"dataPatient.dx\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"history tabcontent\" id=\"history\" *ngIf=\"patient_history\">\n        <table class=\"history__list\">\n          <tr>\n            <th>Number <i class=\"fas fa-sort\"></i>\n            </th>\n            <th>Name/Code <i class=\"fas fa-sort\"></i>\n            </th>\n            <th>Creation Date <i class=\"fas fa-sort\"></i>\n            </th>\n            <th>Submission deadline date <i class=\"fas fa-sort\"></i>\n            </th>\n            <th>Status <i class=\"fas fa-sort\"></i>\n            </th>\n          </tr>\n          <tr *ngFor=\"let task of tasks\">\n            <td>{{task.task_number}}</td>\n            <td>{{task.task_code}}</td>\n            <td>{{task.timeOpen | date:'medium'}}</td>\n            <td>{{task.timeClose | date:'medium'}}</td>\n            <td>{{task.task__status}}</td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"labs tabcontent\" id=\"labs\" *ngIf=\"patient_labs\">\n        <table class=\"labs__list\">\n          <tr>\n            <th>Number <i class=\"fas fa-sort\"></i>\n            </th>\n            <th>Name/Code <i class=\"fas fa-sort\"></i>\n            </th>\n            <th>Date <i class=\"fas fa-sort\"></i>\n            </th>\n          </tr>\n          <tr>\n            <td>1</td>\n            <td>Blood analysis</td>\n            <td>Nov 10, 2019</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>Blood analysis</td>\n            <td>Oct 15, 2019</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>Blood analysis</td>\n            <td>Sep 20, 2019</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </section>\n  <section class=\"sign\">\n    <div class=\"sign__buttons\">\n      <button class=\"sign__button\" (click)=\"openDetails()\">Action</button>\n      <button class=\"sign__saveTask\" *ngIf=\"buttonSaveTask\" (click)=\"saveTask()\">Save task</button>\n    </div>\n    <app-task *ngIf=\"openTask\"></app-task>\n    <div *ngFor=\"let task of dataPatient.tasks\" class=\"sign-block\">\n      <p class=\"sign-block__taskName\">{{task.name}}</p>\n      <p class=\"sign-block__details\" (click)=\"openTaskDescription(task)\">Details</p>\n      <div *ngIf=\"taskDescription\" class=\"sign-block__description-block\">\n        <div class=\"overlay_popup\" (click)=\"closeTaskDescription()\"></div>\n        <div class=\"sign-block__description-wrap\">\n          <button class=\"description_close\" type=\"button\" title=\"Close\" (click)=\"closeTaskDescription()\">Close</button>\n          <p class=\"sign-block__description\">{{taskDescription.description}}</p>\n        </div>\n      </div>\n      <div class=\"sign-block__date-wrap\">\n        <p class=\"sign-block__date\">{{task.timein | date:'dd.MM.yyyy'}}</p>\n        <p class=\"sign-block__time\">{{task.timein | date:'HH:mm'}}</p>\n      </div>\n      <div class=\"sign-block__date-wrap\">\n        <p class=\"sign-block__date\">{{task.timeout | date:'dd.MM.yyyy'}}</p>\n        <p class=\"sign-block__time\">{{task.timeout | date:'HH:mm'}}</p>\n      </div>\n      <div class=\"sign-block__persolnal-wrap\">\n        <p class=\"sign-block__personalName\">{{task.staff}}</p>\n        <p class=\"sign-block__personalTitle\">{{task.position}}</p>\n      </div>\n    </div>\n  </section>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"overlay_popup\" (click)=\"closeDetails()\"></div>\n  <div class=\"task-details\">\n    <div class=\"task-details__person\">\n      <p class=\"task-details__personalName\" id=\"subtaskStaff\">Felix Weiss</p>\n      <p class=\"task-details__personalTitle\" id=\"subtaskPosition\">Doctor</p>\n    </div>\n    <h2 class=\"task-details__title\">Subtask</h2>\n    <div class=\"task-details__top-action\">\n      <select [(ngModel)]=\"subtaskName\" id=\"subtaskName\">\n        <option value=\"Heart rate check\">Heart rate check</option>\n        <option value=\"Therapy and treatment\">Therapy and treatment</option>\n        <option value=\"Blood pressure control\">Blood pressure control</option>\n      </select>\n      <div *ngIf=\"notSelect\" class=\"task-details__notSelect\">\n        <p>Please select name of subtast</p>\n      </div>\n      <div class=\"task-details__timing\">\n        <div class=\"task-details__timing-wrap timingin\">\n          <button (click)=\"startTime()\" id=\"buttonin\" class=\"task-details__button\">Start</button>\n          <p class=\"task-details__date\" id=\"datein\"></p>\n          <p class=\"task-details__time\" id=\"timein\"></p>\n          <div *ngIf=\"notStart\" class=\"timingin__notStart\">\n            <p>Please start timing</p>\n          </div>\n        </div>\n        <div class=\"task-details__timing-wrap\">\n          <button (click)=\"stopTime()\" id=\"buttonout\" disabled class=\"task-details__button\">Stop</button>\n          <p class=\"task-details__date\" id=\"dateout\"></p>\n          <p class=\"task-details__time\" id=\"timeout\"></p>\n          <div *ngIf=\"notStop\" class=\"timingin__notStart\">\n            <p>Please stop timing</p>\n          </div>\n        </div>\n        <div>\n          <button (click)=\"resetTime()\" class=\"task-details__button\">New start</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"task-details__bottom-action\">\n      <textarea name=\"\" id=\"subtaskDescription\" cols=\"30\" rows=\"10\" placeholder=\"Description of the subtask\" [(ngModel)]=\"subtaskDescription\"></textarea>\n      <div *ngIf=\"notFillField\">\n        <p class=\"task-details__errorText\">Please fill the field</p>\n      </div>\n      <div class=\"bottom-action__buttons\">\n        <button class=\"task-details__button\" (click)=\"saveSubtask()\">Save</button>\n        <button class=\"task-details__button\" (click)=\"closeDetails()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUnitsUnitsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"units\">\n  <h2 class=\"units__title\">Units of the hospital</h2>\n  <div class=\"units-wrap\">\n    <div *ngFor=\"let unit of units\" class=\"units__item\" routerLink=\"/{{unit.link}}\">\n      <img src=\"{{unit.url}}\" alt=\"{{unit.name}}\" class=\"img\">\n      <p class=\"item__text\">{{unit.name}}</p>\n    </div>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _units_units_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./units/units.component */
    "./src/app/units/units.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _patient_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./patient/patient.component */
    "./src/app/patient/patient.component.ts");

    var routes = [{
      path: '',
      component: _units_units_component__WEBPACK_IMPORTED_MODULE_3__["UnitsComponent"]
    }, {
      path: ':link',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    }, {
      path: ':link/:linkName',
      component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_5__["PatientComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'code';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _units_units_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./units/units.component */
    "./src/app/units/units.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _patient_patient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./patient/patient.component */
    "./src/app/patient/patient.component.ts");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/task/task.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _units_units_component__WEBPACK_IMPORTED_MODULE_7__["UnitsComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _patient_patient_component__WEBPACK_IMPORTED_MODULE_9__["PatientComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/data.ts":
  /*!*************************!*\
    !*** ./src/app/data.ts ***!
    \*************************/

  /*! exports provided: DATA */

  /***/
  function srcAppDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DATA", function () {
      return DATA;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DATA = [{
      id: 1,
      name: 'Therapy Department',
      link: 'Therapy',
      url: '../assets/units_foto/therapy_department.jpg',
      patient: [{
        name: 'Anna Schmidt',
        dx: 'Grippe',
        date: '2019-10-20T09:30:00.000Z',
        staff: 'Katrin Sommer',
        position: 'Doctor',
        age: 30,
        sex: 'Mrs',
        adress: 'Friedrich-Schmidt-Platz 0, 1010 Wien',
        foto: '../assets/patients_foto/patien1.png',
        task_number: 341,
        task__description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        task__status: 'execution',
        tasks: [{
          task_code: 'DIAG01',
          name: 'Heart rate check',
          timein: '2019-11-10T16:51:50.969Z',
          timeout: '2019-11-10T17:01:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          staff: "Gabriele Huber",
          position: 'GHS'
        }, {
          task_code: 'DIAG02',
          name: 'Therapy and treatment',
          timein: '2019-11-10T14:51:50.969Z',
          timeout: '2019-12-21T15:51:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: 'Kerstin Gruber',
          position: 'Doctor'
        }, {
          task_code: 'DIAG03',
          name: 'Blood pressure control',
          timein: '2019-12-21T15:31:50.969Z',
          timeout: '2019-12-21T15:40:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: "Dominik Schwarz",
          position: 'Care assistant'
        }]
      }, {
        name: 'Hannah Smith',
        dx: 'Hypertonische Krisen',
        date: "2019-09-19T12:40:00.000Z",
        age: 55,
        sex: "Mrs",
        adress: 'Sudirman Street 0, 10110 Jakarta',
        foto: '../assets/patients_foto/patient2.jpg',
        staff: "Tanja Fuchs",
        position: 'Doctor',
        task_number: 342,
        task__description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        task__status: 'execution',
        tasks: [{
          task_code: 'DIAG02',
          name: 'Heart rate check',
          timein: '2019-09-01T16:51:50.969Z',
          timeout: '2019-09-01T17:01:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          staff: "Dominik Huber",
          position: 'GHS'
        }, {
          task_code: 'DIAG02',
          name: 'Therapy and treatment',
          timein: '2019-11-10T14:51:50.969Z',
          timeout: '2019-12-21T15:51:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: 'Kerstin Gruber',
          position: 'Doctor'
        }, {
          task_code: 'TBV01',
          name: 'Blood pressure control',
          timein: '2019-09-21T15:31:50.969Z',
          timeout: '2019-09-21T15:40:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: "Ulrich Krenn",
          position: 'Care assistant'
        }]
      }, {
        name: 'Christina Johnson',
        dx: 'Myokardinfarkt',
        date: "2019-11-16T15:45:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 80,
        sex: "Mrs",
        adress: 'Paranthe Wali Gali 0, 110001 Delhi',
        foto: '../assets/patients_foto/patient3.jpg',
        task_number: 343,
        task__description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        task__status: 'execution',
        tasks: [{
          task_code: 'DIAG02',
          name: 'Heart rate check',
          timein: '2019-09-01T16:51:50.969Z',
          timeout: '2019-09-01T17:01:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          staff: "Dominik Huber",
          position: 'GHS'
        }, {
          task_code: 'DIAG02',
          name: 'Therapy and treatment',
          timein: '2019-11-10T14:51:50.969Z',
          timeout: '2019-12-21T15:51:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: 'Katrin Sommer',
          position: 'Doctor'
        }, {
          task_code: 'TBV01',
          name: 'Blood pressure control',
          timein: '2019-09-21T15:31:50.969Z',
          timeout: '2019-09-21T15:40:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: "Ulrich Krenn",
          position: 'Care assistant'
        }]
      }, {
        name: 'Christian Williams',
        dx: 'Bronchialasthma',
        date: "2019-11-22T05:00:00.000Z",
        staff: "Dominik Schwarz",
        position: 'Care assistant',
        age: 25,
        sex: "Mrs",
        adress: 'Folgueras Street 0, 1000 Manila',
        foto: '../assets/patients_foto/patient4.jpg',
        task_number: 344,
        task__description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        task__status: 'execution',
        tasks: [{
          task_code: 'DIAG02',
          name: 'Heart rate check',
          timein: '2019-09-01T16:51:50.969Z',
          timeout: '2019-09-01T17:01:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          staff: "Dominik Huber",
          position: 'GHS'
        }, {
          task_code: 'DIAG02',
          name: 'Therapy and treatment',
          timein: '2019-11-10T14:51:50.969Z',
          timeout: '2019-12-21T15:51:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: 'Katrin Sommer',
          position: 'Doctor'
        }, {
          task_code: 'TBV01',
          name: 'Blood pressure control',
          timein: '2019-09-21T15:31:50.969Z',
          timeout: '2019-09-21T15:40:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: "Ulrich Krenn",
          position: 'Care assistant'
        }]
      }, {
        name: 'Paul Jones',
        dx: 'Osteoarthrose',
        date: "2019-11-21T11:20:00.000Z",
        staff: 'Ulrich Krenn',
        position: 'GHS',
        age: 31,
        sex: "Mr",
        adress: 'Myeongdong 0, 100011 Seoul',
        foto: '../assets/patients_foto/patient5.jpg'
      }, {
        name: 'Michelle Schulze',
        dx: 'Chronische myeloische Leukämie',
        date: "2019-11-20T10:05:00.000Z",
        staff: 'Kerstin Gruber',
        position: 'Doctor',
        age: 70,
        sex: "Mr",
        adress: 'Yuyuan Old Street  0, 200000 Shanghai',
        foto: '../assets/patients_foto/patient6.jpg',
        task_number: 345,
        task__description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        task__status: 'execution',
        tasks: [{
          task_code: 'DIAG02',
          name: 'Heart rate check',
          timein: '2019-09-01T16:51:50.969Z',
          timeout: '2019-09-01T17:01:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          staff: "Dominik Huber",
          position: 'GHS'
        }, {
          task_code: 'DIAG02',
          name: 'Therapy and treatment',
          timein: '2019-11-10T14:51:50.969Z',
          timeout: '2019-12-21T15:51:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: 'Katrin Sommer',
          position: 'Doctor'
        }, {
          task_code: 'TBV01',
          name: 'Blood pressure control',
          timein: '2019-09-21T15:31:50.969Z',
          timeout: '2019-09-21T15:40:50.969Z',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          staff: "Ulrich Krenn",
          position: 'Care assistant'
        }]
      }]
    }, {
      id: 2,
      name: 'Surgery Department',
      link: 'Surgery',
      url: '../assets/units_foto/surgery_department.jpg',
      patient: [{
        name: 'Hannah Smith',
        dx: 'Hypertonische Krisen',
        date: "2019-11-19T12:40:00.000Z",
        staff: 'Kerstin Gruber',
        position: 'Doctor',
        age: 55,
        sex: "Mrs",
        adress: 'Sudirman Street 0, 10110 Jakarta',
        foto: '../assets/patients_foto/patient2.jpg'
      }, {
        name: 'Christina Johnson',
        dx: 'Myokardinfarkt',
        date: "2019-11-16T15:45:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 80,
        sex: "Mrs",
        adress: 'Paranthe Wali Gali 0, 110001 Delhi',
        foto: '../assets/patients_foto/patient3.jpg'
      }, {
        name: 'Christian Williams',
        dx: 'Bronchialasthma',
        date: "2019-11-22T05:00:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 25,
        sex: "Mrs",
        adress: 'Folgueras Street 0, 1000 Manila',
        foto: '../assets/patients_foto/patient4.jpg'
      }, {
        name: 'Michelle Schulze',
        dx: 'Chronische myeloische Leukämie',
        date: "2019-11-20T10:05:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 70,
        sex: "Mr",
        adress: 'Yuyuan Old Street  0, 200000 Shanghai',
        foto: '../assets/patients_foto/patient6.jpg'
      }]
    }, {
      id: 3,
      name: 'Clinic of Neurology',
      link: 'Neurology',
      url: '../assets/units_foto/clinic_of_neurology.jpg',
      patient: [{
        name: 'Christina Johnson',
        dx: 'Myokardinfarkt',
        date: "2019-11-16T15:45:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 80,
        sex: "Mrs",
        adress: 'Paranthe Wali Gali 0, 110001 Delhi',
        foto: '../assets/patients_foto/patient3.jpg'
      }, {
        name: 'Christian Williams',
        dx: 'Bronchialasthma',
        date: "2019-11-22T05:00:00.000Z",
        staff: "Tanja Fuchs",
        position: 'Doctor',
        age: 25,
        sex: "Mrs",
        adress: 'Folgueras Street 0, 1000 Manila',
        foto: '../assets/patients_foto/patient4.jpg'
      }, {
        name: 'Paul Jones',
        dx: 'Osteoarthrose',
        date: "2019-11-21T11:20:00.000Z",
        staff: "Tanja Fuchs",
        position: 'Doctor',
        age: 31,
        sex: "Mr",
        adress: 'Myeongdong 0, 100011 Seoul',
        foto: '../assets/patients_foto/patient5.jpg'
      }, {
        name: 'Michelle Schulze',
        dx: 'Chronische myeloische Leukämie',
        date: "2019-11-20T10:05:00.000Z",
        staff: "Tanja Fuchs",
        position: 'Doctor',
        age: 70,
        sex: "Mr",
        adress: 'Yuyuan Old Street  0, 200000 Shanghai',
        foto: '../assets/patients_foto/patient6.jpg'
      }]
    }, {
      id: 4,
      name: 'Cardiology Department',
      link: 'Cardiology',
      url: '../assets/units_foto/cardiology_department.jpg',
      patient: [{
        name: 'Christian Williams',
        dx: 'Bronchialasthma',
        date: "2019-11-22T05:00:00.000Z",
        staff: "Tanja Fuchs",
        position: 'Doctor',
        age: 25,
        sex: "Mrs",
        adress: 'Folgueras Street 0, 1000 Manila',
        foto: '../assets/patients_foto/patient4.jpg'
      }, {
        name: 'Paul Jones',
        dx: 'Osteoarthrose',
        date: "2019-11-21T11:20:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 31,
        sex: "Mr",
        adress: 'Myeongdong 0, 100011 Seoul',
        foto: '../assets/patients_foto/patient5.jpg'
      }, {
        name: 'Michelle Schulze',
        dx: 'Chronische myeloische Leukämie',
        date: "2019-11-20T10:05:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 70,
        sex: "Mr",
        adress: 'Yuyuan Old Street  0, 200000 Shanghai',
        foto: '../assets/patients_foto/patient6.jpg'
      }]
    }, {
      id: 5,
      name: 'Department of Gastroenterology',
      link: 'Gastroenterology',
      url: '../assets/units_foto/department_of_gastroenterology.jpg',
      patient: [{
        name: 'Paul Jones',
        dx: 'Osteoarthrose',
        date: "2019-11-21T11:20:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 31,
        sex: "Mr",
        adress: 'Myeongdong 0, 100011 Seoul',
        foto: '../assets/patients_foto/patient5.jpg'
      }, {
        name: 'Michelle Schulze',
        dx: 'Chronische myeloische Leukämie',
        date: "2019-11-20T10:05:00.000Z",
        staff: "Dominik Schwarz",
        position: 'Care assistant',
        age: 70,
        sex: "Mr",
        adress: 'Yuyuan Old Street  0, 200000 Shanghai',
        foto: '../assets/patients_foto/patient6.jpg'
      }]
    }, {
      id: 6,
      name: 'Allergy Department',
      link: 'Allergy',
      url: '../assets/units_foto/allergy_department.jpg',
      patient: [{
        name: 'Michelle Schulze',
        dx: 'Chronische myeloische Leukämie',
        date: "2019-11-20T10:05:00.000Z",
        staff: "Katrin Sommer",
        position: 'Doctor',
        age: 70,
        sex: "Mr",
        adress: 'Yuyuan Old Street  0, 200000 Shanghai',
        foto: '../assets/patients_foto/patient6.jpg'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/data_task.ts":
  /*!******************************!*\
    !*** ./src/app/data_task.ts ***!
    \******************************/

  /*! exports provided: TASK */

  /***/
  function srcAppData_taskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASK", function () {
      return TASK;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TASK = [{
      task_number: 336,
      task_code: 'DIAG01',
      task__status: 'Done',
      dx: 'Grippe',
      timeOpen: '2019-09-01T16:51:50.969Z',
      timeClose: '2019-09-01T17:01:50.969Z',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      staff: "Dominik Huber",
      position: 'GHS'
    }, {
      task_number: 337,
      task_code: 'DIAG02',
      task__status: 'Done',
      dx: 'Osteoarthrose',
      timeOpen: '2019-11-10T14:51:50.969Z',
      timeClose: '2019-12-21T15:51:50.969Z',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      staff: 'Katrin Sommer',
      position: 'Doctor'
    }, {
      task_number: 338,
      task_code: 'DIAG03',
      task__status: 'Done',
      dx: 'Hypertonische Krisen',
      timeOpen: '2019-09-21T15:31:50.969Z',
      timeClose: '2019-09-21T15:40:50.969Z',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      staff: "Ulrich Krenn",
      position: 'Care assistant'
    }];
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  width: 1200px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 50px;\n  background: #FFFFFF;\n  mix-blend-mode: normal;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.06);\n  border-radius: 0 10px 10px 10px;\n}\n.header .header-wrap {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__logo {\n  height: 50px;\n  margin-left: 50px;\n}\n.header__logo-img {\n  height: 70px;\n  margin-top: -10px;\n  cursor: pointer;\n}\n.header__title {\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 22px;\n  margin: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.header__nav {\n  display: flex;\n  margin-right: 50px;\n}\n.nav__message {\n  margin-right: 50px;\n  font-size: 27px;\n  color: #70c4b4;\n}\n.nav__login {\n  font-size: 27px;\n  color: #70c4b4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxwcm9qZWN0XFx0ZXN0XFxob3NwaXRhbFxcY29kZS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0JBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRko7QURLRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNISjtBRE1FO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0pKO0FET0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FsRFk7QUMyQ2hCO0FEVUU7RUFDRSxlQUFBO0VBQ0EsY0F2RFk7QUMrQ2hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjNzBjNGI0O1xyXG5cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XHJcblxyXG4gIC5oZWFkZXItd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xvZ28ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAmX19sb2dvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX25hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdiB7XHJcbiAgJl9fbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgfVxyXG5cclxuICAmX19sb2dpbiB7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXIge1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XG59XG4uaGVhZGVyIC5oZWFkZXItd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLmhlYWRlcl9fbG9nby1pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlcl9fbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4ubmF2X19tZXNzYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDI3cHg7XG4gIGNvbG9yOiAjNzBjNGI0O1xufVxuLm5hdl9fbG9naW4ge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGNvbG9yOiAjNzBjNGI0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.logo = '../assets/icon-logo.png';
        this.title = 'Hospital HELP';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/list/list.component.scss":
  /*!******************************************!*\
    !*** ./src/app/list/list.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.unit {\n  width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.unit__back-button {\n  margin-top: 22px;\n  margin-left: 12px;\n  margin-bottom: 22px;\n  background: none;\n  border: none;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 16px;\n  color: #70C4B4;\n}\n.unit__back-button:before {\n  content: \" ❮\";\n  margin-right: 3px;\n}\n.unit__title {\n  text-align: center;\n}\n.unit__subhead {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.unit__search {\n  padding: 5px 10px;\n}\n.unit-list {\n  width: 100%;\n}\n.unit-list__title {\n  text-align: left;\n  color: #868686;\n  width: 214px;\n}\n.unit-list__name {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 26px;\n  color: #70c4b4;\n  cursor: pointer;\n}\n.unit-list__position {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saXN0L0Y6XFxwcm9qZWN0XFx0ZXN0XFxob3NwaXRhbFxcY29kZS9zcmNcXGFwcFxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEI7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRERGO0FDR0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRERKO0FDSUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QURGSjtBQ0tFO0VBQ0Usa0JBQUE7QURISjtBQ01FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QURKSjtBQ09FO0VBQ0UsaUJBQUE7QURMSjtBQ1NBO0VBQ0UsV0FBQTtBRE5GO0FDUUU7RUFDRSxnQkFBQTtFQUNBLGNBN0NTO0VBOENULFlBQUE7QUROSjtBQ1NFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBdkRZO0VBd0RaLGVBQUE7QURQSjtBQ1VFO0VBQ0UsZUFBQTtBRFJKIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnVuaXQge1xuICB3aWR0aDogMTEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnVuaXRfX2JhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6ICM3MEM0QjQ7XG59XG4udW5pdF9fYmFjay1idXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCIg4p2uXCI7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLnVuaXRfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVuaXRfX3N1YmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udW5pdF9fc2VhcmNoIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi51bml0LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi51bml0LWxpc3RfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4Njg2ODY7XG4gIHdpZHRoOiAyMTRweDtcbn1cbi51bml0LWxpc3RfX25hbWUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiAjNzBjNGI0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udW5pdC1saXN0X19wb3NpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzcwYzRiNDtcclxuJGdyZXktY29sb3I6ICM4Njg2ODY7XHJcblxyXG4udW5pdCB7XHJcbiAgd2lkdGg6IDExMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICZfX2JhY2stYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGNvbG9yOiAjNzBDNEI0O1xyXG4gIH1cclxuXHJcbiAgJl9fYmFjay1idXR0b246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcgXFwyNzZFJztcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fc3ViaGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3NlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi51bml0LWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICRncmV5LWNvbG9yO1xyXG4gICAgd2lkdGg6IDIxNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19wb3NpdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../units.service */
    "./src/app/units.service.ts");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(route, unitsService, location) {
        _classCallCheck(this, ListComponent);

        this.route = route;
        this.unitsService = unitsService;
        this.location = location;
        this.toggle = true;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLink();
        }
      }, {
        key: "getLink",
        value: function getLink() {
          var _this = this;

          var link = this.route.snapshot.paramMap.get('link');
          this.unitsService.getLink(link).subscribe(function (link) {
            return _this.link = link;
          });
          var linkData = this.link.patient;
          var newName = {
            linkName: 'test'
          };

          for (var key in linkData) {
            newName.linkName = linkData[key].name.replace(/\s/g, '');
            Object.assign(linkData[key], newName);
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "sortName",
        value: function sortName() {
          var _this2 = this;

          this.toggle = !this.toggle;
          var patients = this.link.patient;
          patients.sort(function (a, b) {
            return _this2.toggle ? +(a.name > b.name) || -(a.name < b.name) : -(a.name > b.name) || +(a.name < b.name);
          });
        }
      }, {
        key: "sortDx",
        value: function sortDx() {
          var _this3 = this;

          this.toggle = !this.toggle;
          var patients = this.link.patient;
          patients.sort(function (a, b) {
            return _this3.toggle ? +(a.dx > b.dx) || -(a.dx < b.dx) : -(a.dx > b.dx) || +(a.dx < b.dx);
          });
        }
      }, {
        key: "sortVisit",
        value: function sortVisit() {
          var _this4 = this;

          this.toggle = !this.toggle;
          var patients = this.link.patient;
          patients.sort(function (a, b) {
            return _this4.toggle ? +(a.date > b.date) || -(a.date < b.date) : -(a.date > b.date) || +(a.date < b.date);
          });
        }
      }, {
        key: "sortStaff",
        value: function sortStaff() {
          var _this5 = this;

          this.toggle = !this.toggle;
          var patients = this.link.patient;
          patients.sort(function (a, b) {
            return _this5.toggle ? +(a.staff > b.staff) || -(a.staff < b.staff) : -(a.staff > b.staff) || +(a.staff < b.staff);
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("listInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("list");
          tr = table.getElementsByTagName("tr");

          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];

            if (td) {
              txtValue = td.textContent || td.innerText;

              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _units_service__WEBPACK_IMPORTED_MODULE_4__["UnitsService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/list/list.component.scss")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/patient/patient.component.scss":
  /*!************************************************!*\
    !*** ./src/app/patient/patient.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPatientPatientComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.patient {\n  width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.patient__back-button {\n  margin-top: 22px;\n  margin-left: 12px;\n  margin-bottom: 22px;\n  background: none;\n  border: none;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 16px;\n  color: #70C4B4;\n  cursor: pointer;\n}\n.patient__back-button:before {\n  content: \" ❮\";\n  margin-right: 3px;\n}\n.patient__data {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.patient__blockleft {\n  display: flex;\n  width: 400px;\n  height: 125px;\n  background: #FFFFFF;\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05), -5px -5px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n}\n.patient__foto {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: 22px 30px 23px 30px;\n}\n.patient__name {\n  margin-top: 26px;\n  margin-bottom: 7px;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #000000;\n}\n.patient__adress {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 16px;\n}\n.patient__blockright {\n  display: flex;\n  width: 670px;\n  height: 125px;\n  background: #FFFFFF;\n  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.05), 5px 10px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n}\n.patient__blockleft-age, .patient__blockleft-sex {\n  position: relative;\n  width: 223px;\n}\n.patient__blockleft-age:after, .patient__blockleft-sex:after {\n  position: absolute;\n  content: \"\";\n  right: 0;\n  top: 25px;\n  width: 1px;\n  height: 75px;\n  background: #F1F1F1;\n}\n.patient__age-text, .patient__sex-text, .patient__date-text {\n  margin: 23px 0 21px 30px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #868686;\n}\n.patient__age, .patient__sex, .patient__date {\n  margin-left: 30px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 30px;\n  line-height: 34px;\n  color: #141A39;\n}\n.task {\n  margin-bottom: 50px;\n}\n.task__titles-wrap {\n  display: flex;\n  justify-content: space-between;\n  width: 435px;\n}\n.task__title {\n  margin: 0;\n  padding: 6px 14px 6px 15px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 22px;\n  border-radius: 10px 10px 0 0;\n  color: #868686;\n  background-color: #F0F0F0;\n  cursor: pointer;\n}\n.task__title.active {\n  font-family: Roboto Medium;\n  color: #000;\n  background: #FFFFFF;\n  box-shadow: 7px -5px 10px rgba(0, 0, 0, 0.05), -7px 12px 11px rgba(0, 0, 0, 0.05), -8px -9px 10px rgba(0, 0, 0, 0.05);\n}\n.task__description {\n  position: relative;\n  background-color: #fff;\n}\n.task__info-wrap,\n.task .history,\n.task .labs {\n  position: relative;\n  width: 1100px;\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05), -5px 10px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 0 0 10px 10px;\n}\n.task__number {\n  margin-top: 0;\n  margin-left: 50px;\n  margin-bottom: 1.83px;\n  padding-top: 15.02px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #B5B4B8;\n}\n.task__edit {\n  position: absolute;\n  right: 55px;\n  font-size: 16px;\n  top: 15px;\n}\n.task__edit .fa-edit:before {\n  color: #70C4B4;\n}\n.task__sickDescription {\n  margin-left: 50px;\n  margin-bottom: 18px;\n  padding: 10px 11px;\n  width: 1000px;\n  height: 224px;\n  background: #FFFFFF;\n  border: 1px solid #B5B4B8;\n  box-sizing: border-box;\n  border-radius: 10px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #3B3B3D;\n}\n.task__description-bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 50px;\n  margin-right: 50px;\n}\n.task__status-title {\n  margin: 0;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #B5B4B8;\n  margin-bottom: 8px;\n}\n.task__status {\n  margin-bottom: 47px;\n  padding: 5px 13px 4px 12px;\n  background: #70C4B4;\n  border: 1px solid #54CAB4;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #FFFFFF;\n  -webkit-appearance: button;\n  -moz-appearance: button;\n       appearance: button;\n  cursor: pointer;\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n.task__status-item {\n  background: #43AFFF;\n  border-radius: 0 0 7px 7px;\n}\n.task__diagnos-title {\n  margin-top: 0px;\n  margin-bottom: 8px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #B5B4B8;\n}\n.task__diagnos {\n  padding: 5px 10px;\n  width: 500px;\n  height: 35px;\n  border: 1px solid #B5B4B8;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n.history {\n  position: relative;\n  background-color: #fff;\n}\n.history__list {\n  padding: 50px;\n  width: 100%;\n}\n.history__list th {\n  text-align: left;\n}\n.history__list td {\n  padding: 5px 0;\n}\n.labs {\n  position: relative;\n  background-color: #fff;\n}\n.labs__list {\n  padding: 50px;\n  width: 100%;\n}\n.labs__list th {\n  text-align: left;\n}\n.labs__list td {\n  padding: 5px 0;\n}\n.sign__saveTask, .sign__button {\n  margin-bottom: 70px;\n  padding: 5px 24px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  border-radius: 5px;\n  border: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.sign {\n  margin-bottom: 50px;\n}\n.sign__buttons {\n  display: flex;\n  justify-content: center;\n}\n.sign__button {\n  background-color: #43AFFF;\n}\n.sign__button:hover {\n  background-color: #00c8ff;\n}\n.sign__saveTask {\n  background-color: #70C4B4;\n  margin-left: 30px;\n}\n.sign__saveTask:hover {\n  background-color: #54CAB4;\n}\n.sign-block {\n  display: flex;\n  justify-content: space-between;\n}\n.sign-block p {\n  margin: 0;\n}\n.sign-block__taskName {\n  width: 20vw;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 17px;\n  color: #000000;\n}\n.sign-block__details {\n  width: 20vw;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 15px;\n  line-height: 17px;\n  color: #43AFFF;\n  text-align: center;\n  cursor: pointer;\n}\n.sign-block__description-block {\n  width: 500px;\n  margin-left: -250px;\n  position: fixed;\n  z-index: 10;\n  top: 50%;\n  left: 50%;\n  background-color: #ffffff;\n  border: 2px solid #70C4B4;\n  outline: none;\n  box-shadow: 0px 8px 23px 0px rgba(0, 0, 0, 0.3);\n}\n.sign-block__description-block .overlay_popup {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  cursor: pointer;\n}\n.sign-block__description-wrap {\n  position: relative;\n  cursor: default;\n  z-index: 2;\n}\n.sign-block .description_close {\n  position: absolute;\n  top: -5px;\n  right: -30px;\n  width: 22px;\n  height: 22px;\n  font-size: 0;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: none;\n  outline: none;\n}\n.sign-block .description_close::after {\n  transform: rotate(-45deg);\n}\n.sign-block .description_close::before {\n  transform: rotate(45deg);\n}\n.sign-block .description_close::before,\n.sign-block .description_close::after {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 2px;\n  width: 19px;\n  height: 3px;\n  background-color: #d0d0d0;\n  border-radius: 1px;\n}\n.sign-block__description {\n  padding: 15px;\n  background-color: #fff;\n}\n.sign-block__date-wrap {\n  width: 20vw;\n  text-align: center;\n}\n.sign-block__date {\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 15px;\n  line-height: 17px;\n  color: #000000;\n}\n.sign-block__time {\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 17px;\n  color: #000000;\n}\n.sign-block__persolnal-wrap {\n  width: 20vw;\n  text-align: right;\n}\n.sign-block__personalName {\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: #000000;\n}\n.sign-block__personalTitle {\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 15px;\n  line-height: 17px;\n  color: #B5B4B8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXRpZW50L0Y6XFxwcm9qZWN0XFx0ZXN0XFxob3NwaXRhbFxcY29kZS9zcmNcXGFwcFxccGF0aWVudFxccGF0aWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNPaEI7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRExGO0FDT0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURMSjtBQ1FFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FETko7QUNTRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FEUEo7QUNVRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUZBQUE7RUFDQSxtQkFBQTtBRFJKO0FDV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QURUSjtBQ1lFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEVko7QUNhRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURYSjtBQ2NFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpRkFBQTtFQUNBLG1CQUFBO0FEWko7QUNlRTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtBRGRKO0FDaUJFO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEaEJKO0FDb0JFO0VBR0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0F4R2E7QURvRmpCO0FDdUJFO0VBR0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FoSFc7QUR5RmY7QUMyQkE7RUFDRSxtQkFBQTtBRHhCRjtBQzBCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUR4Qko7QUMyQkU7RUFDRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQXhJYTtFQXlJYix5QkF4SWM7RUF5SWQsZUFBQTtBRHpCSjtBQzRCRTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUhBQUE7QUQxQko7QUM2QkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FEM0JKO0FDOEJFOzs7RUFHRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpRkFBQTtFQUNBLDRCQUFBO0FENUJKO0FDK0JFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXpLUztBRDRJYjtBQ2dDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FEOUJKO0FDZ0NJO0VBQ0UsY0F0TFE7QUR3SmQ7QUNvQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURsQ0o7QUNzQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEcENKO0FDdUNFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXhOUztFQXlOVCxrQkFBQTtBRHJDSjtBQ3dDRTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtPQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7QUR0Q0o7QUN5Q0U7RUFDRSxtQkE3T1M7RUE4T1QsMEJBQUE7QUR2Q0o7QUMwQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQTNQUztBRG1OYjtBQzJDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUR6Q0o7QUM4Q0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FEM0NGO0FDNkNFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUQzQ0o7QUM2Q0k7RUFDRSxnQkFBQTtBRDNDTjtBQzhDSTtFQUNFLGNBQUE7QUQ1Q047QUNpREE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FEOUNGO0FDZ0RFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUQ5Q0o7QUNnREk7RUFDRSxnQkFBQTtBRDlDTjtBQ2lESTtFQUNFLGNBQUE7QUQvQ047QUNvREE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURqREY7QUNvREE7RUFDRSxtQkFBQTtBRGpERjtBQ21ERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBRGpESjtBQ3NERTtFQUVFLHlCQXJVUztBRGdSYjtBQ3dERTtFQUNFLHlCQUFBO0FEdERKO0FDeURFO0VBRUUseUJBblZVO0VBb1ZWLGlCQUFBO0FEeERKO0FDMkRFO0VBQ0UseUJBQUE7QUR6REo7QUM2REE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUQxREY7QUM0REU7RUFDRSxTQUFBO0FEMURKO0FDNkRFO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUQzREo7QUM4REU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBL1dTO0VBZ1hULGtCQUFBO0VBQ0EsZUFBQTtBRDVESjtBQytERTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUVBLCtDQUFBO0FEN0RKO0FDZ0VJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEOUROO0FDa0VFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRGhFSjtBQ21FRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURqRUo7QUNvRUU7RUFFRSx5QkFBQTtBRGxFSjtBQ3FFRTtFQUVFLHdCQUFBO0FEbkVKO0FDc0VFOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFDRTtFQUNGLGtCQUFBO0FEckVKO0FDd0VFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEdEVKO0FDeUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEdkVKO0FDMEVFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUR4RUo7QUMyRUU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRHpFSjtBQzRFRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBRDFFSjtBQzZFRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEM0VKO0FDOEVFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBMWVTO0FEOFpiIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBhdGllbnQge1xuICB3aWR0aDogMTEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnBhdGllbnRfX2JhY2stYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6ICM3MEM0QjQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXRpZW50X19iYWNrLWJ1dHRvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIiDina5cIjtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4ucGF0aWVudF9fZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5wYXRpZW50X19ibG9ja2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTI1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgLTVweCAtNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wYXRpZW50X19mb3RvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDIycHggMzBweCAyM3B4IDMwcHg7XG59XG4ucGF0aWVudF9fbmFtZSB7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucGF0aWVudF9fYWRyZXNzIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLnBhdGllbnRfX2Jsb2NrcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNjcwcHg7XG4gIGhlaWdodDogMTI1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IC01cHggLTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDVweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wYXRpZW50X19ibG9ja2xlZnQtYWdlLCAucGF0aWVudF9fYmxvY2tsZWZ0LXNleCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIyM3B4O1xufVxuLnBhdGllbnRfX2Jsb2NrbGVmdC1hZ2U6YWZ0ZXIsIC5wYXRpZW50X19ibG9ja2xlZnQtc2V4OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICByaWdodDogMDtcbiAgdG9wOiAyNXB4O1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XG59XG4ucGF0aWVudF9fYWdlLXRleHQsIC5wYXRpZW50X19zZXgtdGV4dCwgLnBhdGllbnRfX2RhdGUtdGV4dCB7XG4gIG1hcmdpbjogMjNweCAwIDIxcHggMzBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzg2ODY4Njtcbn1cbi5wYXRpZW50X19hZ2UsIC5wYXRpZW50X19zZXgsIC5wYXRpZW50X19kYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgY29sb3I6ICMxNDFBMzk7XG59XG5cbi50YXNrIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi50YXNrX190aXRsZXMtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDQzNXB4O1xufVxuLnRhc2tfX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA2cHggMTRweCA2cHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICBjb2xvcjogIzg2ODY4NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2tfX3RpdGxlLmFjdGl2ZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogN3B4IC01cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAtN3B4IDEycHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAtOHB4IC05cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLnRhc2tfX2Rlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnRhc2tfX2luZm8td3JhcCxcbi50YXNrIC5oaXN0b3J5LFxuLnRhc2sgLmxhYnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgLTVweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cbi50YXNrX19udW1iZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMS44M3B4O1xuICBwYWRkaW5nLXRvcDogMTUuMDJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogI0I1QjRCODtcbn1cbi50YXNrX19lZGl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0b3A6IDE1cHg7XG59XG4udGFza19fZWRpdCAuZmEtZWRpdDpiZWZvcmUge1xuICBjb2xvcjogIzcwQzRCNDtcbn1cbi50YXNrX19zaWNrRGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZzogMTBweCAxMXB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBoZWlnaHQ6IDIyNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjVCNEI4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjM0IzQjNEO1xufVxuLnRhc2tfX2Rlc2NyaXB0aW9uLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi50YXNrX19zdGF0dXMtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICNCNUI0Qjg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi50YXNrX19zdGF0dXMge1xuICBtYXJnaW4tYm90dG9tOiA0N3B4O1xuICBwYWRkaW5nOiA1cHggMTNweCA0cHggMTJweDtcbiAgYmFja2dyb3VuZDogIzcwQzRCNDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU0Q0FCNDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYXBwZWFyYW5jZTogYnV0dG9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuLnRhc2tfX3N0YXR1cy1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzQzQUZGRjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDdweCA3cHg7XG59XG4udGFza19fZGlhZ25vcy10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjQjVCNEI4O1xufVxuLnRhc2tfX2RpYWdub3Mge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCNUI0Qjg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5oaXN0b3J5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmhpc3RvcnlfX2xpc3Qge1xuICBwYWRkaW5nOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5oaXN0b3J5X19saXN0IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5oaXN0b3J5X19saXN0IHRkIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5sYWJzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmxhYnNfX2xpc3Qge1xuICBwYWRkaW5nOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5sYWJzX19saXN0IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sYWJzX19saXN0IHRkIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5zaWduX19zYXZlVGFzaywgLnNpZ25fX2J1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIHBhZGRpbmc6IDVweCAyNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lnbiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2lnbl9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZ25fX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M0FGRkY7XG59XG4uc2lnbl9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzhmZjtcbn1cbi5zaWduX19zYXZlVGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MEM0QjQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuLnNpZ25fX3NhdmVUYXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0Q0FCNDtcbn1cblxuLnNpZ24tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2lnbi1ibG9jayBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNpZ24tYmxvY2tfX3Rhc2tOYW1lIHtcbiAgd2lkdGg6IDIwdnc7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnNpZ24tYmxvY2tfX2RldGFpbHMge1xuICB3aWR0aDogMjB2dztcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzQzQUZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lnbi1ibG9ja19fZGVzY3JpcHRpb24tYmxvY2sge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MEM0QjQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5zaWduLWJsb2NrX19kZXNjcmlwdGlvbi1ibG9jayAub3ZlcmxheV9wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZ24tYmxvY2tfX2Rlc2NyaXB0aW9uLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgei1pbmRleDogMjtcbn1cbi5zaWduLWJsb2NrIC5kZXNjcmlwdGlvbl9jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTMwcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2lnbi1ibG9jayAuZGVzY3JpcHRpb25fY2xvc2U6OmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLnNpZ24tYmxvY2sgLmRlc2NyaXB0aW9uX2Nsb3NlOjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnNpZ24tYmxvY2sgLmRlc2NyaXB0aW9uX2Nsb3NlOjpiZWZvcmUsXG4uc2lnbi1ibG9jayAuZGVzY3JpcHRpb25fY2xvc2U6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDJweDtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4uc2lnbi1ibG9ja19fZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnNpZ24tYmxvY2tfX2RhdGUtd3JhcCB7XG4gIHdpZHRoOiAyMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbi1ibG9ja19fZGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnNpZ24tYmxvY2tfX3RpbWUge1xuICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5zaWduLWJsb2NrX19wZXJzb2xuYWwtd3JhcCB7XG4gIHdpZHRoOiAyMHZ3O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zaWduLWJsb2NrX19wZXJzb25hbE5hbWUge1xuICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5zaWduLWJsb2NrX19wZXJzb25hbFRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICNCNUI0Qjg7XG59IiwiJHByaW1lLWNvbG9yOiAjNzBDNEI0O1xyXG4kZGFya0dyZXktY29sb3I6ICM4Njg2ODY7XHJcbiRsaWdodEdyZXktY29sb3I6ICNGMEYwRjA7XHJcbiRncmV5LWNvbG9yOiAjQjVCNEI4O1xyXG4kYmxhY2sxLWNvbG9yOiAjMTQxQTM5O1xyXG4kYmx1ZS1jb2xvcjogIzQzQUZGRjtcclxuXHJcbi5wYXRpZW50IHtcclxuICB3aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6ICM3MEM0QjQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19iYWNrLWJ1dHRvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyBcXDI3NkUnO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG5cclxuICAmX19kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYmxvY2tsZWZ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgLTVweCAtNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19mb3RvIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAyMnB4IDMwcHggMjNweCAzMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgJl9fYWRyZXNzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gICZfX2Jsb2NrcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA2NzBweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAtNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgNXB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gICZfX2Jsb2NrbGVmdC1hZ2UsXHJcbiAgJl9fYmxvY2tsZWZ0LXNleCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjIzcHg7XHJcbiAgfVxyXG5cclxuICAmX19ibG9ja2xlZnQtYWdlOmFmdGVyLFxyXG4gICZfX2Jsb2NrbGVmdC1zZXg6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fYWdlLXRleHQsXHJcbiAgJl9fc2V4LXRleHQsXHJcbiAgJl9fZGF0ZS10ZXh0IHtcclxuICAgIG1hcmdpbjogMjNweCAwIDIxcHggMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGNvbG9yOiAkZGFya0dyZXktY29sb3I7XHJcbiAgfVxyXG5cclxuICAmX19hZ2UsXHJcbiAgJl9fc2V4LFxyXG4gICZfX2RhdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBjb2xvcjogJGJsYWNrMS1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAmX190aXRsZXMtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDQzNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNnB4IDE0cHggNnB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgY29sb3I6ICRkYXJrR3JleS1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodEdyZXktY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZS5hY3RpdmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiA3cHggLTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIC03cHggMTJweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIC04cHggLTlweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgfVxyXG5cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJl9faW5mby13cmFwLFxyXG4gIC5oaXN0b3J5LFxyXG4gIC5sYWJzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIC01cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbnVtYmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuODNweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNS4wMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICRncmV5LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJl9fZWRpdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRvcDogMTVweDtcclxuXHJcbiAgICAuZmEtZWRpdDpiZWZvcmUge1xyXG4gICAgICBjb2xvcjogJHByaW1lLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAmX19zaWNrRGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMXB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogMjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I1QjRCODtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6ICMzQjNCM0Q7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fZGVzY3JpcHRpb24tYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gICZfX3N0YXR1cy10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogJGdyZXktY29sb3I7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmX19zdGF0dXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDdweDtcclxuICAgIHBhZGRpbmc6IDVweCAxM3B4IDRweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzcwQzRCNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NENBQjQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgIGFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fc3RhdHVzLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWUtY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgN3B4IDdweDtcclxuICB9XHJcblxyXG4gICZfX2RpYWdub3MtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAkZ3JleS1jb2xvcjtcclxuICB9XHJcblxyXG4gICZfX2RpYWdub3Mge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjVCNEI4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmhpc3Rvcnkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAmX19saXN0IHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sYWJzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4lc2lnbl9fYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgJl9fYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBAZXh0ZW5kICVzaWduX19idXR0b247XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjOGZmO1xyXG4gIH1cclxuXHJcbiAgJl9fc2F2ZVRhc2sge1xyXG4gICAgQGV4dGVuZCAlc2lnbl9fYnV0dG9uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1lLWNvbG9yO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAmX19zYXZlVGFzazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRDQUI0O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZ24tYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICZfX3Rhc2tOYW1lIHtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gICZfX2RldGFpbHMge1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19kZXNjcmlwdGlvbi1ibG9jayB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWUtY29sb3I7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcblxyXG4gICAgLm92ZXJsYXlfcG9wdXAge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Rlc2NyaXB0aW9uLXdyYXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbl9jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICByaWdodDogLTMwcHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbl9jbG9zZTo6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbl9jbG9zZTo6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uX2Nsb3NlOjpiZWZvcmUsXHJcbiAgLmRlc2NyaXB0aW9uX2Nsb3NlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMnB4O1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6XHJcbiAgICAgICNkMGQwZDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgfVxyXG5cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gICZfX2RhdGUtd3JhcCB7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2RhdGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgJl9fdGltZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICAmX19wZXJzb2xuYWwtd3JhcCB7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgJl9fcGVyc29uYWxOYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gICZfX3BlcnNvbmFsVGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGNvbG9yOiAkZ3JleS1jb2xvcjtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/patient/patient.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/patient/patient.component.ts ***!
    \**********************************************/

  /*! exports provided: PatientComponent */

  /***/
  function srcAppPatientPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientComponent", function () {
      return PatientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../units.service */
    "./src/app/units.service.ts");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../task.service */
    "./src/app/task.service.ts");

    var PatientComponent =
    /*#__PURE__*/
    function () {
      function PatientComponent(route, unitsService, taskService, location) {
        _classCallCheck(this, PatientComponent);

        this.route = route;
        this.unitsService = unitsService;
        this.taskService = taskService;
        this.location = location;
        this.openTask = false;
        this.patient_info = true;
        this.patient_history = false;
        this.patient_labs = false;
        this.isDisabled = true;
        this.buttonSaveTask = false;
        this.objectTask = {
          task_number: 339,
          task_code: 'DIAGtest',
          task__status: 'Done',
          dx: 'Test',
          timeOpen: '2019-09-01T16:51:50.969Z',
          timeClose: new Date(),
          description: 'Test',
          staff: "Test",
          position: 'Test'
        };
        this.taskDescription = this.dataPatient;
      }

      _createClass(PatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPatient();
          this.getDataTask();
        }
      }, {
        key: "getPatient",
        value: function getPatient() {
          var _this6 = this;

          var link = this.route.snapshot.paramMap.get('linkName');
          var links = link.replace(/([A-Z])/g, ' $1').trim();
          this.unitsService.getPatient(links).subscribe(function (patient) {
            return _this6.patient = patient;
          });
          var linkData = this.patient.patient;
          this.dataPatient = linkData.find(function (patient) {
            return patient.name === links;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "openDetails",
        value: function openDetails() {
          this.openTask = true;
        }
      }, {
        key: "closeDetails",
        value: function closeDetails() {
          this.openTask = false;
        }
      }, {
        key: "getDataTask",
        value: function getDataTask() {
          var _this7 = this;

          this.taskService.getDataTask().subscribe(function (tasks) {
            return _this7.tasks = tasks;
          });
        }
      }, {
        key: "getPatientInfo",
        value: function getPatientInfo() {
          document.getElementById("patient-info").classList.add("active");
          document.getElementById("patient-history").classList.remove("active");
          document.getElementById("patient-labs").classList.remove("active");
          this.patient_info = true;
          this.patient_history = false;
          this.patient_labs = false;
        }
      }, {
        key: "getPatientHistory",
        value: function getPatientHistory() {
          document.getElementById("patient-info").classList.remove("active");
          document.getElementById("patient-history").classList.add("active");
          document.getElementById("patient-labs").classList.remove("active");
          this.patient_info = false;
          this.patient_history = true;
          this.patient_labs = false;
        }
      }, {
        key: "getPatientLab",
        value: function getPatientLab() {
          document.getElementById("patient-info").classList.remove("active");
          document.getElementById("patient-history").classList.remove("active");
          document.getElementById("patient-labs").classList.add("active");
          this.patient_info = false;
          this.patient_history = false;
          this.patient_labs = true;
        }
      }, {
        key: "editTextarea",
        value: function editTextarea() {
          this.isDisabled = !this.isDisabled;
        }
      }, {
        key: "openTaskDescription",
        value: function openTaskDescription(task) {
          this.taskDescription = task;
        }
      }, {
        key: "closeTaskDescription",
        value: function closeTaskDescription() {
          this.taskDescription = false;
        }
      }, {
        key: "statusTask",
        value: function statusTask(value) {
          if (value == "done") this.buttonSaveTask = true;else this.buttonSaveTask = false;
        }
      }, {
        key: "saveTask",
        value: function saveTask() {
          this.objectTask.task_number = +document.getElementById('task_number').textContent; //this.objectTask.dx = this.dataPatient.dx;

          this.darrin = document.getElementsByClassName('sign-block__date')[0].textContent.split(".");
          this.tarrin = document.getElementsByClassName('sign-block__time')[0].textContent.split(":");
          this.timeOpen = new Date(parseInt(this.darrin[2]), parseInt(this.darrin[1]) - 1, parseInt(this.darrin[0]), parseInt(this.tarrin[0]), parseInt(this.tarrin[1]));
          this.objectTask.timeOpen = this.timeOpen;
          this.tasks.push(this.objectTask);
          this.dataPatient.task__description = '';
          this.dataPatient.dx = '';
          this.dataPatient.tasks = [];
        }
      }]);

      return PatientComponent;
    }();

    PatientComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _units_service__WEBPACK_IMPORTED_MODULE_4__["UnitsService"]
      }, {
        type: _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient.component.scss */
      "./src/app/patient/patient.component.scss")).default]
    })], PatientComponent);
    /***/
  },

  /***/
  "./src/app/task.service.ts":
  /*!*********************************!*\
    !*** ./src/app/task.service.ts ***!
    \*********************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data_task */
    "./src/app/data_task.ts");

    var TaskService =
    /*#__PURE__*/
    function () {
      function TaskService() {
        _classCallCheck(this, TaskService);
      }

      _createClass(TaskService, [{
        key: "getDataTask",
        value: function getDataTask() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data_task__WEBPACK_IMPORTED_MODULE_3__["TASK"]);
        }
      }]);

      return TaskService;
    }();

    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TaskService);
    /***/
  },

  /***/
  "./src/app/task/task.component.scss":
  /*!******************************************!*\
    !*** ./src/app/task/task.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".overlay_popup {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n  cursor: pointer;\n}\n\n.task-details {\n  width: 800px;\n  margin-left: -400px;\n  margin-top: -200px;\n  padding: 20px;\n  position: fixed;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  background-color: #ffffff;\n  border: 2px solid #00c8ff;\n  outline: none;\n  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.7);\n}\n\n.task-details select {\n  width: 230px;\n  padding: 5px 10px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 16px;\n  background-color: #70C4B4;\n  border-radius: 5px;\n  border: 1px solid #70C4B4;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n}\n\n.task-details__person {\n  position: absolute;\n}\n\n.task-details__personalName {\n  margin: 0;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 15px;\n  line-height: 17px;\n}\n\n.task-details__personalTitle {\n  margin: 0;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 13px;\n  line-height: 17px;\n}\n\n.task-details__title {\n  text-align: center;\n}\n\n.task-details__top-action {\n  display: flex;\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 80px;\n}\n\n.task-details__timing {\n  display: flex;\n  justify-content: space-between;\n  width: 400px;\n  height: 80px;\n}\n\n.task-details__timing-wrap {\n  text-align: center;\n}\n\n.task-details__date {\n  margin-bottom: 0;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 15px;\n  line-height: 17px;\n  color: #000000;\n}\n\n.task-details__time {\n  margin: 0;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 17px;\n  color: #000000;\n  text-align: center;\n}\n\n.task-details__button {\n  padding: 7px 15px 5px 15px;\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  background-color: #70C4B4;\n  border-radius: 5px;\n  border: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.task-details__button:disabled {\n  background-color: #43AFFF;\n  opacity: 0.5;\n  cursor: default;\n}\n\n.task-details__bottom-action {\n  width: 100%;\n}\n\n.task-details__bottom-action textarea {\n  width: calc(100% - 20px);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.task-details__notSelect {\n  position: absolute;\n  bottom: 0;\n  color: red;\n}\n\n.task-details__notSelect p {\n  margin: 0;\n}\n\n.task-details__errorText {\n  margin: 0;\n  position: relative;\n  top: -25px;\n  color: red;\n}\n\n.bottom-action__buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.timingin {\n  position: relative;\n}\n\n.timingin__notStart {\n  position: relative;\n  bottom: 15px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9GOlxccHJvamVjdFxcdGVzdFxcaG9zcGl0YWxcXGNvZGUvc3JjXFxhcHBcXHRhc2tcXHRhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQ0U7RUFDRixVQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUNFO0VBQ0YseUJBQUE7RUFDQSxhQUFBO0VBRUEsMENBQUE7QUNKRjs7QURNRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkF6Q1U7RUEwQ1Ysa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9FO0VBQ0Usa0JBQUE7QUNMSjs7QURRRTtFQUNFLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0U7RUFDRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFVFO0VBQ0Usa0JBQUE7QUNSSjs7QURXRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNUSjs7QURZRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVko7O0FEYUU7RUFDRSxrQkFBQTtBQ1hKOztBRGNFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGVFO0VBQ0UsU0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNiSjs7QURnQkU7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBdEhVO0VBdUhWLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ2RKOztBRGlCRTtFQUNFLHlCQTdIVztFQThIWCxZQUFBO0VBQ0EsZUFBQTtBQ2ZKOztBRGtCRTtFQUNFLFdBQUE7QUNoQko7O0FEa0JJO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNoQk47O0FEb0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2xCSjs7QURvQkk7RUFDRSxTQUFBO0FDbEJOOztBRHNCRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDcEJKOztBRHlCQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjs7QUR3QkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1lLWNvbG9yOiAjNzBDNEI0O1xyXG4kc2Vjb25kLWNvbG9yOiAjNDNBRkZGO1xyXG5cclxuLm92ZXJsYXlfcG9wdXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6XHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWRldGFpbHMge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBtYXJnaW4tbGVmdDogLTQwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOlxyXG4gICAgI2ZmZmZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDBjOGZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWUtY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWUtY29sb3I7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAmX19wZXJzb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgJl9fcGVyc29uYWxOYW1lIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgfVxyXG5cclxuICAmX19wZXJzb25hbFRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX190b3AtYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcblxyXG4gICZfX3RpbWluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGltaW5nLXdyYXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fZGF0ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgJl9fdGltZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcGFkZGluZzogN3B4IDE1cHggNXB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltZS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZC1jb2xvcjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gICZfX2JvdHRvbS1hY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ub3RTZWxlY3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29sb3I6IHJlZDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZXJyb3JUZXh0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5ib3R0b20tYWN0aW9uX19idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4udGltaW5naW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fbm90U3RhcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbn1cclxuIiwiLm92ZXJsYXlfcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogLTQwMHB4O1xuICBtYXJnaW4tdG9wOiAtMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwYzhmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi50YXNrLWRldGFpbHMgc2VsZWN0IHtcbiAgd2lkdGg6IDIzMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBDNEI0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MEM0QjQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnRhc2stZGV0YWlsc19fcGVyc29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnRhc2stZGV0YWlsc19fcGVyc29uYWxOYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuLnRhc2stZGV0YWlsc19fcGVyc29uYWxUaXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbi50YXNrLWRldGFpbHNfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhc2stZGV0YWlsc19fdG9wLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4udGFzay1kZXRhaWxzX190aW1pbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLnRhc2stZGV0YWlsc19fdGltaW5nLXdyYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFzay1kZXRhaWxzX19kYXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4udGFzay1kZXRhaWxzX190aW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhc2stZGV0YWlsc19fYnV0dG9uIHtcbiAgcGFkZGluZzogN3B4IDE1cHggNXB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MEM0QjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFzay1kZXRhaWxzX19idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNBRkZGO1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi50YXNrLWRldGFpbHNfX2JvdHRvbS1hY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi50YXNrLWRldGFpbHNfX2JvdHRvbS1hY3Rpb24gdGV4dGFyZWEge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4udGFzay1kZXRhaWxzX19ub3RTZWxlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHJlZDtcbn1cbi50YXNrLWRldGFpbHNfX25vdFNlbGVjdCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnRhc2stZGV0YWlsc19fZXJyb3JUZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI1cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ib3R0b20tYWN0aW9uX19idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi50aW1pbmdpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1pbmdpbl9fbm90U3RhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTVweDtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/task/task.component.ts":
  /*!****************************************!*\
    !*** ./src/app/task/task.component.ts ***!
    \****************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _patient_patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../patient/patient.component */
    "./src/app/patient/patient.component.ts");

    var TaskComponent =
    /*#__PURE__*/
    function () {
      function TaskComponent(patientComponent) {
        _classCallCheck(this, TaskComponent);

        this.patientComponent = patientComponent;
        this.object = {
          task_code: 'Test',
          name: 'Test',
          timein: '2019-10-20T09:30:00.000Z',
          timeout: '2019-10-20T09:30:00.000Z',
          description: 'Test',
          staff: 'Test',
          position: 'Test'
        };
        this.notFillField = false;
        this.notSelect = false;
        this.notStart = false;
        this.notStop = false;
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startTime",
        value: function startTime() {
          var today = new Date();
          var timein = document.getElementById('timein');
          var datein = document.getElementById('datein');
          timein.innerHTML = today.toLocaleTimeString().slice(0, -3);
          datein.innerHTML = today.toLocaleDateString();
          document.getElementById("buttonin").setAttribute("disabled", "");
          document.getElementById("buttonout").removeAttribute("disabled");
        }
      }, {
        key: "stopTime",
        value: function stopTime() {
          var today = new Date();
          var timeout = document.getElementById('timeout');
          var dateout = document.getElementById('dateout');
          timeout.innerHTML = today.toLocaleTimeString().slice(0, -3);
          dateout.innerHTML = today.toLocaleDateString();
          document.getElementById("buttonout").setAttribute("disabled", "");
        }
      }, {
        key: "resetTime",
        value: function resetTime() {
          document.getElementById('timein').innerHTML = "";
          document.getElementById('datein').innerHTML = "";
          document.getElementById('timeout').innerHTML = "";
          document.getElementById('dateout').innerHTML = "";
          document.getElementById("buttonin").removeAttribute("disabled");
        }
      }, {
        key: "closeDetails",
        value: function closeDetails() {
          this.patientComponent.closeDetails();
        }
      }, {
        key: "saveSubtask",
        value: function saveSubtask() {
          var x = document.getElementById("subtaskDescription");
          var y = document.getElementById("datein");
          var z = document.getElementById("dateout");
          var w = document.getElementById("subtaskName");

          if (w.value == '') {
            this.notSelect = true;
          } else {
            this.notSelect = false;
            this.object.name = this.subtaskName;
          }

          if (y.textContent == '') {
            this.notStart = true;
          } else {
            this.notStart = false;
          }

          if (y.textContent !== '' && z.textContent == '') {
            this.notStop = true;
          } else {
            this.notStop = false;
          }

          this.subtaskDatein = document.getElementById('datein').textContent;
          this.subtaskTimein = document.getElementById('timein').textContent;
          this.darrin = this.subtaskDatein.split(".");
          this.tarrin = this.subtaskTimein.split(":");
          this.dateDatein = new Date(parseInt(this.darrin[2]), parseInt(this.darrin[1]) - 1, parseInt(this.darrin[0]), parseInt(this.tarrin[0]), parseInt(this.tarrin[1]));
          this.object.timein = this.dateDatein.toISOString();
          this.subtaskDateout = document.getElementById('dateout').textContent;
          this.subtaskTimeout = document.getElementById('timeout').textContent;
          this.darrout = this.subtaskDateout.split(".");
          this.tarrout = this.subtaskTimeout.split(":");
          this.dateDateout = new Date(parseInt(this.darrout[2]), parseInt(this.darrout[1]) - 1, parseInt(this.darrout[0]), parseInt(this.tarrout[0]), parseInt(this.tarrout[1]));
          this.object.timeout = this.dateDateout.toISOString();
          this.subtaskStaff = document.getElementById('subtaskStaff').textContent;
          this.object.staff = this.subtaskStaff;
          this.subtaskPosition = document.getElementById('subtaskPosition').textContent;
          this.object.position = this.subtaskPosition;

          if (x.value == '') {
            this.notFillField = true;
            x.style.borderColor = "red";
            this.patientComponent.openDetails();
          } else {
            this.object.description = this.subtaskDescription;
            this.patientComponent.dataPatient.tasks.push(this.object);
            this.patientComponent.closeDetails();
          }
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ctorParameters = function () {
      return [{
        type: _patient_patient_component__WEBPACK_IMPORTED_MODULE_2__["PatientComponent"]
      }];
    };

    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task.component.scss */
      "./src/app/task/task.component.scss")).default]
    })], TaskComponent);
    /***/
  },

  /***/
  "./src/app/units.service.ts":
  /*!**********************************!*\
    !*** ./src/app/units.service.ts ***!
    \**********************************/

  /*! exports provided: UnitsService */

  /***/
  function srcAppUnitsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsService", function () {
      return UnitsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data */
    "./src/app/data.ts");

    var UnitsService =
    /*#__PURE__*/
    function () {
      function UnitsService() {
        _classCallCheck(this, UnitsService);
      }

      _createClass(UnitsService, [{
        key: "getData",
        value: function getData() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data__WEBPACK_IMPORTED_MODULE_3__["DATA"]);
        }
      }, {
        key: "getLink",
        value: function getLink(link) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].find(function (list) {
            return list.link === link;
          }));
        }
      }, {
        key: "getPatient",
        value: function getPatient(patient) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].find(function (patient) {
            return patient === patient;
          }));
        }
      }]);

      return UnitsService;
    }();

    UnitsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UnitsService);
    /***/
  },

  /***/
  "./src/app/units/units.component.scss":
  /*!********************************************!*\
    !*** ./src/app/units/units.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUnitsUnitsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".units {\n  width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.units .units-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.units__title {\n  text-align: center;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 28px;\n  line-height: 28px;\n}\n.units__item {\n  width: 270px;\n  height: 233px;\n  position: relative;\n  margin: 15px;\n  border: 1px solid #B5B4B8;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n}\n.units__item img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  border-radius: 10px;\n  outline: none;\n}\n.units__item .item__text {\n  position: absolute;\n  bottom: 0;\n  left: 32px;\n  color: #fff;\n  font-family: Roboto Medium;\n  font-style: normal;\n  font-size: 28px;\n  line-height: 28px;\n  text-shadow: 5px -1px 5px black, -4px 5px 8px black;\n}\n.units__item:hover {\n  box-shadow: 1px 1px 18px grey;\n}\n.units__item:hover img {\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdHMvRjpcXHByb2plY3RcXHRlc3RcXGhvc3BpdGFsXFxjb2RlL3NyY1xcYXBwXFx1bml0c1xcdW5pdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VuaXRzL3VuaXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtBQ0ZOO0FETUU7RUFDRSw2QkFBQTtBQ0pKO0FETUk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC91bml0cy91bml0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0cyB7XHJcbiAgd2lkdGg6IDExMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gIC51bml0cy13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gTWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDogMjMzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjVCNEI4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtX190ZXh0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogNXB4IC0xcHggNXB4IGJsYWNrLCAtNHB4IDVweCA4cHggYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pdGVtOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMThweCBncmV5O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnVuaXRzIHtcbiAgd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi51bml0cyAudW5pdHMtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4udW5pdHNfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUm9ib3RvIE1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnVuaXRzX19pdGVtIHtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDIzM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I1QjRCODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnVuaXRzX19pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi51bml0c19faXRlbSAuaXRlbV9fdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAzMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90byBNZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1zaGFkb3c6IDVweCAtMXB4IDVweCBibGFjaywgLTRweCA1cHggOHB4IGJsYWNrO1xufVxuLnVuaXRzX19pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4IGdyZXk7XG59XG4udW5pdHNfX2l0ZW06aG92ZXIgaW1nIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/units/units.component.ts":
  /*!******************************************!*\
    !*** ./src/app/units/units.component.ts ***!
    \******************************************/

  /*! exports provided: UnitsComponent */

  /***/
  function srcAppUnitsUnitsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsComponent", function () {
      return UnitsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _units_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../units.service */
    "./src/app/units.service.ts");

    var UnitsComponent =
    /*#__PURE__*/
    function () {
      function UnitsComponent(unitsService) {
        _classCallCheck(this, UnitsComponent);

        this.unitsService = unitsService;
      }

      _createClass(UnitsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUnits();
        }
      }, {
        key: "getUnits",
        value: function getUnits() {
          var _this8 = this;

          this.unitsService.getData().subscribe(function (units) {
            return _this8.units = units;
          });
        }
      }]);

      return UnitsComponent;
    }();

    UnitsComponent.ctorParameters = function () {
      return [{
        type: _units_service__WEBPACK_IMPORTED_MODULE_2__["UnitsService"]
      }];
    };

    UnitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-units',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./units.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./units.component.scss */
      "./src/app/units/units.component.scss")).default]
    })], UnitsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\project\test\hospital\code\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map