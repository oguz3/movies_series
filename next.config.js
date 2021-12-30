module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["streamcoimg-a.akamaihd.net"],
  },
  sassOptions: {
    includePaths: ["styles/**/*.scss", "components/**/*.scss"],
    resources: ["./styles/_variables.scss", "./styles/mixins/_mixins.scss"],
    prependData: `@import "./styles/_variables.scss"; @import './styles/mixins/_mixins.scss';`,
  },
};
