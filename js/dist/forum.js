/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/mimeToIcon.js":
/*!**********************************!*\
  !*** ./src/common/mimeToIcon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mimeToIcon)
/* harmony export */ });
var image = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml', 'image/gif'];
var archive = ['application/zip', 'application/x-7z-compressed', 'application/gzip', 'application/vnd.rar', 'application/x-rar-compressed'];
var code = ['text/html', 'text/css', 'text/javascript', 'application/json', 'application/ld+json', 'text/javascript', 'application/x-httpd-php'];
var word = ['application/x-abiword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];
/**
 * Returns a FontAwesome icon class for a specified MIME type.
 *
 * If it's a known image type, it returns `image` instead.
 *
 * @param {string} fileType MIME type
 * @returns {string} Icon for MIME type
 */

function mimeToIcon(fileType) {
  // Display image (do not display for)
  if (image.includes(fileType)) {
    return 'image';
  } // Display image icon for other types
  else if (fileType.includes('image/')) {
    return 'far fa-file-image';
  } // Video icon
  else if (fileType.includes('video/')) {
    return 'far fa-file-video';
  } // Archive icon
  else if (archive.indexOf(fileType) >= 0) {
    return 'far fa-file-archive';
  } // PDF icon
  else if (fileType === 'application/pdf') {
    return 'far fa-file-pdf';
  } // Word
  else if (word.indexOf(fileType) >= 0) {
    return 'far fa-file-word';
  } // Audio icon
  else if (fileType.includes('audio/')) {
    return 'far fa-file-audio';
  } // Code files
  else if (code.indexOf(fileType) >= 0) {
    return 'far fa-file-code';
  }

  return 'far fa-file';
}

/***/ }),

/***/ "./src/common/models/File.js":
/*!***********************************!*\
  !*** ./src/common/models/File.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var File = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(File, _mixin);

  function File() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = File.prototype;

  /**
   * Use FoF Uploads endpoint
   */
  _proto.apiEndpoint = function apiEndpoint() {
    return '/fof/uploads' + (this.exists ? '/' + this.data.id : '');
  };

  return File;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  baseName: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('baseName'),
  path: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('path'),
  url: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('url'),
  type: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('type'),
  size: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('size'),
  humanSize: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('humanSize'),
  createdAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt'),
  uuid: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('uuid'),
  tag: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('tag'),
  hidden: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('hidden'),
  bbcode: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('bbcode')
}));



/***/ }),

/***/ "./src/forum/addUploadButton.js":
/*!**************************************!*\
  !*** ./src/forum/addUploadButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UploadButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UploadButton */ "./src/forum/components/UploadButton.js");
