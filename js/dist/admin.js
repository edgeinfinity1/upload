/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/InspectMimeModal.js":
/*!**************************************************!*\
  !*** ./src/admin/components/InspectMimeModal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InspectMimeModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);





var InspectMimeModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(InspectMimeModal, _Modal);

  function InspectMimeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = InspectMimeModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.uploading = false;
    this.inspection = {};
  };

  _proto.className = function className() {
    return 'Modal--small fof-upload-inspect-mime-modal';
  };

  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("p", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.description', {
      a: m("a", {
        href: "https://github.com/SoftCreatR/php-mime-detector"
      })
    })), m("p", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.select')), m("div", null, m("input", {
      type: "file",
      onchange: this.onupload.bind(this),
      disabled: this.uploading
    }), this.uploading ? flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default().component() : null), m("dl", null, m("dt", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.laravel-validation')), m("dd", null, typeof this.inspection.laravel_validation === 'undefined' ? m("em", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.no-file-selected')) : this.inspection.laravel_validation ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.validation-passed') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.validation-failed', {
      error: this.inspection.laravel_validation_error || '?'
    }))), m("dl", null, m("dt", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.mime-detector')), m("dd", null, this.inspection.mime_detector ? m("code", null, this.inspection.mime_detector) : m("em", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.not-available')))), m("dl", null, m("dt", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.mime-fileinfo')), m("dd", null, this.inspection.php_mime ? m("code", null, this.inspection.php_mime) : m("em", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.not-available')))), m("dl", null, m("dt", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.guessed-extension')), m("dd", null, this.inspection.guessed_extension ? m("code", null, this.inspection.guessed_extension) : m("em", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.inspect-mime.not-available')))));
  };

  _proto.onupload = function onupload(event) {
    var _this = this;

    var body = new FormData();

    for (var i = 0; i < event.target.files.length; i++) {
      body.append('files[]', event.target.files[i]);
    }

    this.uploading = true;
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/fof/upload/inspect-mime',
      serialize: function serialize(raw) {
        return raw;
      },
      body: body
    }).then(function (result) {
      _this.uploading = false;
      _this.inspection = result;
      m.redraw();
    })["catch"](function (error) {
      _this.uploading = false;
      _this.inspection = {};
      m.redraw();
      throw error;
    });
  };

  return InspectMimeModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/admin/components/UploadPage.js":
/*!********************************************!*\
  !*** ./src/admin/components/UploadPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/utils/saveSettings */ "flarum/admin/utils/saveSettings");
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/admin/components/UploadImageButton */ "flarum/admin/components/UploadImageButton");
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/withAttr */ "flarum/common/utils/withAttr");
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _InspectMimeModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InspectMimeModal */ "./src/admin/components/InspectMimeModal.js");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_14__);















/* global m */

