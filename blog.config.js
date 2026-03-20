// NotionNext 配置文件（老六外汇评测站专用版）

const BLOG = {
  // ================= 基础 =================
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',

  // ✅ 你的 Notion 页面ID（已帮你填好）
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '7287f2b111db82cab88e01327605f63d',

  // 🔥 推荐主题（转化 + 专业）
THEME: 'hexo',

  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',

  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024,

  // ================= SEO/性能 =================
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,

  NEXT_REVALIDATE_SECOND:
    process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,

  // 🔥 强制暗黑金融风
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'dark',

  APPEARANCE_DARK_TIME:
    process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  // ================= 品牌（重点） =================
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '老六盘道交易所',

  BIO:
    process.env.NEXT_PUBLIC_BIO ||
    '专注外汇与币圈平台真实评测｜避坑指南｜EA策略分享',

  // ✅ 你的 Vercel 域名（已填）
  LINK:
    process.env.NEXT_PUBLIC_LINK ||
    'https://psi-livid-60.vercel.app/',

  KEYWORDS:
    process.env.NEXT_PUBLIC_KEYWORD ||
    '外汇平台推荐,外汇平台评测,Exness评测,TMGM评测,币圈交易所推荐,外汇避坑,黑平台识别,EA策略',

  BLOG_FAVICON:
    process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  // ================= 备案 =================
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK:
    process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN:
    process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',

  // ================= RSS =================
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // ================= 内容权限 =================
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,

  // ================= 菜单 =================
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,

  // ================= 侧栏 =================
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // ================= 欢迎语（首页） =================
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '2026外汇平台避坑指南,新手如何选平台不踩坑,真实评测+实测数据+对比分析',

  // ================= UUID =================
  UUID_REDIRECT: process.env.UUID_REDIRECT || false,

  // ================= 外部资源 =================
  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

  // ================= 模块配置 =================
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),

  // ================= 高级 =================
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config')
}

module.exports = BLOG