/* harmony import */ var _components_DragAndDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DragAndDrop */ "./src/forum/components/DragAndDrop.js");
/* harmony import */ var _components_PasteClipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PasteClipboard */ "./src/forum/components/PasteClipboard.js");
/* harmony import */ var _handler_Uploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handler/Uploader */ "./src/forum/handler/Uploader.js");
/* harmony import */ var _components_FileManagerButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FileManagerButton */ "./src/forum/components/FileManagerButton.js");








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', function () {
    this.uploader = new _handler_Uploader__WEBPACK_IMPORTED_MODULE_6__["default"]();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'controlItems', function (items) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('fof-upload.canUpload')) return;
    var composerButtonVisiblity = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('fof-upload.composerButtonVisiblity'); // Add media button

    if (composerButtonVisiblity === 'both' || composerButtonVisiblity === 'media-btn') {
      items.add('fof-upload-media', _components_FileManagerButton__WEBPACK_IMPORTED_MODULE_7__["default"].component({
        uploader: this.uploader
      }));
    } // Add upload button


    if (composerButtonVisiblity === 'both' || composerButtonVisiblity === 'upload-btn') {
      items.add('fof-upload', _components_UploadButton__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        uploader: this.uploader
      }));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function (f_, vnode) {
    var _this = this;

    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('fof-upload.canUpload')) return;
    this.uploader.on('success', function (_ref) {
      var file = _ref.file,
          addBBcode = _ref.addBBcode;
      if (!addBBcode) return; //Brutal fix by edge

      if (_this.attrs.composer.editor.getLastNChars(1) == '\n' || _this.attrs.composer.editor.getLastNChars(1) == '') {
        if (_this.attrs.composer.editor.getLastNChars(1) == '') {
          _this.attrs.composer.editor.insertAtCursor('\n', false);
        }

        _this.attrs.composer.editor.insertAtCursor(file.bbcode() + '\n', false);
      } else {
        _this.attrs.composer.editor.insertAtCursor(' ', true);

        _this.attrs.composer.editor.insertAtCursor('\n' + file.bbcode() + '\n', false);
      } // We wrap this in a typeof check to prevent it running when a user
      // is creating a new discussion. There's nothing to preview in a new
      // discussion, so the `preview` function isn't defined.


      if (typeof _this.attrs.preview === 'function') {
        // Scroll the preview into view
        // preview() causes the composer to close on mobile, but we don't want that. We want only the scroll
        // We work around that by temporarily patching the isFullScreen method
        var originalIsFullScreen = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).isFullScreen;

        (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).isFullScreen = function () {
          return false;
        };

        _this.attrs.preview();

        (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).isFullScreen = originalIsFullScreen;
      }
    }); // Gracefully fail if the TextEditor was used in a non-Composer context
    // Using a custom method to retrieve the target allows other extensions to still use this feature by returning an alternate container

    var dragAndDropTarget = this.fofUploadDragAndDropTarget();

    if (dragAndDropTarget) {
      this.dragAndDrop = new _components_DragAndDrop__WEBPACK_IMPORTED_MODULE_4__["default"](function (files) {
        return _this.uploader.upload(files);
      }, dragAndDropTarget);
    }

    new _components_PasteClipboard__WEBPACK_IMPORTED_MODULE_5__["default"](function (files) {
      return _this.uploader.upload(files);
    }, this.$('.TextEditor-editor')[0]);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'onremove', function (f_, vnode) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('fof-upload.canUpload')) return;

    if (this.dragAndDrop) {
      this.dragAndDrop.unload();
    }
  });

  (flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype).fofUploadDragAndDropTarget = function () {
    return this.$().parents('.Composer')[0];
  };
}

/***/ }),

/***/ "./src/forum/components/DragAndDrop.js":
/*!*********************************************!*\
  !*** ./src/forum/components/DragAndDrop.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragAndDrop)
/* harmony export */ });
var DragAndDrop = /*#__PURE__*/function () {
  function DragAndDrop(upload, composerElement) {
    this.upload = upload;
    this.composerElement = composerElement; // Keep references to the bound methods so we can remove the event listeners later

    this.handlers = {};

    if (!this.supportsFileDragging()) {
      return;
    }

    this.composerElement.addEventListener('dragover', this.handlers["in"] = this["in"].bind(this));
    this.composerElement.addEventListener('dragleave', this.handlers.out = this.out.bind(this));
    this.composerElement.addEventListener('dragend', this.handlers.out);
    this.composerElement.addEventListener('drop', this.handlers.dropping = this.dropping.bind(this));
  }

  var _proto = DragAndDrop.prototype;

  _proto.supportsFileDragging = function supportsFileDragging() {
    // Based on https://css-tricks.com/drag-and-drop-file-uploading/
    var div = document.createElement('div');
    return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
  };

  _proto.unload = function unload() {
    // If the handlers were not set (drag and drop not supported), we skip removing them
    if (!this.handlers["in"]) {
      return;
    }

    this.composerElement.removeEventListener('dragover', this.handlers["in"]);
    this.composerElement.removeEventListener('dragleave', this.handlers.out);
    this.composerElement.removeEventListener('dragend', this.handlers.out);
    this.composerElement.removeEventListener('drop', this.handlers.dropping);
  };

  _proto.isNotFile = function isNotFile(event) {
    // Checking event.dataTransfer.files.length does not work on dragover event, it's always zero
    // So we use the dataTransfer.items property to check whether any file is being dragged
    if (event.dataTransfer.items) {
      for (var i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind !== 'file') {
          return true;
        }
      }
    }

    return false;
  };

  _proto["in"] = function _in(event) {
    if (this.isNotFile(event)) {
      return;
    }

    event.preventDefault();

    if (!this.over) {
      this.composerElement.classList.add('fof-upload-dragging');
      this.over = true;
    }
  };

  _proto.out = function out(event) {
    if (this.isNotFile(event)) {
      return;
    }

    event.preventDefault();

    if (this.over) {
      this.composerElement.classList.remove('fof-upload-dragging');
      this.over = false;
    }
  };

  _proto.dropping = function dropping(event) {
    if (this.isNotFile(event)) {
      return;
    }

    event.preventDefault();
    this.upload(event.dataTransfer.files);
    this.composerElement.classList.remove('fof-upload-dragging');
  };

  return DragAndDrop;
}();



