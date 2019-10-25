import { EchartsBasicRadarPlugin } from '../../../../superset-ui-preset-chart-echarts-basic/src';
import Stories from './Stories';

new EchartsBasicRadarPlugin().configure({ key: 'echarts-basic-radar' }).register();

export default {
  examples: [...Stories],
};
