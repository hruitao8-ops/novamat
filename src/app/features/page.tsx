import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "功能特性 - NovaMat AI",
  description: "NovaMat AI 功能特性介绍",
};

export default function FeaturesPage() {
  return (
    <PageLayout 
      title="功能特性" 
      description="探索 NovaMat AI 的强大功能"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🤖 AI 智能对话
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            基于先进的大语言模型，提供智能对话与实验辅助服务。
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✓ 自然语言交互</li>
            <li>✓ 实验方案建议</li>
            <li>✓ 数据分析指导</li>
            <li>✓ 知识问答系统</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🔬 虚拟仿真实验
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            高保真虚拟实验环境，支持多种材料科学实验模拟。
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✓ 3D 可视化展示</li>
            <li>✓ 实时数据反馈</li>
            <li>✓ 多参数调控</li>
            <li>✓ 实验报告生成</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📊 数据分析与可视化
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            强大的数据处理能力，支持多维度分析与可视化展示。
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✓ 自动数据清洗</li>
            <li>✓ 统计分析工具</li>
            <li>✓ 交互式图表</li>
            <li>✓ 结果导出功能</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🔐 安全与隐私
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            企业级安全防护，保障您的数据安全与隐私。
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✓ 数据加密存储</li>
            <li>✓ 访问权限控制</li>
            <li>✓ 操作日志记录</li>
            <li>✓ 合规性保障</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}