var UploadPage = /*#__PURE__*/function (_ExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadPage, _ExtensionPage);

  function UploadPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = UploadPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _ExtensionPage.prototype.oninit.call(this, vnode); // whether we are saving the settings or not right now


    this.loading = false; // the fields we need to watch and to save

    this.fields = [// image
    'resizeMaxWidth', 'cdnUrl', 'maxFileSize', 'whitelistedClientExtensions', 'composerButtonVisiblity', // watermark
    'watermark', 'watermarkPosition', // Imgur
    'imgurClientId', // AWS
    'awsS3Key', 'awsS3Secret', 'awsS3Bucket', 'awsS3Region', 'awsS3Endpoint', 'awsS3ACL', // QIniu
    'qiniuKey', 'qiniuSecret', 'qiniuBucket']; // the checkboxes we need to watch and to save.

    this.checkboxes = ['mustResize', 'addsWatermarks', 'disableHotlinkProtection', 'disableDownloadLogging', 'awsS3UsePathStyleEndpoint']; // fields that are objects

    this.objects = ['mimeTypes']; // watermark positions

    this.watermarkPositions = {
      'top-left': 'top-left',
      'top-right': 'top-right',
      'bottom-left': 'bottom-left',
      'bottom-right': 'bottom-right',
      center: 'center',
      left: 'left',
      top: 'top',
      right: 'right',
      bottom: 'bottom'
    }; // Composer button options

    this.composerButtonVisiblityOptions = {
      both: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.composer_buttons.options.both'),
      'upload-btn': flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.composer_buttons.options.upload-btn'),
      'media-btn': flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.composer_buttons.options.media-btn')
    }; // get the saved settings from the database

    var settings = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings; // our package prefix (to be added to every field and checkbox in the setting table)

    this.settingsPrefix = 'fof-upload'; // Options for the Upload methods dropdown menu.

    this.uploadMethodOptions = settings[this.addPrefix('availableUploadMethods')] || {}; // Options for the Template dropdown menu.

    this.templateOptions = settings[this.addPrefix('availableTemplates')] || {}; // Contains current values.

    this.values = {}; // bind the values of the fields and checkboxes to the getter/setter functions

    this.fields.forEach(function (key) {
      return _this.values[key] = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()(settings[_this.addPrefix(key)]);
    });
    this.checkboxes.forEach(function (key) {
      return _this.values[key] = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()(settings[_this.addPrefix(key)] === '1');
    });
    this.objects.forEach(function (key) {
      return _this.values[key] = settings[_this.addPrefix(key)] ? flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()(JSON.parse(settings[_this.addPrefix(key)])) : flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()();
    }); // Set a sane default in case no mimeTypes have been configured yet.
    // Since 'local' (or others) can now be disabled, pick the last entry in the object for default

    this.defaultAdap = Object.keys(this.uploadMethodOptions)[Object.keys(this.uploadMethodOptions).length - 1];
    this.values.mimeTypes() || (this.values.mimeTypes = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()({
      '^image\\/.*': {
        adapter: this.defaultAdap,
        template: 'image-preview'
      }
    }));
    this.newMimeType = {
      regex: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()(''),
      adapter: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()(this.defaultAdap),
      template: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()('file')
    };
  }
  /**
   * Show the actual ImageUploadPage.
   *
   * @returns {*}
   */
  ;

  _proto.content = function content() {
    var _this2 = this;

    var max_post = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings[this.addPrefix('php_ini.post_max_size')];
    var max_upload = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings[this.addPrefix('php_ini.upload_max_filesize')];
    return [m('.UploadPage', [m('.container', [m('form', {
      onsubmit: this.onsubmit.bind(this)
    }, [m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.preferences.title')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.preferences.max_file_size')), m('input.FormControl', {
      value: this.values.maxFileSize() || 2048,
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.maxFileSize),
      type: 'number',
      min: '0'
    }), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.preferences.php_ini_values', {
      post: max_post,
      upload: max_upload
    })), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.preferences.mime_types')), m('.MimeTypes--Container', Object.keys(this.values.mimeTypes()).map(function (mime) {
      var config = _this2.values.mimeTypes()[mime]; // Compatibility for older versions.


      if (typeof config !== 'object') {
        config = {
          adapter: config,
          template: 'file'
        };
      }

      return m('div', [m('input.FormControl.MimeTypes', {
        value: mime,
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', _this2.updateMimeTypeKey.bind(_this2, mime))
      }), flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default().component({
        options: _this2.uploadMethodOptions,
        onchange: _this2.updateMimeTypeAdapter.bind(_this2, mime, config),
        value: config.adapter || 'local'
      }), flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default().component({
        options: _this2.getTemplateOptionsForInput(),
        onchange: _this2.updateMimeTypeTemplate.bind(_this2, mime, config),
        value: config.template || 'local'
      }), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
        type: 'button',
        className: 'Button Button--warning',
        onclick: _this2.deleteMimeType.bind(_this2, mime)
      }, 'x')]);
    }), m('br'), m('div', [m('input.FormControl.MimeTypes.add-MimeType-key', {
      value: this.newMimeType.regex(),
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.newMimeType.regex)
    }), flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default().component({
      options: this.uploadMethodOptions,
      className: 'add-MimeType-value',
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.newMimeType.adapter),
      value: this.newMimeType.adapter()
    }), flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default().component({
      options: this.getTemplateOptionsForInput(),
      className: 'add-MimeType-value',
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.newMimeType.template),
      value: this.newMimeType.template()
    }), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      type: 'button',
      className: 'Button Button--warning',
      onclick: this.addMimeType.bind(this)
    }, '+')])), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.mime_types')), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      className: 'Button',
      onclick: function onclick() {
        flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_InspectMimeModal__WEBPACK_IMPORTED_MODULE_12__["default"]);
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.inspect-mime')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.download_templates')), this.templateOptionsDescriptions()]), m('fieldset.composerButtons', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.composer_buttons.title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.composer_buttons')), m('div', [flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default().component({
      options: this.composerButtonVisiblityOptions,
      onchange: this.values.composerButtonVisiblity,
      value: this.values.composerButtonVisiblity() || 'both'
    })])]), m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.resize.title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.resize')), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default().component({
      state: this.values.mustResize() || false,
      onchange: this.values.mustResize
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.resize.toggle')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.resize.max_width')), m('input', {
      className: 'FormControl',
      value: this.values.resizeMaxWidth() || 100,
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.resizeMaxWidth),
      disabled: !this.values.mustResize(),
      type: 'number',
      min: '0'
    })]), m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.client_extension.title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.client_extension')), m('input', {
      className: 'FormControl',
      value: this.values.whitelistedClientExtensions() || '',
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.whitelistedClientExtensions)
    })]), m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.watermark.title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.watermark')), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default().component({
      state: this.values.addsWatermarks() || false,
      onchange: this.values.addsWatermarks
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.watermark.toggle')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.watermark.position')), m('div', [flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default().component({
      options: this.watermarkPositions,
      onchange: this.values.watermarkPosition,
      value: this.values.watermarkPosition() || 'bottom-right'
    })]), m('label', {}, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.watermark.file')), flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7___default().component({
      name: 'fof/watermark'
    })]), m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.disable-hotlink-protection.title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.disable-hotlink-protection')), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default().component({
      state: this.values.disableHotlinkProtection() || false,
      onchange: this.values.disableHotlinkProtection
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.disable-hotlink-protection.toggle')), m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.disable-download-logging.title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.disable-download-logging')), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default().component({
      state: this.values.disableDownloadLogging() || false,
      onchange: this.values.disableDownloadLogging
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.disable-download-logging.toggle'))]), m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.local.title')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.local.cdn_url')), m('input.FormControl', {
      value: this.values.cdnUrl() || '',
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.cdnUrl)
    })]), this.adaptorItems().toArray(), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading,
      disabled: !this.changed()
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.admin.settings.submit_button'))])])])];
  };

  _proto.adaptorItems = function adaptorItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11___default())();

    if (this.uploadMethodOptions['imgur'] !== undefined) {
      items.add('imgur', m("div", {
        className: "imgur"
      }, m("fieldset", null, m("legend", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.imgur.title')), m("p", null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_13___default()('fas fa-exclamation-circle'), ' ', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.imgur.tos', {
        a: m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_14___default()), {
          href: "https://imgur.com/tos",
          external: true,
          target: "_blank"
        })
      })), m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.imgur.client_id')), m("input", {
        className: "FormControl",
        value: this.values.imgurClientId() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.imgurClientId)
      }))), 100);
    }

    if (this.uploadMethodOptions['qiniu'] !== undefined) {
      items.add('qiniu', m('.qiniu', [m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.qiniu.title')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.qiniu.key')), m('input.FormControl', {
        value: this.values.qiniuKey() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.qiniuKey)
      }), m('label', {}, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.qiniu.secret')), m('input.FormControl', {
        value: this.values.qiniuSecret() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.qiniuSecret)
      }), m('label', {}, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.qiniu.bucket')), m('input.FormControl', {
        value: this.values.qiniuBucket() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.qiniuBucket)
      })])]), 80);
    }

    if (this.uploadMethodOptions['aws-s3'] !== undefined) {
      items.add('aws-s3', m('.aws', [m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.s3_instance_profile')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.key')), m('input.FormControl', {
        value: this.values.awsS3Key() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.awsS3Key)
      }), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.secret')), m('input.FormControl', {
        value: this.values.awsS3Secret() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.awsS3Secret)
      }), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.bucket')), m('input.FormControl', {
        value: this.values.awsS3Bucket() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.awsS3Bucket)
      }), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.region')), m('input.FormControl', {
        value: this.values.awsS3Region() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.awsS3Region)
      })]), m('fieldset', [m('legend', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.advanced_title')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.s3_compatible_storage')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.endpoint')), m('input.FormControl', {
        value: this.values.awsS3Endpoint() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.awsS3Endpoint)
      }), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default().component({
        state: this.values.awsS3UsePathStyleEndpoint() || false,
        onchange: this.values.awsS3UsePathStyleEndpoint
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.use_path_style_endpoint')), m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.labels.aws-s3.acl')), m('input.FormControl', {
        value: this.values.awsS3ACL() || '',
        oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.values.awsS3ACL)
      }), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.admin.help_texts.s3_acl'))])]), 60);
    }

    return items;
  };

  _proto.getTemplateOptionsForInput = function getTemplateOptionsForInput() {
    var options = {};

    for (var option in this.templateOptions) {
      if (!this.templateOptions.hasOwnProperty(option)) {
        continue;
      }

      options[option] = this.templateOptions[option].name;
    }

    return options;
  };

  _proto.updateMimeTypeKey = function updateMimeTypeKey(mime, value) {
    this.values.mimeTypes()[value] = this.values.mimeTypes()[mime];
    this.deleteMimeType(mime);
  };

  _proto.updateMimeTypeAdapter = function updateMimeTypeAdapter(mime, config, value) {
    config.adapter = value;
    this.values.mimeTypes()[mime] = config;
  };

  _proto.updateMimeTypeTemplate = function updateMimeTypeTemplate(mime, config, value) {
    config.template = value;
    this.values.mimeTypes()[mime] = config;
  };

  _proto.deleteMimeType = function deleteMimeType(mime) {
    delete this.values.mimeTypes()[mime];
  };

  _proto.templateOptionsDescriptions = function templateOptionsDescriptions() {
    var children = [];

    for (var template in this.templateOptions) {
      if (!this.templateOptions.hasOwnProperty(template)) {
        continue;
      }

      children.push(m("li", null, this.templateOptions[template].name, ": ", m.trust(this.templateOptions[template].description)));
    }

    return m('ul', children);
  };

  _proto.addMimeType = function addMimeType() {
    this.values.mimeTypes()[this.newMimeType.regex()] = {
      adapter: this.newMimeType.adapter(),
      template: this.newMimeType.template()
    };
    this.newMimeType.regex('');
    this.newMimeType.adapter('local');
    this.newMimeType.template('file');
  }
  /**
   * Checks if the values of the fields and checkboxes are different from
   * the ones stored in the database
   *
   * @returns boolean
   */
  ;

  _proto.changed = function changed() {
    var _this3 = this;

    var fieldsCheck = this.fields.some(function (key) {
      return _this3.values[key]() !== (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings[_this3.addPrefix(key)];
    });
    var checkboxesCheck = this.checkboxes.some(function (key) {
      return _this3.values[key]() !== ((flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings[_this3.addPrefix(key)] === '1');
    });
    var objectsCheck = this.objects.some(function (key) {
      return JSON.stringify(_this3.values[key]()) !== (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings[_this3.addPrefix(key)];
    });
    return fieldsCheck || checkboxesCheck || objectsCheck;
  }
  /**
   * Saves the settings to the database and redraw the page
   *
   * @param e
   */
  ;

  _proto.onsubmit = function onsubmit(e) {
    var _this4 = this;

    // prevent the usual form submit behaviour
    e.preventDefault(); // if the page is already saving, do nothing

    if (this.loading) return; // prevents multiple savings

    this.loading = true; // remove previous success popup

    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.dismiss(this.successAlert);
    var settings = {}; // gets all the values from the form

    this.fields.forEach(function (key) {
      return settings[_this4.addPrefix(key)] = _this4.values[key]();
    });
    this.checkboxes.forEach(function (key) {
      return settings[_this4.addPrefix(key)] = _this4.values[key]();
    });
    this.objects.forEach(function (key) {
      return settings[_this4.addPrefix(key)] = JSON.stringify(_this4.values[key]());
    }); // actually saves everything in the database

    flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default()(settings).then(function () {
      // on success, show popup
      _this4.successAlert = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
        type: 'success'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.admin.settings.saved_message'));
    })["catch"](function () {}).then(function () {
      // return to the initial state and redraw the page
      _this4.loading = false;
      m.redraw();
    });
  }
  /**
   * Adds the prefix `this.settingsPrefix` at the beginning of `key`
   *
   * @returns string
   */
  ;

  _proto.addPrefix = function addPrefix(key) {
    return this.settingsPrefix + '.' + key;
  };

  return UploadPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_10___default()));



/***/ }),

