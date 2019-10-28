## @superset-ui/demo

[![David (path)](https://img.shields.io/david/huandzh/superset-ui-plugins-echarts-basic.svg?path=packages%2Fsuperset-ui-plugins-demo&style=flat-square)](https://david-dm.org/huandzh/superset-ui-plugins-echarts-basic?path=packages/superset-ui-plugins-demo)

Storybook of `@dmicros/superset-ui-plugins-echarts-basic` packages. See it live at
[echarts-basic.iamhd.top](https://echarts-basic.iamhd.top)

### Development

#### Run storybook

To view the storybook locally, you should:

1. Clone [huandzh/superset-ui-plugins-echarts-basic](https://github.com/huandzh/superset-ui-plugins-echarts-basic.git) repo.
2. Run `yarn install && yarn build` in the `huandzh/superset-ui-plugins-echarts-basic` root directory.
3. Change to the demo directory `cd packages/superset-ui-plugins-demo`.
4. Run `yarn run storybook`.  This will open up a dev server at http://localhost:9001.

#### Adding new stories

###### Existing package

If stories already exist for the package you are adding, simply extend the `examples` already
exported for that package in the `storybook/stories/<package>/index.js` file.

###### New package

If you are creating stories for a package that doesn't yet have any stories, follow these steps:

1. Add any new package dependencies via
   `yarn add <package>`, but if it is `@superset-ui/*` packages, manually add it to `peerDependencies`.

2. Create a new folder that mirrors the package name

   > e.g., `mkdir storybook/stories/superset-ui-color/`

3. Add an `index.js` file to that folder with a default export with the following shape:

> you can use the `|` separator within the `storyPath` string to denote _nested_ stories e.g.,
> `storyPath: '@superset-ui/package|Nested i|Nested ii'`

```javascript
 default export {
   examples: [
     {
       storyPath: <string>,
       storyName: <string>,
       renderStory: <func> () => node,
     },
     ...
   ]
 };
```
