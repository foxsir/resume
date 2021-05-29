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

  wrapSpan(name: string): string {
    const spans: string[] = [];
    name.replace("：", "").split("").forEach((sp, index) => {
      if (index === name.length - 1) {
        sp = sp + "：";
      }
      spans.push(['<span>', sp, '</span>'].join(""));
    });

    return spans.join("");
  }


}
