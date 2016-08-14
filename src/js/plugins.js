import "babel-polyfill";

window.CryptoJS = require("browserify-cryptojs");

require("browserify-cryptojs/components/enc-base64");
require("browserify-cryptojs/components/md5");
require("browserify-cryptojs/components/evpkdf");
require("browserify-cryptojs/components/cipher-core");
require("browserify-cryptojs/components/aes");
require("browserify-cryptojs/components/sha256");

import Backbone from "backbone";

import $ from "jquery";

Backbone.$ = window.jQuery = window.$ = $;

import MalihuCustomScrollbarPlugin from "malihu-custom-scrollbar-plugin";
MalihuCustomScrollbarPlugin(window.$);

import "./libs/dense.min";
import "prefixfree";
import "selectize";
import "cropper";
import "timeago";

window.$.timeago.settings.localeTitle = true;

import Marionette from "backbone.marionette";
import Modals from "backbone.modal";

if (window.__agent) {
	window.__agent.start(Backbone, Marionette);
}

Marionette.Behaviors.behaviorsLookup = function() {
	return window.Behaviors;
};