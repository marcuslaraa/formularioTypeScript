export function domInjector(selector: string) {
    return function (
        target: any,
        propertyKey: string
    ) {
        let elemento: HTMLElement | null = null;
        const getter = function() {
            if(!elemento) {
                elemento = <HTMLElement>document.querySelector(selector);
                console.log(`buscando elemento do Dom com o seletor ${selector} para injetar em ${propertyKey} `)
            }
            
            return elemento;

        }

        Object.defineProperty(target, propertyKey, {get: getter})
    }
}