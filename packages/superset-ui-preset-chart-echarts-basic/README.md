## superset-ui-preset-chart-echarts-basic

[![Version](https://img.shields.io/npm/v/superset-ui-preset-chart-dummies.svg?style=flat-square)](https://img.shields.io/npm/v/superset-ui-preset-chart-dummies.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/apache-superset/superset-ui-plugins-template.svg?path=packages%2Fsuperset-ui-preset-chart-dummies&style=flat-square)](https://david-dm.org/apache-superset/superset-ui-plugins-template?path=packages/superset-ui-preset-chart-dummies)

This plugin provides a set of basic charts of `echarts` for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import { EchartsBasicRadarPlugin } from 'superset-ui-preset-chart-echarts-basic';

new EchartsBasicRadarPlugin()
  .configure({ key: 'echarts-basic-radar' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui-plugins-template/?selectedKind=plugin-chart-watermelon) for more details.

```js
<SuperChart
  chartType="echarts-basic-radar"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```

#### Superset Tips

Extra works in your `superset` code base:

* Register plugins in `superset/assets/src/setup/setupPluginsExtra.js`

```javascript
import { EchartsBasicRadarPlugin } from 'superset-ui-preset-chart-echarts-basic';

export default function setupPluginsExtra() {
  new EchartsBasicRadarPlugin()
    .configure({ key: "echarts-basic-radar" })
    .register()
}
```

* Add a vis class in `superset/viz.py`

```python
class EchartsBasicRadarViz(BaseViz):

    """A radar chart"""

    viz_type = "echarts-basic-radar"
```

* Install the plugin and rebuild `superset/assets`

```shell
yarn add <registery address of the plugin> && yarn build
```