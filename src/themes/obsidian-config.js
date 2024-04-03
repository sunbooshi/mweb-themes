/**
 * 每次新增一个 mweb 主题文件，都需要在这里新增一项，字段包括：
 * - file: 文件名
 * - mode（可选）: "dark"，是否是深色主题
 * - isMWeb4EditorThemeCompatible: 是否支持生成 MWeb 4.x 的编辑器主题，必须配置 sass 颜色变量才可以
 */

const themes = {
  ayu: { file: "obsidian-ayu.scss", isMWeb4EditorThemeCompatible: true },
  "ayu-mirage": {
    file: "obsidian-ayu-mirage.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  "bear-default": {
    file: "obsidian-bear-default.scss",
    isMWeb4EditorThemeCompatible: true,
  }, // black primary color
  charcoal: {
    file: "obsidian-charcoal.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  }, // Night Text Theme
  cobalt: {
    file: "obsidian-cobalt.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  contrast: { file: "obsidian-contrast.scss", isMWeb4EditorThemeCompatible: true },
  "d-boring": {
    file: "obsidian-d-boring.scss",
    isMWeb4EditorThemeCompatible: true,
  },
  "dark-graphite": {
    file: "obsidian-dark-graphite.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  default: { file: "obsidian-default.scss" }, // raw html
  dieci: {
    file: "obsidian-dieci.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  dracula: {
    file: "obsidian-dracula.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  "duotone-heat": {
    file: "obsidian-duotone-heat.scss",
    isMWeb4EditorThemeCompatible: true,
  },
  "duotone-light": {
    file: "obsidian-duotone-light.scss",
    isMWeb4EditorThemeCompatible: true,
  },
  gandalf: { file: "obsidian-gandalf.scss", isMWeb4EditorThemeCompatible: true },
  gotham: {
    file: "obsidian-gotham.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  indigo: { file: "obsidian-indigo.scss" },
  jzman: { file: "obsidian-jzman.scss" },
  lighthouse: {
    file: "obsidian-lighthouse.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  lark: { file: "obsidian-lark.scss", isMWeb4EditorThemeCompatible: true },
  "lark-bold-color": {
    file: "obsidian-lark-bold-color.scss",
    isMWeb4EditorThemeCompatible: true,
  },
  nord: {
    file: "obsidian-nord.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  "olive-dunk": {
    file: "obsidian-olive-dunk.scss",
    isMWeb4EditorThemeCompatible: true,
  },
  panic: {
    file: "obsidian-panic.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  "red-graphite": {
    file: "obsidian-red-graphite.scss",
    isMWeb4EditorThemeCompatible: true,
  },
  smartblue: {
    file: "obsidian-smartblue.scss",
  },
  "solarized-dark": {
    file: "obsidian-solarized-dark.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  "solarized-light": {
    file: "obsidian-solarized-light.scss",
    isMWeb4EditorThemeCompatible: true,
  },
  toothpaste: {
    file: "obsidian-toothpaste.scss",
    mode: "dark",
    isMWeb4EditorThemeCompatible: true,
  },
  typo: { file: "obsidian-typo.scss" },
  "v-green": { file: "obsidian-v-green.scss" },
  vue: { file: "obsidian-vue.scss" },
};

module.exports = themes;
