"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
const x = 10;
console.log(x);
let y = 12;
let z = 12;
let listNumber = [1, 2, 3];
let myTuple;
myTuple = ["texto", 50, ["Samuel Barbeiro", "Frangolino"]];
myTuple = ["texto", 50, ["Samuel Barbeiro", "Frangolino"]];
const pessoa = {
    name: "Leonardo",
    age: 22,
    doc: 14259057650
};
console.log(pessoa);
let multiTipos = 22;
multiTipos = "Leonardo";
multiTipos = true;
let adm = 'S';
adm = true;
let adm2 = 'S';
adm2 = true;
var tamanho;
(function (tamanho) {
    tamanho["P"] = "Pequeno";
    tamanho["M"] = "M\u00E9dio";
    tamanho["G"] = "Grande";
})(tamanho || (tamanho = {}));
const camisa = {
    name: "Camisa do Flamengo",
    tamanho: tamanho.M
};
console.log(camisa);
let teste;
teste = "Autenticado";
teste = null;
console.log(teste);
function soma(a, b) {
    return a + b;
}
console.log(soma(10, 10));
function showName(text) {
    return text;
}
console.log(showName("Leonardo"));
const showMsg = (msg) => {
    console.log(msg);
};
showMsg("Sasasasasasa");
function greating(name, great) {
    if (great) {
        console.log(`Olá ${name} , ${great}`);
        return;
    }
    if (!great)
        console.log(`Olá ${name}`);
}
greating("Samuel Barbeiro");
greating("Samuel Barbeiro", "Bom dia");
function sumNumbers(param) {
    return param.numero1 + param.numero2;
}
console.log(sumNumbers({ numero1: 2, numero2: 5 }));
const numeros = {
    numero1: 10,
    numero2: 10
};
console.log(sumNumbers(numeros));
function tipoString(text) {
    if (typeof text === "string") {
        return `A string é ${text}`;
    }
    return `É um valor booleano ${text}`;
}
console.log(tipoString("Texto teste"));
console.log(tipoString(true));
function showArray(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
showArray(["teste", "testinho", "testão"]);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log("O nome do usuario é:", this.name);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O nivel do usuario é ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const leo = new User("Leonardo", "admin", true);
leo.showUserName();
leo.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const Palio = new Car("Fiat", 4);
Palio.showBrand();
class SuperCarro extends Car {
    constructor(brand, wheels, year) {
        super(brand, wheels);
        this.year = year;
    }
}
const monza = new SuperCarro("Chevrolet", 4, 2006);
monza.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Usuario = (() => {
    let _classDecorators = [BaseParameters];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Usuario = _classThis = class {
        constructor(nome) {
            this.nome = nome;
        }
    };
    __setFunctionName(_classThis, "Usuario");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Usuario = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Usuario = _classThis;
})();
const u1 = new Usuario("sam");
