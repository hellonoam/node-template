import shortid from 'shortid'

const TypedUniqueId = {
  typeEntries: [],
  typeEntriesByTypeName: {},

  addType({ typeName, prefix=typeName }) {
    const typeEntry = { typeName, prefix }
    this.typeEntries.push(typeEntry)
    this.typeEntriesByTypeName[typeName] = typeEntry
  },

  getTypeName(typeName) {
    const typeEntry = this.typeEntriesByTypeName[typeName]
    if (!typeEntry) throw new Error(`${typeName} not found`)
    return typeEntry
  },

  gen(typeName) {
    const typeEntry = this.getTypeName(typeName)
    const sid = shortid.generate()
    const typedId = `${typeEntry.prefix}:${sid}`
    return typedId
  }
}

TypedUniqueId.addType({ typeName: 'TagType', prefix: 'tt' })
TypedUniqueId.addType({ typeName: 'TagValue', prefix: 'tv' })
export default TypedUniqueId