/***/ }),

/***/ "./src/forum/components/FileManagerButton.js":
/*!***************************************************!*\
  !*** ./src/forum/components/FileManagerButton.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileManagerButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FileManagerModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FileManagerModal */ "./src/forum/components/FileManagerModal.js");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__);







var FileManagerButton = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FileManagerButton, _Component);

  function FileManagerButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FileManagerButton.prototype;

  _proto.view = function view() {
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.buttons.media')
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
      className: 'Button fof-upload-button Button--icon',
      onclick: this.fileManagerButtonClicked.bind(this),
      icon: 'fas fa-file-check'
    }));
  }
  /**
   * Event handler for upload button being clicked
   *
   * @param {PointerEvent} e
   */
  ;

  _proto.fileManagerButtonClicked = function fileManagerButtonClicked(e) {
    e.preventDefault(); // Open dialog

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_FileManagerModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      uploader: this.attrs.uploader
    });
  };

  return FileManagerButton;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/forum/components/FileManagerModal.js":
/*!**************************************************!*\
  !*** ./src/forum/components/FileManagerModal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileManagerModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UploadButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UploadButton */ "./src/forum/components/UploadButton.js");
/* harmony import */ var _UserFileList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserFileList */ "./src/forum/components/UserFileList.js");
/* harmony import */ var _DragAndDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DragAndDrop */ "./src/forum/components/DragAndDrop.js");







var FileManagerModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FileManagerModal, _Modal);

  function FileManagerModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = FileManagerModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode); // Initialize upload managers


    this.uploader = vnode.attrs.uploader; // Current selected files

    this.selectedFiles = []; // Allow multiselect

    this.multiSelect = vnode.attrs.multiSelect || true; // Restrict file selection to specific types

    this.restrictFileType = vnode.attrs.restrictFileType || null; // Drag & drop

    this.dragDrop = null; // Initialize uploads

    this.onUpload();
  };

  _proto.className = function className() {
    return 'Modal--large fof-file-manager-modal';
  }
  /**
   * Initialize drag & drop
   */
  ;

  _proto.oncreate = function oncreate(vnode) {
    var _this = this;

    _Modal.prototype.oncreate.call(this, vnode);

    this.dragDrop = new _DragAndDrop__WEBPACK_IMPORTED_MODULE_5__["default"](function (files) {
      return _this.uploader.upload(files, false);
    }, this.$().find('.Modal-content')[0]);
  }
  /**
   * Remove events from modal content
   */
  ;

  _proto.onremove = function onremove() {
    if (this.dragDrop) {
      this.dragDrop.unload();
    }
  };

  _proto.view = function view() {
    var fileCount = this.selectedFiles.length;
    return m("div", {
      className: "Modal modal-dialog " + this.className()
    }, m("div", {
      className: "Modal-content"
    }, m("div", {
      className: "fof-modal-buttons App-backControl"
    }, m(_UploadButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      uploader: this.uploader,
      disabled: app.fileListState.isLoading(),
      isMediaUploadButton: true
    })), m("div", {
      className: "fof-drag-and-drop"
    }, m("div", {
      className: "fof-drag-and-drop-release"
    }, m("i", {
      className: "fas fa-cloud-upload-alt"
    }), app.translator.trans('fof-upload.forum.file_list.release_to_upload'))), m("div", {
      className: "Modal-header"
    }, m("h3", {
      className: "App-titleControl App-titleControl--text"
    }, app.translator.trans('fof-upload.forum.media_manager'))), this.alertAttrs && m("div", {
      className: "Modal-alert"
    }, m(Alert, this.alertAttrs)), m("div", {
      className: "Modal-body"
    }, m(_UserFileList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: this.attrs.user,
      selectable: true,
      onFileSelect: this.onFileSelect.bind(this),
      selectedFiles: this.selectedFiles,
      restrictFileType: this.restrictFileType
    })), m("div", {
      className: "Modal-footer"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      onclick: this.hide.bind(this),
      className: "Button"
    }, app.translator.trans('fof-upload.forum.buttons.cancel')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      onclick: this.onSelect.bind(this),
      disabled: this.selectedFiles.length === 0 || !this.multiSelect && this.selectedFiles.length > 1,
      className: "Button Button--primary"
    }, app.translator.trans('fof-upload.forum.file_list.confirm_selection_btn', {
      fileCount: fileCount
    })))));
  }
  /**
   * Add or remove file from selected files
   *
   * @param {File} file
   */
  ;

  _proto.onFileSelect = function onFileSelect(file) {
    var itemPosition = this.selectedFiles.indexOf(file.id());

    if (itemPosition >= 0) {
      this.selectedFiles.splice(itemPosition, 1);
    } else {
      if (this.multiSelect) {
        this.selectedFiles.push(file.id());
      } else {
        this.selectedFiles = [file.id()];
      }
    }
  }
  /**
   * Add files to file list after upload
   */
  ;

  _proto.onUpload = function onUpload() {
    var _this2 = this;

    this.uploader.on('success', function (_ref) {
      var file = _ref.file;

      if (_this2.multiSelect) {
        _this2.selectedFiles.push(file.id());
      } else {
        _this2.selectedFiles = [file.id()];
      }
    });
  }
  /**
   * Add selected files to the composer
   */
  ;

  _proto.onSelect = function onSelect() {
    this.hide(); // Custom callback

    if (this.attrs.onSelect) {
      this.attrs.onSelect(this.selectedFiles);
      return;
    } // Add selected files to composer


    this.selectedFiles.map(function (fileId) {
      var file = app.store.getById('files', fileId); //Brutal fix by edge

      if (app.composer.editor.getLastNChars(1) == '\n' || app.composer.editor.getLastNChars(1) == '') {
        if (app.composer.editor.getLastNChars(1) == '') {
          app.composer.editor.insertAtCursor('\n', false);
        }

        app.composer.editor.insertAtCursor(file.bbcode() + '\n', false);
      } else {
        app.composer.editor.insertAtCursor(' ', true);
        app.composer.editor.insertAtCursor(file.bbcode() + '\n', false);
      }
    });
  };

  return FileManagerModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/PasteClipboard.js":
