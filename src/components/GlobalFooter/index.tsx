import React from "react";
import './index.css'
/**
 * 全局底部栏组件
 * @author graht
 */

export default function GlobalFooter() {
  const date = new Date().getFullYear();
  return (
    <div className="global-footer">
      <div>© {date} 学习刷题平台</div>
      <div>
        <a>作者: 程序员 Graht</a>
      </div>
    </div>
  );
}
