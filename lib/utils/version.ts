import assert from 'assert'
import defaultVersion from '../version.json'

function getVersion(version?: number[]) {
  version = getCompleteVersion(version)
  return version.join('.')
}

function getCompleteVersion(version?: number[]) {
  if (!version) {
    version = defaultVersion
  } else {
    assert(version.length == 3)
  }
  return version
}

export default { getVersion }
export { getVersion }
