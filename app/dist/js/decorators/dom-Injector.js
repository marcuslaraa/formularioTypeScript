export function domInjector(selector) {
    return function (target, propertyKey) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`buscando elemento do Dom com o seletor ${selector} para injetar em ${propertyKey} `);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-Injector.js.map