/*!************************************************!*\
  !*** ./src/forum/components/PasteClipboard.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasteClipboard)
/* harmony export */ });
var PasteClipboard = /*#__PURE__*/function () {
  function PasteClipboard(upload, element) {
    this.upload = upload; // We don't need to remove the events listeners, because they'll get removed when the DOM does.

    element.addEventListener('paste', this.paste.bind(this));
  }

  var _proto = PasteClipboard.prototype;

  _proto.paste = function paste(e) {
    if (e.clipboardData && e.clipboardData.items) {
      var items = e.clipboardData.items;
      var files = [];

      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          files.push(items[i].getAsFile());
        }
      }

      if (files.length > 0) {
        e.preventDefault();
        this.upload(files);
      }
    }
  };

  return PasteClipboard;
}();



/***/ }),

/***/ "./src/forum/components/UploadButton.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UploadButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);








var UploadButton = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadButton, _Component);

  function UploadButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UploadButton.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Component.prototype.oninit.call(this, vnode);

    this.attrs.uploader.on('uploaded', function () {
      // reset the button for a new upload
      _this.$('form')[0].reset(); // redraw to reflect uploader.loading in the DOM


      m.redraw();
    });
    this.isMediaUploadButton = vnode.attrs.isMediaUploadButton || false;
  };

  _proto.view = function view() {
    var buttonText = this.attrs.uploader.uploading ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.states.loading') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.buttons.upload');
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
      text: buttonText
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()(['Button', 'hasIcon', 'fof-upload-button',
      /*!this.isMediaUploadButton && !this.attrs.uploader.uploading && */
      'Button--icon', //!this.isMediaUploadButton && !this.attrs.uploader.uploading && 'Button--link',
      this.attrs.uploader.uploading && 'uploading']),
      icon: !this.attrs.uploader.uploading && 'fas fa-file-upload',
      onclick: this.uploadButtonClicked.bind(this),
      disabled: this.attrs.disabled
    }, this.attrs.uploader.uploading && m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: "small",
      display: "inline",
      className: "Button-icon"
    }), (this.isMediaUploadButton || this.attrs.uploader.uploading) && m("span", {
      className: "Button-label"
    }, buttonText), m("form", null, m("input", {
      type: "file",
      multiple: true,
      onchange: this.process.bind(this)
    }))));
  }
  /**
   * Process the upload event.
   *
   * @param e
   */
  ;

  _proto.process = function process(e) {
    // get the file from the input field
    var files = this.$('input').prop('files');

    if (files.length === 0) {
      // We've got no files to upload, so trying
      // to begin an upload will show an error
      // to the user.
      return;
    }

    this.attrs.uploader.upload(files, !this.isMediaUploadButton);
  }
  /**
   * Event handler for upload button being clicked
   *
   * @param {PointerEvent} e
   */
  ;

  _proto.uploadButtonClicked = function uploadButtonClicked(e) {
    // Trigger click on hidden input element
    // (Opens file dialog)
    this.$('input').click();
  };

  return UploadButton;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/forum/components/UploadsUserPage.js":
