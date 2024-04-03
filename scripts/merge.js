const fs = require("fs-extra");

const minimist = require("minimist");
const args = minimist(process.argv.slice(2), {
  string: ["distDir"],
  default: {
    distDir: "dist/obsidian",
  },
});

function mergeCss(path) {
    const files = fs.readdirSync(path);
    let css = '';
    const themes = [];
    for (let f of files) {
        const name = 'mweb-' + f.match(/obsidian-(.*)\.css$/)[1];
        css = `${css}\n\n/* ${name} */\n`;
        themes.push(name);
        const data = fs.readFileSync(`${path}/${f}`);
        if (data) {
            css = css + data.toString() + '\n';
        }
        else {
            console.error('read fail: ' + f);
        }
    }

    return {css, themes}
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatName(n) {
    const items = n.split('-');
    for (let i in items) {
        if (i == 0) {
            items[i] = 'MWeb'
        }
        else {
            items[i] = capitalizeFirstLetter(items[i]);
        }
    }
    return items.join(' ');
}

function main() {
    const {css:lightCss, themes:lightThemes} = mergeCss(`${args.distDir}/light`);
    const {css:darkCss, themes:darkThemes} = mergeCss(`${args.distDir}/dark`);

    const outfile = `${args.distDir}/styles.css`;
    fs.writeFileSync(outfile, lightCss + darkCss);

    const themes = [].concat(lightThemes).concat(darkThemes);
    const themesList = [];
    for (let t of themes) {
        themesList.push({
            name: formatName(t),
            className: t,
            desc: 'MWeb-Themes https://github.com/imageslr/mweb-themes',
            author: 'imageslr'
        })
    }

    fs.writeFileSync(`${args.distDir}/styles.json`, JSON.stringify(themesList));
}

main()