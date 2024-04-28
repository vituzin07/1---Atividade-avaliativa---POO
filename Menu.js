"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMenu = exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());
exports.Menu = Menu;
var ItemMenu = /** @class */ (function () {
    function ItemMenu(op, txtDOpc) {
        if (op === void 0) { op = this.opcao; }
        if (txtDOpc === void 0) { txtDOpc = this.textoDaOpcao; }
        this.opcao = op;
        this.textoDaOpcao = txtDOpc;
    }
    ItemMenu.prototype.getopcao = function () {
        return this.opcao;
    };
    ItemMenu.prototype.gettextoDaOpcao = function () {
        return this.textoDaOpcao;
    };
    return ItemMenu;
}());
exports.ItemMenu = ItemMenu;
