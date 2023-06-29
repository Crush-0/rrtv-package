const fs = require('fs');

// 读取 RRTV-client 目录下的 package.json 文件
const clientPackageJsonPath = '.github/test/client/package.json';
const clientPackageJson = JSON.parse(fs.readFileSync(clientPackageJsonPath));

// 读取主目录下的 package.json 文件
const mainPackageJsonPath = '.github/test/package.json';
const mainPackageJson = JSON.parse(fs.readFileSync(mainPackageJsonPath));

// 更新主目录下的 package.json 中的 version 值
mainPackageJson.version = clientPackageJson.version;

// 写入更新后的 package.json 文件
fs.writeFileSync(mainPackageJsonPath, JSON.stringify(mainPackageJson, null, 2));
