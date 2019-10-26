import { Preset } from '@superset-ui/core';
import { EchartsBasicRadarPlugin } from './Radar';

export default class EchartsBasicPreset extends Preset {
  constructor() {
    super({
      name: 'Echarts Basic - Radar',
      plugins: [new EchartsBasicRadarPlugin().configure({ key: 'echarts-basic-radar' })],
    });
  }
}
