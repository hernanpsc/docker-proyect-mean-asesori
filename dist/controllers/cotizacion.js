"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrecios = void 0;
const cotizacion_1 = require("../services/cotizacion");
const error_handle_1 = require("../utils/error.handle");
const getPrecios = async (fromCotizar, res) => {
    try {
        console.log(fromCotizar);
        const body = fromCotizar.body;
        console.log(body);
        Object.keys(body).forEach(key => {
            console.log(key + ": ", body[key]);
        });
        const response = await (0, cotizacion_1.calcularPrecio)(fromCotizar, res);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEMS');
    }
};
exports.getPrecios = getPrecios;
//# sourceMappingURL=cotizacion.js.map