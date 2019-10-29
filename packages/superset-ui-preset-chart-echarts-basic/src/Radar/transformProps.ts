import { ChartProps } from '@superset-ui/chart';

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable sort-keys */
interface LabeledObject {
  label: string;
}

interface SeriesData {
  value: number[];
  name: string;
}

interface Indicator {
  name: string;
  max?: number;
  min?: number;
}

export default function transformProps(chartProps: ChartProps) {
  const { height, width, formData, queryData } = chartProps;
  const { data } = queryData;
  const yMin = formData.yAxisBounds[0];
  const yMax = formData.yAxisBounds[1];
  const indicator: Indicator[] = (formData.metrics as LabeledObject[]).map(({ label }) => ({
    name: label,
    max: yMax,
    min: yMin,
  }));
  const nameField: string = formData.groupby[0];
  const seriesData: SeriesData[] = data.map((item: { [key: string]: any }) => ({
    value: indicator.map(({ name }) => item[name]),
    name: item[nameField],
  }));
  const option = {
    tooltip: {},
    legend: {
      data: seriesData.map(({ name }) => name),
    },
    radar: {
      indicator,
    },
    series: {
      type: 'radar',
      data: seriesData,
    },
  };

  return {
    height,
    width,
    option,
  };
}
