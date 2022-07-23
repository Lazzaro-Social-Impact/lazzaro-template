const getProp = (prop: string|number|undefined) => (typeof prop === 'string' ? prop : `${prop}rem`)

export default getProp
