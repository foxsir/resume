### Conversation Language

- **根据用户输入的语言选择对话语言**：用户使用中文时用中文回复，使用英文时用英文回复，其他语言同理

### 部署（GitHub Pages）

- **发布方式**：推送到 `master` 即自动构建并部署，无需手动操作。工作流在 `.github/workflows/deploy.yml`：`pnpm build` 后通过 peaceiris/actions-gh-pages 将 `dist/resume` 发布到 `gh-pages` 分支根目录（force_orphan，会清空旧内容）
- **GitHub Pages 设置**：Source = Deploy from a branch，分支 `gh-pages`，目录 `/ (root)`（已在 Settings 中配置好）
- **手动触发**：GitHub Actions 页面 → Deploy to GitHub Pages → Run workflow
- **本地构建验证**：`pnpm build`（产物在 `dist/resume`，不会提交到 git）
- **注意**：`docs/` 目录保留在 master 上（GitHub Pages 曾从 `gh-pages/docs` 提供服务的历史遗留），新流程不再使用；`gh-pages` 分支由工作流自动重建，不要手动合并
- **依赖**：`pnpm-lock.yaml` 被 `.gitignore` 忽略，工作流中 `pnpm install` 无需 frozen-lockfile；构建使用 Node 18（Angular 14 兼容）
