import { Component } from '@angular/core';

interface Project {
  name: string;
  site: string;
  type: string;
  job: string;
  intro?: string;
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

  /** 工作年限：自 2012-12 起自动计算 */
  readonly yearsOfExperience = (() => {
    const start = new Date(2012, 11, 1); // 2012-12
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    if (now.getMonth() < start.getMonth()) {
      years--;
    }
    return years;
  })();

  baseInfo = [
    {title: '霍建营', value: `${this.yearsOfExperience}+年开发经验`},
    {title: '电话', value: '16631132230', href: 'tel:16631132230'},
    {title: '邮箱', value: '838394225@qq.com', href: 'mailto:838394225@qq.com'},
    {title: '意向', value: '前端开发/全栈工程师'},
    {title: 'GitHub', value: 'https://github.com/foxsir', href: 'https://github.com/foxsir', external: true},
  ];

  skills = [
    {name: 'Vue3', value: 90},
    {name: 'React', value: 85},
    {name: 'Tailwind CSS', value: 85},
    {name: 'Angular', value: 80},
    {name: 'TaroJs & 小程序', value: 75},
    {name: 'Docker', value: 75},
    {name: 'Java', value: 55},
    {name: 'Golang', value: 30},
    {name: 'Rust', value: 20},
  ];

  projectList: Project[] = [
    {
      name: "搭站 typemake（AI 对话式建站平台）",
      site: "https://typemake.com",
      type: "SaaS",
      job: "独立开发/全栈",
      intro: "AI 对话式建站SaaS项目，包括AI创建网站、TLS签发、域名绑定、一键部署",
      stacks: [
        {name: "项目前端", intro: "Next.js 16、React 19、Typescript、Tailwind CSS 4、shadcn"},
        {name: "项目后端", intro: "Java 21、Quarkus、PostgreSQL"},
        {name: "基础设施", intro: "阿里云 OSS/ECI/DNS、ACME证书、Docker"},
      ],
    },
    {
      name: "imagers（Rust/WASM 图片处理工具）",
      site: "https://microprofile-inc.github.io/imagers/",
      type: "开源项目",
      job: "项目作者",
      intro: "使用 Rust 编译为 WASM 在浏览器中处理图片，功能包括: 裁剪、缩放、旋转/翻转、模糊、亮度/灰度/反色/色相调整、生成缩略图、格式转换等",
      stacks: [
        {name: "技术栈", intro: "Rust、WebAssembly"},
      ],
    },
    {
      name: "多端 AI Agent",
      site: "https://github.com/microprofile-inc/agent",
      type: "个人项目",
      job: "独立设计开发（AI Agent 协作编码）",
      intro: "自研多端 AI Agent：基于艾宾浩斯遗忘曲线的双层记忆系统（普通记忆随时间衰减、命中强化、低于阈值遗忘；关键记忆(hard)永不衰减），结合向量检索与相似记忆自动合并；terminal/web/桌面三端复用同一核心引擎，多供应商接入、think/act双模式",
      stacks: [
        {name: "核心引擎", intro: "Python、FastAPI、SSE 流式"},
        {name: "客户端", intro: "React Web、Textual TUI、Tauri(规划中)"},
      ],
    },
    {
      name: "云慕怀谷公司项目",
      type: "web/小程序",
      site: "https://www.yunmu13.cn/",
      job: "负责公司管理后台和小程序开发",
      intro: "网络祭祀相关业务应用",
      stacks: [
        {name: "项目前端", intro: "React、Typescript、Taro"},
      ],
    },
    {
      name: "环球选材网站",
      site: "项目已下线",
      type: "网站",
      job: "主程: 技术选型、基础开发、前端权限功能设计和实现、响应式瀑布流",
      intro: "主要功能石材展示, 带有权限的用户系统, 响应式瀑布流展示",
      stacks: [
        {name: "项目前端", intro: "Vue3、Typescript、NuxtJS"},
      ],
    },
    {
      name: "天下石仓微信小程序",
      site: "项目已下线",
      type: "小程序",
      job: "主程: 技术选型、基础开发、前端权限功能设计和实现、分享功能等",
      intro: "主要功能石材展示, 带有权限的用户系统",
      stacks: [
        {name: "项目前端", intro: "Vue3、Typescript、Taro"},
      ],
    },
    {
      name: "环球选材微信小程序",
      site: "项目已下线",
      type: "小程序",
      job: "主程: 技术选型、基础开发、前端权限功能设计和实现、分享功能等",
      intro: "主要功能石材展示, 带有权限的用户系统",
      stacks: [
        {name: "项目前端", intro: "Vue3、Typescript、Taro"},
      ],
    },
    {
      name: "IM PC客户端",
      site: "项目已下线",
      type: "IM",
      job: "桌面客户端负责人: 技术选型、主要功能开发(80%)",
      intro: "IM客户端、包括好友添加/管理、单聊、群聊、群管理、红包、富文本消息、本地消息等",
      stacks: [
        {name: "项目前端", intro: "Electron、Angular、MaterialUI"},
        {name: "项目后端", intro: "NodeJS、SQLite"},
      ],
    },
    {
      name: "编程学院（在线编程学习平台）",
      site: "项目已下线",
      type: "SaaS",
      job: "项目开发负责人",
      intro: "核心功能: 在浏览器中提供编程环境, 包括vscode编辑器和linux环境",
      stacks: [
        {name: "项目前端", intro: "Angular2/Typescript/SASS，UI使用Angular Material"},
        {name: "项目后端", intro: "使用Spring Boot + ebean.io ORM"},
        {name: "服务端", intro: "使用Docker + 自研Docker Registry服务"},
      ],
    },
  ];

  companies = [
    {
      dateRange: '2024-12 - 2026-06',
      name: '北京云慕怀谷科技有限公司',
      role: '高级前端工程师',
      links: [
        {label: '微信小程序: 云祭扫'},
        {label: '微信小程序: 园信通'},
        {label: '管理后台'},
      ],
      works: [
        '负责公司管理后台开发、公司小程序开发，使用react、tarojs',
        '建立基于 opencode + skills 的 AI Agent 开发工作流，覆盖需求拆解、编码、测试全流程，独立完成管理后台和多个小程序交付'
      ]
    },
    {
      dateRange: '2023-02 - 2024-11',
      name: '北京天下石仓网络科技有限公司',
      role: '高级前端工程师',
      links: [
        {label: '微信小程序: 天下石仓'},
        {label: '微信小程序: 环球选材'},
        {label: '天下石仓网站（已下线）'},
        {label: '环球选材网站（已下线）'},
      ],
      works: [
        '电商平台Web和小程序开发, 使用vue3、tailwind、taro、typescript、NuxtJS'
      ]
    },
    {
      dateRange: '2022-02 - 2023-01',
      name: '北京枫数网络科技有限公司',
      role: '高级前端工程师',
      works: [
        '社区项目前端开发'
      ],
      links: [
        {label: "社区网站: 已无法访问", href: 'https://www.osrc.com/'},
      ]
    },
    {
      dateRange: '2021-06 - 2022-01',
      name: '北京禾下网络科技有限公司',
      role: '前端组长',
      works: [
        '负责通讯软件PC客户端开发'
      ]
    },
    {
      dateRange: '2016-04 - 2021-05',
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
      dateRange: '2012-12 - 2014-01',
      name: '信石弘生广告传媒（北京）有限公司',
      role: '后端开发工程师',
      works: [
        '负责客户网站、舆情系统开发',
      ]
    },
  ];


}
