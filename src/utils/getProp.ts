export default (prop?: string|number) => (typeof prop === 'string' ? prop : `${prop}rem`)
