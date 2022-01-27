"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jogadores_module_1 = require("../jogadores/jogadores.module");
const categorias_controller_1 = require("./categorias.controller");
const categorias_service_1 = require("./categorias.service");
const categoria_schema_1 = require("./interfaces/categoria.schema");
let CategoriasModule = class CategoriasModule {
};
CategoriasModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Categoria', schema: categoria_schema_1.CategoriaSchema }]),
            jogadores_module_1.JogadoresModule],
        controllers: [categorias_controller_1.CategoriasController],
        providers: [categorias_service_1.CategoriasService]
    })
], CategoriasModule);
exports.CategoriasModule = CategoriasModule;
//# sourceMappingURL=categorias.module.js.map