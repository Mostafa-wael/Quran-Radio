# Dev-Guide
## To publish new versions
1. Update the version number in `package.json`.
2. Run `sudo npm install -g vsce`.
3. Run `vsce package` to create a `.vsix` file. Make sure you have node version 14.17.0 or higher.
4. To update the new version in the marketplace, run `sudo npm cache clean -f`, `sudo npm install -g n`, `sudo n stable`. 
5. Run `vsce publish` to publish the extension to the marketplace. Or, upload the `.vsix` file to the [marketplace](https://marketplace.visualstudio.com/manage/publishers/mostafawael) manually. You will need to login to your microsoft account.