export default {
  height: 600,
  option: {
    legend: {
      data: [
        'South Asia',
        'Sub-Saharan Africa',
        'East Asia & Pacific',
        'Latin America & Caribbean',
        'Europe & Central Asia',
        'Middle East & North Africa',
        'North America',
      ],
    },
    radar: {
      indicator: [
        {
          name: 'AVG(SP_RUR_TOTL_ZS)',
          max: 50,
          min: null,
        },
        {
          name: 'AVG(SP_DYN_LE00_IN)',
          max: 50,
          min: null,
        },
        {
          name: 'AVG(SH_H2O_SAFE_ZS)',
          max: 50,
          min: null,
        },
        {
          name: 'AVG(SP_POP_GROW)',
          max: 50,
          min: null,
        },
        {
          name: 'AVG(SE_PRM_ENRR)',
          max: 50,
          min: null,
        },
        {
          name: 'AVG(SH_STA_WAST_ZS)',
          max: 50,
          min: null,
        },
      ],
    },
    series: {
      data: [
        {
          name: 'South Asia',
          value: [
            80.21538863636358,
            56.069029132790504,
            78.57135678391965,
            2.1653538974662876,
            83.86836091294079,
            14.638095232039683,
          ],
        },
        {
          name: 'Sub-Saharan Africa',
          value: [
            72.47362196969691,
            49.91001239566766,
            64.01315331010441,
            2.5272072465493376,
            83.49538387937648,
            9.570124481723658,
          ],
        },
        {
          name: 'East Asia & Pacific',
          value: [
            51.04853888888894,
            65.09365531550603,
            84.9714646464646,
            1.8769098642834265,
            105.20826084481182,
            7.909708737864077,
          ],
        },
        {
          name: 'Latin America & Caribbean',
          value: [
            43.079278181818204,
            67.35610366500318,
            89.8464961067856,
            1.6720330497092952,
            105.90224359427978,
            3.142424242424243,
          ],
        },
        {
          name: 'Europe & Central Asia',
          value: [
            39.76703147540981,
            71.62369951571867,
            95.99474959612289,
            0.7926757793872041,
            101.13255677495656,
            4.6684210526315795,
          ],
        },
        {
          name: 'Middle East & North Africa',
          value: [
            34.345078222222206,
            65.30479144124332,
            90.15606361829018,
            3.3842227255473665,
            95.28668990100836,
            6.383695652173912,
          ],
        },
        {
          name: 'North America',
          value: [
            15.767824242424236,
            75.64064150212621,
            99.32000000000004,
            1.0269509535109096,
            98.80529952329229,
            0.9625,
          ],
        },
      ],
      type: 'radar',
    },
    tooltip: {},
  },
  width: 800,
};