/*!*************************************************!*\
  !*** ./src/forum/components/UploadsUserPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadsUserPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserFileList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserFileList */ "./src/forum/components/UserFileList.js");





var UploadsUserPage = /*#__PURE__*/function (_UserPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadsUserPage, _UserPage);

  function UploadsUserPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = UploadsUserPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);

    this.user = null;
    this.loadUser(m.route.param('username'));
  };

  _proto.content = function content() {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.viewOthersMediaLibrary() || this.user === (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user)) {
      return this.user && _UserFileList__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        user: this.user,
        selectable: false,
        downloadOnClick: true
      });
    } else {
      return null;
    }
  };

  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);

    this.user = user;
  };

  return UploadsUserPage;
}((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/forum/components/UserFileList.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UserFileList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserFileList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_mimeToIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/mimeToIcon */ "./src/common/mimeToIcon.js");










var UserFileList = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserFileList, _Component);

  function UserFileList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserFileList.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode); // Load file list


    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().fileListState.setUser(vnode.attrs.user || (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user);
    this.inModal = vnode.attrs.selectable;
    this.restrictFileType = vnode.attrs.restrictFileType || null;
    this.downloadOnClick = this.attrs.downloadOnClick || false;
    /**
     * @type {string[]} List of file UUIDs currently being hidden.
     */

    this.filesBeingHidden = [];
    /**
     * The user who's media we are dealing with
     */

    this.user = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().fileListState).user;
  };

  _proto.view = function view() {
    var _this = this;

    /**
     * @type {{empty(): boolean, files: import('../../common/models/File').default[]}}
     */
    var state = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().fileListState);
    return m("div", {
      className: "fof-upload-file-list",
      "aria-live": "polite"
    }, state.isLoading() && state.files.length === 0 && m("div", {
      className: 'fof-upload-loading'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.loading'), m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null)), this.inModal && state.empty() && m("p", {
      className: "fof-upload-empty"
    }, m("i", {
      className: "fas fa-cloud-upload-alt fof-upload-empty-icon"
    }), flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("fof-upload.forum.file_list.modal_empty_" + (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().screen() !== 'phone' ? 'desktop' : 'phone'))), !this.inModal && state.empty() && m("div", {
      className: "Placeholder"
    }, m("p", {
      className: "fof-upload-empty"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.empty'))), m("ul", null, state.files.map(function (file) {
      var fileIcon = (0,_common_mimeToIcon__WEBPACK_IMPORTED_MODULE_8__["default"])(file.type());
      var fileSelectable = _this.restrictFileType ? _this.isSelectable(file) : true;
      var fileClassNames = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()(['fof-file', // File is image
      fileIcon === 'image' && 'fof-file-type-image', // File is selected
      _this.attrs.selectedFiles && _this.attrs.selectedFiles.indexOf(file.id()) >= 0 && 'fof-file-selected']);
      /**
       * File's baseName (file name + extension)
       * @type {string}
       */

      var fileName = file.baseName();

      var isFileHiding = _this.filesBeingHidden.includes(file.uuid());

      return m("li", {
        "aria-busy": isFileHiding
      }, (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user && (_this.user === (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user || flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.deleteOthersMediaLibrary()) && m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Button Button--icon fof-file-delete",
        icon: "far fa-trash-alt",
        "aria-label": flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.delete_file_a11y_label', {
          fileName: fileName
        }),
        disabled: isFileHiding,
        onclick: _this.hideFile.bind(_this, file)
      }), m("button", {
        className: fileClassNames,
        onclick: function onclick() {
          return _this.onFileClick(file);
        },
        disabled: !fileSelectable || isFileHiding,
        "aria-label": flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.select_file_a11y_label', {
          fileName: fileName
        }))
      }, m("figure", null, fileIcon === 'image' ? m("img", {
        src: file.url(),
        className: "fof-file-image-preview",
        draggable: false // Images should always have an `alt`, even if empty!
        //
        // As we already state the file name as part of the
        // button alt label, there's no point in restating it.
        //
        // See: https://www.w3.org/WAI/tutorials/images/decorative#decorative-image-as-part-of-a-text-link
        ,
        alt: ""
      }) : m("span", {
        className: "fof-file-icon" // Prevents a screen-reader from traversing this node.
        //
        // This is a placeholder for when no preview is available,
        // and a preview won't benefit a user using a screen
        // reader anyway, so there is no benefit to making them
        // aware of a lack of a preview.
        ,
        role: "presentation"
      }, m("i", {
        className: "fa-fw " + fileIcon
      })), m("figcaption", {
        className: "fof-file-name"
      }, fileName), isFileHiding && m("span", {
        "class": "fof-file-loading",
        role: "status",
        "aria-label": flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.hide_file.loading')
      }, m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null)))));
    })), state.hasMoreResults() && m("div", {
      className: 'fof-load-more-files'
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: 'Button Button--primary',
      disabled: state.isLoading(),
      loading: state.isLoading(),
      onclick: function onclick() {
        return state.loadMore();
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.load_more_files_btn'))));
  }
  /**
   * Execute function on file click
   *
   * @param {import('../../common/models/File').default} file
   */
  ;

  _proto.onFileClick = function onFileClick(file) {
    // Custom functionality
    if (this.attrs.onFileSelect) {
      this.attrs.onFileSelect(file);
      return;
    } // Download on click


    if (this.attrs.downloadOnClick) {
      window.open(file.url());
      return;
    }
  }
  /**
   * Check if a file is selectable
   *
   * @param {import('../../common/models/File').default} file
   */
  ;

  _proto.isSelectable = function isSelectable(file) {
    var fileType = file.type(); // Custom defined file types

    if (Array.isArray(this.restrictFileType)) {
      return this.restrictFileType.indexOf(fileType) >= 0;
    } // Image
    else if (this.restrictFileType === 'image') {
      return fileType.includes('image/');
    } // Audio
    else if (this.restrictFileType === 'audio') {
      return fileType.includes('audio/');
    } // Video
    else if (this.restrictFileType === 'video') {
      return fileType.includes('video/');
    }

    return false;
  }
  /**
   * Begins the hiding process for a file.
   *
   * - Shows a native confirmation dialog
   * - If confirmed, sends AJAX request to the hide file API
   *
   * @param {import('../../common/models/File').default} file File to hide
   */
  ;

  _proto.hideFile = function hideFile(file) {
    var _this2 = this;

    /**
     * @type {string} File UUID
     */
    var uuid = file.uuid();
    if (this.filesBeingHidden.includes(uuid)) return;
    this.filesBeingHidden.push(uuid);
    var confirmHide = confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.hide_file.hide_confirmation', {
      fileName: file.baseName()
    })));

    if (confirmHide) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
        method: 'PATCH',
        url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/fof/upload/hide",
        body: {
          uuid: uuid
        }
      }).then(function () {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
          type: 'success'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.hide_file.hide_success'));
      })["catch"](function () {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
          type: 'error'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.file_list.hide_file.hide_fail', {
          fileName: file.fileName()
        }));
      }).then(function () {
        // Remove hidden file from state

        /**
         * @type {{ files: import('../../common/models/File').default[] }}
         */
        var state = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().fileListState);
        var index = state.files.findIndex(function (file) {
          return uuid === file.uuid();
        });
        state.files.splice(index, 1); // Remove file from hiding list

        var i = _this2.filesBeingHidden.indexOf(uuid);

        _this2.filesBeingHidden.splice(i, 1);
      });
    } else {
      // Remove file from hiding list
      var i = this.filesBeingHidden.indexOf(uuid);
      this.filesBeingHidden.splice(i, 1);
    }
  };

  return UserFileList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/forum/components/index.js":
