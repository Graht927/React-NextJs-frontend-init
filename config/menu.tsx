import { MenuDataItem } from "@ant-design/pro-layout";
import { CrownOutlined } from "@ant-design/icons";

export const menus = [
  {
    path: "/",
    name: "主页",
    hideInMenu: true
  },
  {
    path: "/questions",
    name: "题目",
  },
  {
    path: "/banks",
    name: "题库",
  },
  {
    path: "http://121.40.231.89",
    target: "_blank",
    name: "学习鸭",
  },
  {
    path: "/admin",
    name: "管理",
    icon: <CrownOutlined />,
    children: [
      {
        path: "admin/usr",
        name: "用户",
      },
    ],
  },
] as MenuDataItem[];