/***/ "./src/admin/components/index.ts":
/*!***************************************!*\
  !*** ./src/admin/components/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _UploadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadPage */ "./src/admin/components/UploadPage.js");

var components = {
  UploadPage: _UploadPage__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.components)
/* harmony export */ });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UploadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UploadPage */ "./src/admin/components/UploadPage.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/admin/components/index.ts");



flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('fof-upload', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('fof-upload').registerPage(_components_UploadPage__WEBPACK_IMPORTED_MODULE_1__["default"]).registerPermission({
    icon: 'far fa-file',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-upload.admin.permissions.upload_label'),
    permission: 'fof-upload.upload'
  }, 'start', 50).registerPermission({
    icon: 'fas fa-download',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-upload.admin.permissions.download_label'),
    permission: 'fof-upload.download',
    allowGuest: true
  }, 'view', 50).registerPermission({
    icon: 'fas fa-eye',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-upload.admin.permissions.view_user_uploads_label'),
    permission: 'fof-upload.viewUserUploads'
  }, 'moderate', 50).registerPermission({
    icon: 'fas fa-trash',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-upload.admin.permissions.delete_uploads_of_others_label'),
    permission: 'fof-upload.deleteUserUploads'
  }, 'moderate', 50);
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/UploadImageButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UploadImageButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UploadImageButton'];

/***/ }),

/***/ "flarum/admin/utils/saveSettings":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/saveSettings']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/utils/saveSettings'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/withAttr":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/withAttr']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/withAttr'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _src_admin__WEBPACK_IMPORTED_MODULE_0__.components)
/* harmony export */ });
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map