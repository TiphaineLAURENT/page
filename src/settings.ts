import packageJson from '../package.json'

export const settings = {
  ENVIRONMENT: process.env.NODE_ENV,
  PUBLIC_URL: process.env.PUBLIC_URL,
  TIMEZONE: process.env.TZ,
  VERSION: packageJson.version,
  NAME: packageJson.name,
}
