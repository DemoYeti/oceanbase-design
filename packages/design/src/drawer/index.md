---
title: Drawer 抽屉
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Drawer](https://ant.design/components/drawer-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `footer` 属性，用于设置抽屉的底部内容，默认为 `取消` 和 `确定` 按钮。
- 🆕 新增 `onOk` 和 `onCancel` 属性，用于设置 `取消` 和 `确定` 按钮的回调。
- 🆕 新增 `cancelText` 和 `okText` 属性，用于设置 `取消` 和 `确定` 按钮的文字。
- 🆕 新增 `okButtonProps` 属性，用于设置 `确定` 按钮的属性。
- 🆕 新增 `confirmLoading` 属性，用于设置 `确定` 按钮的加载态。

## 代码演示

<code src="./demo/basic.tsx" title="典型抽屉" description="默认包含标题、内容和底部操作。"></code>

<code src="./demo/no-footer.tsx" title="无 footer" description="去掉抽屉底部的 footer。"></code>

<code src="./demo/custom-footer.tsx" title="自定义 footer" description="自定义 footer 的内容。"></code>

<code src="./demo/confirmLoading.tsx" title="确定按钮 loading" description="确定按钮 loading。"></code>

<code src="./demo/form-drawer.tsx" title="用于 Form 表单" description="与 Form 表单合用，用于收集数据。"></code>

<code src="./demo/descriptions.tsx" title="用于详情展示" description="与 Descriptions 合用，用于详情展示"></code>

## API

| 参数           | 说明               | 类型                 | 默认值 | 版本 |
| :------------- | :----------------- | :------------------- | :----- | :--- |
| footer         | 抽屉的页脚         | boolean \| ReactNode | true   | -    |
| onOk           | 点击确定回调       | function(e)          | -      | -    |
| onCancel       | 点击取消按钮的回调 | function(e)          | -      | -    |
| cancelText     | 设置取消按钮文字   | string               | 取消   | -    |
| okText         | 确认按钮文字       | string               | 确定   | -    |
| okButtonProps  | ok 按钮 props      | ButtonProps          | -      | -    |
| confirmLoading | 确定按钮 loading   | boolean              | false  | -    |

- 更多 API 详见 antd Drawer 文档: https://ant.design/components/drawer-cn