/*!***************************************!*\
  !*** ./src/forum/components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _handler_Uploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler/Uploader */ "./src/forum/handler/Uploader.js");
/* harmony import */ var _DragAndDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragAndDrop */ "./src/forum/components/DragAndDrop.js");
/* harmony import */ var _FileManagerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileManagerButton */ "./src/forum/components/FileManagerButton.js");
/* harmony import */ var _FileManagerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileManagerModal */ "./src/forum/components/FileManagerModal.js");
/* harmony import */ var _UserFileList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserFileList */ "./src/forum/components/UserFileList.js");
/* harmony import */ var _UploadButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UploadButton */ "./src/forum/components/UploadButton.js");






var components = {
  DragAndDrop: _DragAndDrop__WEBPACK_IMPORTED_MODULE_1__["default"],
  FileManagerButton: _FileManagerButton__WEBPACK_IMPORTED_MODULE_2__["default"],
  FileManagerModal: _FileManagerModal__WEBPACK_IMPORTED_MODULE_3__["default"],
  UserFileList: _UserFileList__WEBPACK_IMPORTED_MODULE_4__["default"],
  Uploader: _handler_Uploader__WEBPACK_IMPORTED_MODULE_0__["default"],
  UploadButton: _UploadButton__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/forum/downloadButtonInteraction.js":
/*!************************************************!*\
  !*** ./src/forum/downloadButtonInteraction.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/Post */ "flarum/forum/components/Post");
