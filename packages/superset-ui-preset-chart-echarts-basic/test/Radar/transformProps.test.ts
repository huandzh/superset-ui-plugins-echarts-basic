import transformProps from '../../src/Radar/transformProps';
import formData from '../../../superset-ui-plugins-demo/storybook/stories/preset-chart-echarts-basic/formData';
import propsData from './propsData';

describe('EchartsBasicRadarPlugin transformProps', () => {
  const chartProps = {
    formData: formData.form_data,
    height: 600,
    width: 800,
    queryData: {
      data: formData.data,
    },
  };
  it('should transform chart props for basic radar', () => {
    expect(transformProps(chartProps)).toEqual(propsData);
  });
});
