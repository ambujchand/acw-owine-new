(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
    /***/
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js ***!
      \*************************************************************************************/

    /*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */

    /***/
    function node_modulesNgCircleProgress__ivy_ngcc__Fesm2015NgCircleProgressJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function () {
        return CircleProgressComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function () {
        return CircleProgressOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function () {
        return NgCircleProgressModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "linearGradient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.svg.outerLinearGradient.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "radialGradient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.svg.radialGradient.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop1)("stop-opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop2)("stop-opacity", 1);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r8.svg.backgroundCircle.cx)("cy", ctx_r8.svg.backgroundCircle.cy)("r", ctx_r8.svg.backgroundCircle.r)("fill", ctx_r8.svg.backgroundCircle.fill)("fill-opacity", ctx_r8.svg.backgroundCircle.fillOpacity)("stroke", ctx_r8.svg.backgroundCircle.stroke)("stroke-width", ctx_r8.svg.backgroundCircle.strokeWidth);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("fill", "url(#", ctx_r9.svg.radialGradient.id, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r9.svg.backgroundCircle.cx)("cy", ctx_r9.svg.backgroundCircle.cy)("r", ctx_r9.svg.backgroundCircle.r)("fill-opacity", ctx_r9.svg.backgroundCircle.fillOpacity)("stroke", ctx_r9.svg.backgroundCircle.stroke)("stroke-width", ctx_r9.svg.backgroundCircle.strokeWidth);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.options.backgroundGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.options.backgroundGradient);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r4.svg.circle.cx)("cy", ctx_r4.svg.circle.cy)("r", ctx_r4.svg.circle.r)("fill", ctx_r4.svg.circle.fill)("stroke", ctx_r4.svg.circle.stroke)("stroke-width", ctx_r4.svg.circle.strokeWidth);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r10.svg.path.d)("stroke", ctx_r10.svg.path.stroke)("stroke-width", ctx_r10.svg.path.strokeWidth)("stroke-linecap", ctx_r10.svg.path.strokeLinecap)("fill", ctx_r10.svg.path.fill);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("stroke", "url(#", ctx_r11.svg.outerLinearGradient.id, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r11.svg.path.d)("stroke-width", ctx_r11.svg.path.strokeWidth)("stroke-linecap", ctx_r11.svg.path.strokeLinecap)("fill", ctx_r11.svg.path.fill);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 5, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.options.outerStrokeGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.options.outerStrokeGradient);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tspan_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r15.svg.title.x)("y", ctx_r15.svg.title.y)("dy", tspan_r16.dy)("font-size", ctx_r15.svg.title.fontSize)("font-weight", ctx_r15.svg.title.fontWeight)("fill", ctx_r15.svg.title.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r16.span);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.svg.title.tspans);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("font-size", ctx_r13.svg.units.fontSize)("font-weight", ctx_r13.svg.units.fontWeight)("fill", ctx_r13.svg.units.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.svg.units.text);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tspan_r18 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r17.svg.subtitle.x)("y", ctx_r17.svg.subtitle.y)("dy", tspan_r18.dy)("font-size", ctx_r17.svg.subtitle.fontSize)("font-weight", ctx_r17.svg.subtitle.fontWeight)("fill", ctx_r17.svg.subtitle.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r18.span);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.svg.subtitle.tspans);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.svg.circle.cx)("y", ctx_r6.svg.circle.cy)("text-anchor", ctx_r6.svg.title.textAnchor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showUnits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showSubtitle);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image", 9);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("height", ctx_r7.svg.image.height)("width", ctx_r7.svg.image.width)("href", ctx_r7.svg.image.src, null, "xlink")("x", ctx_r7.svg.image.x)("y", ctx_r7.svg.image.y);
        }
      }

      function CircleProgressComponent__svg_svg_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleProgressComponent__svg_svg_0_Template__svg_svg_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.emitClickEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template, 3, 5, "linearGradient", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template, 3, 5, "radialGradient", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CircleProgressComponent__svg_svg_0__svg_circle_5_Template, 1, 6, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CircleProgressComponent__svg_svg_0__svg_text_7_Template, 4, 6, "text", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CircleProgressComponent__svg_svg_0__svg_image_8_Template, 1, 5, "image", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r0.svg.viewBox)("height", ctx_r0.svg.height)("width", ctx_r0.svg.width)("class", ctx_r0.options["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.outerStrokeGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.backgroundGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showBackground);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showInnerStroke);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.percent - 0 !== 0 || ctx_r0.options.showZeroOuterStroke);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options.showImage && (ctx_r0.options.showTitle || ctx_r0.options.showUnits || ctx_r0.options.showSubtitle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showImage);
        }
      }

      var CircleProgressOptions = function CircleProgressOptions() {
        _classCallCheck(this, CircleProgressOptions);

        this["class"] = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
      };
      /** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */


      var CircleProgressComponent = /*#__PURE__*/function () {
        function CircleProgressComponent(defaultOptions, elRef, document) {
          var _this = this;

          _classCallCheck(this, CircleProgressComponent);

          this.elRef = elRef;
          this.document = document;
          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // <svg> of component

          this.svgElement = null; // whether <svg> is in viewport

          this.isInViewport = false; // event for notifying viewport change caused by scrolling or resizing

          this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._viewportChangedSubscriber = null;
          this.options = new CircleProgressOptions();
          this.defaultOptions = new CircleProgressOptions();
          this._lastPercent = 0;
          this._gradientUUID = null;

          this.render = function () {
            _this.applyOptions();

            if (_this.options.lazy) {
              // Draw svg if it doesn't exist
              _this.svgElement === null && _this.draw(_this._lastPercent); // Draw it only when it's in the viewport

              if (_this.isInViewport) {
                // Draw it at the latest position when I am in.
                if (_this.options.animation && _this.options.animationDuration > 0) {
                  _this.animate(_this._lastPercent, _this.options.percent);
                } else {
                  _this.draw(_this.options.percent);
                }

                _this._lastPercent = _this.options.percent;
              }
            } else {
              if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate(_this._lastPercent, _this.options.percent);
              } else {
                _this.draw(_this.options.percent);
              }

              _this._lastPercent = _this.options.percent;
            }
          };

          this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadius = angleInDegrees * Math.PI / 180;
            var x = centerX + Math.sin(angleInRadius) * radius;
            var y = centerY - Math.cos(angleInRadius) * radius;
            return {
              x: x,
              y: y
            };
          };

          this.draw = function (percent) {
            // make percent reasonable
            percent = percent === undefined ? _this.options.percent : Math.abs(percent); // circle percent shouldn't be greater than 100%.

            var circlePercent = percent > 100 ? 100 : percent; // determine box size

            var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;

            if (_this.options.showBackground) {
              boxSize += _this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2);
            } // the centre of the circle


            var centre = {
              x: boxSize / 2,
              y: boxSize / 2
            }; // the start point of the arc

            var startPoint = {
              x: centre.x,
              y: centre.y - _this.options.radius
            }; // get the end point of the arc

            var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ? circlePercent : 100 - circlePercent) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.


            if (circlePercent === 100) {
              endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            } // largeArcFlag and sweepFlag


            var largeArcFlag, sweepFlag;

            if (circlePercent > 50) {
              var _ref = _this.options.clockwise ? [1, 1] : [1, 0];

              var _ref2 = _slicedToArray(_ref, 2);

              largeArcFlag = _ref2[0];
              sweepFlag = _ref2[1];
            } else {
              var _ref3 = _this.options.clockwise ? [0, 1] : [0, 0];

              var _ref4 = _slicedToArray(_ref3, 2);

              largeArcFlag = _ref4[0];
              sweepFlag = _ref4[1];
            } // percent may not equal the actual percent


            var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var titleTextPercent = titlePercent > _this.options.maxPercent ? "".concat(_this.options.maxPercent.toFixed(_this.options.toFixed), "+") : titlePercent.toFixed(_this.options.toFixed);
            var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent; // get title object

            var title = {
              x: centre.x,
              y: centre.y,
              textAnchor: 'middle',
              color: _this.options.titleColor,
              fontSize: _this.options.titleFontSize,
              fontWeight: _this.options.titleFontWeight,
              texts: [],
              tspans: []
            }; // from v0.9.9, both title and titleFormat(...) may be an array of string.

            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
              var formatted = _this.options.titleFormat(titlePercent);

              if (formatted instanceof Array) {
                title.texts = _toConsumableArray(formatted);
              } else {
                title.texts.push(formatted.toString());
              }
            } else {
              if (_this.options.title === 'auto') {
                title.texts.push(titleTextPercent);
              } else {
                if (_this.options.title instanceof Array) {
                  title.texts = _toConsumableArray(_this.options.title);
                } else {
                  title.texts.push(_this.options.title.toString());
                }
              }
            } // get subtitle object


            var subtitle = {
              x: centre.x,
              y: centre.y,
              textAnchor: 'middle',
              color: _this.options.subtitleColor,
              fontSize: _this.options.subtitleFontSize,
              fontWeight: _this.options.subtitleFontWeight,
              texts: [],
              tspans: []
            }; // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.

            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
              var _formatted = _this.options.subtitleFormat(subtitlePercent);

              if (_formatted instanceof Array) {
                subtitle.texts = _toConsumableArray(_formatted);
              } else {
                subtitle.texts.push(_formatted.toString());
              }
            } else {
              if (_this.options.subtitle instanceof Array) {
                subtitle.texts = _toConsumableArray(_this.options.subtitle);
              } else {
                subtitle.texts.push(_this.options.subtitle.toString());
              }
            } // get units object


            var units = {
              text: "".concat(_this.options.units),
              fontSize: _this.options.unitsFontSize,
              fontWeight: _this.options.unitsFontWeight,
              color: _this.options.unitsColor
            }; // get total count of text lines to be shown

            var rowCount = 0,
                rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length); // calc dy for each tspan for title

            if (_this.options.showTitle) {
              var _iterator = _createForOfIteratorHelper(title.texts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var span = _step.value;
                  title.tspans.push({
                    span: span,
                    dy: _this.getRelativeY(rowNum, rowCount)
                  });
                  rowNum++;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } // calc dy for each tspan for subtitle


            if (_this.options.showSubtitle) {
              var _iterator2 = _createForOfIteratorHelper(subtitle.texts),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _span = _step2.value;
                  subtitle.tspans.push({
                    span: _span,
                    dy: _this.getRelativeY(rowNum, rowCount)
                  });
                  rowNum++;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } // create ID for gradient element


            if (null === _this._gradientUUID) {
              _this._gradientUUID = _this.uuid();
            } // Bring it all together


            _this.svg = {
              viewBox: "0 0 ".concat(boxSize, " ").concat(boxSize),
              // Set both width and height to '100%' if it's responsive
              width: _this.options.responsive ? '100%' : boxSize,
              height: _this.options.responsive ? '100%' : boxSize,
              backgroundCircle: {
                cx: centre.x,
                cy: centre.y,
                r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                fill: _this.options.backgroundColor,
                fillOpacity: _this.options.backgroundOpacity,
                stroke: _this.options.backgroundStroke,
                strokeWidth: _this.options.backgroundStrokeWidth
              },
              path: {
                // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                d: "M ".concat(startPoint.x, " ").concat(startPoint.y, "\n        A ").concat(_this.options.radius, " ").concat(_this.options.radius, " 0 ").concat(largeArcFlag, " ").concat(sweepFlag, " ").concat(endPoint.x, " ").concat(endPoint.y),
                stroke: _this.options.outerStrokeColor,
                strokeWidth: _this.options.outerStrokeWidth,
                strokeLinecap: _this.options.outerStrokeLinecap,
                fill: 'none'
              },
              circle: {
                cx: centre.x,
                cy: centre.y,
                r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                fill: 'none',
                stroke: _this.options.innerStrokeColor,
                strokeWidth: _this.options.innerStrokeWidth
              },
              title: title,
              units: units,
              subtitle: subtitle,
              image: {
                x: centre.x - _this.options.imageWidth / 2,
                y: centre.y - _this.options.imageHeight / 2,
                src: _this.options.imageSrc,
                width: _this.options.imageWidth,
                height: _this.options.imageHeight
              },
              outerLinearGradient: {
                id: 'outer-linear-' + _this._gradientUUID,
                colorStop1: _this.options.outerStrokeColor,
                colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor
              },
              radialGradient: {
                id: 'radial-' + _this._gradientUUID,
                colorStop1: _this.options.backgroundColor,
                colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor
              }
            };
          };

          this.getAnimationParameters = function (previousPercent, currentPercent) {
            var MIN_INTERVAL = 10;
            var times, step, interval;
            var fromPercent = _this.options.startFromZero ? 0 : previousPercent < 0 ? 0 : previousPercent;
            var toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
            var delta = Math.abs(Math.round(toPercent - fromPercent));

            if (delta >= 100) {
              // we will finish animation in 100 times
              times = 100;

              if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                step = 1;
              } else {
                // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                step = Math.round(delta / times);
              }
            } else {
              // we will finish in as many times as the number of percent.
              times = delta;
              step = 1;
            } // Get the interval of timer


            interval = Math.round(_this.options.animationDuration / times); // Readjust all values if the interval of timer is extremely small.

            if (interval < MIN_INTERVAL) {
              interval = MIN_INTERVAL;
              times = _this.options.animationDuration / interval;

              if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
                step = Math.round(100 / times);
              } else {
                step = Math.round(delta / times);
              }
            } // step must be greater than 0.


            if (step < 1) {
              step = 1;
            }

            return {
              times: times,
              step: step,
              interval: interval
            };
          };

          this.animate = function (previousPercent, currentPercent) {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
              _this._timerSubscription.unsubscribe();
            }

            var fromPercent = _this.options.startFromZero ? 0 : previousPercent;
            var toPercent = currentPercent;

            var _this$getAnimationPar = _this.getAnimationParameters(fromPercent, toPercent),
                step = _this$getAnimationPar.step,
                interval = _this$getAnimationPar.interval;

            var count = fromPercent;

            if (fromPercent < toPercent) {
              _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                count += step;

                if (count <= toPercent) {
                  if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                    _this.draw(toPercent);

                    _this._timerSubscription.unsubscribe();
                  } else {
                    _this.draw(count);
                  }
                } else {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                }
              });
            } else {
              _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                count -= step;

                if (count >= toPercent) {
                  if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                    _this.draw(toPercent);

                    _this._timerSubscription.unsubscribe();
                  } else {
                    _this.draw(count);
                  }
                } else {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                }
              });
            }
          };

          this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
              _this.animate(0, _this.options.percent);
            }

            _this.onClick.emit(event);
          };

          this.applyOptions = function () {
            // the options of <circle-progress> may change already
            for (var _i2 = 0, _Object$keys = Object.keys(_this.options); _i2 < _Object$keys.length; _i2++) {
              var name = _Object$keys[_i2];

              if (_this.hasOwnProperty(name) && _this[name] !== undefined) {
                _this.options[name] = _this[name];
              } else if (_this.templateOptions && _this.templateOptions[name] !== undefined) {
                _this.options[name] = _this.templateOptions[name];
              }
            } // make sure key options valid


            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
          };

          this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var initialOffset = -0.18,
                offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
          };

          this.min = function (a, b) {
            return a < b ? a : b;
          };

          this.max = function (a, b) {
            return a > b ? a : b;
          };

          this.uuid = function () {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              var r = (dt + Math.random() * 16) % 16 | 0;
              dt = Math.floor(dt / 16);
              return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
          };

          this.findSvgElement = function () {
            if (this.svgElement === null) {
              var tags = this.elRef.nativeElement.getElementsByTagName('svg');

              if (tags.length > 0) {
                this.svgElement = tags[0];
              }
            }
          };

          this.checkViewport = function () {
            _this.findSvgElement();

            var previousValue = _this.isInViewport;
            _this.isInViewport = _this.isElementInViewport(_this.svgElement);

            if (previousValue !== _this.isInViewport) {
              _this.onViewportChanged.emit({
                oldValue: previousValue,
                newValue: _this.isInViewport
              });
            }
          };

          this.onScroll = function (event) {
            _this.checkViewport();
          };

          this.loadEventsForLazyMode = function () {
            if (_this.options.lazy) {
              _this.document.addEventListener('scroll', _this.onScroll, true);

              _this.window.addEventListener('resize', _this.onScroll, true);

              if (_this._viewportChangedSubscriber === null) {
                _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_ref5) {
                  var oldValue = _ref5.oldValue,
                      newValue = _ref5.newValue;
                  newValue ? _this.render() : null;
                });
              } // svgElement must be created in DOM before being checked.
              // Is there a better way to check the existence of svgElemnt?


              var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50).subscribe(function () {
                _this.svgElement === null ? _this.checkViewport() : _timer.unsubscribe();
              });
            }
          };

          this.unloadEventsForLazyMode = function () {
            // Remove event listeners
            _this.document.removeEventListener('scroll', _this.onScroll, true);

            _this.window.removeEventListener('resize', _this.onScroll, true); // Unsubscribe onViewportChanged


            if (_this._viewportChangedSubscriber !== null) {
              _this._viewportChangedSubscriber.unsubscribe();

              _this._viewportChangedSubscriber = null;
            }
          };

          this.document = document;
          this.window = this.document.defaultView;
          Object.assign(this.options, defaultOptions);
          Object.assign(this.defaultOptions, defaultOptions);
        }

        _createClass(CircleProgressComponent, [{
          key: "isDrawing",
          value: function isDrawing() {
            return this._timerSubscription && !this._timerSubscription.closed;
          }
        }, {
          key: "isElementInViewport",
          value: function isElementInViewport(el) {
            // Return false if el has not been created in page.
            if (el === null || el === undefined) return false; // Check if the element is out of view due to a container scrolling

            var rect = el.getBoundingClientRect(),
                parent = el.parentNode,
                parentRect;

            do {
              parentRect = parent.getBoundingClientRect();
              if (rect.top >= parentRect.bottom) return false;
              if (rect.bottom <= parentRect.top) return false;
              if (rect.left >= parentRect.right) return false;
              if (rect.right <= parentRect.left) return false;
              parent = parent.parentNode;
            } while (parent != this.document.body); // Check its within the document viewport


            if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight)) return false;
            if (rect.bottom <= 0) return false;
            if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth)) return false;
            if (rect.right <= 0) return false;
            return true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadEventsForLazyMode();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unloadEventsForLazyMode();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.render();

            if ('lazy' in changes) {
              changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
            }
          }
        }]);

        return CircleProgressComponent;
      }();

      CircleProgressComponent.ɵfac = function CircleProgressComponent_Factory(t) {
        return new (t || CircleProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CircleProgressOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      CircleProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CircleProgressComponent,
        selectors: [["circle-progress"]],
        inputs: {
          name: "name",
          "class": "class",
          backgroundGradient: "backgroundGradient",
          backgroundColor: "backgroundColor",
          backgroundGradientStopColor: "backgroundGradientStopColor",
          backgroundOpacity: "backgroundOpacity",
          backgroundStroke: "backgroundStroke",
          backgroundStrokeWidth: "backgroundStrokeWidth",
          backgroundPadding: "backgroundPadding",
          radius: "radius",
          space: "space",
          percent: "percent",
          toFixed: "toFixed",
          maxPercent: "maxPercent",
          renderOnClick: "renderOnClick",
          units: "units",
          unitsFontSize: "unitsFontSize",
          unitsFontWeight: "unitsFontWeight",
          unitsColor: "unitsColor",
          outerStrokeGradient: "outerStrokeGradient",
          outerStrokeWidth: "outerStrokeWidth",
          outerStrokeColor: "outerStrokeColor",
          outerStrokeGradientStopColor: "outerStrokeGradientStopColor",
          outerStrokeLinecap: "outerStrokeLinecap",
          innerStrokeColor: "innerStrokeColor",
          innerStrokeWidth: "innerStrokeWidth",
          titleFormat: "titleFormat",
          title: "title",
          titleColor: "titleColor",
          titleFontSize: "titleFontSize",
          titleFontWeight: "titleFontWeight",
          subtitleFormat: "subtitleFormat",
          subtitle: "subtitle",
          subtitleColor: "subtitleColor",
          subtitleFontSize: "subtitleFontSize",
          subtitleFontWeight: "subtitleFontWeight",
          imageSrc: "imageSrc",
          imageHeight: "imageHeight",
          imageWidth: "imageWidth",
          animation: "animation",
          animateTitle: "animateTitle",
          animateSubtitle: "animateSubtitle",
          animationDuration: "animationDuration",
          showTitle: "showTitle",
          showSubtitle: "showSubtitle",
          showUnits: "showUnits",
          showImage: "showImage",
          showBackground: "showBackground",
          showInnerStroke: "showInnerStroke",
          clockwise: "clockwise",
          responsive: "responsive",
          startFromZero: "startFromZero",
          showZeroOuterStroke: "showZeroOuterStroke",
          lazy: "lazy",
          templateOptions: ["options", "templateOptions"]
        },
        outputs: {
          onClick: "onClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]],
        template: function CircleProgressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });

      CircleProgressComponent.ctorParameters = function () {
        return [{
          type: CircleProgressOptions
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      CircleProgressComponent.propDecorators = {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundGradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundGradientStopColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        space: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        percent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toFixed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        renderOnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        units: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeGradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeGradientStopColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeLinecap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        innerStrokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        innerStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animateTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animateSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showUnits: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBackground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showInnerStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clockwise: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        responsive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startFromZero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showZeroOuterStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lazy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templateOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['options']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleProgressComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'circle-progress',
            template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
          }]
        }], function () {
          return [{
            type: CircleProgressOptions
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          "class": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundGradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundGradientStopColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toFixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          renderOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          units: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitsFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitsFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitsColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeGradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeGradientStopColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeLinecap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          innerStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          innerStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animateTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animateSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showUnits: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showInnerStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clockwise: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          startFromZero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showZeroOuterStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lazy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          templateOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['options']
          }]
        });
      })();

      var NgCircleProgressModule = /*#__PURE__*/function () {
        function NgCircleProgressModule() {
          _classCallCheck(this, NgCircleProgressModule);
        }

        _createClass(NgCircleProgressModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: NgCircleProgressModule,
              providers: [{
                provide: CircleProgressOptions,
                useValue: options
              }]
            };
          }
        }]);

        return NgCircleProgressModule;
      }();

      NgCircleProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgCircleProgressModule
      });
      NgCircleProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgCircleProgressModule_Factory(t) {
          return new (t || NgCircleProgressModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgCircleProgressModule, {
          declarations: function declarations() {
            return [CircleProgressComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CircleProgressComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCircleProgressModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CircleProgressComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [CircleProgressComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ng-circle-progress
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-circle-progress.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n <strong><h2 class=\"text-color\">Hi,{{this.ifLogin.user.username}}</h2></strong>\n <h5 class=\"text-color2 mt-1 mb-1\">Welcome To Craft Beer</h5>\n  <ion-card class=\"mt-1 mb-1\" (click)=\"invoiceDetails()\">\n      <ion-grid class=\"p-1 stock-show\">\n        <ion-row >\n          <ion-col >\n            <h6 class=\"text-color1 m-0 p-0\">You are doing great this month</h6>\n            <ion-row  >\n              <ion-col  >\n                <p class=\"text-style3 mb-0\">Monthly Purchased</p>\n              </ion-col>\n              <ion-col  >\n                <p class=\"font-wid mb-0\">{{totalPurchage}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\" class=\"invoice-back\"> \n            <div class=\"show-invoice\">\n              <img class=\"image-invoice\" src=\"assets/icons/invoice.png\">\n            </div>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n  </ion-card>\n\n  \n\n  <!-- order status start  -->\n  <div class=\"mt-3\">\n    <ion-grid class=\"p-2\">\n      <Strong class=\"status-lebel\" style=\"font-weight: 900;\">Order Status</Strong>\n      <!-- <button class=\"usebtn\">Status List</button> -->\n      <ion-row class=\"p-0 mb-1\" style=\"background-color: #FAFAFA;\" *ngFor = \"let latestOr of latestOrde\">\n        <ion-col  size=\"3\">\n          <img src=\"/assets/icons/productImg.jpg\" height=\"70\" width=\"70\">\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"showOrderTeacking(latestOr.id)\" >\n          <div>\n            <p style=\"font-size:12px ;font-size: 12px;margin-top:2vw;color: #6B3D1A;\">{{latestOr.order_number}}</p>\n            <p style=\"font-size:11px\"><b>Orderd On :</b> {{latestOr.order_date}}</p>\n            <p style=\"font-size:11px\"><b>Delivery Status :</b> {{latestOr.order_date}}</p>\n            <p style=\"font-size:11px\"><b>Payment Pending :</b>{{latestOr.order_date}}</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"showOrderTeacking(latestOr.id)\">\n          <p class=\"order-status__product-quantity-lebel\" style=\"font-size:12px\">Qty<br> <span class=\"order-quantity\">10</span></p>\n        </ion-col>\n        <ion-col size=\"1\" class=\"go-to\" (click)=\"showOrderTeacking(latestOr.id)\">\n          <p style=\"padding-top: 2vh;font-size: 6vh;\"><i class=\"fas fa-chevron-right\"></i></p>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <!-- order status end  -->\n\n  <ion-grid >\n    <ion-row>\n      <div class=\"employee-title\">\n        <Strong class=\"text-color\" style=\"font-weight: 900;\">Inventory Management</Strong>\n      </div> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-segment scrollable  (ionChange)=\"getScrollData($event)\">\n        <ion-segment-button *ngFor=\"let inventor of inventory\" value=\"{{inventor}}\" class=\"p-1\">\n          <div class=\"product-name-container\">\n          <div style=\"text-transform: capitalize;font-size: 12px;font-weight: 600;\">{{inventor.product_name}}</div>\n        </div>\n          <div >\n            <div class=\"progress blue\">\n                <span class=\"progress-left\">\n                    <span class=\"progress-bar\"></span>\n                </span>\n                <span class=\"progress-right\">\n                    <span class=\"progress-bar\"></span>\n                </span>\n                <div class=\"progress-value\">{{inventor.qty}}</div>\n            </div>\n        </div>\n          </ion-segment-button>\n      </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n  <!-- Employee List and create employee start  -->\n    <ion-grid class=\"lst-ionic-grid\" *ngIf=\"ifLogin.user.parent_id==1\">\n      <ion-row>\n        <div class=\"employee-title\">\n          <Strong class=\"text-color\" style=\"font-weight: 900;\">Curret Employee</Strong>\n          <button class=\"usebtn\" (click)=\"createEmployee()\">Create User</button>\n        </div> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-segment scrollable  (ionChange)=\"getScrollData($event)\">\n          <ion-segment-button *ngFor=\"let use of user\" value=\"{{use.id}}\" class=\"p-1\">\n              <div class=\"show-three\">\n                  <img src=\"{{use.image}}\">\n                  <div class=\"employee__details\">\n                    <p style=\"font-weight: bolder;text-align: left;padding: 0px 5px;color: #6B3D1A;    font-size: 11px;\n                    text-transform: capitalize;\">MR {{use.name}}</p> \n                    <p style=\"text-align: left;font-size: 8px;\n                    text-transform: capitalize;\">Id: E000{{use.id}}</p>\n                  </div>             \n              </div>\n            </ion-segment-button>\n        </ion-segment>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  <!-- Employee List and create employee end  -->\n\n  <ion-button (click)=\"placeOrder()\" class=\"orderButton\" expand=\"full\">Place Order</ion-button>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardPageRoutingModule */

    /***/
    function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
        return DashboardPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/pages/dashboard/dashboard.page.ts");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
      }];

      var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "./src/app/pages/dashboard/dashboard-routing.module.ts");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/pages/dashboard/dashboard.page.ts");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
          "backgroundPadding": 7,
          "radius": 30,
          "space": -8,
          "outerStrokeWidth": 8,
          "outerStrokeColor": "#0ea900",
          "innerStrokeColor": "#b7e4b3",
          "innerStrokeWidth": 6,
          "title": ["progress"],
          "titleFontSize": '20',
          "subtitleFontSize": '20',
          "animateTitle": false,
          "animationDuration": 1000,
          "showTitle": false,
          "subtitleColor": "#000000",
          "showUnits": false,
          "showBackground": false,
          "clockwise": true,
          "responsive": false
        })],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
      })], DashboardPageModule);
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  font-size: 5vh;\n}\n\n.scroll-content {\n  padding-top: 0px !important;\n}\n\n.text-color {\n  color: #6B3D1A;\n  font-weight: 700;\n  margin-left: 2vh;\n  margin-top: 10px;\n  margin-bottom: 1px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\n.text-color2 {\n  color: #6B3D1A;\n  margin-left: 2vh;\n}\n\n.status-lebel {\n  color: #6B3D1A;\n}\n\n.text-color1 {\n  color: #6B3D1A;\n  margin-left: 13px;\n  font-size: 13px;\n}\n\n.text-style3 {\n  color: #6B3D1A;\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 17px;\n  margin-top: 5px;\n}\n\n.show-invoice {\n  background-color: #6B3D1A;\n  height: 70px;\n  position: absolute;\n  width: 148%;\n  margin-top: -5px;\n  text-align: center;\n  -webkit-clip-path: circle(50% at 50% 50%);\n  clip-path: circle(50% at 43% 50%);\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-row {\n  padding: 0px;\n  margin: 0px;\n}\n\n.font-wid {\n  color: #D3751D;\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.show-three {\n  width: 27vw;\n}\n\nion-segment-button {\n  border-radius: 5px;\n  width: 28%;\n  height: 23vh;\n}\n\n.product-name-container {\n  height: 20px;\n  justify-content: center;\n  align-items: center;\n}\n\n.usebtn {\n  position: absolute;\n  right: 0;\n  border-radius: 25px;\n  padding: 2px 15px 2px 15px;\n  background-color: white;\n  color: #6B3D1A;\n  font-size: 12px;\n  border: 1px solid;\n  margin-right: 10px;\n}\n\n.orderButton {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  width: 100%;\n  height: 46px;\n  font-size: 20px;\n  margin: 0;\n  color: #FFCC6A;\n  text-transform: capitalize;\n  font-weight: bolder;\n}\n\n.stock-show {\n  padding-left: 10px !important;\n}\n\n.image-invoice {\n  width: 43px;\n  margin-top: 9px;\n  left: 44px;\n  position: absolute;\n  filter: drop-shadow(5px 5px 5px #222222);\n}\n\n.go-to {\n  text-align: right;\n  padding-right: 10px;\n}\n\n.go-to p i {\n  font-size: 10px;\n  font-size: 32px;\n}\n\n.go-to p {\n  line-height: 1.2em;\n}\n\np.order-status__product-quantity-lebel {\n  font-size: 15px;\n}\n\n.order-status__product-name-lebel {\n  font-weight: bolder;\n  color: #6B3D1A;\n}\n\nspan.order-date {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000;\n}\n\np.order-status__product-name-lebel {\n  line-height: 20px;\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n}\n\n.order-status__product-quantity-lebel {\n  text-align: center;\n  line-height: 20px;\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n}\n\n.employee-title {\n  margin-top: 8px;\n}\n\n.employee__details {\n  text-align: left;\n  padding: 0px 5px;\n}\n\nion-segment-button.p-1.circle-progress {\n  width: 30vw;\n  height: 40Vw;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n  width: 30vw;\n  /* height: 48px; */\n}\n\n.progress {\n  width: 70px;\n  height: 70px;\n  line-height: 150px;\n  background: none;\n  margin: 0 auto;\n  box-shadow: none;\n  position: relative;\n}\n\n.progress:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 12px solid #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.progress > span {\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n}\n\n.progress .progress-left {\n  left: 0;\n}\n\n.progress .progress-bar {\n  width: 100%;\n  height: 100%;\n  background: none;\n  border-width: 12px;\n  border-style: solid;\n  position: absolute;\n  top: 0;\n}\n\n.progress .progress-left .progress-bar {\n  left: 100%;\n  border-top-right-radius: 80px;\n  border-bottom-right-radius: 80px;\n  border-left: 0;\n  transform-origin: center left;\n}\n\n.progress .progress-right {\n  right: 0;\n}\n\n.progress .progress-right .progress-bar {\n  left: -100%;\n  border-top-left-radius: 80px;\n  border-bottom-left-radius: 80px;\n  border-right: 0;\n  transform-origin: center right;\n  -webkit-animation: loading-1 1.8s linear forwards;\n          animation: loading-1 1.8s linear forwards;\n}\n\n.progress .progress-value {\n  width: 80%;\n  height: 80%;\n  background: #fff;\n  font-size: 20px;\n  color: #fff;\n  line-height: 66px;\n  position: absolute;\n  color: black;\n  justify-content: center;\n  top: 5%;\n  left: 5%;\n}\n\n.progress.blue .progress-bar {\n  border-color: red;\n  border-width: 6px;\n}\n\n.progress.blue .progress-left .progress-bar {\n  -webkit-animation: loading-2 1.5s linear forwards 1.8s;\n          animation: loading-2 1.5s linear forwards 1.8s;\n}\n\n.progress.yellow .progress-bar {\n  border-color: #fdba04;\n}\n\n.progress.yellow .progress-left .progress-bar {\n  -webkit-animation: loading-3 1s linear forwards 1.8s;\n          animation: loading-3 1s linear forwards 1.8s;\n}\n\n.progress.pink .progress-bar {\n  border-color: #ed687c;\n}\n\n.progress.pink .progress-left .progress-bar {\n  -webkit-animation: loading-4 0.4s linear forwards 1.8s;\n          animation: loading-4 0.4s linear forwards 1.8s;\n}\n\n.progress.green .progress-bar {\n  border-color: #1abc9c;\n}\n\n.progress.green .progress-left .progress-bar {\n  -webkit-animation: loading-5 1.2s linear forwards 1.8s;\n          animation: loading-5 1.2s linear forwards 1.8s;\n}\n\n@-webkit-keyframes loading-1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n\n@keyframes loading-1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n\n@-webkit-keyframes loading-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(144deg);\n  }\n}\n\n@keyframes loading-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(144deg);\n  }\n}\n\n@-webkit-keyframes loading-3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n\n@keyframes loading-3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n\n@-webkit-keyframes loading-4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(36deg);\n  }\n}\n\n@keyframes loading-4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(36deg);\n  }\n}\n\n@-webkit-keyframes loading-5 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(126deg);\n  }\n}\n\n@keyframes loading-5 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(126deg);\n  }\n}\n\n@media only screen and (max-width: 990px) {\n  .progress {\n    margin-bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUVBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBS0o7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtBQUtKOztBQUhBO0VBRUksWUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBRkE7RUFNSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdBO0VBQ0ksNkJBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUYsd0NBQUE7QUFBRjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBT0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxPQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQU9KOztBQUxBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBRUEsNkJBQUE7QUFRSjs7QUFOQTtFQUNJLFFBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUVBLDhCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQVVKOztBQVJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBV0o7O0FBVEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVkE7RUFDSSxzREFBQTtVQUFBLDhDQUFBO0FBYUo7O0FBWEE7RUFDSSxxQkFBQTtBQWNKOztBQVpBO0VBQ0ksb0RBQUE7VUFBQSw0Q0FBQTtBQWVKOztBQWJBO0VBQ0kscUJBQUE7QUFnQko7O0FBZEE7RUFDSSxzREFBQTtVQUFBLDhDQUFBO0FBaUJKOztBQWZBO0VBQ0kscUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksc0RBQUE7VUFBQSw4Q0FBQTtBQW1CSjs7QUFqQkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUkseUJBQUE7RUFvQk47QUFDRjs7QUE1QkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUkseUJBQUE7RUFvQk47QUFDRjs7QUFsQkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUkseUJBQUE7RUFvQk47QUFDRjs7QUE1QkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUkseUJBQUE7RUFvQk47QUFDRjs7QUFsQkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUksd0JBQUE7RUFvQk47QUFDRjs7QUE1QkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUksd0JBQUE7RUFvQk47QUFDRjs7QUFsQkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUksd0JBQUE7RUFvQk47QUFDRjs7QUE1QkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUksd0JBQUE7RUFvQk47QUFDRjs7QUFsQkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUkseUJBQUE7RUFvQk47QUFDRjs7QUE1QkE7RUFDSTtJQUVJLHVCQUFBO0VBb0JOO0VBbEJFO0lBRUkseUJBQUE7RUFvQk47QUFDRjs7QUFsQkE7RUFDSTtJQUFXLGtCQUFBO0VBcUJiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNXZoO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi50ZXh0LWNvbG9ye1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnRleHQtY29sb3Iye1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xyXG59XHJcbi5zdGF0dXMtbGViZWwge1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbn1cclxuLnRleHQtY29sb3IxIHtcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnRleHQtc3R5bGUze1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zaG93LWludm9pY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZCM0QxQTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNDglO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDUwJSA1MCUpO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDQzJSA1MCUpO1xyXG59XHJcbmlvbi1jb2wge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5mb250LXdpZHtcclxuICAgIGNvbG9yOiAjRDM3NTFEO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNob3ctdGhyZWV7XHJcbiAgICB3aWR0aDogMjd2dztcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luOiA1cHggNHB4O1xyXG4gICAgLy8gd2lkdGg6IDM1JTtcclxuICAgIC8vIGhlaWdodDogMjN2aDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgM3B4IDBweCByZ2IoMCAwIDAgLyA3JSksIC0xcHggMXB4IDRweCByZ2IoMCAwIDAgLyAyMyUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICBoZWlnaHQ6IDIzdmg7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1uYW1lLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAycHggMTVweCAycHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgIFxyXG59XHJcblxyXG4ub3JkZXJCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogI0ZGQ0M2QTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uc3RvY2stc2hvdyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlLWludm9pY2Uge1xyXG4gICAgd2lkdGg6IDQzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICBsZWZ0OiA0NHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggNXB4ICMyMjIyMjIpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMjIyMik7XHJcbn1cclxuLmdvLXRvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4uZ28tdG8gcCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4uZ28tdG8gcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbn1cclxucC5vcmRlci1zdGF0dXNfX3Byb2R1Y3QtcXVhbnRpdHktbGViZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5vcmRlci1zdGF0dXNfX3Byb2R1Y3QtbmFtZS1sZWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbn1cclxuc3Bhbi5vcmRlci1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5wLm9yZGVyLXN0YXR1c19fcHJvZHVjdC1uYW1lLWxlYmVsIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4ub3JkZXItc3RhdHVzX19wcm9kdWN0LXF1YW50aXR5LWxlYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4uZW1wbG95ZWUtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5lbXBsb3llZV9fZGV0YWlscyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG5cclxuLmxzdC1pb25pYy1ncmlkIHtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDh2aDtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ucC0xLmNpcmNsZS1wcm9ncmVzcyB7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIGhlaWdodDogNDBWdztcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICAvKiBoZWlnaHQ6IDQ4cHg7ICovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4ucHJvZ3Jlc3N7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2dyZXNzOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5wcm9ncmVzcyA+IHNwYW57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0e1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMTJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLnByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG59XHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHR7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXJpZ2h0IC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctMSAxLjhzIGxpbmVhciBmb3J3YXJkcztcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXZhbHVle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDY2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG4ucHJvZ3Jlc3MuYmx1ZSAucHJvZ3Jlc3MtYmFye1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxufVxyXG4ucHJvZ3Jlc3MuYmx1ZSAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFye1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLTIgMS41cyBsaW5lYXIgZm9yd2FyZHMgMS44cztcclxufVxyXG4ucHJvZ3Jlc3MueWVsbG93IC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZGJhMDQ7XHJcbn1cclxuLnByb2dyZXNzLnllbGxvdyAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFye1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLTMgMXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XHJcbn1cclxuLnByb2dyZXNzLnBpbmsgLnByb2dyZXNzLWJhcntcclxuICAgIGJvcmRlci1jb2xvcjogI2VkNjg3YztcclxufVxyXG4ucHJvZ3Jlc3MucGluayAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFye1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLTQgMC40cyBsaW5lYXIgZm9yd2FyZHMgMS44cztcclxufVxyXG4ucHJvZ3Jlc3MuZ3JlZW4gLnByb2dyZXNzLWJhcntcclxuICAgIGJvcmRlci1jb2xvcjogIzFhYmM5YztcclxufVxyXG4ucHJvZ3Jlc3MuZ3JlZW4gLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy01IDEuMnMgbGluZWFyIGZvcndhcmRzIDEuOHM7XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkaW5nLTF7XHJcbiAgICAwJXtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctMntcclxuICAgIDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy0ze1xyXG4gICAgMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy00e1xyXG4gICAgMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy01e1xyXG4gICAgMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCl7XHJcbiAgICAucHJvZ3Jlc3N7IG1hcmdpbi1ib3R0b206IDBweDsgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard.service */
      "./src/app/pages/dashboard/dashboard.service.ts");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(platform, loading, router, dashboars, alertController) {
          var _this2 = this;

          _classCallCheck(this, DashboardPage);

          this.platform = platform;
          this.loading = loading;
          this.router = router;
          this.dashboars = dashboars;
          this.alertController = alertController;
          this.ifLogin = JSON.parse(localStorage.getItem('user')); //////////////////Exit App //////////////////////////////////////////////////////////

          this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            if (_this2.router.url == '/dashboard') {
              if (window.confirm('do you want to exit app ? ')) {
                navigator['app'].exitApp();
              }
            }
          });
        }

        _createClass(DashboardPage, [{
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getDetaild();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            setTimeout(function () {
              //this.getDetaild();
              console.log('Done');
              console.log(event); // this.getSellers();
              // if (this.categories.length == this.categories.length) {
              //   event.target.disabled = true;
              // }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getDetaild();
          }
        }, {
          key: "getDetaild",
          value: function getDetaild() {
            var _this3 = this;

            // this.loading.present();
            this.loading.dismiss();
            this.dashboars.getDetails().subscribe(function (data) {
              _this3.loading.dismiss();

              _this3.inventory = data.data.Inventory;
              _this3.latestOrde = data.data.LatestOrder;
              _this3.totalPurchage = data.data.TotalPurchage;
              _this3.user = data.data.user;
              console.log(data.data);
            }, function (onerror) {
              if (onerror.status == 0) {
                _this3.loading.presentToastWarning('check your internet connection.');

                _this3.loading.dismiss();
              } else if (onerror.status == 500) {
                _this3.loading.dismiss();

                _this3.loading.presentToastError('Server error.');
              }
            });
          }
        }, {
          key: "invoiceDetails",
          value: function invoiceDetails() {
            this.router.navigateByUrl('invoice-details');
          }
        }, {
          key: "getScrollData",
          value: function getScrollData(event) {
            console.log(event.detail.value);
            var userData = null;

            for (var i = 0; i < this.user.length; i++) {
              if (this.user[i].id == event.detail.value) {
                userData = this.user[i];
                break;
              }
            }

            console.log(userData);
            this.showUserDetails(userData);
          }
        }, {
          key: "showUserDetails",
          value: function showUserDetails(userData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: '<strong>Employee id : </strong>' + userData.id + '<br><strong>Employee name </strong>' + userData.name + '<br><strong>Employee Phone </strong>' + userData.mobile + '<br><strong>Employee Email </strong>' + userData.email,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'info',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "placeOrder",
          value: function placeOrder() {
            this.router.navigateByUrl('/product-catagory');
          }
        }, {
          key: "createEmployee",
          value: function createEmployee() {
            this.router.navigateByUrl('/employee-list');
          }
        }, {
          key: "showOrderTeacking",
          value: function showOrderTeacking(order_id) {
            var navigationExtras = {
              state: {
                order_id: order_id
              }
            };
            this.router.navigate(['/order-tracking'], navigationExtras);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dashboard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dashboard.page.scss */
        "./src/app/pages/dashboard/dashboard.page.scss"))["default"]]
      })], DashboardPage);
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.service.ts ***!
      \******************************************************/

    /*! exports provided: DashboardService */

    /***/
    function srcAppPagesDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return DashboardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/env.service */
      "./src/app/services/env.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var DashboardService = /*#__PURE__*/function () {
        function DashboardService(http, env) {
          _classCallCheck(this, DashboardService);

          this.http = http;
          this.env = env;
          this.ifLogin = JSON.parse(localStorage.getItem('user'));
        }

        _createClass(DashboardService, [{
          key: "getDetails",
          value: function getDetails() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': this.ifLogin["token_type"] + " " + this.ifLogin["access_token"]
            });
            return this.http.get(this.env.API_URL + 'bar-owner/barDashboard', {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
              return user;
            }));
          }
        }]);

        return DashboardService;
      }();

      DashboardService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }];
      };

      DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DashboardService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map