/* harmony import */ var flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_2__);



/* global $ */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    var _this = this;

    this.$('[data-fof-upload-download-uuid]').unbind('click').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('fof-upload.canDownload')) {
        alert(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-upload.forum.states.unauthorized'));
        return;
      }

      var url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('apiUrl') + '/fof/download';
      url += '/' + encodeURIComponent(e.currentTarget.dataset.fofUploadDownloadUuid);
      url += '/' + encodeURIComponent(_this.attrs.post.id());
      url += '/' + encodeURIComponent((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).csrfToken);
      window.open(url);
    });
  });
}

/***/ }),

/***/ "./src/forum/handler/Uploader.js":
/*!***************************************!*\
  !*** ./src/forum/handler/Uploader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Uploader)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);


var Uploader = /*#__PURE__*/function () {
  function Uploader() {
    this.callbacks = {
      success: [],
      failure: [],
      uploading: [],
      uploaded: []
    };
    this.uploading = false;
  }

  var _proto = Uploader.prototype;

  _proto.on = function on(type, callback) {
    this.callbacks[type].push(callback);
  };

  _proto.dispatch = function dispatch(type, response) {
    this.callbacks[type].forEach(function (callback) {
      return callback(response);
    });
  };

  _proto.upload = function upload(files, addBBcode) {
    var _this = this;

    if (addBBcode === void 0) {
      addBBcode = true;
    }

    this.uploading = true;
    this.dispatch('uploading', files);
    m.redraw(); // Forcing a redraw so that the button also updates if uploadFiles() is called from DragAndDrop or PasteClipboard

    var body = new FormData();

    for (var i = 0; i < files.length; i++) {
      body.append('files[]', files[i]);
    } // send a POST request to the api


    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().request({
      method: 'POST',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('apiUrl') + '/fof/upload',
      // prevent JSON.stringify'ing the form data in the XHR call
      serialize: function serialize(raw) {
        return raw;
      },
      body: body
    }).then(function (result) {
      return _this.uploaded(result, addBBcode);
    })["catch"](function (error) {
      _this.uploading = false;
      m.redraw();
      var e = error.response.errors[0];

      if (!e.code.includes('fof-upload')) {
        throw error;
      }

      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.clear();
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
        type: 'error'
      }, e.detail);
    });
  };

  _proto.uploaded = function uploaded(result, addBBcode) {
    var _this2 = this;

    if (addBBcode === void 0) {
      addBBcode = false;
    }

    this.uploading = false;
    result.data.forEach(function (file) {
      var fileObj = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.pushObject(file); // Add file to media manager

      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().fileListState.addToList(fileObj); // Dispatch

      _this2.dispatch('success', {
        file: fileObj,
        addBBcode: addBBcode
      });
    });
    this.dispatch('uploaded');
  };

  return Uploader;
}();



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_11__.components)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_models_File__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/File */ "./src/common/models/File.js");
/* harmony import */ var _states_FileListState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/FileListState */ "./src/forum/states/FileListState.js");
/* harmony import */ var _downloadButtonInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloadButtonInteraction */ "./src/forum/downloadButtonInteraction.js");
/* harmony import */ var _addUploadButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addUploadButton */ "./src/forum/addUploadButton.js");
/* harmony import */ var _components_UploadsUserPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/UploadsUserPage */ "./src/forum/components/UploadsUserPage.js");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./src/forum/components/index.js");












flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('fof-upload', function () {
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_9___default().prototype).viewOthersMediaLibrary = flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default().attribute('fof-upload-viewOthersMediaLibrary');
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_9___default().prototype).deleteOthersMediaLibrary = flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default().attribute('fof-upload-deleteOthersMediaLibrary');
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_9___default().prototype).uploadCountCurrent = flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default().attribute('fof-upload-uploadCountCurrent');
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_9___default().prototype).uploadCountAll = flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default().attribute('fof-upload-uploadCountAll');
  (0,_addUploadButton__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_downloadButtonInteraction__WEBPACK_IMPORTED_MODULE_6__["default"])(); // File model

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store).models.files = _common_models_File__WEBPACK_IMPORTED_MODULE_4__["default"]; // File list state

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().fileListState) = new _states_FileListState__WEBPACK_IMPORTED_MODULE_5__["default"](); // Add user uploads to the user profile

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().routes)['user.uploads'] = {
    path: '/u/:username/uploads',
    component: _components_UploadsUserPage__WEBPACK_IMPORTED_MODULE_8__["default"]
  }; // Add uploads to user page menu items

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'navItems', function (items) {
    var canUpload = !!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('fof-upload.canUpload');
    var hasUploads = !!this.user.uploadCountCurrent();

    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.viewOthersMediaLibrary() || this.user === (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user && (canUpload || hasUploads))) {
      var uploadCount = this.user.uploadCountCurrent();
      items.add('uploads', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default().component({
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('user.uploads', {
          username: this.user.slug()
        }),
        name: 'uploads',
        icon: 'fas fa-file-upload'
      }, [this.user === (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.buttons.media') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-upload.forum.buttons.user_uploads'), ' ', uploadCount > 0 ? m("span", {
        className: "Button-badge"
      }, uploadCount) : '']), 80);
    }
  });
});

/***/ }),

/***/ "./src/forum/states/FileListState.js":
/*!*******************************************!*\
  !*** ./src/forum/states/FileListState.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileListState)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);


var FileListState = /*#__PURE__*/function () {
  function FileListState() {
    this.user = null;
    this.files = [];
    this.moreResults = false;
    this.loading = false;
  }
  /**
   * Set user and load list
   *
   * @param user A user to populate the media manager
   */


  var _proto = FileListState.prototype;

  _proto.setUser = function setUser(user) {
    // Keep previous state
    if (user === this.user) return; // Set user

    this.user = user; // Reset file list

    this.files = []; // Load user files

    this.loadResults();
  }
  /**
   * Load more user files
   *
   * @param offset The index to start the page at.
   */
  ;

  _proto.loadResults = function loadResults(offset) {
    if (offset === void 0) {
      offset = 0;
    }

    if (!this.user) return;
    this.loading = true;
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('fof/uploads', {
      filter: {
        user: this.user.id()
      },
      page: {
        offset: offset
      }
    }).then(this.parseResults.bind(this));
  }
  /**
   * Load the next page of discussion results.
   */
  ;

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadResults(this.files.length).then(this.parseResults.bind(this));
  }
  /**
   * Parse results and append them to the file list.
   */
  ;

  _proto.parseResults = function parseResults(results) {
    var _this$files;

    (_this$files = this.files).push.apply(_this$files, results);

    this.loading = false;
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    m.redraw();
    return results;
  }
  /**
   * Add files to the beginning of the list
   */
  ;

  _proto.addToList = function addToList(files) {
    if (Array.isArray(files)) {
      var _this$files2;

      (_this$files2 = this.files).unshift.apply(_this$files2, files);
    } else {
      this.files.unshift(files);
    }
  }
  /**
   * Are there any files in the list?
   */
  ;

  _proto.hasFiles = function hasFiles() {
    return this.files.length > 0;
  }
  /**
   * Is the file list loading?
   */
  ;

  _proto.isLoading = function isLoading() {
    return this.loading;
  }
  /**
   * Does this user has more files?
   */
  ;

  _proto.hasMoreResults = function hasMoreResults() {
    return this.moreResults;
  }
  /**
   * Does this user have any files?
   */
  ;

  _proto.empty = function empty() {
    return !this.hasFiles() && !this.isLoading();
  };

  return FileListState;
}();



/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

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

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

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

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/mixin":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/utils/mixin']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/mixin'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/Post":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Post']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Post'];

/***/ }),

/***/ "flarum/forum/components/UserPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserPage']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserPage'];

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
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.components)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map