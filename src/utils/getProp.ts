export default (prop: string|number|undefined) => (typeof prop === 'string' ? prop : `${prop}rem`)
