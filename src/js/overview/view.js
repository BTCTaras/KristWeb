import {LayoutView} from "backbone.marionette";
import template from "./template.hbs";

import app from "../app.js";
import MOTDPanel from "./motd-panel/panel";
import WalletOverview from "./wallet-overview/view";

import Radio from "backbone.radio";

import NProgress from "nprogress";

let appChannel = Radio.channel("global");
let walletChannel = Radio.channel("wallet");

export default LayoutView.extend({
	template: template,
	className: "overview",

	regions: {
		overview: "#overview",
		motdPanel: "#motd-panel"
	},

	initialize() {
	},

	templateHelpers: {
		syncNode() {
			return app.syncNode;
		},

		activeWallet() {
			return app.activeWallet;
		}
	},

	onShow() {
		this.motdPanel.show(new MOTDPanel());
		this.overview.show(new WalletOverview());
	}
});