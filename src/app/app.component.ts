import { Component } from '@angular/core';

interface Project {
  name: string;
  site: string;
  type: string;
  stacks: {
    name: string;
    intro: string;
  }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  panelOpenState = false;
  panelOpenState2 = false;

  baseInfo = [
    {title: '霍建营', value: ''},
    {title: '电话', value: '<a href="tel:16631132230">16631132230</a>'},
    {title: '邮箱', value: '<a href="mailto:838394225@qq.com">838394225@qq.com</a>'},
    {title: '意向', value: '后端研发/前端研发/技术主管'},
  ];

  projectList: Project[] = [
    {
      name: "编程学院（在线编程学习平台）",
      site: "https://www.programschool.com/",
      type: "SaaS",
      stacks: [
        {name: "项目前端", intro: "Angular2/Typescript/SASS，UI使用Angular Material"},
        {name: "项目后端", intro: "使用Spring Boot + ebean.io ORM，使用 RESTful API"},
        {name: "服务端", intro: "使用Docker + 自研Docker Registry服务"},
      ],
    },
    {
      name: "图书封面生成工具",
      site: "https://foxsir.github.io/book-conver-generator/",
      type: "Tools",
      stacks: [
        {name: "项目前端", intro: "React/Antd 和 fabric"},
        {name: "项目后端", intro: "定制封面需要的标题、字体、插图、背景等元素，使用fabric编辑Canvas生成PNG图片"},
      ],
    },
    {
      name: "骑胜电商数据分析平台",
      site: "https://www.qishengdianshang.com",
      type: "数据分析平台",
      stacks: [
        {name: "项目前端", intro: "Materialize UI、EChart"},
        {name: "项目后端", intro: "使用PHP/Phalcon PHP"},
      ],
    },
    {
      name: "其他项目",
      site: null,
      type: "已经无法打开/或变动很大",
      stacks: [
        {name: "一刻建站", intro: "自助建站平台，前端使用JQuery+Bootstrap，使用Docker和wordpress实现，用户可以可视化编辑网站内容"},
        {name: "设计元100", intro: "设计师威客平台，前端使用JQuery+Materialize UI，后端使用 Yii2框架"},
      ],
    },
  ];

  companies = [
    {
      dateRange: '2021-06 - 2022-01',
      name: '北京禾下网络科技有限公司',
      role: '前端组长',
      works: [
        '负责通讯软件PC客户端开发'
      ]
    },
    {
      dateRange: '2016-4 - 2021-05',
      name: '河北圆伞网络科技有限公司',
      role: '技术主管',
      works: [
        '负责团队组建和管理，项目技术方案选型、技术研发、核心代码和功能开发/交付',
        '负责项目整体设计、包括原型、数据库、架构方案'
      ]
    },
    {
      dateRange: '2015-05 - 2016-03',
      name: '石家庄梧桐树电子商务有限公司',
      role: '技术主管',
      works: [
        '负责团队组建和管理，技术方案预研，实施',
      ]
    },
    {
      dateRange: '2015-05 - 2015-08',
      name: '北京安宁创新网络科技股份（石家庄）有限公司',
      role: '后端开发工程师',
      works: [
        '负责邮件系统开发',
      ]
    },
    {
      dateRange: '2014-02 - 2015-05',
      name: '河北点点乐电子商务有限公司',
      role: '后端开发工程师',
      works: [
        '负责电商网站开发',
      ]
    },
    {
      dateRange: '2012-12 ～ 2014-01',
      name: '信石弘生广告传媒（北京）有限公司',
      role: '后端开发工程师',
      works: [
        '负责客户网站、舆情系统开发',
      ]
    },
  ];


}
