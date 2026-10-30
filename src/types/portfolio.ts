export interface WritingWork {
  id: string;
  number: string;
  title: string;
  theme: string;
  format: string;
  summary: string;
  excerpt: string;
  fullExcerpt: string;
  accentColor: string;
}

export interface WorkResponsibility {
  category: string;
  items: string[];
}

export interface CaseStudyData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  focus: string;
  brief: string;
  process: string[];
  results: string[];
  learnings: string[];
  workflowSteps?: string[];
  highlights?: { label: string; value: string }[];
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  badge: string;
}

export interface SkillCategoryGroup {
  title: string;
  description: string;
  skills: string[];
}
